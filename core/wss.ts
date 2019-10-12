import * as WebSocket from 'ws';
import { toBuffer, toArrayBuffer } from './../utils/buffer';
import * as HttpsProxyAgent from 'https-proxy-agent';
import * as url from 'url';

export default class Wss {
    host
    ws
    constructor(host) {
        this.host = 'wss://' + host;
    }

    start (openFun, messageFun, closeFun) {
        let options: any = url.parse('http://223.99.214.21:53281');
        let agent = new HttpsProxyAgent(options);
        let ws = new WebSocket(this.host, {
            Origin: 'https://www.huya.com',
            perMessageDeflate: false,
            agent
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