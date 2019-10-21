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

export function getSubscribeStatus(from_key, to_key) {
	let url = CONFIG.apiHost + `subscribe/getSubscribeStatus?from_key=${from_key}&from_type=1&to_key=${to_key}&to_type=2`;
	return request({
		url,
	});
}

//订阅
export function subscribe(n, t, cookieVal) {
	let url = "https://subapi.huya.com/user/subscribe?from=act&source=web&pid=" + n + "&uid=" + t+'&type=Subscribe&_=' + Date.now();
	console.log(url)
	return request({
		url,
		headers: {
			cookie: cookieVal
		},
	});
}

export function reportDetail(data) {
	let options = {
		url: 'https://statwup.huya.com/?timestamp='+(new Date).getTime(),
		headers: {
			// cookie: cookieVal
		},
		encoding: null,
    method: "POST",
    body: toBuffer(data)
	};

	return request(options).then(res => toArrayBuffer(res))
}

export function getWssHosts(data, cookieVal, proxyIp) {
	let options = {
		url: CONFIG.wupHost,
		headers: {
			cookie: cookieVal
		},
		encoding: null,
    method: "POST",
    body: toBuffer(data)
	};

	return request(options, proxyIp.replace('http://', 'http://:@')).then(res => toArrayBuffer(res));
}

export function checkLogin(cookie, proxyIp) {
	return request({
		url: CONFIG.host + 'udb_web/checkLogin.php',
		getCookie: true,
		headers: {
			cookie
		}
	}, proxyIp.replace('http://', 'http://:@'));
}

export function getCodeByPicId (data) {
	return request({
		url: 'http://test.hisway365.com:8098/fileController/getcodebypicid?' + stringify(data),
	});
}

export function talkrandom() {
	return request({
		url: 'http://test.hisway365.com:8098/talkController/talkrandom'
	});
}

export function sendPhone (phone) {
	return request({
		url: `http://test.hisway365.com:8098/phoneController/sendphone?phone=${phone}`
	});
}

export function getCodeByPhone (phone) {
	return request({
		url: `http://test.hisway365.com:8098/fileController/getcodebypicid?phone=${phone}`
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

export function logout(cookie, guid) {
	return request({
		url: 'https://udblgn.huya.com/web/v2/logout?' + guid,
		headers: {
			cookie
			// Referer: 'https://udblgn.huya.com/proxy.html'
		}
	});
}

export function passwordLogin(data, proxyIp) {
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
	return request(options, proxyIp.replace('http://', 'http://:@'));
}

export function verifyiIgCaptcha(data, proxyIp) {
	// console.log(data)
	let options = {
    url: 'https://udbsec.huya.com/auth/imgCaptcha/verify',//请求路径
		method: "POST",//请求方式，默认为get
		headers: {//设置请求头
      "content-type": "application/json;charset=UTF-8",
    },
    body: data//post参数字符串
	};
	return request(options, proxyIp.replace('http://', 'http://:@'));
}

export function getImgCaptcha(data, proxyIp) {
	let options = {
    url: 'https://udbsec.huya.com/auth/imgCaptcha/info',//请求路径
		method: "POST",//请求方式，默认为get
		headers: {//设置请求头
      "content-type": "application/json;charset=UTF-8",
    },
    body: data//post参数字符串
	};
	return request(options, proxyIp.replace('http://', 'http://:@'));
}