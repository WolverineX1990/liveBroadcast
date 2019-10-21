import { passwordLogin, checkLogin, logout, subscribe, getSubscribeStatus } from './../api/service';
import Cookies from './../core/Cookies';
import VCore from './../core/VCore';
import MessageManger from './../core/MessageManger';
import sha1 from './../core/sha1';
import HUYA from './../core/HUYAEXT';
import userJson from './../const/userJson';
import VerifyiIgCaptcha from './VerifyiIgCaptcha';
import VerifyiIgPhoneCode from './VerifyiIgPhoneCode';
import ReportDetail from './../core/ReportDetail';
import ENV from './../const/ENV';
import { guid } from './../utils';
import * as fetch from 'node-fetch';
import G from './G';

export default class HuyaIns {
  _roomId
  _userName
  _pwd
  cookies
  userId
  proxyIp=''
  vcore= new VCore()
  mesMg= new MessageManger()
  G= new G()
  reportDetail= new ReportDetail()
  constructor (roomId , userName?, pwd?) {
    this._roomId = roomId;
    this._userName = userName;
    this._pwd = pwd;
    this.mesMg.G = this.G;
    if (userName) {
      this.cookies = new Cookies(userName);
    } else {
      this.cookies = new Cookies();
    }
  }

  tt () {
    // https://al.flv.huya.com/huyalive/1199521503354-1199521503354-5264031189219409920-2399043130164-10057-A-0-1.flv?wsSecret=7379c6feeb9c4fe2c3f4cd7d716e2af8&wsTime=5d99e8d7&fs=bgct&u=122&t=100&sv=1909271530
  }

  initClient() {

  }

  startConnect() {
    this.vcore.addListener("USER_LOGINED", () => {
      var t = "vplayer_sbanner_" + ENV.topsid + "_" + ENV.subsid;
      if (!this.cookies.getCookie(t)) {
        this.cookies.add(t+'=1; ');
      }
      this.initWssHost()
        .then(() => this.addListener())
        .then(() => this.vcore.wsStart())
        .catch(err => {
          if (err == 'noLogined') {
            this.cookies.clear();
            this.startConnect();
          } else {
            console.log('err->', err);
          }
        });
    });
    
    this.userLogin();
  }

  addListener() {
    this.vcore.addListener('setGuid', (guid) =>{
      if (!this.cookies.getCookie('guid')) {
        this.cookies.add('guid='+guid);
        this.userId.sCookie = this.cookies.value;
      }

      //开始拉取视频
      this.mesMg.getLivingStreamInfo();
    });

    this.vcore.addListener('gamelivePubTextInitComplete', () => {
      this.mesMg.getRMessageListWb();
      this.mesMg.getRctTimedMessage();
      this.mesMg.queryBadgeInfoList();
      this.mesMg.getBadgeItem();
      this.mesMg.sendCustomBadgeLogoReq();
      this.mesMg.getUserLevelInfo();
      this.mesMg.getAuditorRole();
      this.mesMg.getUserSetting();
      this.sendMessage();
      this.subscribe();
    });
    this.vcore.addListener('getUserLevelInfo', (e) => {
      // console.log(e);
    })
    this.vcore.addListener("WEBSOCKET_CONNECTED", this.wssConnected.bind(this));
    this.vcore.addListener("WSRegisterRsp", this.wssRegisterRsp.bind(this));
    this.vcore.addListener("WSRegisterGroupRsp", this.wssRegisterRsp.bind(this));
    this.vcore.addListener("8000", this.enterRoom.bind(this));
    this.vcore.addListener("8001", () => {
      console.log('结束直播。。。')
    });

    this.vcore.addListener("8006", t => {
      console.log('人气数量:'+t.iAttendeeCount);
      this.G.iAttendeeCount = t.iAttendeeCount;
    });
    this.vcore.addListener("1400", t => {
      console.log(t.tUserInfo.sNickName);
    });
    this.vcore.addListener("8102", this.livingStreamInfoNotice.bind(this));
    this.vcore.addListener("8103", this.livingStreamEndNotice.bind(this));
    this.vcore.addListener("getLivingStreamInfo", e => {
      e && e.bIsLiving ? this.livingStreamInfoNotice(e.tNotice) : console.log("GetLivingStreamInfoReq xxxxxxx no living")
    });

    this.vcore.addListener("sendMessage", e => {
      // console.log('***************************')
      // console.log(e)
    });
  }

  livingStreamInfoNotice (e) {
    // console.log(e.mStreamInfo.value);
  }

  livingStreamEndNotice(e) {
    // console.log('livingStreamEndNotice'+ e.sStreamName);
  }

