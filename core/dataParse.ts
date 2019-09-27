const Taf = require('./../lib/Taf');
const HUYA = require('./../lib/HUYA');
const TafMx = require('./../lib/TafMx');

export default function dataParse (e, vcore) {
    // if (localStorage.__wup > 1) {
    //     Taf.Util.jcestream(e, 32)
    // }
    var i = new Taf.JceInputStream(e);
    var r = new HUYA.WebSocketCommand;
    r.readFrom(i);
    console.log('message:' + r.iCmdType);
    switch (r.iCmdType) {
        case HUYA.EWebSocketCommandType.EWSCmd_RegisterRsp:
            i = new Taf.JceInputStream(r.vData.buffer);
            var n = new HUYA.WSRegisterRsp;
            n.readFrom(i);
            if (false) {
                console.log("%c<<<<<<< %crspRegister", n)
            }
            vcore.dispatch("WSRegisterRsp", n);
            break;
        case HUYA.EWebSocketCommandType.EWSCmdS2C_RegisterGroupRsp:
            i = new Taf.JceInputStream(r.vData.buffer);
            var s = new HUYA.WSRegisterGroupRsp;
            s.readFrom(i);
            if (false) {
                console.log("%c<<<<<<< %crspregisterGroup", s)
            }
            vcore.dispatch("WSRegisterGroupRsp", s);
            break;
        case HUYA.EWebSocketCommandType.EWSCmdS2C_UnRegisterGroupRsp:
            i = new Taf.JceInputStream(r.vData.buffer);
            var u = new HUYA.WSUnRegisterGroupRsp;
            u.readFrom(i);
            if (false) {
                console.log("%c<<<<<<< %crspunRegisterGroup", u)
            }
            vcore.dispatch("WSUnRegisterGroupRsp", u);
            break;
        case HUYA.EWebSocketCommandType.EWSCmd_WupRsp:
            var d = new Taf.Wup();
            d.decode(r.vData.buffer);
            var c = TafMx.WupMapping[d.sFuncName];
            if (c) {
                var h = new c;
                var p = d.newdata.get("tRsp") ? "tRsp" : "tResp";
                // Event.fireEvent(Event.SCRIPTXSS_REPORT, {
                //     type: 1,
                //     funcName: d.sFuncName
                // });
                d.readStruct(p, h, c);
                // it(h);
                // Event.fireEvent(Event.SCRIPTXSS_REPORT, {
                //     type: 2
                // });
                var f = d.readInt32("");
                // Event.fireEvent(Event.TAF_SUCCESS_REPORT, {
                //     type: 3,
                //     funcName: d.sFuncName,
                //     moduleName: d.sServantName,
                //     code: f
                // });
                // if (o && (d.sServantName.toLowerCase() != "videogateway" || a) && !TafMx.NoLog[d.sFuncName]) {
                //     console.log("%c<<<<<<< %crspWup:%c " + d.sFuncName, ut("#0000E3"), ut("black"), ut("#0000E3"), d.sServantName, h)
                // }
                if (d.iRequestId > 0) {
                    h.iRequestId = d.iRequestId
                }
                var m = d.sFuncName;
                console.log(m)
                vcore.dispatch(d.iRequestId > 0 ? m + d.iRequestId : m, h)
            } else {
                vcore.dispatch(d.sFuncName);
                if (d.sFuncName != "OnUserHeartBeat") {
                    console.info("收到未映射的 WupRsp，sFuncName=" + d.sFuncName)
                }
            }
            break;
        case HUYA.EWebSocketCommandType.EWSCmdS2C_MsgPushReq:
            i = new Taf.JceInputStream(r.vData.buffer);
            var I = new HUYA.WSPushMessage;
            I.readFrom(i);
            var w = I.iUri;
            i = new Taf.JceInputStream(I.sMsg.buffer);
            console.log('start')
            // var y = TafMx.UriMapping[I.iUri];
            // if (y) {
            //     var v = new y;
            //     v.readFrom(i);
            //     it(v);
            //     if (o && !TafMx.NoLog[w.toString()]) {
            //         console.log("%c<<<<<<< %crspMsgPush, %curi=" + w, ut("#0000E3"), ut("black"), ut("#8600FF"), v)
            //     }
            //     if (G.danmuLruCache) {
            //         var S = {
            //             uri: w,
            //             data: v,
            //             id: I.lMsgId,
            //             groupId: I.sGroupId
            //         };
            //         x(S);
            //         return
            //     } else {
            //         if (w == 1400 || w == 6298) {
            //             k++
            //         }
            //     }
            //     t.dispatch(w, v)
            // } else if (l) {
            //     console.info("收到未映射的 WSPushMessage uri=" + pushMsg.iUri)
            // }
            break;
        case HUYA.EWebSocketCommandType.EWSCmdS2C_HeartBeatAck:
            console.log("%c<<<<<<< rspHeartBeat: " + Date.now());
            break;
        case HUYA.EWebSocketCommandType.EWSCmdS2C_VerifyCookieRsp:
            i = new Taf.JceInputStream(r.vData.buffer);
            var g = new HUYA.WSVerifyCookieRsp;
            g.readFrom(i);
            var U = g.iValidate == 0;
            // G.verifyCookiePass = U;
            // if (!U) {
            //     G.vplayerUI.trigger("verifyCookieFail")
            // }
            // logUtils.addLog("VerifyCookie校验" + (U ? "通过！" : "失败！"));
            // if (o) {
            //     console.log("%c<<<<<<< %cVerifyCookie", "校验" + (U ? "通过！" : "失败！"), g)
            // }
            break;
        case HUYA.EWebSocketCommandType.EWSCmdS2C_MsgPushReq_V2:
            i = new Taf.JceInputStream(r.vData.buffer);
            var I = new HUYA.WSPushMessage_V2;
            I.readFrom(i);
            for (var A = 0, T = I.vMsgItem.value.length; A < T; A++) {
                var _ = I.vMsgItem.value[A];
                var w = _.iUri;
                var H = _.lMsgId;
                // var y = TafMx.UriMapping[w];
                // if (y) {
                //     var v = new y;
                //     var i = new Taf.JceInputStream(_.sMsg);
                //     v.readFrom(i);
                //     it(v);
                //     if (o && !TafMx.NoLog[w.toString()]) {
                //         console.log("%c<<<<<<< %crspMsgPushV2, %curi=" + w, ut("#0000E3"), ut("black"), ut("#8600FF"), v)
                //     }
                //     if (G.danmuLruCache) {
                //         var S = {
                //             uri: w,
                //             data: v,
                //             id: H,
                //             groupId: I.sGroupId
                //         };
                //         x(S);
                //         continue
                //     }
                //     t.dispatch(w, v)
                // } else if (l) {
                //     console.info("收到未映射的 WSPushMessage_V2 uri=" + w)
                // }
            }
            break;
        case HUYA.EWebSocketCommandType.EWSCmdS2C_EnterP2PAck:
            i = new Taf.JceInputStream(r.vData.buffer);
            var R = new HUYA.WSEnterP2PAck;
            R.readFrom(i);
            // if (o) {
            //     console.log("<<<<<<< WSEnterP2PAck", R)
            // }
            // t.dispatch("WSEnterP2PAck", R);
            break;
        case HUYA.EWebSocketCommandType.EWSCmdS2C_ExitP2PAck:
            i = new Taf.JceInputStream(r.vData.buffer);
            var P = new HUYA.WSExitP2PAck;
            P.readFrom(i);
            // if (o) {
            //     console.log("<<<<<<< WSExitP2PAck", P)
            // }
            // t.dispatch("WSExitP2PAck", P);
            break;
        default:
            console.log("%c<<<<<<< Not matched CmdType: " + r.iCmdType, 'color:#red;font-weight:900')
    }
}