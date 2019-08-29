import Wss from './wss';
import { getHtml } from './utils';

export default class Huya {
    wss = null
    host = ''
    constructor(id) {
        this.host = `https://www.huya.com/${id}`;
        this.init();
    }

    init() {
        const host = 'wss://3d87b40f-ws.va.huya.com/';
        // wss://dcc27b82-ws.va.huya.com
        getHtml(this.host);
        this.wss = new Wss(host);
    }
}