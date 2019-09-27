const Taf = require('./../lib/Taf');
const HUYA = require('./../lib/HUYA');
import Wss from './wss';
import dataParse from './dataParse';

export default class VCore {
  private eventsMap:any= {}
  private _userId: any
  private wss: Wss
  constructor () {
    let hosts = [
      '7cec1711-ws.va.huya.com',
      '7cefe854-ws.va.huya.com',
      '7cec170f-ws.va.huya.com',
      '7cefe84d-ws.va.huya.com',
      '7cec1713-ws.va.huya.com' 
    ];
    this.wss = new Wss(hosts[2]);
    // this.wsStart();
  }
  set userId (user) {
    this._userId = user;
  }

  get userId() {
    return this._userId;
  }

  addListener(eventName, fun) {
    if (typeof this.eventsMap[eventName] === "undefined") {
      this.eventsMap[eventName] = [];
    }
    if (typeof fun === "function") {
        var i = this.eventsMap[eventName];
        for (var r = 0, n = i.length; r < n; r++) {
            if (i[r] === fun)
                return this
        }
        i.push(fun)
    }
    return this
  }

  dispatch (eventName, args?) {
    var r = this.eventsMap[eventName];
    if (r instanceof Array) {
        for (var n = 0, s = r.length; n < s; n++) {
            var o = r[n];
            if (typeof o === "function") {
                o(args)
            }
        }
        if (r.length == 0) {}
    } else {}
    return this
  }

  removeListener (eventName, fun) {
    var i = this.eventsMap[eventName];
    if (i instanceof Array) {
        if (typeof fun === "function") {
            for (var r = 0, n = i.length; r < n; r++) {
                if (i[r] === fun) {
                    i.splice(r, 1);
                    break
                }
            }
            if (i.length == 0) {
                delete this.eventsMap[eventName]
            }
        } else if (fun=== undefined || fun === null) {
            delete this.eventsMap[eventName]
        }
    }
    return this;
  }

  sendWup(t, e, i, r, n) {
    // if (r == undefined  /**&&G.needTokenWup[e]**/) {
    //     b(t, e, i);
    //     return
    // }
    if (r) {
        this._userId.sToken = r;
    }
    if (i && i.tId) {
        i.tId = this.userId;
    }
    if (false) {
        console.log("%c>>>>>>> %creqWup: %c", t, i)
    }
    var s = new Taf.Wup();
    s.setServant(t);
    s.setFunc(e);
    s.writeStruct("tReq", i);
    if (n == undefined) {
        n = -1
    }
    s.setRequestId(n);
    var l = new HUYA.WebSocketCommand;
    l.iCmdType = HUYA.EWebSocketCommandType.EWSCmd_WupReq;
    l.vData = s.encode();
    var stream = new Taf.JceOutputStream();
    l.writeTo(stream);
    this.wss.sendBuf(stream.getBuffer());
  }

  sendWup2 (e, i, r, n?, s?, o?) {
    let that = this;
    if (typeof n === "function") {
        var l = function(r) {
            n(r);
            if (s || s == undefined) {
                that.removeListener(o > 0 ? i + o : i, l)
            }
        };
        this.addListener(o > 0 ? i + o : i, l);
    }
    this.sendWup(e, i, r, null, o)
  }

  sendRegisterGroup (t) {
    console.log('sendRegisterGroup');
    var e = new Taf.JceOutputStream();
    t.writeTo(e);
    var i = new HUYA.WebSocketCommand;
    i.iCmdType = HUYA.EWebSocketCommandType.EWSCmdC2S_RegisterGroupReq;
    i.vData = e.getBinBuffer();
    let stream = new Taf.JceOutputStream;
    i.writeTo(e);
    console.log(stream.getBuffer())
    this.wss.sendBuf(stream.getBuffer());
  }

  wsStart() {
    this.wss.start(() => {
      this.dispatch("WEBSOCKET_CONNECTED");
    }, (data) => {
      dataParse(data, this);
    }, () => {
      console.log('===================scoket close=====================');
    });
  }
}