const HUYA = require('./../lib/HUYA');
let Taf = require('./../lib/Taf');

HUYA.VideoGatewayProxy2VGPingReq = function() {
  this.lLocalTime = 0
}
HUYA.VideoGatewayProxy2VGPingReq.prototype._clone = function() {
  return new HUYA.VideoGatewayProxy2VGPingReq
}
HUYA.VideoGatewayProxy2VGPingReq.prototype._write = function(e, t, i) {
  e.writeStruct(t, i)
}
HUYA.VideoGatewayProxy2VGPingReq.prototype._read = function(e, t, i) {
  return e.readStruct(t, !0, i)
}
HUYA.VideoGatewayProxy2VGPingReq.prototype.writeTo = function(e) {
  e.writeInt64(0, this.lLocalTime)
}
HUYA.VideoGatewayProxy2VGPingReq.prototype.readFrom = function(e) {
  this.lLocalTime = e.readInt64(0, !1, this.lLocalTime)
}
HUYA.VideoGatewayProxy2VGPingRsp = function() {
  this.lLocalTime = 0
}
HUYA.VideoGatewayProxy2VGPingRsp.prototype._clone = function() {
  return new HUYA.VideoGatewayProxy2VGPingRsp
}
HUYA.VideoGatewayProxy2VGPingRsp.prototype._write = function(e, t, i) {
  e.writeStruct(t, i)
}
HUYA.VideoGatewayProxy2VGPingRsp.prototype._read = function(e, t, i) {
  return e.readStruct(t, !0, i)
}
HUYA.VideoGatewayProxy2VGPingRsp.prototype.writeTo = function(e) {
  e.writeInt64(0, this.lLocalTime)
}
HUYA.VideoGatewayProxy2VGPingRsp.prototype.readFrom = function(e) {
  this.lLocalTime = e.readInt64(0, !1, this.lLocalTime)
}

HUYA.GetLivingStreamInfoReq = function() {
  this.tId = new HUYA.UserId,
  this.lTopSid = 0,
  this.lSubSid = 0,
  this.lPresenterUid = 0,
  this.sTraceSource = ""
}
,
HUYA.GetLivingStreamInfoReq.prototype._clone = function() {
  return new HUYA.GetLivingStreamInfoReq
}
,
HUYA.GetLivingStreamInfoReq.prototype._write = function(e, t, i) {
  e.writeStruct(t, i)
}
,
HUYA.GetLivingStreamInfoReq.prototype._read = function(e, t, i) {
  return e.readStruct(t, !0, i)
}
,
HUYA.GetLivingStreamInfoReq.prototype.writeTo = function(e) {
  e.writeStruct(0, this.tId),
  e.writeInt64(1, this.lTopSid),
  e.writeInt64(2, this.lSubSid),
  e.writeInt64(3, this.lPresenterUid),
  e.writeString(4, this.sTraceSource)
}
,
HUYA.GetLivingStreamInfoReq.prototype.readFrom = function(e) {
  this.tId = e.readStruct(0, !1, this.tId),
  this.lTopSid = e.readInt64(1, !1, this.lTopSid),
  this.lSubSid = e.readInt64(2, !1, this.lSubSid),
  this.lPresenterUid = e.readInt64(3, !1, this.lPresenterUid),
  this.sTraceSource = e.readString(4, !1, this.sTraceSource)
}
,
HUYA.GetLivingStreamInfoRsp = function() {
  this.bIsLiving = 0,
  this.tNotice = new HUYA.LivingStreamInfoNotice,
  this.bIsSelfLiving = 0
}
,
HUYA.GetLivingStreamInfoRsp.prototype._clone = function() {
  return new HUYA.GetLivingStreamInfoRsp
}
,
HUYA.GetLivingStreamInfoRsp.prototype._write = function(e, t, i) {
  e.writeStruct(t, i)
}
,
HUYA.GetLivingStreamInfoRsp.prototype._read = function(e, t, i) {
  return e.readStruct(t, !0, i)
}
,
HUYA.GetLivingStreamInfoRsp.prototype.writeTo = function(e) {
  e.writeInt32(0, this.bIsLiving),
  e.writeStruct(1, this.tNotice),
  e.writeInt32(2, this.bIsSelfLiving)
}
,
HUYA.GetLivingStreamInfoRsp.prototype.readFrom = function(e) {
  this.bIsLiving = e.readInt32(0, !1, this.bIsLiving),
  this.tNotice = e.readStruct(1, !1, this.tNotice),
  this.bIsSelfLiving = e.readInt32(2, !1, this.bIsSelfLiving)
}

