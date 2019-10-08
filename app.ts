import HuyaIns from './core/HuyaIns';

global['storage'] = {};

const roomId = 19622208;
// const roomId = 19322980;
// let users = ['17188945517', '18162814162', '15687472565', '18257431411', '17105112341'];
let users = ['18257431411'];
// let demo = new HuyaIns(roomId, '17105112341', 'hy17105112341');
// demo.startConnect();
let arr = [];
function enterRoom() {
  console.log('enterRoom');
  let user = users.shift();
  // let demo = new HuyaIns(roomId, user, 'hy'+user);
  let demo = new HuyaIns(roomId, '18519203764', '19900325x');
  demo.startConnect();
  arr.push(demo);
  // if (users.length) {
  //   let timeout = Math.round(Math.random()*5);
  //   setTimeout(() => enterRoom(), timeout * 1000);
  // }
}

//开始
let timeout = Math.round(Math.random()*5);
setTimeout(() => enterRoom(), timeout * 1000);