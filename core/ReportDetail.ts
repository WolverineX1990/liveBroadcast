const HUYA = require('./../lib/HUYA');
const Taf = require('./../lib/Taf');
import { toBuffer } from './../utils/buffer';
import { reportDetail } from './../api/service';
import ENV from './../const/ENV';

export default class ReportDetail {
  k = 0
  N = 0
  L = 0
  E = 0
  reportDetailV2 (userId) {
    return;
    let t = [{
      sMetricName: "web.danmu_p2p_count",
      vField: {
          danmuCount: this.k,
          danmuRepeat: this.N,
          danmuP2PCount: this.L,
          danmuP2PRepect: this.E
      },
      vDimension: {
          server_danmu_p2p: 0,
          danmu_type: 2
      }
    }];

    var e = new HUYA.MetricDetailSet;
    e.tId = userId;
    var i = Date.now();
    for (var r in t) {
        e.vMetricDetail.value.push(V(t[r], i))
    }

    let wup = new Taf.Wup;
    wup.setServant('metric');
    wup.setFunc('reportDetailV2');
    wup.writeStruct("tReq", e);
    let buf = wup.encode().getBuffer();
    reportDetail(toBuffer(buf)).then(res => {
      console.log(res);
    });
  }
}

function V(t, e) {
  var i = new HUYA.MetricDetail;
  i.sMetricName = t.sMetricName;
  i.iTS = e;
  q(t.vField, i.vFiled.value);
  W(t.vDimension, i.vDimension.value);
  z(t.vExLog, i.vExLog.value);
  return i
}

function q(t, e) {
  if (t) {
      for (var i in t) {
          var r = new HUYA.Field;
          r.sName = i;
          r.fValue = t[i];
          e.push(r)
      }
  }
}
function W(t, e) {
  // var i = G.getCurBitRate();
  // if (i == 0 || i == G.appid) {
  //     i = G.SrcBitRate
  // }
  var r = {
      // anchoruid: G.presenterUid,
      // line: G.videoLine,
      // coderate: i,
      // coderatebps: i * 1e3,
      h265: 0,
      // gameId: G.gameId,
      // p2p: G.isP2pPlayIng ? 1 : 0,
      place: 1
  };
  // Object.assign(r, j(), t);
  O(r, e)
}
function O(t, e) {
  for (var i in t) {
      var r = new HUYA.Dimension;
      r.sName = i;
      r.sValue = t[i];
      e.push(r)
  }
}
function z(t, e) {
  // // var i = j();
  // Object.assign(i, t);
  // O(i, e)
}