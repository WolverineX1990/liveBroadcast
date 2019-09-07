import { getWssHosts } from './../api/service';
import Wup from './../Taf/Wup';

let wup = new Wup();
wup.setServant("liveui");
wup.setFunc("doLaunch");
wup.writeStruct("tReq", t);
let buf = wup.encode().getBuffer();
// getWssHosts({}).then(res => {
//   console.log(res);
// }, err => {
//   console.log(err)
// })