import { post } from './../core/request';
import CONFIG from './../const/CONFIG';

export function getWssHosts(headers) {
	return post(CONFIG.wupHost, null, { headers });
}