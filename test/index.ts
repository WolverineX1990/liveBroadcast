import getWssHosts from './getWssHosts';
import getCookies from './getCookies';
// import sendMes from './sendMes';
import { talkrandom, subscribe } from './../api/service';
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

// talkrandom().then(res => {
//     console.log(JSON.parse(res).msg);
// })

// https://al.flv.huya.com/huyalive/1199521503354-1199521503354-5264031189219409920-2399043130164-10057-A-0-1.flv?wsSecret=2202c836a29ff7ac33b65a4b3349235e&wsTime=5d9f55d9&fs=bgct&u=122&t=100&sv=1910091800

// sendMes();
// getWssHosts();
// getCookies();
// login();
// test1();