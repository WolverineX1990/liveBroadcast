export default {
  generate32() {
    var a = new Date(1582,10,15,0,0,0,0)
      , b = new Date
      , c = b.getTime() - a.getTime()
      , d = ""
      , e = this.generateBits(c, 0, 31)
      , f = this.generateBits(c, 32, 47)
      , g = this.generateBits(c, 48, 59) + "1"
      , h = this.generateBits(this.rand(4095), 0, 7)
      , i = this.generateBits(this.rand(4095), 0, 7)
      , j = this.generateBits(this.rand(8191), 0, 7) + this.generateBits(this.rand(8191), 8, 15) + this.generateBits(this.rand(8191), 0, 7) + this.generateBits(this.rand(8191), 8, 15) + this.generateBits(this.rand(8191), 0, 15);
    return e + d + f + d + g + d + h + i + d + j
  },
  generateBits(a, b, c) {
    var d = this.returnBase(a, 16)
      , e = new Array
      , f = ""
      , g = 0;
    for (g = 0; g < d.length; g++)
        e.push(d.substring(g, g + 1));
    for (g = Math.floor(b / 4); g <= Math.floor(c / 4); g++)
        f += e[g] && "" != e[g] ? e[g] : "0";
    return f
  },
  returnBase(a, b) {
    var c = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if (b > a)
        var d = c[a];
    else {
        var e = Math.floor(a / b)
          , f = a - e * b;
        if (e >= b)
            var d = this.returnBase(e, b) + c[f];
        else
            var d = c[e] + c[f]
    }
    return d
  },
  rand(a) {
      return Math.floor(Math.random() * a)
  }
};