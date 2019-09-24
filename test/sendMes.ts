import * as WebSocket from 'ws';
// const Taf = require('./../lib/Taf');
// const HUYA = require('./../lib/HUYA');
const TafMx = require('./../lib/TafMx');
import Cookies from './../core/Cookies';
import WupHandler from './../core/wupHandler';
import { toArrayBuffer } from './../utils/buffer';

export default function test () {
  let hosts = [
    '7cec1711-ws.va.huya.com',
    '7cefe854-ws.va.huya.com',
    '7cec170f-ws.va.huya.com',
    '7cefe84d-ws.va.huya.com',
    '7cec1713-ws.va.huya.com' 
  ];

  sendWup2(hosts[2])
}

function sendWup2 (host, n?) {
  const ws = new WebSocket('wss://' + host);
  ws.on('open', function open() {
      console.log('open')
      sendMsg3(ws);
      // sendMsg2(ws)
  });

  ws.on('message', function incoming(data) {
    console.log('message')
    encodeData(toArrayBuffer(data));
  });

  ws.on('close', function close() {
    console.log('disconnected');
  });
}

function sendMsg2(ws) {
  console.log('sendMsg2')
  // var e = new VideoGatewayProxy2VGPingReq();
  const playerVer = 1909201810;
  let userId = new HUYA.UserId();
  let cookies = new Cookies();
  userId.lUid = parseInt(cookies.getCookie("yyuid")) || parseInt(cookies.getCookie("udb_uid")) || 0,
  userId.sGuid = '0e74b066dd85895de9a602cd03cdf7c9';
  userId.sToken = '';
  userId.sHuYaUA = "webh5&" + playerVer + "&websocket";
  userId.sCookie = 'SoundValue=0.50; __yamid_tt1=0.3687445989565903; __yamid_new=C89C9E5B98C00001E9941410D860EA50; alphaValue=0.80; isInLiveRoom=true; guid=0e74b066dd85895de9a602cd03cdf7c9; sdid=; Hm_lvt_51700b6c722f5bb4cf39906a596ea41f=1568601565,1568877737,1569207289,1569310410; __yasmid=0.3687445989565903; _yasids=__rootsid%3DC89CAE366E600001827D6B831FE0FC40; udb_passdata=3; PHPSESSID=mu26acnq5052tbc9ehesak7sc7; Hm_lpvt_51700b6c722f5bb4cf39906a596ea41f=1569310469';//cookies.value;

  // e.tUserId = userId;
  

  // let buf = new WupHandler('videogateway', 'videoGatewayProxy2VGPing', e).buffer;
  // ws.send(buf);

  // setTimeout(() => sendMsg(ws), 15 * 1000)
}

function sendMsg(ws) {
  console.log('sendMsg')
  const playerVer = 1909201810;
  let userId = new HUYA.UserId();
  let cookies = new Cookies();
  userId.lUid = parseInt(cookies.getCookie("yyuid")) || parseInt(cookies.getCookie("udb_uid")) || 0,
  userId.sGuid = '0e74b066dd85895de9a602cd03cdf7c9';
  userId.sToken = '';
  userId.sHuYaUA = "webh5&" + playerVer + "&websocket";
  userId.sCookie = 'SoundValue=0.50; __yamid_tt1=0.3687445989565903; __yamid_new=C89C9E5B98C00001E9941410D860EA50; alphaValue=0.80; isInLiveRoom=true; guid=0e74b066dd85895de9a602cd03cdf7c9; sdid=; Hm_lvt_51700b6c722f5bb4cf39906a596ea41f=1568601565,1568877737,1569207289,1569310410; __yasmid=0.3687445989565903; _yasids=__rootsid%3DC89CAE366E600001827D6B831FE0FC40; udb_passdata=3; PHPSESSID=mu26acnq5052tbc9ehesak7sc7; Hm_lpvt_51700b6c722f5bb4cf39906a596ea41f=1569310469';//cookies.value;

  var i = new HUYA.GetLivingInfoReq;
  i.tId = userId;
  i.lTopSid = 0;
  i.lSubSid = 0;
  i.lPresenterUid = 1199521503354;
  i.sTraceSource = null;
  i.sPassword = '';

  let buf = new WupHandler('liveui', 'getLivingInfo', i).wsBuffer;
  ws.send(buf);

  // setTimeout(() => sendMsg(ws), 15 * 1000)
}


