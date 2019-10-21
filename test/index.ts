import getWssHosts from './getWssHosts';
import getCookies from './getCookies';
// import sendMes from './sendMes';
import { talkrandom, subscribe, checkLogin } from './../api/service';
import login from './login';
import test1 from './test1';
import { parse as urlParse } from 'url';
const Taf = require('./../lib/Taf');
import proxyIps from './../const/proxyIps';
import HUYA from './../core/HUYAEXT';
import * as fs from 'fs';

import TafMx from './../core/TafMxEXT';

import { toBuffer, toArrayBuffer } from './../utils/buffer';
import * as fetch from 'node-fetch';

// if (!fs.existsSync('temp/')) {
//     fs.mkdirSync('temp/');
// } 

// talkrandom().then(res => {
//     console.log(JSON.parse(res).msg);
// })
import * as util from 'util';

let username = '';
let password = '';
let proxyIp = '223.99.214.21';
let proxyPort = 53281;

let proxy = util.format('http://%s:%s@%s:%d', username, password, proxyIp, proxyPort);
checkLogin('', proxy).then(res => console.log(res));
// https://al.flv.huya.com/huyalive/1199521503354-1199521503354-5264031189219409920-2399043130164-10057-A-0-1.flv?wsSecret=2202c836a29ff7ac33b65a4b3349235e&wsTime=5d9f55d9&fs=bgct&u=122&t=100&sv=1910091800
// let url ='https://bd.flv.huya.com/backsrc/49488231-49488231-212550333681893376-3265250900-10057-A-0-1.flv?wsSecret=9a634b6cd8b0e67334cfc35ed64f8da9&wsTime=5da01abd&&sphdcdn=al_7-tx_3-js_3-ws_7-bd_2-hw_2&sphdDC=huya&sphd=264_*&fs=gctex&ratio=4000&u=420683390730&t=100&sv=1910091800'
// fetch(url, {}).then(res => {
//   console.log(res.status)
//   console.log(res.body.read())
//   // let e = res.body.getReader();
//   // e.read().then(res => {
//   //   console.log(1);
//   // })
//   return res.json();
// }).then(res => console.log(1));

// sendMes();
// getWssHosts();
// getCookies();
// login();
// test1();