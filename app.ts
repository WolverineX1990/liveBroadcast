// let num = 4;
import * as WebSocket from 'ws';

const host = 'wss://7cec1713-ws.va.huya.com';
const ws = new WebSocket(host);

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
