class LiveLaunchReq {
  _write = function(t, e, i) {
    t.writeStruct(e, i)
  }

  _read = function(t, e, i) {
    return t.readStruct(e, true, i)
  }

  writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeStruct(1, this.tLiveUB);
    t.writeInt32(2, this.bSupportDomain)
  }

  readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.tLiveUB = t.readStruct(1, false, this.tLiveUB);
    this.bSupportDomain = t.readInt32(2, false, this.bSupportDomain);
  }
}

export default LiveLaunchReq;