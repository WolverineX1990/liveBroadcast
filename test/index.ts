import getWssHosts from './getWssHosts';
import getCookies from './getCookies';
import sendMes from './sendMes';
import login from './login';
import test1 from './test1';
import { request  } from 'http';
import { parse as urlParse } from 'url';
const Taf = require('./../lib/Taf');
import './../core/HUYAEXT';
import * as fs from 'fs';

if (!fs.existsSync('temp/')) {
    fs.mkdirSync('temp/');
} 


// sendMes();
// getWssHosts();
// getCookies();
login();
// test1();