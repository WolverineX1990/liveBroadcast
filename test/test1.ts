import * as WebSocket from 'ws';
const Taf = require('./../lib/Taf');
const HUYA = require('./../lib/HUYA');
const TafMx = require('./../lib/TafMx')

export default function test() {
    var i = new HUYA.UserHeartBeatReq;
    let userId = new HUYA.UserId();
    userId.iTokenType = 0;
    userId.lUid = 0;
    userId.sCookie = 'vplayer_sbanner_24388088_2691850820=1; SoundValue=0.50; alphaValue=0.80; isInLiveRoom=true; guid=b73e698c54d8785d4a2969366a36b075; __yamid_tt1=0.0761816991009765; __yamid_new=C8988C0443F00001F2A0B82415C019E9; udb_passdata=3; PHPSESSID=rdbtc36aodo98en4v38bllkec5; __yasmid=0.0761816991009765; _yasids=__rootsid%3DC89A0A348640000166D3F010109012DC; Hm_lvt_51700b6c722f5bb4cf39906a596ea41f=1567826133,1568010145,1568012550,1568601565; Hm_lpvt_51700b6c722f5bb4cf39906a596ea41f=1568617340';
    userId.sGuid = 'b73e698c54d8785d4a2969366a36b075';
    userId.sHuYaUA = 'webh5&1909122005&websocket';
    userId.sToken = '';

    i.tId = userId;
    i.lTid = '24388088';
    i.lSid = '2691850820';
    i.lShortTid = 0;
    i.lPid = 1632563722;
    i.bWatchVideo = true;
    i.eLineType = -1;
    i.iFps = 0;
    i.iAttendee = 0;
    i.iLastHeartElapseTime = 164;

    var s = new Taf.Wup();
    s.setServant('onlineui');
    s.setFunc('OnUserHeartBeat');
    s.writeStruct("tReq", i);
    s.setRequestId(-1);
    var l = new HUYA.WebSocketCommand;
    l.iCmdType = HUYA.EWebSocketCommandType.EWSCmd_WupReq;
    l.vData = s.encode();
    var u = new Taf.JceOutputStream;
    l.writeTo(u);
    let host = 'wss://wsapi.huya.com/';
    const ws = new WebSocket(host);

    ws.on('open', function open() {
        ws.send(u.getBuffer());
    });

    ws.on('message', function incoming(data) {
        // readMSg(data)
        readMSg(toArrayBuffer(data))
    });

    ws.on('close', function close(e) {
        console.log(e);
    });
}

function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return ab;
}

