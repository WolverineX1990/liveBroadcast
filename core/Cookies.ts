import utils from './../utils/generate32';

export default class Cookies {
  data: Array<string>= [];
  constructor () {
    // let session =  Math.random();
    // let uuid = utils.generate32();
    // let sids = encodeURIComponent('__rootsid='+ utils.generate32());
    // this.add(`__yasmid=${session}; path=/`);
    // this.add(`__yamid_tt1=${session}; path=/`);
    // this.add(`__yamid_new=${uuid}; path=/`);
    // this.add(`_yasids=${sids}; path=/`);
  }

  get cookie () {
    return this.data.join(';')
  }

  get value() {
    return this.data.map(str => str.split(';')[0]).join(';');
  }

  add (value) {
    this.data.push(value);
  }

  concat (arr) {
    this.data = this.data.concat(arr);
  }

  getCookie (key) {
    // this.data.filter();

    return '';
  }

  clear () {
    this.data = [];
  }
} 