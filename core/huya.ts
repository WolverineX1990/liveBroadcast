const huya = require('./../lib/HUYA');

huya.VideoGatewayProxy2VGPingReq = function() {
  this.lLocalTime = 0
}
huya.VideoGatewayProxy2VGPingReq.prototype._clone = function() {
  return new huya.VideoGatewayProxy2VGPingReq
}
huya.VideoGatewayProxy2VGPingReq.prototype._write = function(e, t, i) {
  e.writeStruct(t, i)
}
huya.VideoGatewayProxy2VGPingReq.prototype._read = function(e, t, i) {
  return e.readStruct(t, !0, i)
}
huya.VideoGatewayProxy2VGPingReq.prototype.writeTo = function(e) {
  e.writeInt64(0, this.lLocalTime)
}
huya.VideoGatewayProxy2VGPingReq.prototype.readFrom = function(e) {
  this.lLocalTime = e.readInt64(0, !1, this.lLocalTime)
}
huya.VideoGatewayProxy2VGPingRsp = function() {
  this.lLocalTime = 0
}
huya.VideoGatewayProxy2VGPingRsp.prototype._clone = function() {
  return new huya.VideoGatewayProxy2VGPingRsp
}
huya.VideoGatewayProxy2VGPingRsp.prototype._write = function(e, t, i) {
  e.writeStruct(t, i)
}
huya.VideoGatewayProxy2VGPingRsp.prototype._read = function(e, t, i) {
  return e.readStruct(t, !0, i)
}
huya.VideoGatewayProxy2VGPingRsp.prototype.writeTo = function(e) {
  e.writeInt64(0, this.lLocalTime)
}
huya.VideoGatewayProxy2VGPingRsp.prototype.readFrom = function(e) {
  this.lLocalTime = e.readInt64(0, !1, this.lLocalTime)
}

export default huya;