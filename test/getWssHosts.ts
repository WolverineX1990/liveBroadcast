import { getWssHosts } from './../api/service';
import LiveLaunchReq from './../HUYA/LiveLaunchReq';
import Wup from './../Taf/Wup';
import ELiveSource from './../HUYA/ELiveSourcet';
import userId from './../HUYA/userId';


export default function test () {
  var t = new LiveLaunchReq();
  t.tId = new userId();
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