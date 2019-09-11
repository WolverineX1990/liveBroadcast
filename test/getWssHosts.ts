import { getWssHosts } from './../api/service';
import LiveLaunchReq from './../HUYA/LiveLaunchReq';
import Wup from './../Taf/Wup';
import ELiveSource from './../HUYA/ELiveSourcet';
import UserId from './../HUYA/UserId';
import { checkLogin } from './../api/service';
import Cookies from './../core/Cookies';


export default function test () {
  let cookies = new Cookies();
  checkLogin().then(res => {
    cookies.concat(res.cookie);
    const playerVer = 1909101153;
    let userId = new UserId();
    userId.lUid = parseInt(cookies.getCookie("yyuid")) || parseInt(cookies.getCookie("udb_uid")) || 0,
    userId.sGuid = '';
    userId.sToken = '';
    userId.sHuYaUA = "webh5&" + playerVer + "&websocket";
    userId.sCookie = cookies.value;
    sendAjax(userId, cookies);
  });
}

function sendAjax(userId, cookies) {
  let t = new LiveLaunchReq();
  t.tId = userId;
  t.tLiveUB.eSource = ELiveSource.WEB_HUYA;
  t.bSupportDomain = 1;

  let wup = new Wup();
  wup.setServant("liveui");
  wup.setFunc("doLaunch");
  wup.writeStruct("tReq", t);
  let buf = wup.encode().getBuffer();
  let data = String.fromCharCode.apply(null, new Uint8Array(buf));
  
  getWssHosts(data, {Cookie: cookies.value}).then(res => {
    console.log(res);
  }, err => {
    console.log(err)
  })
}