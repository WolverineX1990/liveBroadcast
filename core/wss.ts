import * as WebSocket from 'ws';
import { toBuffer, toArrayBuffer } from './../utils/buffer';

export default class Wss {
    host
    ws
    constructor(host) {
        this.host = 'wss://' + host;
    }

    start (openFun, messageFun, closeFun) {
        let ws = new WebSocket(this.host, {
            Origin: 'https://www.huya.com',
            perMessageDeflate: false
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