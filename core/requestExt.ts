import * as http from 'request';

export function request (options) {
  let promise: Promise<any> = new Promise(function(resolve, reject){
    http(options, function(error, response, body) {
			if (error) {
        reject(error)
      } else {
        resolve(body);
      }
	  });
  });

  return promise;
}