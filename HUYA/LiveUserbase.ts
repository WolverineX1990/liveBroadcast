import LiveAppUAEx from './LiveAppUAEx';

class LiveUserbase {
  eSource = 0
  eType = 0
  tUAEx = new LiveAppUAEx()
  writeTo (t) {
    t.writeInt32(0, this.eSource);
    t.writeInt32(1, this.eType);
    t.writeStruct(2, this.tUAEx)
  }
}

export default LiveUserbase;