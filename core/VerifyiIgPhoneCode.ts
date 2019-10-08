import { sendPhone, getCodeByPhone } from './../api/service';

export default class VerifyiIgPhoneCode {
  _phone
  _fun
  constructor(phone, fun) {
    this._phone = phone;
    this._fun = fun;
    this.start();
  }

  sendPhone() {
    return sendPhone(this._phone);
  }

  start() {
    this.sendPhone().then(res => this.polling())
  }

  pollSuc(captchaCode) {
    
    // verifyiIgCaptcha(JSON.stringify({
    //   data: {
    //       captchaID: this.captchaID,
    //       captchaCode,
    //       urlParamMap: paseData(this._info.data)
    //   }
    // })).then(res => {
    //     let data = JSON.parse(res);
    //     if (!data.returnCode) {
    //       if (data.data.nextAction == 2) {
    //         console.log(data);
    //       } else {
    //         console.log(data);
            
    //       }
    //     } else {
    //       this.start();
    //     }
    // })
  }

  polling() {
    getCodeByPhone(this._phone).then(res => {
        let msg = JSON.parse(res).msg;
        if (!msg) {
            console.log('polling')
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