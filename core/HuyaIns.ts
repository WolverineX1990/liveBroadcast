import { passwordLogin, getRoomHtml, checkLogin } from './../api/service';
import Cookies from './../core/Cookies';
import CONFIG from './../const/CONFIG';
import VCore from './../core/VCore';
import MessageManger from './../core/MessageManger';
import sha1 from './../core/sha1';
const HUYA = require('./../lib/HUYA');
import userJson from './../const/userJson';
import VerifyiIgCaptcha from './VerifyiIgCaptcha';
import ReportDetail from './../core/ReportDetail';

const playerVer = 1910071223;

export default class HuyaIns {
  _roomId
  _userName
  _pwd
  cookies = new Cookies()
  userId
  vcore= new VCore()
  mesMg= new MessageManger()
  reportDetail= new ReportDetail()
  constructor (roomId , userName?, pwd?) {
    this._roomId = roomId;
    this._userName = userName;
    this._pwd = pwd;
    this.cookies.add('isInLiveRoom=true;');
  }

  tt () {
    // https://al.flv.huya.com/huyalive/1199521503354-1199521503354-5264031189219409920-2399043130164-10057-A-0-1.flv?wsSecret=7379c6feeb9c4fe2c3f4cd7d716e2af8&wsTime=5d99e8d7&fs=bgct&u=122&t=100&sv=1909271530
  }

  startConnect() {
    this.vcore.addListener("USER_LOGINED", () => {
      this.initWssHost()
        .then(() => this.addListener())
        .then(() => this.vcore.wsStart());
    });
    this.initConfig()
        .then(() => this.userLogin());
  }

  initConfig() {
    return getRoomHtml(CONFIG.host + this._roomId).then(html => {
      // let $ = LoadHtml(html);
      // let context;
      // $('script').each(function(index, script) {
      //   context = $(script).html();
      //   console.log(context)
      // });
    });
  }

  addListener() {
    this.vcore.addListener('setGuid', (guid) =>{
      this.cookies.add('guid='+guid);
      this.userId.sCookie = this.cookies.value;
    });
    this.vcore.addListener("WEBSOCKET_CONNECTED", this.wssConnected.bind(this));
    this.vcore.addListener("WSRegisterRsp", this.wssRegisterRsp.bind(this));
    this.vcore.addListener("WSRegisterGroupRsp", this.wssRegisterRsp.bind(this));
    this.vcore.addListener("8000", this.enterRoom.bind(this));
    this.vcore.addListener("8001", () => {
      console.log('结束直播。。。')
    });
  }
  pingInter
  wssConnected() {
    //正在直播
    if (true) {
      this.mesMg.sendGetPresenterLiveScheduleInfoReq();
    }
    this.mesMg.sendLivingInfoReq();
    this.mesMg.sendDoLaunch();
    this.mesMg.sendPingReq();
    this.mesMg.sendPropsUIServer();
    let config = {
      tickCount: 0,
      interval: 1000,
      times: 0
    };
    this.pingInter = setInterval(this.ping.bind(this), 10, config);
    setInterval(this.reportDetailV2.bind(this), 2e4)
  }

  wssRegisterRsp (t) {
    console.log('wssRegisterRsp')
    // if (ENV.loginRegister) {
    //     return
    // }
    // ENV.loginRegister = true;
    //G.userInTime = Date.now();
    //G.loginRegisterTime = G.userInTime - G.loginRegisterTime;
    // if (G.danmuP2P && G.registGroup && t.iResCode == 0 && t.vSupportP2PGroupId.value.length > 0) {
    //     G.danmuGroudId = t.vSupportP2PGroupId.value.concat();
    //     G.danmuLruCache = true;
    //     Event.fireEvent(Event.ENTER_P2P_AFTER_REGISTER_GOURP)
    // }
    let userName = this.cookies.getCookie('username');
    this.mesMg.sendWebdbUserInfo(userName);
    this.mesMg.sendUserEventReq();
    this.mesMg.sendNobleServer();
    this.mesMg.sendEnterChannelReq();

    
    //vplayerui   33925

    // WSVerifyCookieReq

    //GetCurCheckRoomStatus
  }

  enterRoom () {
    this.mesMg.sendEnterRoom();
  }

  reportDetailV2() {
    this.reportDetail.reportDetailV2(this.userId);
  }

  ping(config) {
    if (++config.tickCount % config.interval == 0) {
        let a = config.tickCount / config.interval;
        this.mesMg.sendPingReq();
        config.times > 0 && config.times <= a && config.tickCount > 0 && clearInterval(this.pingInter)
    }
  }

  userLogin() {
    let userId = this.userId = new HUYA.UserId();
    userId.lUid = 0;
    userId.sGuid = '';
    userId.sToken = '';
    userId.sHuYaUA = "webh5&" + playerVer + "&websocket";
    this.vcore.userId = userId;
    this.mesMg.vcore = this.vcore;
    this.mesMg.userId = this.userId;
    if (this._userName) {
      userJson.data.userName = this._userName;
      userJson.data.password = sha1(this._pwd);
      return passwordLogin(JSON.stringify(userJson))
            .then((res) => {
              //biztoken uid sign
              let data = JSON.parse(res.data);
              if (!data.returnCode) {
                this.cookies.concat(res.cookies.headers['set-cookie']);
                this.userId.sCookie = this.cookies.value;
                this.userId.lUid = parseInt(this.cookies.getCookie("yyuid")) || parseInt(this.cookies.getCookie("udb_uid")) || 0;
                this.vcore.dispatch('USER_LOGINED');
              } else if (data.returnCode === 10030) {
                let info = data.data.strategys[0];
                console.log('need code');
                let verifyiIgCaptcha = new VerifyiIgCaptcha(info, () => {
                  console.log('verifyiIgCaptcha success');
                  this.userLogin();
                });
              } else {
                console.log(data);
                console.log(this._userName);
              }
              return this;
            });
    }
  }

  initWssHost() {
    return checkLogin(this.cookies.value).then(res => {
      this.cookies.concat(res.cookie);
      this.userId.sCookie = this.cookies.value;
      return this.vcore.initWssHost();
    });
  }
}