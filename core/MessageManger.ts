import HUYA from './../core/HUYAEXT';
import ENV from './../const/ENV';
import { talkrandom } from './../api/service';

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
        t.iAppId = ENV.appid;
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
        t.lUid = ENV.yyuid;
        t.lImid = 0;
        t.sPassport = username;
        t.sAccount = 0;
        t.bCacheFirst = true;
        this._vcore.sendWup2("liveui", "getWebdbUserInfo", t, data => {
            // G.userInfo = t.tUserInfo;
            // console.log(data);
            // console.log('dddddddddddddddd')
            this._vcore.dispatch('gamelivePubTextInitComplete');
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
            // G.userIn = true;
            // console.log('USER_IN')
            this._vcore.dispatch('USER_IN');
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
        e.bWatchVideo = true;
        // e.eLineType = G.videoLine;
        // e.iFps = G.livingInfo ? G.livingInfo.tStreamSettingNotice.iFrameRate : 0;
        // e.iAttendee = G.iAttendeeCount;
        // e.iLastHeartElapseTime = I;
        let w = (new Date).getTime();
        let I = 0;
        let m = 0;
        this._vcore.sendWup2("onlineui", "OnUserHeartBeat", e, (data) => {
            var e = data.iRet;
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

    sendMessage() {
        var t = new HUYA.SendMessageReq;
        t.tUserId = this._userId;
        t.lPid = ENV.presenterUid;
        t.lTid = ENV.id;
        t.lSid = ENV.sid;
        t.sContent = 'llll';
        // t.tBulletFormat = $.extend(t.tBulletFormat || {}, y);
        talkrandom().then(res => {
            t.sContent = JSON.parse(res).msg;
            this._vcore.sendWup("liveui", "sendMessage", t);
        });
    }

    uuid = 0
    getLivingStreamInfo() {
        console.log('getLivingStreamInfo');
        0 === this.uuid && (this.uuid = Number((Date.now() % 1e10 * 1e3 + (1e3 * Math.random() | 0)) % 4294967295));
        let info = {
            "uuid": this.uuid,
            "type":1,//FLV
            "lineType": ENV.videoLine,
            "curBitrate": ENV.SrcBitRate,
            "originalBitrate": ENV.SrcBitRate ? 0: 1,
            "uid": ENV.yyuid,
            "sid": ENV.topsid,
            "subSid":ENV.subsid,
            "presenterUid": ENV.presenterUid,
            "url": ENV.flv,
            "domainList":[],
            "inited":true
        };
        let s = info.presenterUid;// || info.pid;
        let i = info.subSid;// || info.subsid;
        let r = new HUYA.GetLivingStreamInfoReq;
        r.tId = this._userId;
        0 == r.tId.lUid && (r.tId.lUid = this.uuid),
        s ? r.lPresenterUid = Number(s) : (r.lTopSid = Number(info.sid),
                        r.lSubSid = Number(i))
        this._vcore.sendWup("liveui", "getLivingStreamInfo", r);
    }

    getRMessageListWb() {
        let t = new HUYA.GetRMessageListWbReq;
        let n = new HUYA.RMessageSceneWb;
        n.sLiveId = ENV.liveId;
        n.lPid = ENV.presenterUid;
        n.lTid = ENV.topsid;
        n.lSid = ENV.subsid;
        t.tId = this._userId;
        t.tScene = n;
        this._vcore.sendWup2("mobileui", "getRMessageListWb", t, e => {

        });
    }
    //留言板历史
    getRctTimedMessage () {
        var n = new HUYA.GetRctTimedMessageReq;
        n.tUserId = this._userId,
        n.lPid = ENV.presenterUid;
        n.lTid = ENV.topsid;
        n.lSid = ENV.subsid;
        this._vcore.sendWup2("mobileui", "getRctTimedMessage", n, function(i) {
            // console.log(i)
        })
    }


    getBadgeItem () {
        var t = new HUYA.BadgeItemReq;
        t.tUserId = this._userId,
        t.lPid = ENV.presenterUid,
        this._vcore.sendWup2("liveui", "getBadgeItem", t, (e) => {

        });
    }

    queryBadgeInfoList () {
        var n = new HUYA.BadgeInfoListReq;
        n.tUserId = this._userId,
        this._vcore.sendWup2("liveui", "queryBadgeInfoList", n, () => {

        });
    }

    sendCustomBadgeLogoReq() {
        var t = new HUYA.CustomBadgeLogoReq;
        t.tUserId = this._userId,
        this._vcore.sendWup2("revenueui", "getCustomBadgeLogo", t, () => {

        })
    }

    getUserSetting() {
        var n = new HUYA.SettingFetchReq;
        n.tId = this._userId,
        n.vKeys.value.push('blockwords'),
        n.vKeys.value.push('blockword4pid'),
        this._vcore.sendWup2("liveui", "getUserSetting", n, e => {
            // console.log('=====================')
            // console.log(e)
        });
    }

    getUserLevelInfo() {
        var a = new HUYA.GetUserLevelInfoReq;
        a.tId = this._userId,
        this._vcore.sendWup("huyauserui", "getUserLevelInfo", a)
    }

    getDIYActivityInfo() {
        var t = new HUYA.ActivityDIYReq;
        t.tUserId = this._userId;
        t.lPid = ENV.presenterUid;
        t.lTid = ENV.topsid;
        t.lSid = ENV.subsid;
        // t.lRoomId = ENV.profileRoom;
        // t.iGameId = G.gameId;
        this._vcore.sendWup2("ActivityUIServer", "getDIYActivityInfo", t, () => {

        });
    }

    getAuditorRole() {
        var n = new HUYA.GetAuditorRoleReq;
        n.tId = this._userId;
        n.lPresenterUid = ENV.presenterUid;
        n.lSid = 0;
        n.lSubSid = 0;
        this._vcore.sendWup2("liveui", "getAuditorRole", n, (e) => {
            // console.log(e)
        });
    }
}