import * as http from 'request';

export function request (options) {
  let promise: Promise<any> = new Promise(function(resolve, reject){
    http(options, function(error, response, body) {
			if (error) {
        reject(error)
      } else {
        if (options.getCookies) {
          resolve({
            data: body,
            cookies: response
          });
        } else {
          resolve(body);
        }
        
      }
	  });
  });

  return promise;
}