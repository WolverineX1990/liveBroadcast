import { post, get } from './../core/request';
import CONFIG from './../const/CONFIG';

export function getWssHosts(data, headers) {
	return post(CONFIG.wupHost, data, { 
		headers: {
			'Content-Type': '',
			...headers,
		}
	});
}

export function checkLogin() {
	return get(CONFIG.host + 'udb_web/checkLogin.php', null, {getCookie: true});
}

export function passwordLogin(data, headers) {
	return post('https://udblgn.huya.com/web/v2/passwordLogin', data, {
		'Content-Type': 'application/json;charset=UTF-8',
		getCookie: true,
		...headers
	});
}