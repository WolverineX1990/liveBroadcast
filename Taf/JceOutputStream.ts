import BinBuffer from './BinBuffer';
import DataHelp from './DataHelp';

class JceOutputStream {
  buf: BinBuffer= new BinBuffer();
  writeStruct(t, e) {
    if (e.writeTo == undefined) {
        throw Error("not defined writeTo Function")
    }
    this.writeTo(t, DataHelp.EN_STRUCTBEGIN);
    e.writeTo(this);
    this.writeTo(0, DataHelp.EN_STRUCTEND)
  }

  writeString = function(t, e) {
    var i = e;
    try {
        i = unescape(encodeURIComponent(i))
    } catch (t) {}
    if (i.length > 255) {
        this.writeTo(t, DataHelp.EN_STRING4);
        this.buf.writeUInt32(i.length)
    } else {
        this.writeTo(t, DataHelp.EN_STRING1);
        this.buf.writeUInt8(i.length)
    }
    this.buf.writeString(i)
  }

  writeBytes = function(t, e: BinBuffer) {
    this.writeTo(t, DataHelp.EN_SIMPLELIST);
    this.writeTo(0, DataHelp.EN_INT8);
    this.writeInt32(0, e.len);
    this.buf.writeBytes(e)
}

  getBinBuffer() {
    return this.buf;
  }

  getBuffer() {
    return this.buf.getBuffer()
  }

  writeTo (t, e) {
    if (t < 15) {
        this.buf.writeUInt8(t << 4 & 240 | e)
    } else {
        this.buf.writeUInt16((240 | e) << 8 | t)
    }
  }

  writeMap (t, e) {
    this.writeTo(t, DataHelp.EN_MAP);
    this.writeInt32(0, e.size());
    for (var i in e.value) {
        e.kproto._write(this, 0, i);
        e.vproto._write(this, 1, e.value[i])
    }
  }

  writeInt32 (t, e) {
    if (e >= -32768 && e <= 32767) {
        this.writeInt16(t, e)
    } else {
        this.writeTo(t, DataHelp.EN_INT32);
        this.buf.writeInt32(e)
    }
  }

  writeInt16 (t, e) {
    if (e >= -128 && e <= 127) {
        this.writeInt8(t, e)
    } else {
        this.writeTo(t, DataHelp.EN_INT16);
        this.buf.writeInt16(e)
    }
  }

  writeInt8 (t, e) {
    if (e == 0) {
        this.writeTo(t, DataHelp.EN_ZERO)
    } else {
        this.writeTo(t, DataHelp.EN_INT8);
        this.buf.writeInt8(e)
    }
}

  writeUInt32(t, e) {
    this.writeInt64(t, e)
  }

  writeInt64 = function(t, e) {
    if (e >= -2147483648 && e <= 2147483647) {
        this.writeInt32(t, e)
    } else {
        this.writeTo(t, DataHelp.EN_INT64);
        this.buf.writeInt64(e)
    }
  }
}

export default JceOutputStream;