function encodeData(e) {
    // if (localStorage.__wup > 1) {
    //     Taf.Util.jcestream(e, 32)
    // }
    var i = new Taf.JceInputStream(e);
    var r = new HUYA.WebSocketCommand;
    r.readFrom(i);
    console.log(r.iCmdType)
    switch (r.iCmdType) {
      case HUYA.EWebSocketCommandType.EWSCmd_RegisterRsp:
          i = new Taf.JceInputStream(r.vData.buffer);
          var n = new HUYA.WSRegisterRsp;
          n.readFrom(i);
          // if (o) {
          //     console.log("%c<<<<<<< %crspRegister", ut("#0000E3"), ut("#D9006C"), n)
          // }
          // t.dispatch("WSRegisterRsp", n);
          break;
      case HUYA.EWebSocketCommandType.EWSCmdS2C_RegisterGroupRsp:
          i = new Taf.JceInputStream(r.vData.buffer);
          var s = new HUYA.WSRegisterGroupRsp;
          s.readFrom(i);
          // if (o) {
          //     console.log("%c<<<<<<< %crspregisterGroup", ut("#0000E3"), ut("#D9006C"), s)
          // }
          // t.dispatch("WSRegisterGroupRsp", s);
          break;
      case HUYA.EWebSocketCommandType.EWSCmdS2C_UnRegisterGroupRsp:
          i = new Taf.JceInputStream(r.vData.buffer);
          var u = new HUYA.WSUnRegisterGroupRsp;
          u.readFrom(i);
          // if (o) {
          //     console.log("%c<<<<<<< %crspunRegisterGroup", ut("#0000E3"), ut("#D9006C"), u)
          // }
          // t.dispatch("WSUnRegisterGroupRsp", u);
          break;
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
              console.log(h)
              // t.dispatch(d.iRequestId > 0 ? m + d.iRequestId : m, h)
          } else {
              // t.dispatch(d.sFuncName);
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
          // console.log("%c<<<<<<< rspHeartBeat: " + Date.now(), ut("#0000E3"));
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
          //     console.log("%c<<<<<<< %cVerifyCookie", ut("#0000E3"), ut("#D9006C"), "校验" + (U ? "通过！" : "失败！"), g)
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


function sendMsg3(ws) {
  console.log('sendMsg3')
  const playerVer = 1909201810;
  let userId = new HUYA.UserId();
  let cookies = new Cookies();
  userId.lUid = parseInt(cookies.getCookie("yyuid")) || parseInt(cookies.getCookie("udb_uid")) || 0,
  userId.sGuid = '0e74b066dd85895de9a602cd03cdf7c9';
  userId.sToken = '';
  userId.sHuYaUA = "webh5&" + playerVer + "&websocket";
  userId.sCookie = 'SoundValue=0.50; __yamid_tt1=0.3687445989565903; __yamid_new=C89C9E5B98C00001E9941410D860EA50; alphaValue=0.80; isInLiveRoom=true; guid=0e74b066dd85895de9a602cd03cdf7c9; sdid=; Hm_lvt_51700b6c722f5bb4cf39906a596ea41f=1568601565,1568877737,1569207289,1569310410; __yasmid=0.3687445989565903; _yasids=__rootsid%3DC89CAE366E600001827D6B831FE0FC40; udb_passdata=3; PHPSESSID=mu26acnq5052tbc9ehesak7sc7; Hm_lpvt_51700b6c722f5bb4cf39906a596ea41f=1569310469';//cookies.value;

  var i = new HUYA.VideoGatewayProxy2VGPingReq();
  i.lLocalTime = .001 * Date.now() >> 0;
  let buf = new WupHandler('videogateway', 'videoGatewayProxy2VGPing', i).wsBuffer;
  ws.send(buf);
  setTimeout(() => sendMsg3(ws), 15 * 1000)
}