import { get } from './../core/request';
import  { request } from './../core/requestExt';
import CONFIG from './../const/CONFIG';

export function getWssHosts(data, cookieVal) {
	let options = {
		url: CONFIG.wupHost,
		headers: {
			cookie: cookieVal
		},
		encoding: null,
    method: "POST",
    body: data
	};

	return request(options)
}

export function checkLogin() {
	return get(CONFIG.host + 'udb_web/checkLogin.php', null, {getCookie: true});
}

export function passwordLogin(data) {
	let options = {
    url: 'https://udblgn.huya.com/web/v2/passwordLogin',//请求路径
    method: "POST",//请求方式，默认为get
    headers: {//设置请求头
      "content-type": "application/json;charset=UTF-8",
    },
    body: data//post参数字符串
	};
	return request(options);
}

