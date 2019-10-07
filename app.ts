import HuyaIns from './core/HuyaIns';

global['storage'] = {};

const roomId = 19622208;
let users = ['16531454346', '16533154856', '17004489272', '17115432968', '17115439863'];
// let demo = new HuyaIns(roomId, '16533154856', 'hy16533154856');
// demo.startConnect();
let arr = [];
for (let i = 0; i<5; i++) {
    let demo = new HuyaIns(roomId, users[i], 'hy'+users[i]);
    demo.startConnect();
    arr.push(demo);
}
