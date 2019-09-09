// import Huya from './core/huya';

// const id = 19622208;
// let arr = [];
// for (let i = 0; i<10; i++) {
//     let hy = new Huya(id);
//     arr.push(hy);
// }

import { getWssHosts } from './api/service';
import LiveLaunchReq from './HUYA/LiveLaunchReq';
import Wup from './Taf/Wup';
import ELiveSource from './HUYA/ELiveSourcet';

var t = new LiveLaunchReq();
// t.tId = G.userId;
t.tLiveUB.eSource = ELiveSource.WEB_HUYA;
// if (G.useHttps) {
//     t.bSupportDomain = 1
// }

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
