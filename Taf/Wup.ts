import JceOutputStream from './JceOutputStream';
import BinBuffer from './BinBuffer';
import Map from './Map';
import STRING from './STRING';

class Wup {
  iVersion= 3
  // cPacketType: 0
  // iMessageType: 0
  // iRequestId: 0
  sServantName= ''
  sFuncName= ''
  sBuffer= new BinBuffer()
  // iTimeout: 0
  context= new Map(new STRING(), new STRING())
  status= new Map(new STRING(), new STRING())
  data= new Map(new STRING,new Map(new STRING, new BinBuffer))
  newdata= new Map(new STRING(),new BinBuffer ())
  constructor() {
    
  }

  setServant(t) {
    this.sServantName = t
  }

  setFunc(t) {
    this.sFuncName = t
  }

  writeStruct (t, e) {
    let i: JceOutputStream = new JceOutputStream();
    i.writeStruct(0, e);
    if (this.iVersion == 3) {
        this.newdata.put(t, new BinBuffer(i.getBuffer()))
    } else {
        var r = this.data.get(t);
        var n = " ";
        if (r == undefined) {
            var s = new Map(STRING, STRING);
            r = s
        }
        r.put(n, new Uint8Array(i.getBuffer()));
        this.data.put(t, r)
    }
  }

  encode () {
    var t = new JceOutputStream();
    if (this.iVersion == 3) {
        t.writeMap(0, this.newdata)
    } else {
        t.writeMap(0, this.data)
    }
    this.sBuffer = t.getBinBuffer();
    var e = new BinBuffer();
    e = this.writeTo();
    // console.log('e', e)
    var i = new BinBuffer();
    i.writeInt32(4 + e.len);
    i.writeBytes(e);
    return i;
  }

  writeTo = function() {
    let t: JceOutputStream = new JceOutputStream();
    t.writeInt16(1, this.iVersion);
    t.writeInt8(2, this.cPacketType);
    t.writeInt32(3, this.iMessageType);
    t.writeInt32(4, this.iRequestId);
    t.writeString(5, this.sServantName);
    t.writeString(6, this.sFuncName);
    t.writeBytes(7, this.sBuffer);
    t.writeInt32(8, this.iTimeout);
    t.writeMap(9, this.context);
    t.writeMap(10, this.status);
    return new BinBuffer(t.getBuffer())
  }
}

export default Wup;