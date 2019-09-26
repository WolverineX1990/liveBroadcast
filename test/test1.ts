import VCore from './../core/VCore';
import MessageManger from './../core/MessageManger';
const HUYA = require('./../lib/HUYA');
const TafMx = require('./../lib/TafMx');
import Cookies from './../core/Cookies';

const playerVer = 1909201810;
let userId = new HUYA.UserId();
let cookies = new Cookies();
userId.lUid = parseInt(cookies.getCookie("yyuid")) || parseInt(cookies.getCookie("udb_uid")) || 0,
userId.sGuid = '0e74b066dd85895de9a602cd03cdf7c9';
userId.sToken = '';
userId.sHuYaUA = "webh5&" + playerVer + "&websocket";
userId.sCookie = 'SoundValue=0.50; __yamid_tt1=0.3687445989565903; __yamid_new=C89C9E5B98C00001E9941410D860EA50; alphaValue=0.80; isInLiveRoom=true; guid=0e74b066dd85895de9a602cd03cdf7c9; sdid=; Hm_lvt_51700b6c722f5bb4cf39906a596ea41f=1568601565,1568877737,1569207289,1569310410; __yasmid=0.3687445989565903; _yasids=__rootsid%3DC89CAE366E600001827D6B831FE0FC40; udb_passdata=3; PHPSESSID=mu26acnq5052tbc9ehesak7sc7; Hm_lpvt_51700b6c722f5bb4cf39906a596ea41f=1569310469';//cookies.value;

let vcore: VCore;
let mesMg: MessageManger;

export default function test() {
    vcore = new VCore();
    vcore.userId = userId;
    mesMg = new MessageManger(vcore, userId);
    vcore.addListener("WEBSOCKET_CONNECTED", wssConnected);
    vcore.wsStart();
}

function wssConnected () {
    mesMg.sendLivingInfoReq();
}