import { passwordLogin, checkLogin, logout, subscribe } from './../api/service';
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

export default class HuyaIns {
  _roomId
  _userName
  _pwd
  cookies
  userId
  vcore= new VCore()
  mesMg= new MessageManger()
  reportDetail= new ReportDetail()
  constructor (roomId , userName?, pwd?) {
    this._roomId = roomId;
    this._userName = userName;
    this._pwd = pwd;
    if (userName) {
      this.cookies = new Cookies(userName);
    } else {
      this.cookies = new Cookies();
    }
  }

  tt () {
    // https://al.flv.huya.com/huyalive/1199521503354-1199521503354-5264031189219409920-2399043130164-10057-A-0-1.flv?wsSecret=7379c6feeb9c4fe2c3f4cd7d716e2af8&wsTime=5d99e8d7&fs=bgct&u=122&t=100&sv=1909271530
  }

  startConnect() {
    this.vcore.addListener("USER_LOGINED", () => {
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
        })
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
      // this.mesMg.getLivingStreamInfo();
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
      console.log('=================count'+t.iAttendeeCount);   
    });
    this.vcore.addListener("8102", this.livingStreamInfoNotice.bind(this));
    this.vcore.addListener("8103", this.livingStreamEndNotice.bind(this));
    this.vcore.addListener("getLivingStreamInfo", e => {
      e && e.bIsLiving ? this.livingStreamInfoNotice(e.tNotice) : console.log("GetLivingStreamInfoReq xxxxxxx no living")
    });

    this.vcore.addListener("sendMessage", e => {
      console.log('***************************')
      console.log(e)
    });
  }

  livingStreamInfoNotice (e) {
    console.log(e.mStreamInfo.value);
  }

  livingStreamEndNotice(e) {
    console.log('livingStreamEndNotice'+ e.sStreamName);
  }

  pingInter
  wssConnected() {
    this.sendMessage();
    // this.mesMg.sendLivingInfoReq();
    // this.mesMg.sendGetPresenterLiveScheduleInfoReq();
    // this.mesMg.sendDoLaunch();
    // this.mesMg.sendPingReq();
    // this.mesMg.sendPropsUIServer();
    // let config = {
    //   tickCount: 0,
    //   interval: 1000,
    //   times: 0
    // };
    // this.pingInter = setInterval(this.ping.bind(this), 10, config);
    // setInterval(this.reportDetailV2.bind(this), 2e4);
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
              .then(() => checkLogin(this.cookies.value))
              .then(res => console.log(res));
  }

  // 订阅
  subscribe() {
    subscribe(ENV.presenterUid, ENV.yyuid);
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
        // this.userId.sCookie = this.cookies.value;
        // this.userId.sGuid = this.cookies.getCookie('guid');
        // this.userId.sCookie = 'vplayer_sbanner_1199521503354_1199521503354=1; sdid=; alphaValue=0.80; SoundValue=0.50; __yamid_tt1=0.6296102326560773; __yamid_new=C8A0E90251000001AE7D47E91AD06920; isInLiveRoom=true; guid=0acf6cbdc7a79d5de2425cb25db26816; udb_guiddata=ddc52d0eeeb5478e8df8875ab4fdb91f; __yasmid=0.6296102326560773; Hm_lvt_51700b6c722f5bb4cf39906a596ea41f=1570445400,1570503272,1570606785,1570673628; udb_passdata=3; h_unt=1570692733; __yaoldyyuid=; _yasids=__rootsid%3DC8A1D77E80E000018D2016F0944113DE; PHPSESSID=r6dom8f32mmqec818rko0bgm11; Hm_lpvt_51700b6c722f5bb4cf39906a596ea41f=1570695876; udb_biztoken=AQBAIQ6nZPP5jPQ9bX-3uyiRn4llfEHO3-2aLRi16wt68CnmFRMvrFBk3J4BSbPuKJ8UYXIewiSfQV76bUdxarX7DrXRMaU1ORDuSQKiTLlyRR7xolt400Cz6JiXiBdlwE3a7_XXC17gRV24styL68G0p8nlwWT67iUNTIlkn-fAqu97xo9v6ZMOjkltS_YftaSD1ZrykjmHlnAypcA2Ylx0ijnY6rBS-O5uDnrkNuHE4GloUYqGJw_0sov0fgHmFfag7fKKiMDp63fc7fxqNBB0OMw5uTiVwDDHmiTK1Y6A_EqmlkzxcbCE_YSYmjDOaQw52ls88Zc_d7SjXTdXidbY; udb_origin=1; udb_other=%7B%22lt%22%3A%221570695934132%22%2C%22isRem%22%3A%221%22%7D; udb_passport=35184375637612hy; udb_status=1; udb_uid=1199512024650; udb_version=1.0; username=35184375637612hy; yyuid=1199512024650; udb_accdata=17701342615"';
        this.userId.sCookie = 'vplayer_sbanner_1199521503354_1199521503354=1; sdid=; alphaValue=0.80; SoundValue=0.50; __yamid_tt1=0.6296102326560773; __yamid_new=C8A0E90251000001AE7D47E91AD06920; isInLiveRoom=true; guid=0acf6cbdc7a79d5de2425cb25db26816; udb_guiddata=ddc52d0eeeb5478e8df8875ab4fdb91f; __yasmid=0.6296102326560773; Hm_lvt_51700b6c722f5bb4cf39906a596ea41f=1570445400,1570503272,1570606785,1570673628; udb_passdata=3; PHPSESSID=o4vujmihilamng99b6rueo7ps4; udb_biztoken=AQAp99n5egv5YXp7xaMec5PqoD7s1BDpvjrTeD_ejnTVaVn7caudUqiJYhcJTZKcLBT_o2UhLue63yVF82UPKketlF5O3dcfebnTEaAxCRRpLidhiA3URCc175jtkZ-xVBaVO8wuSppJ53apLkIqaI07XcWr6HuJqXCW4wyRUtHCRt9Us5jV9FutE8jfvyoPPsj6gO-4hhgrYtqltbjCT9r49yHVPPEUL9VJu7oM2boyDAcr8M3UU_mvqdZNH1euNfRTkUcaLvei1nJWa5gNQrsH1orJXvPSTHEuLeB_Of5EnWeUKQzt2wqOp-jj8exx7cxK0JUdoy1xkZ9zGvfCZvu7; udb_origin=1; udb_other=%7B%22lt%22%3A%221570696979297%22%2C%22isRem%22%3A%221%22%7D; udb_passport=35184375637612hy; udb_status=1; udb_uid=1199512024650; udb_version=1.0; username=35184375637612hy; yyuid=1199512024650; udb_accdata=17701342615; h_unt=1570696980; __yaoldyyuid=1199512024650; _yasids=__rootsid%3DC8A1D88CB570000121341070FF529710; Hm_lpvt_51700b6c722f5bb4cf39906a596ea41f=1570696981';
        this.userId.sGuid = "0acf6cbdc7a79d5de2425cb25db26816";
        this.userId.lUid = parseInt(this.cookies.getCookie("yyuid")) || parseInt(this.cookies.getCookie("udb_uid")) || 0;
        this.vcore.dispatch('USER_LOGINED');
        return;
      }
      userJson.data.userName = this._userName;
      userJson.data.password = sha1(this._pwd);
      return passwordLogin(JSON.stringify(userJson))
            .then((res) => {
              //biztoken uid sign
              let data = JSON.parse(res.data);
              var t = "vplayer_sbanner_" + ENV.topsid + "_" + ENV.subsid;
              if (!this.cookies.getCookie(t)) {
                this.cookies.add(t+'=1; ');
              }
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
                  let phoneVer = new VerifyiIgPhoneCode(this._userName, () => {

                  });
                });
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
    let time = 5 + Math.round(Math.random() * 6 );
    setTimeout(() => {
      this.mesMg.sendMessage();
      console.log('发送弹幕');
      // this.sendMessage();
    }, 1000 * time);
  }

  initWssHost() {
    return checkLogin(this.cookies.value).then(res => {
      let json = JSON.parse(res.data);
      if (!json.isLogined) {
        throw 'noLogined';
      }
      
      if (res.cookie) {
        this.cookies.concat(res.cookie);
        this.userId.sCookie = this.cookies.value;
      }
      return this.vcore.initWssHost();
    });
  }
}