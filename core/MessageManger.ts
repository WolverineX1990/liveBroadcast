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
            // if (G.loginRegister) {
            //     return;
            // }
            var t = new HUYA.WSRegisterGroupReq;
            t.vGroupId.value.push("live:" + ENV.presenterUid);
            t.vGroupId.value.push("chat:" + ENV.presenterUid);
            if (ENV.roomPayPassword && ENV.roomPayPassword != "") {
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
}