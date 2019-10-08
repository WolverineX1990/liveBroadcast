import utils from './../utils/generate32';
import * as fs from 'fs';

const dir = 'temp/'

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

export default class Cookies {
  data: Array<string>= []
  id
  isLogin= false
  constructor (id?) {
    this.id = id;
    if (id && fs.existsSync(dir + id)) {
      let text = fs.readFileSync(dir + id, 'utf8');
      this.data = text.split('\r\n');
      console.log('读取cookie=========')
      this.isLogin = true;
    } else {
      let session =  Math.random();
      let uuid = utils.generate32();
      let sids = encodeURIComponent('__rootsid='+ utils.generate32());
      this.data.push(`__yasmid=${session}; path=/`);
      this.data.push(`__yamid_tt1=${session}; path=/`);
      this.data.push(`__yamid_new=${uuid}; path=/`);
      this.data.push(`_yasids=${sids}; path=/`);
      this.data.push('isInLiveRoom=true;');
      // if (id) {
      //   fs.writeFileSync(dir + id, this.data.join('\r\n'));
      // }
    }
  }

  get cookie () {
    return this.data.join(';')
  }

  get value() {
    return this.data.map(str =>str.split(';')[0]).join(';');
  }

  add (value) {
    this.data.push(value);
    if (this.id) {
      fs.writeFileSync(dir + this.id, this.data.join('\r\n'));
    }
  }

  concat (arr) {
    this.data = this.data.concat(arr);
    if (this.id) {
      fs.writeFileSync(dir + this.id, this.data.join('\r\n'));
    }
  }

  getCookie (key) {
    let strs = this.data.filter(res => {
      return res.startsWith(key);
    });
    if (strs.length) {
      let str = strs[0].split(';')[0]
      return str.split('=')[1];
    }
    return '';
  }

  clear () {
    this.data = [];
    this.isLogin = false;
    if (this.id) {
      fs.writeFileSync(dir + this.id, '');
    }
  }
} 