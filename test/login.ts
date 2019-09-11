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
		"behavior": "%5B%7B%22page.login%22%3A%220.125%22%7D%2C%7B%22input.l.account%22%3A%228.39%22%7D%2C%7B%22input.l.passwd%22%3A%2213.332%22%7D%2C%7B%22button.UDBSdkLogin%22%3A%2218.573%2C220%2C237%22%7D%5D",
		"randomStr": "",
		"page": "https://www.huya.com/19622208"
	}
}

export default function test () {
    passwordLogin(d).then(res => {
        console.log(res);
    });
}