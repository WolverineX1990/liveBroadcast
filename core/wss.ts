import * as WebSocket from 'ws';

export default class Wss {
    host: ''
    ws: null
    constructor(host) {
        this.host = host;
        this.init();
    }
    init () {
        const ws = new WebSocket(this.host);

        ws.on('open', function open() {
            console.log('open')
            // ws.send('something');
        });

        ws.on('message', function incoming(data) {
            console.log(data);
        });

        ws.on('close', function close() {
            console.log('disconnected');
        });

        this.ws = ws;
    }
}