HUYA.LivingStreamInfoNotice = function() {
  this.lPresenterUid = 0,
  this.lLiveId = 0,
  this.mStreamInfo = new Taf.Map(new Taf.INT32,new HUYA.ClassifiedStreamInfoPack)
}

HUYA.LivingStreamInfoNotice.prototype._clone = function() {
  return new HUYA.LivingStreamInfoNotice
}

HUYA.LivingStreamInfoNotice.prototype._write = function(e, t, i) {
  e.writeStruct(t, i)
}

HUYA.LivingStreamInfoNotice.prototype._read = function(e, t, i) {
  return e.readStruct(t, !0, i)
}

HUYA.LivingStreamInfoNotice.prototype.writeTo = function(e) {
  e.writeInt64(0, this.lPresenterUid),
  e.writeInt64(1, this.lLiveId),
  e.writeMap(2, this.mStreamInfo)
}

HUYA.LivingStreamInfoNotice.prototype.readFrom = function(e) {
  this.lPresenterUid = e.readInt64(0, !1, this.lPresenterUid),
  this.lLiveId = e.readInt64(1, !1, this.lLiveId),
  this.mStreamInfo = e.readMap(2, !1, this.mStreamInfo)
}

HUYA.ClassifiedStreamInfoPack = function() {
  this.iLiveScenarioType = 0,
  this.vStreamInfo = new Taf.Vector(new HUYA.LimitedStreamInfo),
  this.vCdnList = new Taf.Vector(new Taf.STRING),
  this.lLiveId = 0,
  this.sLinkGroupId = "",
  this.mStreamRatioWeb = new Taf.Map(new Taf.STRING,new Taf.INT32),
  this.mStreamRatioPC = new Taf.Map(new Taf.STRING,new Taf.INT32),
  this.mStreamRatioMobile = new Taf.Map(new Taf.STRING,new Taf.INT32)
}

HUYA.ClassifiedStreamInfoPack.prototype._clone = function() {
  return new HUYA.ClassifiedStreamInfoPack
}

HUYA.ClassifiedStreamInfoPack.prototype._write = function(e, t, i) {
  e.writeStruct(t, i)
}

HUYA.ClassifiedStreamInfoPack.prototype._read = function(e, t, i) {
  return e.readStruct(t, !0, i)
}

HUYA.ClassifiedStreamInfoPack.prototype.writeTo = function(e) {
  e.writeInt32(0, this.iLiveScenarioType),
  e.writeVector(1, this.vStreamInfo),
  e.writeVector(2, this.vCdnList),
  e.writeInt64(3, this.lLiveId),
  e.writeString(4, this.sLinkGroupId),
  e.writeMap(5, this.mStreamRatioWeb),
  e.writeMap(6, this.mStreamRatioPC),
  e.writeMap(7, this.mStreamRatioMobile)
}

HUYA.ClassifiedStreamInfoPack.prototype.readFrom = function(e) {
  this.iLiveScenarioType = e.readInt32(0, !1, this.iLiveScenarioType),
  this.vStreamInfo = e.readVector(1, !1, this.vStreamInfo),
  this.vCdnList = e.readVector(2, !1, this.vCdnList),
  this.lLiveId = e.readInt64(3, !1, this.lLiveId),
  this.sLinkGroupId = e.readString(4, !1, this.sLinkGroupId),
  this.mStreamRatioWeb = e.readMap(5, !1, this.mStreamRatioWeb),
  this.mStreamRatioPC = e.readMap(6, !1, this.mStreamRatioPC),
  this.mStreamRatioMobile = e.readMap(7, !1, this.mStreamRatioMobile)
}

