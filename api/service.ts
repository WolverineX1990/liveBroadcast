import { post, get } from './../core/request';
import CONFIG from './../const/CONFIG';

export function getWssHosts(headers) {
	return post(CONFIG.wupHost, null, { headers });
}

export function checkLogin() {
	return get(CONFIG.host + 'udb_web/checkLogin.php', null, {getCookie: true});
}