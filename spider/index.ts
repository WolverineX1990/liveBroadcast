import { request } from './../core/requestExt';
import * as url from 'url';

let totalPage = 0;
let spiderPage = 10;
let curPage = 2;
let proxyList = [];
let ips =[];

function main() {
  getHtml().then(() => {
    console.log(proxyList);
  });
}


function getHtml() {
  let url = getPageUrl(curPage);
  console.log('开始解析页面:' + curPage);
  console.log(url)
  return request({
    url
  }).then(html => {
    // console.log('tt ' + html)
    if (!totalPage) {
      getPageSize(html);
      if (totalPage < spiderPage) {
        spiderPage = totalPage;
      }
    }

    
    parseTable(html);
  }).then(() => {
    if (curPage < spiderPage) {
      curPage++;
      getHtml();
    }
  });
}

function getPageSize (html) {
  let ul = html.match(/<div id=\"listnav\"[^>]*>[\s\S]*?<\/div>/ig);
  let lis = ul[0].match(/<li[^>]*>[\s\S]*?<\/li>/ig);
  if (lis.length > 2) {
    totalPage = lis[lis.length-2].match(/[\d]+/)[0];
  } else {
    throw 'pageSize解析错误';
  }
}


function parseTable(html) {
  let tableStr = html.match(/<table[^>]*>[\s\S]*?<\/table>/ig);
  // console.log(html)
  let rows = tableStr[0].match(/<tr[^>]*>[\s\S]*?<\/tr>/ig);
  rows.shift();
  for (let i =0;i<rows.length;i++) {
    let json = paserItem(rows[i]);
    if (ips.indexOf(json.host) === -1) {
      ips.push(json.host);
      proxyList.push(json);
    }
  }
}

function paserItem(tr) {
  let tds = tr.match(/<td[^>]*>([\s\S]*?)<\/td>/ig);
  let host = tds[0].match(/<td[^>]*>([\s\S]*?)<\/td>/)[1];
  let port = tds[1].match(/<td[^>]*>([\s\S]*?)<\/td>/)[1];
  let protocol = tds[3].match(/<td[^>]*>([\s\S]*?)<\/td>/)[1];
  return {
    host,
    port,
    protocol
  };
}

function getPageUrl(page) {
  return`https://www.kuaidaili.com/free/inha/${page}/`;
}

//运行
main();