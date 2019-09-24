const Taf = require('./../lib/Taf');
const HUYA = require('./../lib/HUYA');
import { checkLogin, getWssHosts } from './../api/service';
import Cookies from './../core/Cookies';
import WupHandler from './../core/wupHandler';
import { toArrayBuffer } from './../utils/buffer';

export default function test () {
  let cookies = new Cookies();
  checkLogin().then(res => {
    cookies.concat(res.cookie);
    const playerVer = 1909201810;
    let userId = new HUYA.UserId();
    userId.lUid = parseInt(cookies.getCookie("yyuid")) || parseInt(cookies.getCookie("udb_uid")) || 0,
    userId.sGuid = '';
    userId.sToken = '';
    userId.sHuYaUA = "webh5&" + playerVer + "&websocket";
    userId.sCookie = cookies.value;
    sendAjax(userId, cookies);
  });
}

function sendAjax(userId, cookies) {
  let t = new HUYA.LiveLaunchReq();
  t.tId = userId;
  t.tLiveUB.eSource = HUYA.ELiveSource.WEB_HUYA;
  t.bSupportDomain = 1;

  let buf = new WupHandler('liveui', 'doLaunch', t).buffer;
  getWssHosts(buf, cookies.value)
      .then(res => {
        var e = new HUYA.LiveLaunchRsp();
        var i = new Taf.Wup();
        let buf = toArrayBuffer(res)
        // console.log(buf)
        i.decode(buf);
        i.readStruct("tRsp", e);
        console.log(e)
        var r = e.vProxyList.value;
        for (var n = 0, s = r.length; n < s; n++) {
            var o = r[n];
            if (o.eProxyType == 5) {
                console.log(o.sProxy.value)
                // G.httpWs = o.sProxy.value;
                break
            }
        }
      })
}