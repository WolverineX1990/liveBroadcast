class BinBuffer {
  buf = null
  len = 0
  position = 0
  vew= null
  constructor (t?: any) {
    if (t && t instanceof BinBuffer) {
      this.buf = t.buf;
      this.len = t.len;
      this.position = t.position
    }

    if (t && t instanceof ArrayBuffer) {
      this.buf = t;
      this.vew = new DataView(this.buf);
      this.len = this.vew.byteLength;
      this.position = 0
    }
  }

  get length() {
    return this.len;
  }

  get buffer() {
    return this.buf;
  }

  getBuffer() {
    var t = new ArrayBuffer(this.len);
    new Uint8Array(t).set(new Uint8Array(this.buf,0,this.len));
    return t;
  }

  writeUInt32 (t) {
    this.allocate(4);
    this.vew.setUint32(this.position, t);
    this.position += 4;
    this.len = this.position
  }

  writeString (t) {
    for (var e = [], i = 0; i < t.length; i++) {
        e.push(t.charCodeAt(i) & 255)
    }
    this.allocate(e.length);
    new Uint8Array(this.buf).set(new Uint8Array(e), this.position);
    this.position += e.length;
    this.len = this.position
  }

  _write (t, e, i) {
    return t.writeBytes(e, i)
  }

  writeInt16 = function(t) {
    this.allocate(2);
    this.vew.setInt16(this.position, t);
    this.position += 2;
    this.len = this.position
  }

  writeUInt8(t) {
    this.allocate(1);
    this.vew.setUint8(this.position++, t);
    this.len = this.position;
  }

  writeUInt16(t) {
    this.allocate(2);
    this.vew.setUint16(this.position, t);
    this.position += 2;
    this.len = this.position;
  }

  writeInt32 (t) {
    this.allocate(4);
    this.vew.setInt32(this.position, t);
    this.position += 4;
    this.len = this.position
  }

  writeInt8 (t) {
    this.allocate(1);
    this.vew.setInt8(this.position, t);
    this.position += 1;
    this.len = this.position
}

  writeBytes(t) {
    if (t.length == 0 || t.buf == null)
        return;
    this.allocate(t.length);
    new Uint8Array(this.buf).set(new Uint8Array(t.buf,0,t.length), this.position);
    this.position += t.length;
    this.len = this.position
}

  allocate(t) {
    t = this.position + t;
    if (this.buf != null && this.buf.length > t) {
        return
    }
    var e = new ArrayBuffer(Math.max(256, t * 2));
    if (this.buf != null) {
      try {
        new Uint8Array(e).set(new Uint8Array(this.buf));
        this.buf = undefined; 
      } catch (error) {
        new Uint8Array(e).set(new Uint8Array(this.buf));
        this.buf = undefined;
      }
    }
    this.buf = e;
    this.vew = undefined;
    this.vew = new DataView(this.buf)
}
}

export default BinBuffer;