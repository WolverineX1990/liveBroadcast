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
    this.value[t] = e
  }

  get = function(t) {
    return this.value[t]
  }
}

export default Map;