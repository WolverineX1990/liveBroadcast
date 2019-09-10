import { post } from './../core/request';
import CONFIG from './../const/CONFIG';

export function getWssHosts(headers) {
	return post(CONFIG.wupHost, null, { headers });
}

export function passwordLogin(data) {
	return post('https://udblgn.huya.com/web/v2/passwordLogin', data);
}