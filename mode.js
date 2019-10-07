(window.webpackJsonp = window.webpackJsonp || []).push([[205], {
  232: function(e, t, n) {
      "use strict";
      var i = n(6)
        , o = n(0)
        , a = n(3)
        , s = n(2)
        , r = "ON" == s.a.state;
      function u() {
          var e = $.extend(this, new i.a);
          e.state = 0,
          e.payRoomMsg = {
              price: 0,
              total: 0
          },
          e.freeTime = 0,
          e.inGroup = !1,
          e.initialize.apply(e, arguments)
      }
      u.prototype = {
          initialize: function() {
              var e = this;
              s.a.isPayRoom && e.getRoomMsg(function() {
                  e.emit("update")
              }),
              e.listener()
          },
          getRoomMsg: function(e) {
              var t, n = this;
              $.when((t = new $.Deferred,
              o.a.isH5 && o.a.ready(function(e) {
                  var n = new HUYA.EnterPayLiveRoomReq;
                  n.tId = e.userId,
                  n.lPid = a.a.lp,
                  e.sendWup2("wupui", "enterPayLiveRoom", n, function(e) {
                      t.resolve(e)
                  })
              }),
              t.promise())).done(function(t) {
                  var i = "slive:" + a.a.lp + "-" + t.sPassword;
                  0 != t.eStatus && n.inGroup != i && t.sPassword && (n.inGroup = i,
                  o.a.ready(function(e) {
                      e.registerGroup(i)
                  })),
                  n.state = r ? t.eStatus : 0,
                  0 != n.state ? new $.Deferred(function(e) {
                      o.a.isH5 && o.a.ready(function(t) {
                          var n = new HUYA.GetPayLiveRoomInfoReq;
                          n.tId = t.userId,
                          n.lPid = a.a.lp,
                          t.sendWup2("wupui", "getPayLiveRoomInfo", n, function(t) {
                              e.resolve(t)
                          })
                      })
                  }
                  ).promise().done(function(i) {
                      n.payRoomMsg = i,
                      n.freeTime = t.lRemainingSecond,
                      e && e()
                  }) : e && e()
              })
          },
          pay: function() {
              var e, t = this;
              $.when((e = new $.Deferred,
              o.a.isH5 && o.a.ready(function(t) {
                  var n = new HUYA.SubscribePayLiveRoomReq;
                  n.tId = t.userId,
                  n.lPid = a.a.lp,
                  t.sendWup2("wupui", "subscribePayLiveRoom", n, function(t) {
                      e.resolve(t)
                  })
              }),
              e.promise())).done(function(e) {
                  5 == e.eStatus ? (t.state = 0,
                  t.emit("update:free")) : t.emit("notice:pay", e)
              })
          },
          paySuccess: function() {
              var e = this;
              e.getRoomMsg(function() {
                  e.emit("update")
              })
          },
          stateChange: function(e) {
              var t = this;
              TT.getUserInfo(function(n) {
                  a.a.lp == e.lPid && n.uid == e.lUid && t.getRoomMsg(function() {
                      t.emit("update")
                  })
              })
          },
          listener: function() {
              var e = this;
              o.a.isH5 && o.a.ready(function(t) {
                  t.addTafListener("1033001", function(t) {
                      e.stateChange(t)
                  }),
                  t.addTafListener("8000", function(t) {
                      r || (r = !0,
                      e.getRoomMsg(function() {
                          e.emit("update")
                      }))
                  }),
                  t.addTafListener("8001", function(t) {
                      r = !1,
                      e.state = 0,
                      e.emit("update")
                  })
              })
          }
      },
      u.prototype.constructor = u;
      var d = new u;
      t.a = d
  }
}]);
