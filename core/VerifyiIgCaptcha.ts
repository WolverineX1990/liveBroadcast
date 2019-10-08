import { getImgCaptcha, getCodeByPicId, uploadCodeImg, verifyiIgCaptcha } from './../api/service';
import generate from './../utils/generate32';

export default class VerifyiIgCaptcha {
  _picid
  _info
  _fun
  _fun1
  captchaID
  constructor(info, fun, fun1) {
    this._info = info;
    this._fun = fun;
    this._fun1 = fun1;
    this.start();
  }

  getImgCaptcha() {
    return getImgCaptcha(JSON.stringify({
      data: {
          urlParamMap: paseData(this._info.data)
      }
    }));
  }

  start() {
    let that = this;
    this._picid = generate.generate32();
    this.getImgCaptcha().then(res => {
      let catImg = JSON.parse(res).data;
      this.captchaID = catImg.captchaID;
      return uploadCodeImg({ picture: 'data:image/png;base64,' + catImg.buffer, picid: that['_picid'] });
    }).then(res => this.polling())
  }

  pollSuc(captchaCode) {
    verifyiIgCaptcha(JSON.stringify({
      data: {
          captchaID: this.captchaID,
          captchaCode,
          urlParamMap: paseData(this._info.data)
      }
    })).then(res => {
        let data = JSON.parse(res);
        if (!data.returnCode) {
          if (data.data.nextAction == 2) {
            this._fun1();
          } else {
            console.log(data);
            this._fun();
          }
        } else {
          this.start();
        }
    })
  }

  polling() {
    getCodeByPicId({picid: this._picid}).then(res => {
        let msg = JSON.parse(res).msg;
        if (!msg) {
            console.log('polling code');
            setTimeout(() => this.polling(), 3000);
        } else {
            this.pollSuc(msg)
        }
    });
}
}


function paseData(e) {
  var t, a = {};
  if (-1 !== (t = e.indexOf("?")))
      for (var n = e.substring(t + 1, e.length), r = n.split("&"), s = [], o = 0, i = r.length; i > o; o++)
          s = r[o].split("="),
          a[s[0]] = s[1];
  return a
}