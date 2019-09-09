import UserId from './UserId';
import LiveUserbase from './LiveUserbase';

class LiveLaunchReq {
  tId
  tLiveUB
  bSupportDomain = 0
  constructor () {
    this.tId = new UserId();
    this.tLiveUB = new LiveUserbase();
  }
  _write (t, e, i) {
    t.writeStruct(e, i)
  }

  _read (t, e, i) {
    return t.readStruct(e, true, i)
  }

  writeTo (t) {
    t.writeStruct(0, this.tId);
    t.writeStruct(1, this.tLiveUB);
    t.writeInt32(2, this.bSupportDomain)
  }
}

export default LiveLaunchReq;