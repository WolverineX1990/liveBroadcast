import { request } from './core/requestExt';
import * as fs from 'fs';

async function main() {
  let res = await getHtml('https://mp.weixin.qq.com/s/D_mg7mu_fOGCcJxF1XHBpQ');
  let uls = parseUL(res);
  let lis = [];
  uls.map(ul => lis = lis.concat(parseLI(ul)));
  let urls = lis.map(li => {
    let res = getUrl(li);
    if (res) {
      return res
    } else {
      console.log(res)
      console.log(li)
    }
  });
  
}

function getUrl (str) {
  var reg = /<a[^>]*href[=\"\'\s]+([^\"\']*)[\"\']?[^>]*>/gi;
  let res;
  while(reg.exec(str)) {
    res = RegExp.$1
  };

  return res;
}

function checkStatus(ips) {
  
}

function checkIpStatus(ip) {
  
}

function getHtml(url) {
  let promise = new Promise((resolve, reject) => {
    request({
      url,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3'
      }
    }).then(html => resolve(html), err => console.log(err));
  });

  return promise;
}


function parseUL(html) {
  let uls = html.match(/<ul[^>]*>[\s\S]*?<\/ul>/ig);
  uls = uls.filter(ul => ul.indexOf('list-paddingleft-2') > -1);
  
  return uls;
}

function parseLI(ul) {
  let lis = ul.match(/<a[^>]*>([\s\S]*?)<\/a>/ig);
  return lis;
}

function save(ips) {
  const dir = 'const/'
  let content = `const proxyIps = ${ips};

export default proxyIps;`;
  fs.writeFileSync(dir + 'proxyIps.ts', content);
}

//运行
main();