import HUYA from './../core/HUYAEXT';
import ENV from './../const/ENV';

export default class MessageManager {
    _vcore
    _userId
    constructor (vcore?, user?) {
        this._vcore  = vcore;
        this._userId = user;
    }

    set userId (user) {
        this._userId = user;
    }

    get vcore() {
        return this._vcore;
    }

    set vcore (vcore) {
        this._vcore = vcore;
    }

    get userId() {
        return this._userId;
    }

    sendLivingInfoReq() {
        console.log('sendLivingInfoReq');
        var i = new HUYA.GetLivingInfoReq();
        i.tId = this._userId;
        i.lTopSid = ENV.topsid;
        i.lSubSid = ENV.subsid;
        i.lPresenterUid = ENV.presenterUid;
        i.sTraceSource = null;
        i.sPassword = ENV.roomPayPassword;
        this._vcore.sendWup2('liveui', 'getLivingInfo', i, function(t) {
            // console.log(t);
        });
    }

    sendPropsUIServer() {
        var t = new HUYA.GetPropsListReq;
        t.tUserId = this.userId;
        t.sMd5 = "";
        var e = HUYA.EClientTemplateType.TPL_MIRROR | HUYA.EClientTemplateType.TPL_WEB;
        // if (G.isUnion) {
        //     e = HUYA.EClientTemplateType.TPL_LIANYUN
        // }
        t.iTemplateType = e;
        t.sVersion = "";
        t.iAppId = 10057;//ENV.appid;
        t.lPresenterUid = ENV.presenterUid;
        t.lSid = ENV.topsid;
        t.lSubSid = ENV.subsid;
        this._vcore.sendWup2("PropsUIServer", "getPropsList", t, () => {
            
        });
    }

    sendDoLaunch() {
        console.log('sendDoLaunch')
        var e = new HUYA.LiveLaunchReq;
        e.tId = this._userId;
        e.tLiveUB.eSource = HUYA.ELiveSource.WEB_HUYA;
        e.bSupportDomain = 1;
        // console.log(this._userId)
        this._vcore.sendWup2('liveui', 'doLaunch', e, res => {
            console.log('doLaunch resulet')
            // console.log(res.iTime * 1e3 - Date.now())
            // G.serverTimeGap = t.iTime * 1e3 - Date.now();
            this._userId.sGuid = res.sGuid;
            this._vcore.dispatch('setGuid', res.sGuid);
            console.log('=============' +res.sGuid)
            //发送sendRegisterGroup
            // if (ENV.loginRegister) {
            //     return;
            // }
            var t = new HUYA.WSRegisterGroupReq;
            t.vGroupId.value.push("live:" + ENV.presenterUid);
            t.vGroupId.value.push("chat:" + ENV.presenterUid);
            if (ENV.roomPayPassword && ENV.roomPayPassword != '') {
                t.vGroupId.value.push("schat:" + ENV.presenterUid + "-" + ENV.roomPayPassword)
            }
            this._vcore.sendRegisterGroup(t)
        });
    }

    sendPingReq() {
        console.log('sendPingReq')
        var i = new HUYA.VideoGatewayProxy2VGPingReq();
        i.lLocalTime = .001 * Date.now() >> 0;
        this._vcore.sendWup2('videogateway', 'videoGatewayProxy2VGPing', i, function(t) {
            
        });
    }

    sendEnterChannelReq () {
        var e = new HUYA.EnterChannelReq;
        e.tUserId = this._userId;
        e.lTid = ENV.topsid;
        e.lSid = ENV.subsid;
        this._vcore.sendWup("ActivityUIServer", "OnClientReady", e);
    }

