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

export function guid(e) {
	var t = new Date;
	return e && 1 == e ? Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()) - Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0) : e && 2 == e ? Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()) : "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
			var t = 16 * Math.random() | 0
				, o = "x" == e ? t : 3 & t | 8;
			return o.toString(16)
	})
}

export function uuid(len, radix) {
	var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	var uuid = [],
			i;
	radix = radix || chars.length;

	if (len) {
			// Compact form
			for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
	} else {
			// rfc4122, version 4 form
			var r;

			// rfc4122 requires these characters
			uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
			uuid[14] = '4';

			// Fill in random data.  At i==19 set the high bits of clock sequence as
			// per rfc4122, sec. 4.1.5
			for (i = 0; i < 36; i++) {
					if (!uuid[i]) {
							r = 0 | Math.random() * 16;
							uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
					}
			}
	}

	return uuid.join('');
}