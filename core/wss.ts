import * as WebSocket from 'ws';
import { toBuffer, toArrayBuffer } from './../utils/buffer';
import * as HttpsProxyAgent from 'https-proxy-agent';
import * as url from 'url';

export default class Wss {
    host
    ws
    agent
    constructor(host, proxy) {
        this.host = 'wss://' + host;
        //'http://223.99.214.21:53281'
        if (proxy) {
            let options: any = url.parse(proxy);
            this.agent = new HttpsProxyAgent(options);    
        }
        
    }

    start (openFun, messageFun, closeFun) {
        
        let ws = new WebSocket(this.host, {
            Origin: 'https://www.huya.com',
            perMessageDeflate: false,
            agent: this.agent
        });
        this.ws = ws;
        ws.on('open', function open() {
            openFun();
        });

        ws.on('message', function incoming(data) {
            messageFun(toArrayBuffer(data));
        });

        ws.on('close', function close() {
            closeFun();
        });
    }

    sendBuf (buf) {
        if (this.ws) {
            this.ws.send(toBuffer(buf));
        }
    }
}