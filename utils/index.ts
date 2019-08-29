import { get as httpGet } from 'http';
import { parse as urlParse } from 'url';

export function getHtml(targetUrl: string) {
	let promise: Promise<Object> = new Promise((resolve, reject) => {
		let param = urlParse(targetUrl);
		let options = {
			host: param.host,
			path: param.path,
			headers: {
				'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
			}
		};
        var req = httpGet(options, function (response) {
		    response.setEncoding('utf-8');  //二进制binary
            let data: string = '';
            // console.log(response.statusCode);
		    response.on('data', function (res) {    //加载到内存
                data += res;
            }).on('end', function () {
                resolve({
                    data: data,
                    cookie: response.headers['set-cookie']
                });
        });
		});
		req.on('error', function(err) {
            reject(err);
        });
	});
	return promise;
}