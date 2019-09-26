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
            console.log(t);
        });
    }

    sendDoLaunch(ws) {
        console.log('sendDoLaunch')
        var e = new HUYA.LiveLaunchReq;
        e.tId = this.userId;
        e.tLiveUB.eSource = HUYA.ELiveSource.WEB_HUYA;
        e.bSupportDomain = 1
        this.vcore.sendWup2('liveui', 'doLaunch', e, function(t) {
            // console.log(t);
            console.log(t.iTime * 1e3 - Date.now())
            console.log(t.sGuid);
            // G.serverTimeGap = t.iTime * 1e3 - Date.now();
            // G.userId.sGuid = t.sGuid;
        });
    }
}