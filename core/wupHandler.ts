const Taf = require('./../lib/Taf');
const HUYA = require('./../lib/HUYA');
import { toBuffer } from './../utils/buffer';

export default class WupHandler {
  wup = new Taf.Wup()
  requestId = -1
  constructor (className, funName, tReg, requestId?) {
    this.wup.setServant(className);
    this.wup.setFunc(funName);
    this.wup.writeStruct('tReq', tReg);
    if (requestId) {
      this.requestId = requestId;
    }
  }

  get wsBuffer () {
    this.wup.setRequestId(this.requestId);
    let wsCommand = new HUYA.WebSocketCommand();
    wsCommand.iCmdType = HUYA.EWebSocketCommandType.EWSCmd_WupReq;
    wsCommand.vData = this.wup.encode();
    let stream = new Taf.JceOutputStream();
    wsCommand.writeTo(stream);
    let buf = stream.getBuffer();
    return toBuffer(buf);
  }

  get buffer () {
    let buf = this.wup.encode().getBuffer();
    return toBuffer(buf)
  }
}