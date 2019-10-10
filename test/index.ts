import getWssHosts from './getWssHosts';
import getCookies from './getCookies';
// import sendMes from './sendMes';
import { getSubscribeStatus, subscribe } from './../api/service';
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

getSubscribeStatus('1279518667356', 1199521503354).then(res => {
    let data = JSON.parse(res);
    if (!data.status) {
        // subscribe(1199521503354, '1279518667356').then(res => console.log(res))
    }
})

// sendMes();
// getWssHosts();
// getCookies();
// login();
// test1();