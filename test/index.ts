import getWssHosts from './getWssHosts';
import getCookies from './getCookies';
import sendMes from './sendMes';
import login from './login';
import test1 from './test1';
import { request  } from 'http';
import { parse as urlParse } from 'url';
const Taf = require('./../lib/Taf');
import './../core/HUYAEXT';


global['storage'] = {

};


// sendMes();
// getWssHosts();
// getCookies();
// login();
test1();
// let data = `,<LVliveuifdoLaunch}õtReqç

// &6webh5&1909101505&websocketF®PHPSESSID=p6othmjboi1rjikti193u0p265; Hm_lvt_51700b6c722f5bb4cf39906a596ea41f=1567422879,1567826133,1568010145,1568012550; Hm_lpvt_51700b6c722f5bb4cf39906a596ea41f=1568191271\*&6F `
// let url = 'https://wup.huya.com/';
// let param = urlParse(url);
// console.log(param.host)
//   let options = {
//     host: param.host,
//     path: param.path,
//     method: 'POST',
//     headers: {
//       'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36',
//       Host: param.host,
//       'Content-Length': Buffer.byteLength(data),
//       Connection: 'keep-alive',
//       Referer: 'https://www.huya.com/19622208',
//       'sec-ch-ua': 'Google Chrome 76',
//       'Sec-Fetch-Dest': 'empty',
//       'Sec-Fetch-Mode': 'cors',
//       // Referer: 'https://hyplayer.msstatic.com/v3.2_19082301/main.swf',
//       'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
//       'Accept-Encoding': 'gzip, deflate',
//       'Content-type': 'Content-type: application/x-www-form-urlencoded',
//       'Accept': '*/*'
//     }
//   };
  
//   let req = request(options, function (response) {
//       response.setEncoding('utf8');
//       let data = '';
//       response.on('data', function (res) {
//           data += res;
//       }).on('end', function () {
//         console.log(response.statusCode, data)		        
//       });
//   });
//   req.on('error', function(err) {
//     console.log(err)
//   });
//   req.write(data);
//   req.end();