const HUYA = require('./../lib/HUYA');
import ENV from './../const/ENV';

export default class MessageManager {
    vcore
    userId
    constructor (vcore, user) {
        this.vcore  = vcore;
        this.userId = user;
    }
    sendLivingInfoReq() {
        console.log('sendLivingInfoReq');
        var i = new HUYA.GetLivingInfoReq();
        i.tId = this.userId;
        i.lTopSid = ENV.topsid;
        i.lSubSid = ENV.subsid;
        i.lPresenterUid = ENV.presenterUid;
        i.sTraceSource = null;
        i.sPassword = ENV.roomPayPassword;
        this.vcore.sendWup2('liveui', 'getLivingInfo', i, function(t) {
            // console.log(t);
        });
    }

    sendDoLaunch() {
        console.log('sendDoLaunch')
        var e = new HUYA.LiveLaunchReq;
        e.tId = this.userId;
        e.tLiveUB.eSource = HUYA.ELiveSource.WEB_HUYA;
        e.bSupportDomain = 1;
        let vcore = this.vcore;
        vcore.sendWup2('liveui', 'doLaunch', e, function(t) {
            // console.log(t);
            console.log(t.iTime * 1e3 - Date.now())
            console.log(t.sGuid);
            // G.serverTimeGap = t.iTime * 1e3 - Date.now();
            // G.userId.sGuid = t.sGuid;
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
            vcore.sendRegisterGroup(t)
        });
    }

    sendPingReq() {
        console.log('sendPingReq')
        var i = new HUYA.VideoGatewayProxy2VGPingReq();
        i.lLocalTime = .001 * Date.now() >> 0;
        this.vcore.sendWup2('videogateway', 'videoGatewayProxy2VGPing', i, function(t) {
            
        });
    }

    sendEnterChannelReq () {
        var e = new HUYA.EnterChannelReq;
        e.tUserId = this.userId;
        e.lTid = ENV.topsid;
        e.lSid = ENV.subsid;
        this.vcore.sendWup("ActivityUIServer", "OnClientReady", e);
    }

    sendWebdbUserInfo () {
        var t = new HUYA.GetWebdbUserInfoReq;
        // t.lUid = ENV.yyuid;
        t.lImid = 0;
        t.sPassport = '';//utils.getCookie("username");
        t.sAccount = 0;
        t.bCacheFirst = true;
        this.vcore.sendWup2("liveui", "getWebdbUserInfo", t, function() {
            // G.userInfo = t.tUserInfo;
        })
    }
    heartInt 
    sendUserEventReq () {
        var t = new HUYA.UserEventReq;
        t.tId = this.userId;
        t.lTid = ENV.topsid;
        t.lSid = ENV.subsid;
        t.lShortTid = 0;
        t.eOp = 1;
        t.sChan = "";
        t.eSource = 3;
        t.lPid = ENV.presenterUid;
        // t.bWatchVideo = G.hasVideo;
        // t.bAnonymous = !G.isLogin;
        t.eTemplateType = 1;
        // t.sTraceSource = ENV.platform || "";
        this.vcore.sendWup2("onlineui", "OnUserEvent", t, (data) => {
            // G.userIn = true;
            // G.userInTime = Date.now() - G.userInTime;
            var e = data.iUserHeartBeatInterval * 1e3;
            if (e > 0) {
                this.sendUserHeartBeatReq(true);
                if (this.heartInt)
                    clearInterval(this.heartInt);
                this.heartInt = setInterval(this.sendUserHeartBeatReq, e)
            }
        });
    }

    sendUserHeartBeatReq(t) {
        var e = new HUYA.UserHeartBeatReq;
        e.tId = this.userId;
        e.lTid = ENV.topsid;
        e.lSid = ENV.subsid;
        e.lShortTid = 0;
        e.lPid = ENV.presenterUid;
        e.bWatchVideo = ENV.hasVideo;
        // e.eLineType = G.videoLine;
        // e.iFps = G.livingInfo ? G.livingInfo.tStreamSettingNotice.iFrameRate : 0;
        // e.iAttendee = G.iAttendeeCount;
        e.iLastHeartElapseTime = I;
        this.vcore.sendWup2("onlineui", "OnUserHeartBeat", e, (data) => {
            var e = data.iRet;
            var i = (new Date).getTime();
            I = i - w
        }, true, ++m);
        w = (new Date).getTime();
    }

    sendNobleServer() {
        var t = new HUYA.NobleInfoReq;
        t.tUserId = this.userId;
        this.vcore.sendWup2("NobleServer", "GetNobleInfo", t, (data) => {
            // G.nobleInfo = data.tInfo
        });
    }    
}