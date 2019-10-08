import getWssHosts from './getWssHosts';
import getCookies from './getCookies';
import sendMes from './sendMes';
import login from './login';
import test1 from './test1';
import { request  } from 'http';
import { parse as urlParse } from 'url';
const Taf = require('./../lib/Taf');
import './../core/HUYAEXT';
import * as WebSocket from 'ws';


global['storage'] = {

};

let ws = new WebSocket('ws://47.111.151.170:8080', {
  origin: 'https://www.huya.com',
  'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36'
});
this.ws = ws;
ws.on('open', function open() {
  
});

ws.on('message', function incoming(data) {
  
});

ws.on('close', function close() {
  
});


// sendMes();
// getWssHosts();
// getCookies();
// login();
// test1();