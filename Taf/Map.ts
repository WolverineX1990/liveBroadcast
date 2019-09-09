class Map {
  kproto
  vproto
  value
  constructor (t, e) {
    this.kproto = t;
    this.vproto = e;
    this.value = new Object();
  }

  put(t, e) {
    this.value[t] = e;
  }

  get = function(t) {
    return this.value[t];
  }

  clear() {
    this.value = new Object();
  }

  remove (t) {
    delete this.value[t];
  }

  size() {
    var t = 0;
    for (var e in this.value) {
        t++
    }
    return t
  }
}

export default Map;