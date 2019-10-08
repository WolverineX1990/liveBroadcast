const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('headers', function(headers, request) {
  console.log(headers)
})

wss.on('connection', function connection(ws, request) {
  // console.log(ws)
  console.log(request.headers)
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});