function readMSg(data) {
    var i = new Taf.JceInputStream(data);
    var r = new HUYA.WebSocketCommand;
    r.readFrom(i);
    // console.log(r)
    switch (r.iCmdType) {
    //     case HUYA.EWebSocketCommandType.EWSCmd_RegisterRsp:
    //         i = new Taf.JceInputStream(r.vData.buffer);
    //         var n = new HUYA.WSRegisterRsp;
    //         n.readFrom(i);
    //         // t.dispatch("WSRegisterRsp", n);
    //         break;
    //     case HUYA.EWebSocketCommandType.EWSCmdS2C_RegisterGroupRsp:
    //         i = new Taf.JceInputStream(r.vData.buffer);
    //         var s = new HUYA.WSRegisterGroupRsp;
    //         s.readFrom(i);
    //         // t.dispatch("WSRegisterGroupRsp", s);
    //         break;
    //     case HUYA.EWebSocketCommandType.EWSCmdS2C_UnRegisterGroupRsp:
    //         i = new Taf.JceInputStream(r.vData.buffer);
    //         var u = new HUYA.WSUnRegisterGroupRsp;
    //         u.readFrom(i);
    //         // t.dispatch("WSUnRegisterGroupRsp", u);
    //         break;
        case HUYA.EWebSocketCommandType.EWSCmd_WupRsp:
            var d = new Taf.Wup;
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
                console.log(d)
                // Event.fireEvent(Event.TAF_SUCCESS_REPORT, {
                //     type: 3,
                //     funcName: d.sFuncName,
                //     moduleName: d.sServantName,
                //     code: f
                // });
                if (d.iRequestId > 0) {
                    h.iRequestId = d.iRequestId
                }
                var m = d.sFuncName;
                // t.dispatch(d.iRequestId > 0 ? m + d.iRequestId : m, h)
            } else {
                // t.dispatch(d.sFuncName);
                if (d.sFuncName != "OnUserHeartBeat") {
                    console.info("收到未映射的 WupRsp，sFuncName=" + d.sFuncName)
                }
            }
            break;
    //     case HUYA.EWebSocketCommandType.EWSCmdS2C_MsgPushReq:
    //         i = new Taf.JceInputStream(r.vData.buffer);
    //         var I = new HUYA.WSPushMessage;
    //         I.readFrom(i);
    //         var w = I.iUri;
    //         logUtils.addUri(w);
    //         i = new Taf.JceInputStream(I.sMsg.buffer);
    //         var v = TafMx.UriMapping[I.iUri];
    //         if (v) {
    //             var y = new v;
    //             y.readFrom(i);
    //             it(y);
    //             if (o && !TafMx.NoLog[w.toString()]) {
    //                 console.log("%c<<<<<<< %crspMsgPush, %curi=" + w, ut("#0000E3"), ut("black"), ut("#8600FF"), y)
    //             }
    //             if (G.danmuLruCache) {
    //                 var S = {
    //                     uri: w,
    //                     data: y,
    //                     id: I.lMsgId,
    //                     groupId: I.sGroupId
    //                 };
    //                 x(S);
    //                 return
    //             } else {
    //                 if (w == 1400 || w == 6298) {
    //                     C++
    //                 }
    //             }
    //             t.dispatch(w, y)
    //         } else if (l) {
    //             console.info("收到未映射的 WSPushMessage uri=" + pushMsg.iUri)
    //         }
    //         break;
    //     case HUYA.EWebSocketCommandType.EWSCmdS2C_HeartBeatAck:
    //         console.log("%c<<<<<<< rspHeartBeat: " + Date.now(), ut("#0000E3"));
    //         break;
    //     case HUYA.EWebSocketCommandType.EWSCmdS2C_VerifyCookieRsp:
    //         i = new Taf.JceInputStream(r.vData.buffer);
    //         var g = new HUYA.WSVerifyCookieRsp;
    //         g.readFrom(i);
    //         var U = g.iValidate == 0;
    //         G.verifyCookiePass = U;
    //         if (!U) {
    //             G.vplayerUI.trigger("verifyCookieFail")
    //         }
    //         logUtils.addLog("VerifyCookie校验" + (U ? "通过！" : "失败！"));
    //         if (o) {
    //             console.log("%c<<<<<<< %cVerifyCookie", ut("#0000E3"), ut("#D9006C"), "校验" + (U ? "通过！" : "失败！"), g)
    //         }
    //         break;
    //     case HUYA.EWebSocketCommandType.EWSCmdS2C_MsgPushReq_V2:
    //         i = new Taf.JceInputStream(r.vData.buffer);
    //         var I = new HUYA.WSPushMessage_V2;
    //         I.readFrom(i);
    //         for (var A = 0, T = I.vMsgItem.value.length; A < T; A++) {
    //             var _ = I.vMsgItem.value[A];
    //             var w = _.iUri;
    //             var R = _.lMsgId;
    //             var v = TafMx.UriMapping[w];
    //             if (v) {
    //                 var y = new v;
    //                 var i = new Taf.JceInputStream(_.sMsg);
    //                 y.readFrom(i);
    //                 it(y);
    //                 if (o && !TafMx.NoLog[w.toString()]) {
    //                     console.log("%c<<<<<<< %crspMsgPushV2, %curi=" + w, ut("#0000E3"), ut("black"), ut("#8600FF"), y)
    //                 }
    //                 if (G.danmuLruCache) {
    //                     var S = {
    //                         uri: w,
    //                         data: y,
    //                         id: R,
    //                         groupId: I.sGroupId
    //                     };
    //                     x(S);
    //                     continue
    //                 }
    //                 t.dispatch(w, y)
    //             } else if (l) {
    //                 console.info("收到未映射的 WSPushMessage_V2 uri=" + w)
    //             }
    //         }
    //         break;
    //     case HUYA.EWebSocketCommandType.EWSCmdS2C_EnterP2PAck:
    //         i = new Taf.JceInputStream(r.vData.buffer);
    //         var H = new HUYA.WSEnterP2PAck;
    //         H.readFrom(i);
    //         if (o) {
    //             console.log("<<<<<<< WSEnterP2PAck", H)
    //         }
    //         t.dispatch("WSEnterP2PAck", H);
    //         break;
    //     case HUYA.EWebSocketCommandType.EWSCmdS2C_ExitP2PAck:
    //         i = new Taf.JceInputStream(r.vData.buffer);
    //         var Y = new HUYA.WSExitP2PAck;
    //         Y.readFrom(i);
    //         if (o) {
    //             console.log("<<<<<<< WSExitP2PAck", Y)
    //         }
    //         t.dispatch("WSExitP2PAck", Y);
    //         break;
    //     default:
    //         console.log("%c<<<<<<< Not matched CmdType: " + r.iCmdType, ut("#red"))
        }
}
//WSS_DEFAULT_IP  WSS_DEBUG_IP