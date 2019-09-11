import { getWssHosts } from './../api/service';
import LiveLaunchReq from './../HUYA/LiveLaunchReq';
import Wup from './../Taf/Wup';
import ELiveSource from './../HUYA/ELiveSourcet';
import UserId from './../HUYA/UserId';


export default function test () {
  const playerVer = 1909101153;
  let userId = new UserId();
  let yyuid = 0;//parseInt(r.default.getCookie("yyuid")) || parseInt(r.default.getCookie("udb_uid")) || 0,
  userId.lUid = yyuid;
  // userId.sGuid = utils.getCookie("guid");
  userId.sToken = "";
  userId.sHuYaUA = "webh5&" + playerVer + "&websocket";
  userId.sCookie = document.cookie;

  let t = new LiveLaunchReq();
  t.tId = userId;
  t.tLiveUB.eSource = ELiveSource.WEB_HUYA;
  t.bSupportDomain = 1;

  let wup = new Wup();
  wup.setServant("liveui");
  wup.setFunc("doLaunch");
  wup.writeStruct("tReq", t);
  let buf = wup.encode().getBuffer();
  console.log(buf)
  // getWssHosts({}).then(res => {
  //   console.log(res);
  // }, err => {
  //   console.log(err)
  // })
}