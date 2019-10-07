import { get } from './../core/request';
import  { request } from './../core/requestExt';
import  { toBuffer, toArrayBuffer } from './../utils/buffer';
import CONFIG from './../const/CONFIG';
import { stringify } from 'querystring';

export function getRoomHtml(url) {
	let options = {
		url,
	};

	return request(options)
}

export function getWssHosts(data, cookieVal) {
	let options = {
		url: CONFIG.wupHost,
		headers: {
			cookie: cookieVal
		},
		encoding: null,
    method: "POST",
    body: toBuffer(data)
	};

	return request(options).then(res => toArrayBuffer(res))
}

export function checkLogin(cookie) {
	return get(CONFIG.host + 'udb_web/checkLogin.php', null, {getCookie: true, headers: {
		cookie
	}});
}

export function getCodeByPicId (data) {
	return request({
		url: 'http://test.hisway365.com:8098/fileController/getcodebypicid?' + stringify(data),
	});
}

export function uploadCodeImg(data) {
	let options = {
    url: 'http://test.hisway365.com:8098/fileController/upload',//请求路径
		method: "POST",//请求方式，默认为get
		headers: {//设置请求头
      "content-type": "application/x-www-form-urlencoded",
    },
    body: stringify(data)//post参数字符串
	};
	return request(options);
}

export function passwordLogin(data) {
	let options = {
		getCookies: true,
    url: 'https://udblgn.huya.com/web/v2/passwordLogin',//请求路径
    method: "POST",//请求方式，默认为get
    headers: {//设置请求头
			"content-type": "application/json;charset=UTF-8",
			Referer: 'https://udblgn.huya.com/web/middle/2.4/39004737/https/829c86d6b3f94532b31b76ec52d31a93'
    },
    body: data//post参数字符串
	};
	return request(options);
}

export function verifyiIgCaptcha(data) {
	console.log(data)
	let options = {
    url: 'https://udbsec.huya.com/auth/imgCaptcha/verify',//请求路径
		method: "POST",//请求方式，默认为get
		headers: {//设置请求头
      "content-type": "application/json;charset=UTF-8",
    },
    body: data//post参数字符串
	};
	return request(options);
}

export function getImgCaptcha(data) {
	let options = {
    url: 'https://udbsec.huya.com/auth/imgCaptcha/info',//请求路径
		method: "POST",//请求方式，默认为get
		headers: {//设置请求头
      "content-type": "application/json;charset=UTF-8",
    },
    body: data//post参数字符串
	};
	return request(options);
}