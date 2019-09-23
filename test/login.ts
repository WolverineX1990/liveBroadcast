import { passwordLogin } from './../api/service';

let d = {"uri":"30001","version":"2.4","context":"WB-333c3fbef74b490a9884299ce45b22af-C89A216FBA8000019D178B2115D31A2B-0e74aecefc547f5deeda4d3d4e3da497","appId":"5002","smid":"","lcid":"2052","byPass":"3","sdid":"39295108","requestId":"39317654","data":{"userName":"18519203764","password":"fbb0f83ad36de0d58728e065b2ccf9ddf4b85f1e","domainList":"","remember":"1","behavior":"%5B%7B%22page.login%22%3A%220.049%22%7D%2C%7B%22input.l.account%22%3A%2213.74%22%7D%2C%7B%22input.l.passwd%22%3A%2217.236%22%7D%2C%7B%22button.UDBSdkLogin%22%3A%2222.563%2C178%2C229%22%7D%5D","randomStr":"","page":"https://i.huya.com/"}};

export default function test () {
    passwordLogin(JSON.stringify(d)).then(res => console.log(res))
}