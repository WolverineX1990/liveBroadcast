const Taf = require('./../lib/Taf');
import { toBuffer } from './../utils/buffer';

export default class WupHandler {
  wup = new Taf.Wup()

  getBuffer (className, funName, tReg) {
    this.wup.setServant(className);
    this.wup.setFunc(funName);
    this.wup.writeStruct('tReq', tReg);
    let buf = this.wup.encode().getBuffer();
    return toBuffer(buf);
  }
}