import { getHtml } from './../utils/index'

export default function test () {
  let url = 'https://www.huya.com/19622208';
  getHtml(url).then(res => {
    console.log(res);
  });
}