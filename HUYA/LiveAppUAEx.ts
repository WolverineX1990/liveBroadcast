class LiveAppUAEx {
  sIMEI = ''
  sAPN = ''
  sNetType = ''
  sDeviceId= ''

  writeTo = function(t) {
    t.writeString(1, this.sIMEI);
    t.writeString(2, this.sAPN);
    t.writeString(3, this.sNetType);
    t.writeString(4, this.sDeviceId)
}
}

export default LiveAppUAEx;