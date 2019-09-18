import { passwordLogin } from './../api/service';

let d = {
	"uri": "30001",
	"version": "2.4",
	"context": "WB-b79fee58d7764cc0beb59af15c33848e-C89848630D4000016F6312001A3B2350-0a441e9f67c3775d2daaad43ae43d22c",
	"appId": "5002",
	"smid": "",
	"lcid": "2052",
	"byPass": "3",
	"sdid": "85188935",
	"requestId": "85207448",
	"data": {
		"userName": "18519203764",
		"password": "fbb0f83ad36de0d58728e065b2ccf9ddf4b85f1e",
		"domainList": "",
		"remember": "1",
		"behavior": encodeURIComponent(`[{"page.login":"0.076"},{"button.UDBSdkLogin":"26.674,239,261"},{"input.l.account":"26.677"},{"button.UDBSdkLogin":"27.242,249,243"},{"input.l.account":"27.243"},{"input.l.account":"62.131"},{"button.UDBSdkLogin":"62.242,257,223"},{"input.l.account":"62.243"},{"input.l.account":"76.596"},{"button.UDBSdkLogin":"78.587,255,249"},{"input.l.account":"78.588"},{"input.l.account":"79.159"},{"input.l.passwd":"84.689"},{"button.UDBSdkLogin":"97.221,286,224"}]`),
		"randomStr": "",
		"page": "https://www.huya.com/"
	}
}

export default function test () {
    passwordLogin(d, {
			context: d.context
		}).then(res => {
        console.log(res);
    });
}