  pingInter
  wssConnected() {
    this.mesMg.sendLivingInfoReq(res => {
      console.log('sendLivingInfoReq')
      if(res.bIsLiving !=1 ) {
        console.log('##################主播未开播##################')
      }
      this.G.livingInfo = res;
      this.fetchVideo();
    });
    this.mesMg.sendGetPresenterLiveScheduleInfoReq();
    this.mesMg.sendDoLaunch();
    this.mesMg.sendPingReq();
    this.mesMg.sendPropsUIServer();
    let config = {
      tickCount: 0,
      interval: 1000,
      times: 0
    };
    this.pingInter = setInterval(this.ping.bind(this), 10, config);
    setInterval(this.reportDetailV2.bind(this), 2e4);
  }

  fetchVideo() {
    //如果正在播放
    if (!ENV.flv) {
      return;
    }
    let url = ENV.flv + "&u=" + rouUid(this.userId.lUid || 0, ENV.presenterUid || 0) + "&t=100&sv=1910091800";
    console.log(url)
    fetch(url, {}).then(res => {
      console.log('视频拉取:'+res.status);
      // console.log(res.body.read())
      // let e = res.body.getReader();
      // e.read().then(res => {
      //   console.log(1);
      // })
      return res.json();
    }).then(res => console.log(1));
  }

  wssRegisterRsp (t) {
    console.log('=======wssRegisterRsp')
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

  userLogout() {
    return logout(this.cookies.value, guid(1))
              .then(() => checkLogin(this.cookies.value, this.proxyIp))
              .then(res => console.log(res));
  }

  // 订阅
  subscribe() {
    getSubscribeStatus(this.userId.lUid, ENV.presenterUid).then(res => {
      let data = JSON.parse(res);
      if (!data.status) {
        subscribe(ENV.presenterUid, this.userId.lUid, this.cookies.value).then(res => {
          console.log(res);
        })
      }
    })
  }

  userLogin() {
    let userId = this.userId = new HUYA.UserId();
    userId.lUid = 0;
    userId.sHuYaUA = "webh5&" + ENV.playerVer + "&websocket";
    this.vcore.userId = userId;
    this.mesMg.vcore = this.vcore;
    this.mesMg.userId = this.userId;
    if (this._userName) {
      if (this.cookies.isLogin) {
        //从本地cookie读取
        ENV.isLogin = true;
        this.userId.sCookie = this.cookies.value;
        this.userId.sGuid = this.cookies.getCookie('guid');
        this.userId.lUid = parseInt(this.cookies.getCookie("yyuid")) || parseInt(this.cookies.getCookie("udb_uid")) || 0;
        this.vcore.dispatch('USER_LOGINED');
        return;
      }
      userJson.data.userName = this._userName;
      userJson.data.password = sha1(this._pwd);
      return passwordLogin(JSON.stringify(userJson), this.proxyIp)
            .then((res) => {
              //biztoken uid sign
              let data = JSON.parse(res.data);
              if (!data.returnCode) {
                ENV.isLogin = true;
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
                }, () => {
                  console.log('errr=================')
                  let phoneVer = new VerifyiIgPhoneCode(this._userName, () => {

                  });
                }, this.proxyIp);
              } else {
                // || data.returnCode === 10039
                console.log(data);
                console.log(this._userName);
              }
              return this;
            });
    } else {
      this.vcore.dispatch('USER_LOGINED');
    }
  }

  sendMessage() {
    let time = 10 + Math.round(Math.random() * 30 );
    setTimeout(() => {
      this.mesMg.sendMessage();
      console.log('发送弹幕');
      this.sendMessage();
    }, 1000 * time);
  }

  initWssHost() {
    return checkLogin(this.cookies.value, this.proxyIp).then(res => {
      let json = JSON.parse(res);
      if (!json.isLogined) {
        console.log(1);
        throw 'noLogined';
      }
      
      if (res.cookie) {
        this.cookies.concat(res.cookies.headers['set-cookie']);
        this.userId.sCookie = this.cookies.value;
      }
      return this.vcore.initWssHost(this.proxyIp);
    });
  }
}

function rouUid (t, i) {
  return 0 === t && (t = "1234" + turnStr(Math.floor(9999 * Math.random()), 10, 4)),
  t = parseFloat(t),
  i = parseFloat(i),
  rotl64(t ^ i, 8) + i % 256
}

function rotl64(t, i) {
  var s = turnStr(t, 2, 64)
    , a = s.substr(i, 64 - i) + s.substr(0, i);
  return parseInt(a, 2)
}

function turnStr(e, t, i) {
  for (var s = e.toString(t), a = s.length; a < i; a++)
      s = "0" + s;
  return s
}