HUYA.LimitedStreamInfo = function() {
  this.iVerMin = 0,
  this.iVerMax = 0,
  this.sCdnType = "",
  this.iIsMaster = 0,
  this.lChannelId = 0,
  this.lSubChannelId = 0,
  this.lPresenterUid = 0,
  this.sStreamName = "",
  this.sFlvUrl = "",
  this.sFlvUrlSuffix = "",
  this.sFlvAntiCode = "",
  this.sHlsUrl = "",
  this.sHlsUrlSuffix = "",
  this.sHlsAntiCode = "",
  this.iLineIndex = 0,
  this.iIsMultiStream = 0,
  this.iPCPriorityRate = 0,
  this.iWebPriorityRate = 0,
  this.iMobilePriorityRate = 0,
  this.vFlvIPList = new Taf.Vector(new Taf.STRING),
  this.iIsP2PSupport = 0,
  this.sP2pUrl = "",
  this.sP2pUrlSuffix = "",
  this.sP2pAntiCode = "",
  this.lFreeFlag = 0
}

HUYA.LimitedStreamInfo.prototype._clone = function() {
  return new HUYA.LimitedStreamInfo
}

HUYA.LimitedStreamInfo.prototype._write = function(e, t, i) {
  e.writeStruct(t, i)
}

HUYA.LimitedStreamInfo.prototype._read = function(e, t, i) {
  return e.readStruct(t, !0, i)
}

HUYA.LimitedStreamInfo.prototype.writeTo = function(e) {
  e.writeInt32(0, this.iVerMin),
  e.writeInt32(1, this.iVerMax),
  e.writeString(2, this.sCdnType),
  e.writeInt32(3, this.iIsMaster),
  e.writeInt64(4, this.lChannelId),
  e.writeInt64(5, this.lSubChannelId),
  e.writeInt64(6, this.lPresenterUid),
  e.writeString(7, this.sStreamName),
  e.writeString(8, this.sFlvUrl),
  e.writeString(9, this.sFlvUrlSuffix),
  e.writeString(10, this.sFlvAntiCode),
  e.writeString(11, this.sHlsUrl),
  e.writeString(12, this.sHlsUrlSuffix),
  e.writeString(13, this.sHlsAntiCode),
  e.writeInt32(14, this.iLineIndex),
  e.writeInt32(15, this.iIsMultiStream),
  e.writeInt32(16, this.iPCPriorityRate),
  e.writeInt32(17, this.iWebPriorityRate),
  e.writeInt32(18, this.iMobilePriorityRate),
  e.writeVector(19, this.vFlvIPList),
  e.writeInt32(20, this.iIsP2PSupport),
  e.writeString(21, this.sP2pUrl),
  e.writeString(22, this.sP2pUrlSuffix),
  e.writeString(23, this.sP2pAntiCode),
  e.writeInt64(24, this.lFreeFlag)
}

HUYA.LimitedStreamInfo.prototype.readFrom = function(e) {
  this.iVerMin = e.readInt32(0, !1, this.iVerMin),
  this.iVerMax = e.readInt32(1, !1, this.iVerMax),
  this.sCdnType = e.readString(2, !1, this.sCdnType),
  this.iIsMaster = e.readInt32(3, !1, this.iIsMaster),
  this.lChannelId = e.readInt64(4, !1, this.lChannelId),
  this.lSubChannelId = e.readInt64(5, !1, this.lSubChannelId),
  this.lPresenterUid = e.readInt64(6, !1, this.lPresenterUid),
  this.sStreamName = e.readString(7, !1, this.sStreamName),
  this.sFlvUrl = e.readString(8, !1, this.sFlvUrl),
  this.sFlvUrlSuffix = e.readString(9, !1, this.sFlvUrlSuffix),
  this.sFlvAntiCode = e.readString(10, !1, this.sFlvAntiCode),
  this.sHlsUrl = e.readString(11, !1, this.sHlsUrl),
  this.sHlsUrlSuffix = e.readString(12, !1, this.sHlsUrlSuffix),
  this.sHlsAntiCode = e.readString(13, !1, this.sHlsAntiCode),
  this.iLineIndex = e.readInt32(14, !1, this.iLineIndex),
  this.iIsMultiStream = e.readInt32(15, !1, this.iIsMultiStream),
  this.iPCPriorityRate = e.readInt32(16, !1, this.iPCPriorityRate),
  this.iWebPriorityRate = e.readInt32(17, !1, this.iWebPriorityRate),
  this.iMobilePriorityRate = e.readInt32(18, !1, this.iMobilePriorityRate),
  this.vFlvIPList = e.readVector(19, !1, this.vFlvIPList),
  this.iIsP2PSupport = e.readInt32(20, !1, this.iIsP2PSupport),
  this.sP2pUrl = e.readString(21, !1, this.sP2pUrl),
  this.sP2pUrlSuffix = e.readString(22, !1, this.sP2pUrlSuffix),
  this.sP2pAntiCode = e.readString(23, !1, this.sP2pAntiCode),
  this.lFreeFlag = e.readInt64(24, !1, this.lFreeFlag)
}

