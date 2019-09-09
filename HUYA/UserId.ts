class UserId {
  lUid = 0
  sGuid = ''
  sToken = ''
  sHuYaUA = ''
  sCookie = ''
  iTokenType = 0

  writeTo (t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sGuid);
    t.writeString(2, this.sToken);
    t.writeString(3, this.sHuYaUA);
    t.writeString(4, this.sCookie);
    t.writeInt32(5, this.iTokenType)
  }
}

export default UserId;