import { getHtml } from './../utils/index';
import { checkLogin } from './../api/service';

export default function test () {
  checkLogin().then(res => {
    console.log(res);
  });
  // let url = 'https://www.huya.com/19622208';
  // getHtml(url).then(res => {
  //   console.log(res);
  // });
}