HUYA.FaithBadgeItem = function() {
  this.sObtainWay = "";
  this.sFaithName = "";
  this.sFaithContent = "";
  this.vFaithPic = new Taf.Vector(new Taf.STRING);
  this.sActionName = "";
  this.sActionUrl = ""
}

HUYA.FaithBadgeItem.prototype._clone = function() {
  return new HUYA.FaithBadgeItem
}

HUYA.FaithBadgeItem.prototype._write = function(t, e, i) {
  t.writeStruct(e, i)
}

HUYA.FaithBadgeItem.prototype._read = function(t, e, i) {
  return t.readStruct(e, true, i)
}

HUYA.FaithBadgeItem.prototype.writeTo = function(t) {
  t.writeString(0, this.sObtainWay);
  t.writeString(1, this.sFaithName);
  t.writeString(2, this.sFaithContent);
  t.writeVector(3, this.vFaithPic);
  t.writeString(4, this.sActionName);
  t.writeString(5, this.sActionUrl)
}

HUYA.FaithBadgeItem.prototype.readFrom = function(t) {
  this.sObtainWay = t.readString(0, false, this.sObtainWay);
  this.sFaithName = t.readString(1, false, this.sFaithName);
  this.sFaithContent = t.readString(2, false, this.sFaithContent);
  this.vFaithPic = t.readVector(3, false, this.vFaithPic);
  this.sActionName = t.readString(4, false, this.sActionName);
  this.sActionUrl = t.readString(5, false, this.sActionUrl)
}

HUYA.FaithInfo = function() {
  this.sFaithName = "";
  this.vPresenter = new Taf.Vector(new HUYA.FaithPresenter)
}

HUYA.FaithInfo.prototype._clone = function() {
  return new HUYA.FaithInfo
}

HUYA.FaithInfo.prototype._write = function(t, e, i) {
  t.writeStruct(e, i)
}

HUYA.FaithInfo.prototype._read = function(t, e, i) {
  return t.readStruct(e, true, i)
}

HUYA.FaithInfo.prototype.writeTo = function(t) {
  t.writeString(0, this.sFaithName);
  t.writeVector(1, this.vPresenter)
}

HUYA.FaithInfo.prototype.readFrom = function(t) {
  this.sFaithName = t.readString(0, false, this.sFaithName);
  this.vPresenter = t.readVector(1, false, this.vPresenter)
}

HUYA.FaithPresenter = function() {
  this.lPid = 0;
  this.sLogo = ""
}

HUYA.FaithPresenter.prototype._clone = function() {
  return new HUYA.FaithPresenter
}

HUYA.FaithPresenter.prototype._write = function(t, e, i) {
  t.writeStruct(e, i)
}

HUYA.FaithPresenter.prototype._read = function(t, e, i) {
  return t.readStruct(e, true, i)
}

HUYA.FaithPresenter.prototype.writeTo = function(t) {
  t.writeInt64(0, this.lPid);
  t.writeString(1, this.sLogo)
}

HUYA.FaithPresenter.prototype.readFrom = function(t) {
  this.lPid = t.readInt64(0, false, this.lPid);
  this.sLogo = t.readString(1, false, this.sLogo)
}

export default HUYA;