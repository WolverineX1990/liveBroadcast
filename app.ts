import HuyaIns from './core/HuyaIns';
import { initConfig } from './core/init';

global['storage'] = {};

const roomId = 19622208;
// const roomId = 19322980;
// let users = ['17863630511', '18519203764', '17105112341'];
//17863630511
let users = ['17863630511', '18500077008', '13792642694'];
let arr = [];
function enterRoom() {
  console.log('enterRoom');
  let user = users.shift();
  let demo = new HuyaIns(roomId, user, 'hy'+user);
  demo.startConnect();
  arr.push(demo);
  if (users.length) {
    let timeout = Math.round(Math.random()*5);
    setTimeout(() => enterRoom(), timeout * 1000);
  }
}
//退出
// process.on('SIGINT', function () {
//   console.log('Exit now!');
//   let prommises = [];
//   arr.map(demo => prommises.push(demo.userLogout()))
//   Promise.all(prommises).then(res => {
//     console.log('Exit success!');
//     process.exit();
//   });
// });

//开始
initConfig(roomId, () => {
  let timeout = Math.round(Math.random()*5);
  setTimeout(() => enterRoom(), timeout * 1000);
});