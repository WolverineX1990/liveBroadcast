import { passwordLogin, getImgCaptcha, getCodeByPicId, uploadCodeImg, verifyiIgCaptcha } from './../api/service';
import sha1 from './../core/sha1';
import userJson from './../const/userJson';
// import baiduClient from './../core/baiduApi';
var fs = require('fs');
// var images = require("images");
// const Tesseract = require('tesseract.js');
import generate from './../utils/generate32';
import VerifyiIgCaptcha from './../core/VerifyiIgCaptcha';

export default function test () {
    userJson.data.userName = '15063608061';
    userJson.data.password = sha1('hy15063608061');
    // images("a.png").size(400).save('./b.png');

    // Tesseract.recognize('./c.png', {
    //     lang: 'eng',
    //     tessedit_char_blacklist: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    // }).then((res, res1) => console.log(res.text))
    // var image = fs.readFileSync("./a.png").toString("base64");
    // baiduClient.generalBasic(image).then(function(result) {
    //     console.log(JSON.stringify(result));
    // }).catch(function(err) {
    //     // 如果发生网络错误
    //     console.log(err);
    // });
    // return;

    // return;
    passwordLogin(JSON.stringify(userJson)).then(res => {
        let data = JSON.parse(res.data);
        console.log(data)

        if (data.returnCode) {
            let info = data.data.strategys[0];
            console.log(info)
            // var d = new VerifyiIgCaptcha(info, () => {
            //     console.log(1)
            // });
        }
    });
}

function polling(picid, func) {
    getCodeByPicId({picid}).then(res => {
        let msg = JSON.parse(res).msg;
        if (!msg) {
            console.log('polling')
            setTimeout(() => polling(picid, func), 3000);
        } else {
            func(msg)
        }
    });
}

function paseData(e) {
    var t, a = {};
    if (-1 !== (t = e.indexOf("?")))
        for (var n = e.substring(t + 1, e.length), r = n.split("&"), s = [], o = 0, i = r.length; i > o; o++)
            s = r[o].split("="),
            a[s[0]] = s[1];
    return a
}