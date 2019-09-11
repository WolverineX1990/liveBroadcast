import { getHtml } from './../utils/index';
import { checkLogin } from './../api/service';
import Cookies from './../core/Cookies';

export default function test () {
  let cookies = new Cookies();
  checkLogin().then(res => {
    cookies.concat(res.cookie);
    console.log(cookies.value);
  });
  // let url = 'https://www.huya.com/19622208';
  // getHtml(url).then(res => {
  //   console.log(res);
  // });
}