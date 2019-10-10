import getWssHosts from './getWssHosts';
import getCookies from './getCookies';
// import sendMes from './sendMes';
import login from './login';
import test1 from './test1';
import { request  } from 'http';
import { parse as urlParse } from 'url';
const Taf = require('./../lib/Taf');
import HUYA from './../core/HUYAEXT';
import * as fs from 'fs';

import TafMx from './../core/TafMxEXT';

import { toBuffer, toArrayBuffer } from './../utils/buffer';

// if (!fs.existsSync('temp/')) {
//     fs.mkdirSync('temp/');
// } 


// sendMes();
// getWssHosts();
// getCookies();
// login();
// test1();

import * as WebSocket from 'ws';


let ws = new WebSocket('wss://7cec1712-ws.va.huya.com/', {
    // Origin: 'https://www.huya.com',
    // perMessageDeflate: false
});

let str = 'vplayer_sbanner_1199521503354_1199521503354=1; sdid=; alphaValue=0.80; SoundValue=0.50; __yamid_tt1=0.6296102326560773; __yamid_new=C8A0E90251000001AE7D47E91AD06920; isInLiveRoom=true; guid=0acf6cbdc7a79d5de2425cb25db26816; udb_guiddata=ddc52d0eeeb5478e8df8875ab4fdb91f; __yasmid=0.6296102326560773; Hm_lvt_51700b6c722f5bb4cf39906a596ea41f=1570445400,1570503272,1570606785,1570673628; udb_passdata=3; PHPSESSID=o4vujmihilamng99b6rueo7ps4; udb_biztoken=AQAp99n5egv5YXp7xaMec5PqoD7s1BDpvjrTeD_ejnTVaVn7caudUqiJYhcJTZKcLBT_o2UhLue63yVF82UPKketlF5O3dcfebnTEaAxCRRpLidhiA3URCc175jtkZ-xVBaVO8wuSppJ53apLkIqaI07XcWr6HuJqXCW4wyRUtHCRt9Us5jV9FutE8jfvyoPPsj6gO-4hhgrYtqltbjCT9r49yHVPPEUL9VJu7oM2boyDAcr8M3UU_mvqdZNH1euNfRTkUcaLvei1nJWa5gNQrsH1orJXvPSTHEuLeB_Of5EnWeUKQzt2wqOp-jj8exx7cxK0JUdoy1xkZ9zGvfCZvu7; udb_origin=1; udb_other=%7B%22lt%22%3A%221570696979297%22%2C%22isRem%22%3A%221%22%7D; udb_passport=35184375637612hy; udb_status=1; udb_uid=1199512024650; udb_version=1.0; username=35184375637612hy; yyuid=1199512024650; udb_accdata=17701342615; h_unt=1570696980; __yaoldyyuid=1199512024650; _yasids=__rootsid%3DC8A1D88CB570000121341070FF529710; Hm_lpvt_51700b6c722f5bb4cf39906a596ea41f=1570696981';
let lUid = 1199512024650;
let sGuid = "0acf6cbdc7a79d5de2425cb25db26816";
let sUA ="webh5&1910091803&websocket";

ws.on('open', function open() {
    
    var t = new HUYA.WSVerifyCookieReq;
    t.lUid = lUid;
    t.sUA = sUA;
    t.sCookie = str;
    t.sGuid = sGuid;
    t.bAutoRegisterUid = 1;
    var e = new Taf.JceOutputStream;
    t.writeTo(e);
    var i = new HUYA.WebSocketCommand;
    i.iCmdType = HUYA.EWebSocketCommandType.EWSCmdC2S_VerifyCookieReq;
    i.vData = e.getBinBuffer();
    e = new Taf.JceOutputStream;
    i.writeTo(e);

    ws.send(toBuffer(e.getBuffer()));
});

let isLogin = false;

ws.on('message', function incoming(data) {
    let e = toArrayBuffer(data);
    var i = new Taf.JceInputStream(e);
    var r = new HUYA.WebSocketCommand;
    r.readFrom(i);
    console.log(r.iCmdType)

    if (!isLogin) {
        i = new Taf.JceInputStream(r.vData.buffer);
        var g = new HUYA.WSVerifyCookieRsp;
        g.readFrom(i);
        var U = g.iValidate == 0;
        // G.verifyCookiePass = U;
        // if (!U) {
        //     G.vplayerUI.trigger("verifyCookieFail")
        // }
        console.log("VerifyCookie校验" + (U ? "通过！" : "失败！"));
        console.log(g);
        isLogin = true;
        sendMes();
    } else {
        var d = new Taf.Wup();
        d.decode(r.vData.buffer);
        var c = TafMx.WupMapping[d.sFuncName];
        if (c) {
            var h = new c;
            var p = d.newdata.get("tRsp") ? "tRsp" : "tResp";
            d.readStruct(p, h, c);
            // it(h, vcore);
            if (d.iRequestId > 0) {
                h.iRequestId = d.iRequestId
            }
            var m = d.sFuncName;
            console.log('fun_name:' + m + ';iRequestId:'+ d.iRequestId);
            console.log(h)
            // vcore.dispatch(d.iRequestId > 0 ? m + d.iRequestId : m, h)
        } 
    } 
});

ws.on('close', function close() {

});


function sendMes() {
    let userId = new HUYA.UserId();
    userId.iTokenType = 0;
    userId.lUid = lUid;
    userId.sCookie = str;
    userId.sGuid = sGuid;
    userId.sHuYaUA = sUA;
    var t = new HUYA.SendMessageReq;
    t.tUserId = userId;
    t.lPid = 1199521503354;
    t.lTid = 0;//ENV.topsid;
    t.lSid = 0;//ENV.subsid;
    t.sContent = 'lulululuuuu';
    // t.tBulletFormat = $.extend(t.tBulletFormat || {}, y);

    if (t && t.tId) {
        t.tId = userId;
    }
    var s = new Taf.Wup();
    s.setServant('liveui');
    s.setFunc('sendMessage');
    s.writeStruct("tReq", t);
    s.setRequestId(-1);
    var l = new HUYA.WebSocketCommand;
    l.iCmdType = HUYA.EWebSocketCommandType.EWSCmd_WupReq;
    l.vData = s.encode();
    var stream = new Taf.JceOutputStream();
    l.writeTo(stream);
    ws.send(toBuffer(stream.getBuffer()));
}