    sendWebdbUserInfo (username) {
        var t = new HUYA.GetWebdbUserInfoReq;
        // t.lUid = ENV.yyuid;
        t.lImid = 0;
        t.sPassport = username;
        t.sAccount = 0;
        t.bCacheFirst = true;
        this._vcore.sendWup2("liveui", "getWebdbUserInfo", t, function(data) {
            // G.userInfo = t.tUserInfo;
            // console.log(data)
        })
    }
    heartInt 
    sendUserEventReq () {
        var t = new HUYA.UserEventReq;
        t.tId = this._userId;
        t.lTid = ENV.topsid;
        t.lSid = ENV.subsid;
        t.lShortTid = 0;
        t.eOp = 1;
        t.sChan = "";
        t.eSource = 3;
        t.lPid = ENV.presenterUid;
        t.bWatchVideo = true;
        t.bAnonymous = false;//!isLogin
        t.eTemplateType = 1;
        t.sTraceSource = '';//ENV.platform || "";
        this._vcore.sendWup2("onlineui", "OnUserEvent", t, (data) => {
            // console.log('ddddddddddddddddddddddddddddddddd')
            // console.log(data)
            // G.userIn = true;
            // G.userInTime = Date.now() - G.userInTime;
            var e = data.iUserHeartBeatInterval * 1e3;
            if (e > 0) {
                this.sendUserHeartBeatReq(true);
                if (this.heartInt) {
                    clearInterval(this.heartInt);
                }
                this.heartInt = setInterval(this.sendUserHeartBeatReq.bind(this), e)
            }
        });
    }

    sendUserHeartBeatReq(t) {
        var e = new HUYA.UserHeartBeatReq;
        e.tId = this._userId;
        e.lTid = ENV.topsid;
        e.lSid = ENV.subsid;
        e.lShortTid = 0;
        e.lPid = ENV.presenterUid;
        // e.bWatchVideo = ENV.hasVideo;
        // e.eLineType = G.videoLine;
        // e.iFps = G.livingInfo ? G.livingInfo.tStreamSettingNotice.iFrameRate : 0;
        // e.iAttendee = G.iAttendeeCount;
        // e.iLastHeartElapseTime = I;
        let w = (new Date).getTime();
        let I = 0;
        let m = 0;
        this._vcore.sendWup2("onlineui", "OnUserHeartBeat", e, (data) => {
            var e = data.iRet;
            console.log(e)
            var i = (new Date).getTime();
            I = i - w
        }, true, ++m);
    }

    sendNobleServer() {
        var t = new HUYA.NobleInfoReq;
        t.tUserId = this._userId;
        this._vcore.sendWup2("NobleServer", "GetNobleInfo", t, (data) => {
            // G.nobleInfo = data.tInfo
        });
    }

    sendGetPresenterLiveScheduleInfoReq() {
        var t = new HUYA.GetPresenterLiveScheduleInfoReq;
        t.tId = this.userId;
        t.lPresenterId = ENV.presenterUid;
        this._vcore.sendWup2("presenterui", "getPresenterLiveScheduleInfo", t, () => {
            // console.log()
        });
    }
    
    sendEnterRoom () {
        var n = new HUYA.EnterPayLiveRoomReq;
        n.tId = this._userId,
        // n.lPid = a.a.lp,
        this._vcore.sendWup2("wupui", "enterPayLiveRoom", n, function(t) {
            // var i = "slive:" + a.a.lp + "-" + t.sPassword;
            //       0 != t.eStatus && n.inGroup != i && t.sPassword && (n.inGroup = i,
            //       o.a.ready(function(e) {
            //           e.registerGroup(i)
            //       })),
            //       n.state = r ? t.eStatus : 0,
            //       0 != n.state ? new $.Deferred(function(e) {
            //           o.a.isH5 && o.a.ready(function(t) {
            //               var n = new HUYA.GetPayLiveRoomInfoReq;
            //               n.tId = t.userId,
            //               n.lPid = a.a.lp,
            //               t.sendWup2("wupui", "getPayLiveRoomInfo", n, function(t) {
            //                   e.resolve(t)
            //               })
            //           })
            //       }
        });
    }
}