import HuyaIns from './core/HuyaIns';

global['storage'] = {};

const roomId = 19622208;
let users = ['17188945517', '18162814162', '15687472565', '18257431411', '17105112341'];
let demo = new HuyaIns(roomId, '17188945517', 'hy17188945517');
demo.startConnect();
// let arr = [];
// for (let i = 0; i<5; i++) {
//     let demo = new HuyaIns(roomId, users[i], 'hy'+users[i]);
//     demo.startConnect();
//     arr.push(demo);
// }
