let HUYA = {};

let Taf = require('./Taf');

HUYA.EWebSocketCommandType = {
    EWSCmd_NULL: 0,
    EWSCmd_RegisterReq: 1,
    EWSCmd_RegisterRsp: 2,
    EWSCmd_WupReq: 3,
    EWSCmd_WupRsp: 4,
    EWSCmdC2S_HeartBeat: 5,
    EWSCmdS2C_HeartBeatAck: 6,
    EWSCmdS2C_MsgPushReq: 7,
    EWSCmdC2S_DeregisterReq: 8,
    EWSCmdS2C_DeRegisterRsp: 9,
    EWSCmdC2S_VerifyCookieReq: 10,
    EWSCmdS2C_VerifyCookieRsp: 11,
    EWSCmdC2S_VerifyHuyaTokenReq: 12,
    EWSCmdS2C_VerifyHuyaTokenRsp: 13,
    EWSCmdC2S_UNVerifyReq: 14,
    EWSCmdS2C_UNVerifyRsp: 15,
    EWSCmdC2S_RegisterGroupReq: 16,
    EWSCmdS2C_RegisterGroupRsp: 17,
    EWSCmdC2S_UnRegisterGroupReq: 18,
    EWSCmdS2C_UnRegisterGroupRsp: 19,
    EWSCmdC2S_HeartBeatReq: 20,
    EWSCmdS2C_HeartBeatRsp: 21,
    EWSCmdS2C_MsgPushReq_V2: 22,
    EWSCmdC2S_UpdateUserExpsReq: 23,
    EWSCmdS2C_UpdateUserExpsRsp: 24,
    EWSCmdC2S_WSHistoryMsgReq: 25,
    EWSCmdS2C_WSHistoryMsgRsp: 26,
    EWSCmdS2C_EnterP2P: 27,
    EWSCmdS2C_EnterP2PAck: 28,
    EWSCmdS2C_ExitP2P: 29,
    EWSCmdS2C_ExitP2PAck: 30
};
HUYA.ELiveSource = {
    PC_YY: 0,
    PC_HUYA: 1,
    MOBILE_HUYA: 2,
    WEB_HUYA: 3
};
HUYA.EGender = {
    MALE: 0,
    FEMALE: 1
};
HUYA.EClientTemplateType = {
    TPL_LIANYUN: 128,
    TPL_PC: 64,
    TPL_WEB: 32,
    TPL_JIEDAI: 16,
    TPL_TEXAS: 8,
    TPL_MATCH: 4,
    TPL_HUYAAPP: 2,
    TPL_MIRROR: 1
};
HUYA.TemplateType = {
    PRIMARY: 1,
    RECEPTION: 2
};
HUYA.EStreamLineType = {
    STREAM_LINE_OLD_YY: 0,
    STREAM_LINE_WS: 1,
    STREAM_LINE_NEW_YY: 2,
    STREAM_LINE_AL: 3,
    STREAM_LINE_HUYA: 4,
    STREAM_LINE_TX: 5,
    STREAM_LINE_CDN: 8,
    STREAM_LINE_HW: 6,
    STREAM_LINE_BD: 7
};
HUYA.eUserOperation = {
    USER_IN: 1,
    USER_OUT: 2,
    USER_MOVE: 3
};
HUYA.WebSocketCommand = function() {
    this.iCmdType = 0;
    this.vData = new Taf.BinBuffer;
    this.lRequestId = 0;
    this.traceId = ""
}
;
HUYA.WebSocketCommand.prototype._clone = function() {
    return new HUYA.WebSocketCommand
}
;
HUYA.WebSocketCommand.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WebSocketCommand.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WebSocketCommand.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iCmdType);
    t.writeBytes(1, this.vData);
    t.writeInt64(2, this.lRequestId);
    t.writeString(3, this.traceId)
}
;
HUYA.WebSocketCommand.prototype.readFrom = function(t) {
    this.iCmdType = t.readInt32(0, false, this.iCmdType);
    this.vData = t.readBytes(1, false, this.vData);
    this.lRequestId = t.readInt64(2, false, this.lRequestId);
    this.traceId = t.readString(3, false, this.traceId)
}
;
HUYA.WSRegisterRsp = function() {
    this.iResCode = 0;
    this.lRequestId = 0;
    this.sMessage = "";
    this.sBCConnHost = ""
}
;
HUYA.WSRegisterRsp.prototype._clone = function() {
    return new HUYA.WSRegisterRsp
}
;
HUYA.WSRegisterRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSRegisterRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSRegisterRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iResCode);
    t.writeInt64(1, this.lRequestId);
    t.writeString(2, this.sMessage);
    t.writeString(3, this.sBCConnHost)
}
;
HUYA.WSRegisterRsp.prototype.readFrom = function(t) {
    this.iResCode = t.readInt32(0, false, this.iResCode);
    this.lRequestId = t.readInt64(1, false, this.lRequestId);
    this.sMessage = t.readString(2, false, this.sMessage);
    this.sBCConnHost = t.readString(3, false, this.sBCConnHost)
}
;
HUYA.WSPushMessage = function() {
    this.ePushType = 0;
    this.iUri = 0;
    this.sMsg = new Taf.BinBuffer;
    this.iProtocolType = 0;
    this.sGroupId = "";
    this.lMsgId = 0
}
;
HUYA.WSPushMessage.prototype._clone = function() {
    return new HUYA.WSPushMessage
}
;
HUYA.WSPushMessage.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSPushMessage.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSPushMessage.prototype.writeTo = function(t) {
    t.writeInt32(0, this.ePushType);
    t.writeInt64(1, this.iUri);
    t.writeBytes(2, this.sMsg);
    t.writeInt32(3, this.iProtocolType);
    t.writeString(4, this.sGroupId);
    t.writeInt64(5, this.lMsgId)
}
;
HUYA.WSPushMessage.prototype.readFrom = function(t) {
    this.ePushType = t.readInt32(0, false, this.ePushType);
    this.iUri = t.readInt64(1, false, this.iUri);
    this.sMsg = t.readBytes(2, false, this.sMsg);
    this.iProtocolType = t.readInt32(3, false, this.iProtocolType);
    this.sGroupId = t.readString(4, false, this.sGroupId);
    this.lMsgId = t.readInt64(5, false, this.lMsgId)
}
;
HUYA.WSUserInfo = function() {
    this.lUid = 0;
    this.bAnonymous = true;
    this.sGuid = "";
    this.sToken = "";
    this.lTid = 0;
    this.lSid = 0;
    this.lGroupId = 0;
    this.lGroupType = 0;
    this.sAppId = "";
    this.sUA = ""
}
;
HUYA.WSUserInfo.prototype._clone = function() {
    return new HUYA.WSUserInfo
}
;
HUYA.WSUserInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSUserInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSUserInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeBoolean(1, this.bAnonymous);
    t.writeString(2, this.sGuid);
    t.writeString(3, this.sToken);
    t.writeInt64(4, this.lTid);
    t.writeInt64(5, this.lSid);
    t.writeInt64(6, this.lGroupId);
    t.writeInt64(7, this.lGroupType);
    t.writeString(8, this.sAppId);
    t.writeString(9, this.sUA)
}
;
HUYA.WSUserInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.bAnonymous = t.readBoolean(1, false, this.bAnonymous);
    this.sGuid = t.readString(2, false, this.sGuid);
    this.sToken = t.readString(3, false, this.sToken);
    this.lTid = t.readInt64(4, false, this.lTid);
    this.lSid = t.readInt64(5, false, this.lSid);
    this.lGroupId = t.readInt64(6, false, this.lGroupId);
    this.lGroupType = t.readInt64(7, false, this.lGroupType);
    this.sAppId = t.readString(8, false, this.sAppId);
    this.sUA = t.readString(9, false, this.sUA)
}
;
HUYA.WSVerifyCookieReq = function() {
    this.lUid = 0;
    this.sUA = "";
    this.sCookie = "";
    this.sGuid = "";
    this.bAutoRegisterUid = 0;
    this.sAppSrc = ""
}
;
HUYA.WSVerifyCookieReq.prototype._clone = function() {
    return new HUYA.WSVerifyCookieReq
}
;
HUYA.WSVerifyCookieReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSVerifyCookieReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSVerifyCookieReq.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sUA);
    t.writeString(2, this.sCookie);
    t.writeString(3, this.sGuid);
    t.writeInt32(4, this.bAutoRegisterUid);
    t.writeString(5, this.sAppSrc)
}
;
HUYA.WSVerifyCookieReq.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sUA = t.readString(1, false, this.sUA);
    this.sCookie = t.readString(2, false, this.sCookie);
    this.sGuid = t.readString(3, false, this.sGuid);
    this.bAutoRegisterUid = t.readInt32(4, false, this.bAutoRegisterUid);
    this.sAppSrc = t.readString(5, false, this.sAppSrc)
}
;
HUYA.WSVerifyCookieRsp = function() {
    this.iValidate = 0
}
;
HUYA.WSVerifyCookieRsp.prototype._clone = function() {
    return new HUYA.WSVerifyCookieRsp
}
;
HUYA.WSVerifyCookieRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSVerifyCookieRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSVerifyCookieRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iValidate)
}
;
HUYA.WSVerifyCookieRsp.prototype.readFrom = function(t) {
    this.iValidate = t.readInt32(0, false, this.iValidate)
}
;
HUYA.UserId = function() {
    this.lUid = 0;
    this.sGuid = "";
    this.sToken = "";
    this.sHuYaUA = "";
    this.sCookie = "";
    this.iTokenType = 0
}
;
HUYA.UserId.prototype._clone = function() {
    return new HUYA.UserId
}
;
HUYA.UserId.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserId.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserId.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sGuid);
    t.writeString(2, this.sToken);
    t.writeString(3, this.sHuYaUA);
    t.writeString(4, this.sCookie);
    t.writeInt32(5, this.iTokenType)
}
;
HUYA.UserId.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sGuid = t.readString(1, false, this.sGuid);
    this.sToken = t.readString(2, false, this.sToken);
    this.sHuYaUA = t.readString(3, false, this.sHuYaUA);
    this.sCookie = t.readString(4, false, this.sCookie);
    this.iTokenType = t.readInt32(5, false, this.iTokenType)
}
;
HUYA.EnterChannelReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.iChannelType = 0
}
;
HUYA.EnterChannelReq.prototype._clone = function() {
    return new HUYA.EnterChannelReq
}
;
HUYA.EnterChannelReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.EnterChannelReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.EnterChannelReq.prototype.writeTo = function(t) {
    t.writeStruct(1, this.tUserId);
    t.writeInt64(2, this.lTid);
    t.writeInt64(3, this.lSid);
    t.writeInt32(4, this.iChannelType)
}
;
HUYA.EnterChannelReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(1, false, this.tUserId);
    this.lTid = t.readInt64(2, false, this.lTid);
    this.lSid = t.readInt64(3, false, this.lSid);
    this.iChannelType = t.readInt32(4, false, this.iChannelType)
}
;
HUYA.UserEventReq = function() {
    this.tId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.eOp = 0;
    this.sChan = "";
    this.eSource = 0;
    this.lPid = 0;
    this.bWatchVideo = false;
    this.bAnonymous = false;
    this.eTemplateType = HUYA.TemplateType.PRIMARY;
    this.sTraceSource = ""
}
;
HUYA.UserEventReq.prototype._clone = function() {
    return new HUYA.UserEventReq
}
;
HUYA.UserEventReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserEventReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserEventReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeInt32(4, this.eOp);
    t.writeString(5, this.sChan);
    t.writeInt32(6, this.eSource);
    t.writeInt64(7, this.lPid);
    t.writeBoolean(8, this.bWatchVideo);
    t.writeBoolean(9, this.bAnonymous);
    t.writeInt32(10, this.eTemplateType);
    t.writeString(11, this.sTraceSource)
}
;
HUYA.UserEventReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.eOp = t.readInt32(4, false, this.eOp);
    this.sChan = t.readString(5, false, this.sChan);
    this.eSource = t.readInt32(6, false, this.eSource);
    this.lPid = t.readInt64(7, false, this.lPid);
    this.bWatchVideo = t.readBoolean(8, false, this.bWatchVideo);
    this.bAnonymous = t.readBoolean(9, false, this.bAnonymous);
    this.eTemplateType = t.readInt32(10, false, this.eTemplateType);
    this.sTraceSource = t.readString(11, false, this.sTraceSource)
}
;
HUYA.UserEventRsp = function() {
    this.lTid = 0;
    this.lSid = 0;
    this.iUserHeartBeatInterval = 60;
    this.iPresentHeartBeatInterval = 60
}
;
HUYA.UserEventRsp.prototype._clone = function() {
    return new HUYA.UserEventRsp
}
;
HUYA.UserEventRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserEventRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserEventRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lTid);
    t.writeInt64(1, this.lSid);
    t.writeInt32(2, this.iUserHeartBeatInterval);
    t.writeInt32(3, this.iPresentHeartBeatInterval)
}
;
HUYA.UserEventRsp.prototype.readFrom = function(t) {
    this.lTid = t.readInt64(0, false, this.lTid);
    this.lSid = t.readInt64(1, false, this.lSid);
    this.iUserHeartBeatInterval = t.readInt32(2, false, this.iUserHeartBeatInterval);
    this.iPresentHeartBeatInterval = t.readInt32(3, false, this.iPresentHeartBeatInterval)
}
;
HUYA.UserHeartBeatReq = function() {
    this.tId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0;
    this.bWatchVideo = false;
    this.eLineType = HUYA.EStreamLineType.STREAM_LINE_OLD_YY;
    this.iFps = 0;
    this.iAttendee = 0;
    this.iBandwidth = 0;
    this.iLastHeartElapseTime = 0
}
;
HUYA.UserHeartBeatReq.prototype._clone = function() {
    return new HUYA.UserHeartBeatReq
}
;
HUYA.UserHeartBeatReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserHeartBeatReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserHeartBeatReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeInt64(4, this.lPid);
    t.writeBoolean(5, this.bWatchVideo);
    t.writeInt32(6, this.eLineType);
    t.writeInt32(7, this.iFps);
    t.writeInt32(8, this.iAttendee);
    t.writeInt32(9, this.iBandwidth);
    t.writeInt32(10, this.iLastHeartElapseTime)
}
;
HUYA.UserHeartBeatReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.lPid = t.readInt64(4, false, this.lPid);
    this.bWatchVideo = t.readBoolean(5, false, this.bWatchVideo);
    this.eLineType = t.readInt32(6, false, this.eLineType);
    this.iFps = t.readInt32(7, false, this.iFps);
    this.iAttendee = t.readInt32(8, false, this.iAttendee);
    this.iBandwidth = t.readInt32(9, false, this.iBandwidth);
    this.iLastHeartElapseTime = t.readInt32(10, false, this.iLastHeartElapseTime)
}
;
HUYA.UserHeartBeatRsp = function() {
    this.iRet = 0
}
;
HUYA.UserHeartBeatRsp.prototype._clone = function() {
    return new HUYA.UserHeartBeatRsp
}
;
HUYA.UserHeartBeatRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserHeartBeatRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserHeartBeatRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRet)
}
;
HUYA.UserHeartBeatRsp.prototype.readFrom = function(t) {
    this.iRet = t.readInt32(0, false, this.iRet)
}
;
HUYA.SendMessageReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.sContent = "";
    this.iShowMode = 0;
    this.tFormat = new HUYA.ContentFormat;
    this.tBulletFormat = new HUYA.BulletFormat;
    this.vAtSomeone = new Taf.Vector(new HUYA.UidNickName);
    this.lPid = 0
}
;
HUYA.SendMessageReq.prototype._clone = function() {
    return new HUYA.SendMessageReq
}
;
HUYA.SendMessageReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SendMessageReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SendMessageReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeString(3, this.sContent);
    t.writeInt32(4, this.iShowMode);
    t.writeStruct(5, this.tFormat);
    t.writeStruct(6, this.tBulletFormat);
    t.writeVector(7, this.vAtSomeone);
    t.writeInt64(8, this.lPid)
}
;
HUYA.SendMessageReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.sContent = t.readString(3, false, this.sContent);
    this.iShowMode = t.readInt32(4, false, this.iShowMode);
    this.tFormat = t.readStruct(5, false, this.tFormat);
    this.tBulletFormat = t.readStruct(6, false, this.tBulletFormat);
    this.vAtSomeone = t.readVector(7, false, this.vAtSomeone);
    this.lPid = t.readInt64(8, false, this.lPid)
}
;
HUYA.SendMessageRsp = function() {
    this.iStatus = 0;
    this.tNotice = new HUYA.MessageNotice;
    this.sToast = ""
}
;
HUYA.SendMessageRsp.prototype._clone = function() {
    return new HUYA.SendMessageRsp
}
;
HUYA.SendMessageRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SendMessageRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SendMessageRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iStatus);
    t.writeStruct(1, this.tNotice);
    t.writeString(2, this.sToast)
}
;
HUYA.SendMessageRsp.prototype.readFrom = function(t) {
    this.iStatus = t.readInt32(0, false, this.iStatus);
    this.tNotice = t.readStruct(1, false, this.tNotice);
    this.sToast = t.readString(2, false, this.sToast)
}
;
HUYA.MessageNotice = function() {
    this.tUserInfo = new HUYA.SenderInfo;
    this.lTid = 0;
    this.lSid = 0;
    this.sContent = "";
    this.iShowMode = 0;
    this.tFormat = new HUYA.ContentFormat;
    this.tBulletFormat = new HUYA.BulletFormat;
    this.iTermType = 0;
    this.vDecorationPrefix = new Taf.Vector(new HUYA.DecorationInfo);
    this.vDecorationSuffix = new Taf.Vector(new HUYA.DecorationInfo);
    this.vAtSomeone = new Taf.Vector(new HUYA.UidNickName);
    this.lPid = 0;
    this.vBulletPrefix = new Taf.Vector(new HUYA.DecorationInfo);
    this.sIconUrl = "";
    this.iType = 0;
    this.vBulletSuffix = new Taf.Vector(new HUYA.DecorationInfo)
}
;
HUYA.MessageNotice.prototype._clone = function() {
    return new HUYA.MessageNotice
}
;
HUYA.MessageNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MessageNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MessageNotice.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserInfo);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeString(3, this.sContent);
    t.writeInt32(4, this.iShowMode);
    t.writeStruct(5, this.tFormat);
    t.writeStruct(6, this.tBulletFormat);
    t.writeInt32(7, this.iTermType);
    t.writeVector(8, this.vDecorationPrefix);
    t.writeVector(9, this.vDecorationSuffix);
    t.writeVector(10, this.vAtSomeone);
    t.writeInt64(11, this.lPid);
    t.writeVector(12, this.vBulletPrefix);
    t.writeString(13, this.sIconUrl);
    t.writeInt32(14, this.iType);
    t.writeVector(15, this.vBulletSuffix)
}
;
HUYA.MessageNotice.prototype.readFrom = function(t) {
    this.tUserInfo = t.readStruct(0, false, this.tUserInfo);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.sContent = t.readString(3, false, this.sContent);
    this.iShowMode = t.readInt32(4, false, this.iShowMode);
    this.tFormat = t.readStruct(5, false, this.tFormat);
    this.tBulletFormat = t.readStruct(6, false, this.tBulletFormat);
    this.iTermType = t.readInt32(7, false, this.iTermType);
    this.vDecorationPrefix = t.readVector(8, false, this.vDecorationPrefix);
    this.vDecorationSuffix = t.readVector(9, false, this.vDecorationSuffix);
    this.vAtSomeone = t.readVector(10, false, this.vAtSomeone);
    this.lPid = t.readInt64(11, false, this.lPid);
    this.vBulletPrefix = t.readVector(12, false, this.vBulletPrefix);
    this.sIconUrl = t.readString(13, false, this.sIconUrl);
    this.iType = t.readInt32(14, false, this.iType);
    this.vBulletSuffix = t.readVector(15, false, this.vBulletSuffix)
}
;
HUYA.ContentFormat = function() {
    this.iFontColor = -1;
    this.iFontSize = 4;
    this.iPopupStyle = 0;
    this.iNickNameFontColor = -1
}
;
HUYA.ContentFormat.prototype._clone = function() {
    return new HUYA.ContentFormat
}
;
HUYA.ContentFormat.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ContentFormat.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ContentFormat.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iFontColor);
    t.writeInt32(1, this.iFontSize);
    t.writeInt32(2, this.iPopupStyle);
    t.writeInt32(3, this.iNickNameFontColor)
}
;
HUYA.ContentFormat.prototype.readFrom = function(t) {
    this.iFontColor = t.readInt32(0, false, this.iFontColor);
    this.iFontSize = t.readInt32(1, false, this.iFontSize);
    this.iPopupStyle = t.readInt32(2, false, this.iPopupStyle);
    this.iNickNameFontColor = t.readInt32(3, false, this.iNickNameFontColor)
}
;
HUYA.BulletFormat = function() {
    this.iFontColor = -1;
    this.iFontSize = 4;
    this.iTextSpeed = 0;
    this.iTransitionType = 1;
    this.iPopupStyle = 0;
    this.tBorderGroundFormat = new HUYA.BulletBorderGroundFormat
}
;
HUYA.BulletFormat.prototype._clone = function() {
    return new HUYA.BulletFormat
}
;
HUYA.BulletFormat.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BulletFormat.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BulletFormat.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iFontColor);
    t.writeInt32(1, this.iFontSize);
    t.writeInt32(2, this.iTextSpeed);
    t.writeInt32(3, this.iTransitionType);
    t.writeInt32(4, this.iPopupStyle);
    t.writeStruct(5, this.tBorderGroundFormat)
}
;
HUYA.BulletFormat.prototype.readFrom = function(t) {
    this.iFontColor = t.readInt32(0, false, this.iFontColor);
    this.iFontSize = t.readInt32(1, false, this.iFontSize);
    this.iTextSpeed = t.readInt32(2, false, this.iTextSpeed);
    this.iTransitionType = t.readInt32(3, false, this.iTransitionType);
    this.iPopupStyle = t.readInt32(4, false, this.iPopupStyle);
    this.tBorderGroundFormat = t.readStruct(5, false, this.tBorderGroundFormat)
}
;
HUYA.UidNickName = function() {
    this.lUid = 0;
    this.sNickName = ""
}
;
HUYA.UidNickName.prototype._clone = function() {
    return new HUYA.UidNickName
}
;
HUYA.UidNickName.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UidNickName.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UidNickName.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName)
}
;
HUYA.UidNickName.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName)
}
;
HUYA.SenderInfo = function() {
    this.lUid = 0;
    this.lImid = 0;
    this.sNickName = "";
    this.iGender = 0;
    this.sAvatarUrl = "";
    this.iNobleLevel = 0;
    this.tNobleLevelInfo = new HUYA.NobleLevelInfo
}
;
HUYA.SenderInfo.prototype._clone = function() {
    return new HUYA.SenderInfo
}
;
HUYA.SenderInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SenderInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SenderInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lImid);
    t.writeString(2, this.sNickName);
    t.writeInt32(3, this.iGender);
    t.writeString(4, this.sAvatarUrl);
    t.writeInt32(5, this.iNobleLevel);
    t.writeStruct(6, this.tNobleLevelInfo)
}
;
HUYA.SenderInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lImid = t.readInt64(1, false, this.lImid);
    this.sNickName = t.readString(2, false, this.sNickName);
    this.iGender = t.readInt32(3, false, this.iGender);
    this.sAvatarUrl = t.readString(4, false, this.sAvatarUrl);
    this.iNobleLevel = t.readInt32(5, false, this.iNobleLevel);
    this.tNobleLevelInfo = t.readStruct(6, false, this.tNobleLevelInfo)
}
;
HUYA.DecorationInfo = function() {
    this.iAppId = 0;
    this.iViewType = 0;
    this.vData = new Taf.BinBuffer
}
;
HUYA.DecorationInfo.prototype._clone = function() {
    return new HUYA.DecorationInfo
}
;
HUYA.DecorationInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.DecorationInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.DecorationInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iAppId);
    t.writeInt32(1, this.iViewType);
    t.writeBytes(2, this.vData)
}
;
HUYA.DecorationInfo.prototype.readFrom = function(t) {
    this.iAppId = t.readInt32(0, false, this.iAppId);
    this.iViewType = t.readInt32(1, false, this.iViewType);
    this.vData = t.readBytes(2, false, this.vData)
}
;
HUYA.BulletBorderGroundFormat = function() {
    this.iEnableUse = 0;
    this.iBorderThickness = 0;
    this.iBorderColour = -1;
    this.iBorderDiaphaneity = 100;
    this.iGroundColour = -1;
    this.iGroundColourDiaphaneity = 100;
    this.sAvatarDecorationUrl = "";
    this.iFontColor = -1
}
;
HUYA.BulletBorderGroundFormat.prototype._clone = function() {
    return new HUYA.BulletBorderGroundFormat
}
;
HUYA.BulletBorderGroundFormat.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BulletBorderGroundFormat.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BulletBorderGroundFormat.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iEnableUse);
    t.writeInt32(1, this.iBorderThickness);
    t.writeInt32(2, this.iBorderColour);
    t.writeInt32(3, this.iBorderDiaphaneity);
    t.writeInt32(4, this.iGroundColour);
    t.writeInt32(5, this.iGroundColourDiaphaneity);
    t.writeString(6, this.sAvatarDecorationUrl);
    t.writeInt32(7, this.iFontColor)
}
;
HUYA.BulletBorderGroundFormat.prototype.readFrom = function(t) {
    this.iEnableUse = t.readInt32(0, false, this.iEnableUse);
    this.iBorderThickness = t.readInt32(1, false, this.iBorderThickness);
    this.iBorderColour = t.readInt32(2, false, this.iBorderColour);
    this.iBorderDiaphaneity = t.readInt32(3, false, this.iBorderDiaphaneity);
    this.iGroundColour = t.readInt32(4, false, this.iGroundColour);
    this.iGroundColourDiaphaneity = t.readInt32(5, false, this.iGroundColourDiaphaneity);
    this.sAvatarDecorationUrl = t.readString(6, false, this.sAvatarDecorationUrl);
    this.iFontColor = t.readInt32(7, false, this.iFontColor)
}
;
HUYA.EDecorationAppType = {
    kDecorationAppTypeCommon: 100,
    kDecorationAppTypeChannel: 1e4,
    kDecorationAppTypeGuildAdmin: 10090,
    kDecorationAppTypeAdmin: 10100,
    kDecorationAppTypeDaiyanClub: 10150,
    kDecorationAppTypeNoble: 10200,
    KDecorationAppTypeGuildVip: 10210,
    kDecorationAppTypeGuard: 10300,
    kDecorationAppTypeFans: 10400,
    kDecorationAppTypeVIP: 10500,
    kDecorationAppTypeUserProfile: 10560,
    kDecorationAppTyperPurpleDiamond: 10600,
    kDecorationAppTypeStamp: 10700,
    KDecorationAppTypeNobleEmoticon: 10800,
    KDecorationAppTypePresenter: 10900,
    KDecorationAppTypeFirstRecharge: 11e3,
    kDecorationAppTypeCheckRoom: 11100,
    kDecorationAppTypeTWatch: 11101
};
HUYA.EDecorationViewType = {
    kDecorationViewTypeCustomized: 0,
    kDecorationViewTypeText: 1,
    kDecorationViewTypeIcon: 2
};
HUYA.MsgCommDecoChannelRoleInfo = function() {
    this.iLevel = 0
}
;
HUYA.MsgCommDecoChannelRoleInfo.prototype._clone = function() {
    return new HUYA.MsgCommDecoChannelRoleInfo
}
;
HUYA.MsgCommDecoChannelRoleInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MsgCommDecoChannelRoleInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MsgCommDecoChannelRoleInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iLevel)
}
;
HUYA.MsgCommDecoChannelRoleInfo.prototype.readFrom = function(t) {
    this.iLevel = t.readInt32(0, false, this.iLevel)
}
;
HUYA.GetStampRsp = function() {
    this.lUid = 0;
    this.lStampUid = 0;
    this.sStampNick = "";
    this.lStampTime = 0;
    this.tStampInfo = new HUYA.StampInfo;
    this.lDeadline = 0
}
;
HUYA.GetStampRsp.prototype._clone = function() {
    return new HUYA.GetStampRsp
}
;
HUYA.GetStampRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetStampRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetStampRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lStampUid);
    t.writeString(2, this.sStampNick);
    t.writeInt64(3, this.lStampTime);
    t.writeStruct(4, this.tStampInfo);
    t.writeInt64(5, this.lDeadline)
}
;
HUYA.GetStampRsp.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lStampUid = t.readInt64(1, false, this.lStampUid);
    this.sStampNick = t.readString(2, false, this.sStampNick);
    this.lStampTime = t.readInt64(3, false, this.lStampTime);
    this.tStampInfo = t.readStruct(4, false, this.tStampInfo);
    this.lDeadline = t.readInt64(5, false, this.lDeadline)
}
;
HUYA.StampInfo = function() {
    this.iId = 0;
    this.sStamp = "";
    this.iLevel = 0;
    this.lStampPrice = 0;
    this.iValidity = 0
}
;
HUYA.StampInfo.prototype._clone = function() {
    return new HUYA.StampInfo
}
;
HUYA.StampInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.StampInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.StampInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iId);
    t.writeString(1, this.sStamp);
    t.writeInt32(2, this.iLevel);
    t.writeInt64(3, this.lStampPrice);
    t.writeInt32(4, this.iValidity)
}
;
HUYA.StampInfo.prototype.readFrom = function(t) {
    this.iId = t.readInt32(0, false, this.iId);
    this.sStamp = t.readString(1, false, this.sStamp);
    this.iLevel = t.readInt32(2, false, this.iLevel);
    this.lStampPrice = t.readInt64(3, false, this.lStampPrice);
    this.iValidity = t.readInt32(4, false, this.iValidity)
}
;
HUYA.MsgCommDecoIcon = function() {
    this.sUrl = ""
}
;
HUYA.MsgCommDecoIcon.prototype._clone = function() {
    return new HUYA.MsgCommDecoIcon
}
;
HUYA.MsgCommDecoIcon.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MsgCommDecoIcon.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MsgCommDecoIcon.prototype.writeTo = function(t) {
    t.writeString(0, this.sUrl)
}
;
HUYA.MsgCommDecoIcon.prototype.readFrom = function(t) {
    this.sUrl = t.readString(0, false, this.sUrl)
}
;
HUYA.MsgCommDecoText = function() {
    this.sText = "";
    this.iColor = 0
}
;
HUYA.MsgCommDecoText.prototype._clone = function() {
    return new HUYA.MsgCommDecoText
}
;
HUYA.MsgCommDecoText.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MsgCommDecoText.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MsgCommDecoText.prototype.writeTo = function(t) {
    t.writeString(0, this.sText);
    t.writeInt32(1, this.iColor)
}
;
HUYA.MsgCommDecoText.prototype.readFrom = function(t) {
    this.sText = t.readString(0, false, this.sText);
    this.iColor = t.readInt32(1, false, this.iColor)
}
;
HUYA.GetUserTypeRsp = function() {
    this.lUid = 0;
    this.lPresenterUid = 0;
    this.iType = 0;
    this.tIsMutedRsp = new HUYA.IsMutedRsp;
    this.iGHManagerType = 0;
    this.sManagerDecorationUrl = ""
}
;
HUYA.GetUserTypeRsp.prototype._clone = function() {
    return new HUYA.GetUserTypeRsp
}
;
HUYA.GetUserTypeRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetUserTypeRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetUserTypeRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lPresenterUid);
    t.writeInt32(3, this.iType);
    t.writeStruct(4, this.tIsMutedRsp);
    t.writeInt32(5, this.iGHManagerType);
    t.writeString(6, this.sManagerDecorationUrl)
}
;
HUYA.GetUserTypeRsp.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lPresenterUid = t.readInt64(1, false, this.lPresenterUid);
    this.iType = t.readInt32(3, false, this.iType);
    this.tIsMutedRsp = t.readStruct(4, false, this.tIsMutedRsp);
    this.iGHManagerType = t.readInt32(5, false, this.iGHManagerType);
    this.sManagerDecorationUrl = t.readString(6, false, this.sManagerDecorationUrl)
}
;
HUYA.IsMutedRsp = function() {
    this.bMuted = false;
    this.iMutedTime = 0;
    this.lAutoUnmutedTime = 0;
    this.iMutedType = 0
}
;
HUYA.IsMutedRsp.prototype._clone = function() {
    return new HUYA.IsMutedRsp
}
;
HUYA.IsMutedRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.IsMutedRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.IsMutedRsp.prototype.writeTo = function(t) {
    t.writeBoolean(0, this.bMuted);
    t.writeInt32(1, this.iMutedTime);
    t.writeInt64(2, this.lAutoUnmutedTime);
    t.writeInt32(3, this.iMutedType)
}
;
HUYA.IsMutedRsp.prototype.readFrom = function(t) {
    this.bMuted = t.readBoolean(0, false, this.bMuted);
    this.iMutedTime = t.readInt32(1, false, this.iMutedTime);
    this.lAutoUnmutedTime = t.readInt64(2, false, this.lAutoUnmutedTime);
    this.iMutedType = t.readInt32(3, false, this.iMutedType)
}
;
HUYA.MsgCommDecoGuardInfo = function() {
    this.iLevel = 0
}
;
HUYA.MsgCommDecoGuardInfo.prototype._clone = function() {
    return new HUYA.MsgCommDecoGuardInfo
}
;
HUYA.MsgCommDecoGuardInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MsgCommDecoGuardInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MsgCommDecoGuardInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iLevel)
}
;
HUYA.MsgCommDecoGuardInfo.prototype.readFrom = function(t) {
    this.iLevel = t.readInt32(0, false, this.iLevel)
}
;
HUYA.PurpleVipInfo = function() {
    this.lUid = 0;
    this.iIsSuper = 0;
    this.iChargeType = 0;
    this.iVipGrade = 0;
    this.sIconUrl = ""
}
;
HUYA.PurpleVipInfo.prototype._clone = function() {
    return new HUYA.PurpleVipInfo
}
;
HUYA.PurpleVipInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PurpleVipInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PurpleVipInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt32(1, this.iIsSuper);
    t.writeInt32(2, this.iChargeType);
    t.writeInt32(3, this.iVipGrade);
    t.writeString(4, this.sIconUrl)
}
;
HUYA.PurpleVipInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.iIsSuper = t.readInt32(1, false, this.iIsSuper);
    this.iChargeType = t.readInt32(2, false, this.iChargeType);
    this.iVipGrade = t.readInt32(3, false, this.iVipGrade);
    this.sIconUrl = t.readString(4, false, this.sIconUrl)
}
;
HUYA.WSP2POpenNotify = function() {
    this.vGroupId = new Taf.Vector(new Taf.STRING)
}
;
HUYA.WSP2POpenNotify.prototype._clone = function() {
    return new HUYA.WSP2POpenNotify
}
;
HUYA.WSP2POpenNotify.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSP2POpenNotify.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSP2POpenNotify.prototype.writeTo = function(t) {
    t.writeVector(0, this.vGroupId)
}
;
HUYA.WSP2POpenNotify.prototype.readFrom = function(t) {
    this.vGroupId = t.readVector(0, false, this.vGroupId)
}
;
HUYA.WSP2PCloseNotify = function() {
    this.vGroupId = new Taf.Vector(new Taf.STRING)
}
;
HUYA.WSP2PCloseNotify.prototype._clone = function() {
    return new HUYA.WSP2PCloseNotify
}
;
HUYA.WSP2PCloseNotify.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSP2PCloseNotify.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSP2PCloseNotify.prototype.writeTo = function(t) {
    t.writeVector(0, this.vGroupId)
}
;
HUYA.WSP2PCloseNotify.prototype.readFrom = function(t) {
    this.vGroupId = t.readVector(0, false, this.vGroupId)
}
;
HUYA.WSEnterP2P = function() {
    this.vGroupId = new Taf.Vector(new Taf.STRING)
}
;
HUYA.WSEnterP2P.prototype._clone = function() {
    return new HUYA.WSEnterP2P
}
;
HUYA.WSEnterP2P.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSEnterP2P.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSEnterP2P.prototype.writeTo = function(t) {
    t.writeVector(0, this.vGroupId)
}
;
HUYA.WSEnterP2P.prototype.readFrom = function(t) {
    this.vGroupId = t.readVector(0, false, this.vGroupId)
}
;
HUYA.WSEnterP2PAck = function() {
    this.vGroupId = new Taf.Vector(new Taf.STRING)
}
;
HUYA.WSEnterP2PAck.prototype._clone = function() {
    return new HUYA.WSEnterP2PAck
}
;
HUYA.WSEnterP2PAck.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSEnterP2PAck.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSEnterP2PAck.prototype.writeTo = function(t) {
    t.writeVector(0, this.vGroupId)
}
;
HUYA.WSEnterP2PAck.prototype.readFrom = function(t) {
    this.vGroupId = t.readVector(0, false, this.vGroupId)
}
;
HUYA.WSExitP2P = function() {
    this.vGroupId = new Taf.Vector(new Taf.STRING)
}
;
HUYA.WSExitP2P.prototype._clone = function() {
    return new HUYA.WSExitP2P
}
;
HUYA.WSExitP2P.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSExitP2P.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSExitP2P.prototype.writeTo = function(t) {
    t.writeVector(0, this.vGroupId)
}
;
HUYA.WSExitP2P.prototype.readFrom = function(t) {
    this.vGroupId = t.readVector(0, false, this.vGroupId)
}
;
HUYA.WSExitP2PAck = function() {
    this.vGroupId = new Taf.Vector(new Taf.STRING)
}
;
HUYA.WSExitP2PAck.prototype._clone = function() {
    return new HUYA.WSExitP2PAck
}
;
HUYA.WSExitP2PAck.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSExitP2PAck.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSExitP2PAck.prototype.writeTo = function(t) {
    t.writeVector(0, this.vGroupId)
}
;
HUYA.WSExitP2PAck.prototype.readFrom = function(t) {
    this.vGroupId = t.readVector(0, false, this.vGroupId)
}
;
HUYA.VipListReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.iStart = 0;
    this.iCount = 0;
    this.lPid = 0
}
;
HUYA.VipListReq.prototype._clone = function() {
    return new HUYA.VipListReq
}
;
HUYA.VipListReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.VipListReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.VipListReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeInt32(3, this.iStart);
    t.writeInt32(4, this.iCount);
    t.writeInt64(5, this.lPid)
}
;
HUYA.VipListReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.iStart = t.readInt32(3, false, this.iStart);
    this.iCount = t.readInt32(4, false, this.iCount);
    this.lPid = t.readInt64(5, false, this.lPid)
}
;
HUYA.VipBarListRsp = function() {
    this.iStart = 0;
    this.iCount = 0;
    this.iTotal = 0;
    this.vVipBarItem = new Taf.Vector(new HUYA.VipBarItem);
    this.sBadgeName = "";
    this.iChangedHighestRank = 0;
    this.lPid = 0;
    this.sVLogo = ""
}
;
HUYA.VipBarListRsp.prototype._clone = function() {
    return new HUYA.VipBarListRsp
}
;
HUYA.VipBarListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.VipBarListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.VipBarListRsp.prototype.writeTo = function(t) {
    t.writeInt32(1, this.iStart);
    t.writeInt32(2, this.iCount);
    t.writeInt32(3, this.iTotal);
    t.writeVector(4, this.vVipBarItem);
    t.writeString(5, this.sBadgeName);
    t.writeInt32(6, this.iChangedHighestRank);
    t.writeInt64(7, this.lPid);
    t.writeString(8, this.sVLogo)
}
;
HUYA.VipBarListRsp.prototype.readFrom = function(t) {
    this.iStart = t.readInt32(1, false, this.iStart);
    this.iCount = t.readInt32(2, false, this.iCount);
    this.iTotal = t.readInt32(3, false, this.iTotal);
    this.vVipBarItem = t.readVector(4, false, this.vVipBarItem);
    this.sBadgeName = t.readString(5, false, this.sBadgeName);
    this.iChangedHighestRank = t.readInt32(6, false, this.iChangedHighestRank);
    this.lPid = t.readInt64(7, false, this.lPid);
    this.sVLogo = t.readString(8, false, this.sVLogo)
}
;
HUYA.VipBarItem = function() {
    this.lUid = 0;
    this.iTypes = 0;
    this.tNobleInfo = new HUYA.NobleInfo;
    this.tGuardInfo = new HUYA.GuardInfo;
    this.tFansInfo = new HUYA.FansInfo;
    this.sNickName = "";
    this.iSuperPupleLevel = 0;
    this.iPotentialTypes = 0;
    this.sLogo = "";
    this.lExpiredTS = 0;
    this.iUserLevel = 0;
    this.sLon = "";
    this.sLat = "";
    this.sSession = "";
    this.tGuildMemInfo = new HUYA.GuildMemInfo;
    this.sLogoDecoUrl = ""
}
;
HUYA.VipBarItem.prototype._clone = function() {
    return new HUYA.VipBarItem
}
;
HUYA.VipBarItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.VipBarItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.VipBarItem.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt32(1, this.iTypes);
    t.writeStruct(2, this.tNobleInfo);
    t.writeStruct(3, this.tGuardInfo);
    t.writeStruct(4, this.tFansInfo);
    t.writeString(5, this.sNickName);
    t.writeInt32(6, this.iSuperPupleLevel);
    t.writeInt32(7, this.iPotentialTypes);
    t.writeString(8, this.sLogo);
    t.writeInt64(9, this.lExpiredTS);
    t.writeInt32(10, this.iUserLevel);
    t.writeString(13, this.sLon);
    t.writeString(14, this.sLat);
    t.writeString(15, this.sSession);
    t.writeStruct(16, this.tGuildMemInfo);
    t.writeString(17, this.sLogoDecoUrl)
}
;
HUYA.VipBarItem.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.iTypes = t.readInt32(1, false, this.iTypes);
    this.tNobleInfo = t.readStruct(2, false, this.tNobleInfo);
    this.tGuardInfo = t.readStruct(3, false, this.tGuardInfo);
    this.tFansInfo = t.readStruct(4, false, this.tFansInfo);
    this.sNickName = t.readString(5, false, this.sNickName);
    this.iSuperPupleLevel = t.readInt32(6, false, this.iSuperPupleLevel);
    this.iPotentialTypes = t.readInt32(7, false, this.iPotentialTypes);
    this.sLogo = t.readString(8, false, this.sLogo);
    this.lExpiredTS = t.readInt64(9, false, this.lExpiredTS);
    this.iUserLevel = t.readInt32(10, false, this.iUserLevel);
    this.sLon = t.readString(13, false, this.sLon);
    this.sLat = t.readString(14, false, this.sLat);
    this.sSession = t.readString(15, false, this.sSession);
    this.tGuildMemInfo = t.readStruct(16, false, this.tGuildMemInfo);
    this.sLogoDecoUrl = t.readString(17, false, this.sLogoDecoUrl)
}
;
HUYA.GuildMemInfo = function() {
    this.iGuildVip = 0;
    this.sUrl = ""
}
;
HUYA.GuildMemInfo.prototype._clone = function() {
    return new HUYA.GuildMemInfo
}
;
HUYA.GuildMemInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GuildMemInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GuildMemInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iGuildVip);
    t.writeString(1, this.sUrl)
}
;
HUYA.GuildMemInfo.prototype.readFrom = function(t) {
    this.iGuildVip = t.readInt32(0, false, this.iGuildVip);
    this.sUrl = t.readString(1, false, this.sUrl)
}
;
HUYA.WeekRankItem = function() {
    this.lUid = 0;
    this.sNickName = "";
    this.iScore = 0;
    this.iGuardLevel = 0;
    this.iNobleLevel = 0;
    this.sLogo = "";
    this.iUserLevel = 0;
    this.iRank = 0;
    this.lScore = 0;
    this.tNobleLevel = new HUYA.NobleLevelInfo;
    this.iSFFlag = 0
}
;
HUYA.WeekRankItem.prototype._clone = function() {
    return new HUYA.WeekRankItem
}
;
HUYA.WeekRankItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WeekRankItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WeekRankItem.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName);
    t.writeInt32(2, this.iScore);
    t.writeInt32(3, this.iGuardLevel);
    t.writeInt32(4, this.iNobleLevel);
    t.writeString(5, this.sLogo);
    t.writeInt32(6, this.iUserLevel);
    t.writeInt32(7, this.iRank);
    t.writeInt64(8, this.lScore);
    t.writeStruct(9, this.tNobleLevel);
    t.writeInt32(10, this.iSFFlag)
}
;
HUYA.WeekRankItem.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.iScore = t.readInt32(2, false, this.iScore);
    this.iGuardLevel = t.readInt32(3, false, this.iGuardLevel);
    this.iNobleLevel = t.readInt32(4, false, this.iNobleLevel);
    this.sLogo = t.readString(5, false, this.sLogo);
    this.iUserLevel = t.readInt32(6, false, this.iUserLevel);
    this.iRank = t.readInt32(7, false, this.iRank);
    this.lScore = t.readInt64(8, false, this.lScore);
    this.tNobleLevel = t.readStruct(9, false, this.tNobleLevel);
    this.iSFFlag = t.readInt32(10, false, this.iSFFlag)
}
;
HUYA.WeekRankListReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0
}
;
HUYA.WeekRankListReq.prototype._clone = function() {
    return new HUYA.WeekRankListReq
}
;
HUYA.WeekRankListReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WeekRankListReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WeekRankListReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeInt64(3, this.lPid)
}
;
HUYA.WeekRankListReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.lPid = t.readInt64(3, false, this.lPid)
}
;
HUYA.WeekRankListRsp = function() {
    this.vWeekRankItem = new Taf.Vector(new HUYA.WeekRankItem);
    this.iStart = 0;
    this.iCount = 0;
    this.iTotal = 0;
    this.lPid = 0
}
;
HUYA.WeekRankListRsp.prototype._clone = function() {
    return new HUYA.WeekRankListRsp
}
;
HUYA.WeekRankListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WeekRankListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WeekRankListRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vWeekRankItem);
    t.writeInt32(1, this.iStart);
    t.writeInt32(2, this.iCount);
    t.writeInt32(3, this.iTotal);
    t.writeInt64(4, this.lPid)
}
;
HUYA.WeekRankListRsp.prototype.readFrom = function(t) {
    this.vWeekRankItem = t.readVector(0, false, this.vWeekRankItem);
    this.iStart = t.readInt32(1, false, this.iStart);
    this.iCount = t.readInt32(2, false, this.iCount);
    this.iTotal = t.readInt32(3, false, this.iTotal);
    this.lPid = t.readInt64(4, false, this.lPid)
}
;
HUYA.WeekRankEnterBanner = function() {
    this.lUid = 0;
    this.sNickName = "";
    this.iRank = 0;
    this.lPid = 0
}
;
HUYA.WeekRankEnterBanner.prototype._clone = function() {
    return new HUYA.WeekRankEnterBanner
}
;
HUYA.WeekRankEnterBanner.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WeekRankEnterBanner.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WeekRankEnterBanner.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName);
    t.writeInt32(2, this.iRank);
    t.writeInt64(3, this.lPid)
}
;
HUYA.WeekRankEnterBanner.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.iRank = t.readInt32(2, false, this.iRank);
    this.lPid = t.readInt64(3, false, this.lPid)
}
;
HUYA.LiveListRsp = function() {
    this.vGameLiveInfos = new Taf.Vector(new HUYA.GameLiveInfo);
    this.lNextBeginId = 0
}
;
HUYA.LiveListRsp.prototype._clone = function() {
    return new HUYA.LiveListRsp
}
;
HUYA.LiveListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LiveListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LiveListRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vGameLiveInfos);
    t.writeInt64(1, this.lNextBeginId)
}
;
HUYA.LiveListRsp.prototype.readFrom = function(t) {
    this.vGameLiveInfos = t.readVector(0, false, this.vGameLiveInfos);
    this.lNextBeginId = t.readInt64(1, false, this.lNextBeginId)
}
;
HUYA.UserChannelReq = function() {
    this.tId = new HUYA.UserId;
    this.lTopcid = 0;
    this.lSubcid = 0;
    this.sSendContent = ""
}
;
HUYA.UserChannelReq.prototype._clone = function() {
    return new HUYA.UserChannelReq
}
;
HUYA.UserChannelReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserChannelReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserChannelReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lTopcid);
    t.writeInt64(2, this.lSubcid);
    t.writeString(3, this.sSendContent)
}
;
HUYA.UserChannelReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lTopcid = t.readInt64(1, false, this.lTopcid);
    this.lSubcid = t.readInt64(2, false, this.lSubcid);
    this.sSendContent = t.readString(3, false, this.sSendContent)
}
;
HUYA.BadgeReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lBadgeId = 0;
    this.lToUid = 0
}
;
HUYA.BadgeReq.prototype._clone = function() {
    return new HUYA.BadgeReq
}
;
HUYA.BadgeReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BadgeReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BadgeReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lBadgeId);
    t.writeInt64(2, this.lToUid)
}
;
HUYA.BadgeReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lBadgeId = t.readInt64(1, false, this.lBadgeId);
    this.lToUid = t.readInt64(2, false, this.lToUid)
}
;
HUYA.BadgeInfo = function() {
    this.lUid = 0;
    this.lBadgeId = 0;
    this.sPresenterNickName = "";
    this.sBadgeName = "";
    this.iBadgeLevel = 0;
    this.iRank = 0;
    this.iScore = 0;
    this.iNextScore = 0;
    this.iQuotaUsed = 0;
    this.iQuota = 0;
    this.lQuotaTS = 0;
    this.lOpenTS = 0;
    this.iVFlag = 0;
    this.sVLogo = "";
    this.tChannelInfo = new HUYA.PresenterChannelInfo;
    this.sPresenterLogo = "";
    this.lVExpiredTS = 0;
    this.iBadgeType = 0;
    this.tFaithInfo = new HUYA.FaithInfo;
    this.tSuperFansInfo = new HUYA.SuperFansInfo
}
;
HUYA.BadgeInfo.prototype._clone = function() {
    return new HUYA.BadgeInfo
}
;
HUYA.BadgeInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BadgeInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BadgeInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lBadgeId);
    t.writeString(2, this.sPresenterNickName);
    t.writeString(3, this.sBadgeName);
    t.writeInt32(4, this.iBadgeLevel);
    t.writeInt32(5, this.iRank);
    t.writeInt32(6, this.iScore);
    t.writeInt32(7, this.iNextScore);
    t.writeInt32(8, this.iQuotaUsed);
    t.writeInt32(9, this.iQuota);
    t.writeInt64(10, this.lQuotaTS);
    t.writeInt64(11, this.lOpenTS);
    t.writeInt32(12, this.iVFlag);
    t.writeString(13, this.sVLogo);
    t.writeStruct(14, this.tChannelInfo);
    t.writeString(15, this.sPresenterLogo);
    t.writeInt64(16, this.lVExpiredTS);
    t.writeInt32(17, this.iBadgeType);
    t.writeStruct(18, this.tFaithInfo);
    t.writeStruct(19, this.tSuperFansInfo)
}
;
HUYA.BadgeInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lBadgeId = t.readInt64(1, false, this.lBadgeId);
    this.sPresenterNickName = t.readString(2, false, this.sPresenterNickName);
    this.sBadgeName = t.readString(3, false, this.sBadgeName);
    this.iBadgeLevel = t.readInt32(4, false, this.iBadgeLevel);
    this.iRank = t.readInt32(5, false, this.iRank);
    this.iScore = t.readInt32(6, false, this.iScore);
    this.iNextScore = t.readInt32(7, false, this.iNextScore);
    this.iQuotaUsed = t.readInt32(8, false, this.iQuotaUsed);
    this.iQuota = t.readInt32(9, false, this.iQuota);
    this.lQuotaTS = t.readInt64(10, false, this.lQuotaTS);
    this.lOpenTS = t.readInt64(11, false, this.lOpenTS);
    this.iVFlag = t.readInt32(12, false, this.iVFlag);
    this.sVLogo = t.readString(13, false, this.sVLogo);
    this.tChannelInfo = t.readStruct(14, false, this.tChannelInfo);
    this.sPresenterLogo = t.readString(15, false, this.sPresenterLogo);
    this.lVExpiredTS = t.readInt64(16, false, this.lVExpiredTS);
    this.iBadgeType = t.readInt32(17, false, this.iBadgeType);
    this.tFaithInfo = t.readStruct(18, false, this.tFaithInfo);
    this.tSuperFansInfo = t.readStruct(19, false, this.tSuperFansInfo)
}
;
HUYA.BadgeScoreChanged = function() {
    this.iScoreChanged = 0;
    this.iBadgeLevelChanged = 0;
    this.iOverBadgeCountLimit = 0;
    this.tBadgeInfo = new HUYA.BadgeInfo;
    this.iNewBadge = 0;
    this.iBadgeOldLevel = 0;
    this.iSuperFansInfoChanged = 0
}
;
HUYA.BadgeScoreChanged.prototype._clone = function() {
    return new HUYA.BadgeScoreChanged
}
;
HUYA.BadgeScoreChanged.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BadgeScoreChanged.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BadgeScoreChanged.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iScoreChanged);
    t.writeInt32(1, this.iBadgeLevelChanged);
    t.writeInt32(2, this.iOverBadgeCountLimit);
    t.writeStruct(3, this.tBadgeInfo);
    t.writeInt32(4, this.iNewBadge);
    t.writeInt32(5, this.iBadgeOldLevel);
    t.writeInt32(6, this.iSuperFansInfoChanged)
}
;
HUYA.BadgeScoreChanged.prototype.readFrom = function(t) {
    this.iScoreChanged = t.readInt32(0, false, this.iScoreChanged);
    this.iBadgeLevelChanged = t.readInt32(1, false, this.iBadgeLevelChanged);
    this.iOverBadgeCountLimit = t.readInt32(2, false, this.iOverBadgeCountLimit);
    this.tBadgeInfo = t.readStruct(3, false, this.tBadgeInfo);
    this.iNewBadge = t.readInt32(4, false, this.iNewBadge);
    this.iBadgeOldLevel = t.readInt32(5, false, this.iBadgeOldLevel);
    this.iSuperFansInfoChanged = t.readInt32(6, false, this.iSuperFansInfoChanged)
}
;
HUYA.FansTips = function() {
    this.iType = 0;
    this.tBadgeInfo = new HUYA.BadgeInfo
}
;
HUYA.FansTips.prototype._clone = function() {
    return new HUYA.FansTips
}
;
HUYA.FansTips.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.FansTips.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.FansTips.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iType);
    t.writeStruct(1, this.tBadgeInfo)
}
;
HUYA.FansTips.prototype.readFrom = function(t) {
    this.iType = t.readInt32(0, false, this.iType);
    this.tBadgeInfo = t.readStruct(1, false, this.tBadgeInfo)
}
;
HUYA.FansInfoNotice = function() {
    this.iFansLevel = 0;
    this.iGreenPopUpCount = 0;
    this.tTips = new HUYA.FansTips
}
;
HUYA.FansInfoNotice.prototype._clone = function() {
    return new HUYA.FansInfoNotice
}
;
HUYA.FansInfoNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.FansInfoNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.FansInfoNotice.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iFansLevel);
    t.writeInt32(1, this.iGreenPopUpCount);
    t.writeStruct(2, this.tTips)
}
;
HUYA.FansInfoNotice.prototype.readFrom = function(t) {
    this.iFansLevel = t.readInt32(0, false, this.iFansLevel);
    this.iGreenPopUpCount = t.readInt32(1, false, this.iGreenPopUpCount);
    this.tTips = t.readStruct(2, false, this.tTips)
}
;
HUYA.BadgeInfoListReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lToUid = 0;
    this.iType = 0
}
;
HUYA.BadgeInfoListReq.prototype._clone = function() {
    return new HUYA.BadgeInfoListReq
}
;
HUYA.BadgeInfoListReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BadgeInfoListReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BadgeInfoListReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lToUid);
    t.writeInt32(2, this.iType)
}
;
HUYA.BadgeInfoListReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lToUid = t.readInt64(1, false, this.lToUid);
    this.iType = t.readInt32(2, false, this.iType)
}
;
HUYA.BadgeInfoListRsp = function() {
    this.vBadgeInfo = new Taf.Vector(new HUYA.BadgeInfo);
    this.lUsingBadgeId = 0;
    this.lUid = 0;
    this.iUsingBadgeType = 0
}
;
HUYA.BadgeInfoListRsp.prototype._clone = function() {
    return new HUYA.BadgeInfoListRsp
}
;
HUYA.BadgeInfoListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BadgeInfoListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BadgeInfoListRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vBadgeInfo);
    t.writeInt64(1, this.lUsingBadgeId);
    t.writeInt64(2, this.lUid);
    t.writeInt32(3, this.iUsingBadgeType)
}
;
HUYA.BadgeInfoListRsp.prototype.readFrom = function(t) {
    this.vBadgeInfo = t.readVector(0, false, this.vBadgeInfo);
    this.lUsingBadgeId = t.readInt64(1, false, this.lUsingBadgeId);
    this.lUid = t.readInt64(2, false, this.lUid);
    this.iUsingBadgeType = t.readInt32(3, false, this.iUsingBadgeType)
}
;
HUYA.EnterPushInfo = function() {
    this.tNobleInfo = new HUYA.NobleInfo
}
;
HUYA.EnterPushInfo.prototype._clone = function() {
    return new HUYA.EnterPushInfo
}
;
HUYA.EnterPushInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.EnterPushInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.EnterPushInfo.prototype.writeTo = function(t) {
    t.writeStruct(1, this.tNobleInfo)
}
;
HUYA.EnterPushInfo.prototype.readFrom = function(t) {
    this.tNobleInfo = t.readStruct(1, false, this.tNobleInfo)
}
;
HUYA.GameAdvertisement = function() {
    this.sGameUrl = "";
    this.sPCLogoUrl = "";
    this.iPCLogoHeight = 0;
    this.sGameAdName = "";
    this.iStatus = 0;
    this.sWebLogoUrl = "";
    this.lID = 0;
    this.sActivityName = "";
    this.sAppLogoUrl = "";
    this.sColorLogoUrl = "";
    this.sAlonePCLogoUrl = "";
    this.iJumpType = 0;
    this.iClickVanish = 0;
    this.tJump = new HUYA.JumpChans;
    this.lPid = 0;
    this.sAssistantLogoUrl = "";
    this.sMobileGameLogoUrl = "";
    this.sPcWebGameUrl = ""
}
;
HUYA.GameAdvertisement.prototype._clone = function() {
    return new HUYA.GameAdvertisement
}
;
HUYA.GameAdvertisement.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GameAdvertisement.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GameAdvertisement.prototype.writeTo = function(t) {
    t.writeString(0, this.sGameUrl);
    t.writeString(1, this.sPCLogoUrl);
    t.writeInt32(2, this.iPCLogoHeight);
    t.writeString(3, this.sGameAdName);
    t.writeInt32(4, this.iStatus);
    t.writeString(5, this.sWebLogoUrl);
    t.writeInt64(6, this.lID);
    t.writeString(7, this.sActivityName);
    t.writeString(8, this.sAppLogoUrl);
    t.writeString(9, this.sColorLogoUrl);
    t.writeString(10, this.sAlonePCLogoUrl);
    t.writeInt32(11, this.iJumpType);
    t.writeInt32(12, this.iClickVanish);
    t.writeStruct(13, this.tJump);
    t.writeInt64(14, this.lPid);
    t.writeString(15, this.sAssistantLogoUrl);
    t.writeString(16, this.sMobileGameLogoUrl);
    t.writeString(17, this.sPcWebGameUrl)
}
;
HUYA.GameAdvertisement.prototype.readFrom = function(t) {
    this.sGameUrl = t.readString(0, false, this.sGameUrl);
    this.sPCLogoUrl = t.readString(1, false, this.sPCLogoUrl);
    this.iPCLogoHeight = t.readInt32(2, false, this.iPCLogoHeight);
    this.sGameAdName = t.readString(3, false, this.sGameAdName);
    this.iStatus = t.readInt32(4, false, this.iStatus);
    this.sWebLogoUrl = t.readString(5, false, this.sWebLogoUrl);
    this.lID = t.readInt64(6, false, this.lID);
    this.sActivityName = t.readString(7, false, this.sActivityName);
    this.sAppLogoUrl = t.readString(8, false, this.sAppLogoUrl);
    this.sColorLogoUrl = t.readString(9, false, this.sColorLogoUrl);
    this.sAlonePCLogoUrl = t.readString(10, false, this.sAlonePCLogoUrl);
    this.iJumpType = t.readInt32(11, false, this.iJumpType);
    this.iClickVanish = t.readInt32(12, false, this.iClickVanish);
    this.tJump = t.readStruct(13, false, this.tJump);
    this.lPid = t.readInt64(14, false, this.lPid);
    this.sAssistantLogoUrl = t.readString(15, false, this.sAssistantLogoUrl);
    this.sMobileGameLogoUrl = t.readString(16, false, this.sMobileGameLogoUrl);
    this.sPcWebGameUrl = t.readString(17, false, this.sPcWebGameUrl)
}
;
HUYA.JumpChans = function() {
    this.lPid = 0;
    this.lTid = 0;
    this.lSid = 0;
    this.iGameId = 0;
    this.lYYId = 0;
    this.iSoucreType = 0;
    this.iRoomId = 0
}
;
HUYA.JumpChans.prototype._clone = function() {
    return new HUYA.JumpChans
}
;
HUYA.JumpChans.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.JumpChans.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.JumpChans.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPid);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeInt32(3, this.iGameId);
    t.writeInt64(4, this.lYYId);
    t.writeInt32(5, this.iSoucreType);
    t.writeInt32(6, this.iRoomId)
}
;
HUYA.JumpChans.prototype.readFrom = function(t) {
    this.lPid = t.readInt64(0, false, this.lPid);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.iGameId = t.readInt32(3, false, this.iGameId);
    this.lYYId = t.readInt64(4, false, this.lYYId);
    this.iSoucreType = t.readInt32(5, false, this.iSoucreType);
    this.iRoomId = t.readInt32(6, false, this.iRoomId)
}
;
HUYA.AdvanceUserEnterNotice = function() {
    this.lUid = 0;
    this.sNickName = "";
    this.iWeekRank = 0;
    this.iGuardLevel = 0;
    this.iNobleLevel = 0;
    this.bFromNearby = false;
    this.dDistance = 0;
    this.sLocation = "";
    this.lPid = 0;
    this.tDecorationInfo = new HUYA.DecorationInfoRsp;
    this.iWeekHeartStirRank = 0;
    this.iWeekHeartBlockRank = 0;
    this.tNobleLevelInfo = new HUYA.NobleLevelInfo
}
;
HUYA.AdvanceUserEnterNotice.prototype._clone = function() {
    return new HUYA.AdvanceUserEnterNotice
}
;
HUYA.AdvanceUserEnterNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.AdvanceUserEnterNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.AdvanceUserEnterNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName);
    t.writeInt32(2, this.iWeekRank);
    t.writeInt32(3, this.iGuardLevel);
    t.writeInt32(4, this.iNobleLevel);
    t.writeBoolean(5, this.bFromNearby);
    t.writeDouble(6, this.dDistance);
    t.writeString(7, this.sLocation);
    t.writeInt64(8, this.lPid);
    t.writeStruct(9, this.tDecorationInfo);
    t.writeInt32(10, this.iWeekHeartStirRank);
    t.writeInt32(11, this.iWeekHeartBlockRank);
    t.writeStruct(12, this.tNobleLevelInfo)
}
;
HUYA.AdvanceUserEnterNotice.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.iWeekRank = t.readInt32(2, false, this.iWeekRank);
    this.iGuardLevel = t.readInt32(3, false, this.iGuardLevel);
    this.iNobleLevel = t.readInt32(4, false, this.iNobleLevel);
    this.bFromNearby = t.readBoolean(5, false, this.bFromNearby);
    this.dDistance = t.readDouble(6, false, this.dDistance);
    this.sLocation = t.readString(7, false, this.sLocation);
    this.lPid = t.readInt64(8, false, this.lPid);
    this.tDecorationInfo = t.readStruct(9, false, this.tDecorationInfo);
    this.iWeekHeartStirRank = t.readInt32(10, false, this.iWeekHeartStirRank);
    this.iWeekHeartBlockRank = t.readInt32(11, false, this.iWeekHeartBlockRank);
    this.tNobleLevelInfo = t.readStruct(12, false, this.tNobleLevelInfo)
}
;
HUYA.FansRankListRsp = function() {
    this.lBadgeId = 0;
    this.sBadgeName = "";
    this.vFansRankItem = new Taf.Vector(new HUYA.FansRankItem);
    this.iBadgeType = 0
}
;
HUYA.FansRankListRsp.prototype._clone = function() {
    return new HUYA.FansRankListRsp
}
;
HUYA.FansRankListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.FansRankListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.FansRankListRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lBadgeId);
    t.writeString(1, this.sBadgeName);
    t.writeVector(2, this.vFansRankItem);
    t.writeInt32(3, this.iBadgeType)
}
;
HUYA.FansRankListRsp.prototype.readFrom = function(t) {
    this.lBadgeId = t.readInt64(0, false, this.lBadgeId);
    this.sBadgeName = t.readString(1, false, this.sBadgeName);
    this.vFansRankItem = t.readVector(2, false, this.vFansRankItem);
    this.iBadgeType = t.readInt32(3, false, this.iBadgeType)
}
;
HUYA.UserGiftNotice = function() {
    this.tFansGiftInfo = new HUYA.GiftInfo;
    this.tSuperPupleGiftInfo = new HUYA.GiftInfo
}
;
HUYA.UserGiftNotice.prototype._clone = function() {
    return new HUYA.UserGiftNotice
}
;
HUYA.UserGiftNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserGiftNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserGiftNotice.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tFansGiftInfo);
    t.writeStruct(1, this.tSuperPupleGiftInfo)
}
;
HUYA.UserGiftNotice.prototype.readFrom = function(t) {
    this.tFansGiftInfo = t.readStruct(0, false, this.tFansGiftInfo);
    this.tSuperPupleGiftInfo = t.readStruct(1, false, this.tSuperPupleGiftInfo)
}
;
HUYA.GrandCeremonyChampionPresenter = function() {
    this.lUid = 0;
    this.sNick = ""
}
;
HUYA.GrandCeremonyChampionPresenter.prototype._clone = function() {
    return new HUYA.GrandCeremonyChampionPresenter
}
;
HUYA.GrandCeremonyChampionPresenter.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GrandCeremonyChampionPresenter.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GrandCeremonyChampionPresenter.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNick)
}
;
HUYA.GrandCeremonyChampionPresenter.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNick = t.readString(1, false, this.sNick)
}
;
HUYA.FansRankItem = function() {
    this.lUid = 0;
    this.sNickName = "";
    this.iScore = 0;
    this.iLevel = 0;
    this.sAvatarUrl = ""
}
;
HUYA.FansRankItem.prototype._clone = function() {
    return new HUYA.FansRankItem
}
;
HUYA.FansRankItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.FansRankItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.FansRankItem.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName);
    t.writeInt32(2, this.iScore);
    t.writeInt32(3, this.iLevel);
    t.writeString(4, this.sAvatarUrl)
}
;
HUYA.FansRankItem.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.iScore = t.readInt32(2, false, this.iScore);
    this.iLevel = t.readInt32(3, false, this.iLevel);
    this.sAvatarUrl = t.readString(4, false, this.sAvatarUrl)
}
;
HUYA.GuardInfo = function() {
    this.lUid = 0;
    this.lPid = 0;
    this.iGuardLevel = 0;
    this.lEndTime = 0
}
;
HUYA.GuardInfo.prototype._clone = function() {
    return new HUYA.GuardInfo
}
;
HUYA.GuardInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GuardInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GuardInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lPid);
    t.writeInt32(2, this.iGuardLevel);
    t.writeInt64(3, this.lEndTime)
}
;
HUYA.GuardInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.iGuardLevel = t.readInt32(2, false, this.iGuardLevel);
    this.lEndTime = t.readInt64(3, false, this.lEndTime)
}
;
HUYA.GetLivingInfoReq = function() {
    this.tId = new HUYA.UserId;
    this.lTopSid = 0;
    this.lSubSid = 0;
    this.lPresenterUid = 0;
    this.sTraceSource = "";
    this.sPassword = "";
    this.iRoomId = 0
}
;
HUYA.GetLivingInfoReq.prototype._clone = function() {
    return new HUYA.GetLivingInfoReq
}
;
HUYA.GetLivingInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetLivingInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetLivingInfoReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lTopSid);
    t.writeInt64(2, this.lSubSid);
    t.writeInt64(3, this.lPresenterUid);
    t.writeString(4, this.sTraceSource);
    t.writeString(5, this.sPassword);
    t.writeInt64(6, this.iRoomId)
}
;
HUYA.GetLivingInfoReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lTopSid = t.readInt64(1, false, this.lTopSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid);
    this.lPresenterUid = t.readInt64(3, false, this.lPresenterUid);
    this.sTraceSource = t.readString(4, false, this.sTraceSource);
    this.sPassword = t.readString(5, false, this.sPassword);
    this.iRoomId = t.readInt64(6, false, this.iRoomId)
}
;
HUYA.GetLivingInfoRsp = function() {
    this.bIsLiving = 0;
    this.tNotice = new HUYA.BeginLiveNotice;
    this.tStreamSettingNotice = new HUYA.StreamSettingNotice;
    this.bIsSelfLiving = 0
}
;
HUYA.GetLivingInfoRsp.prototype._clone = function() {
    return new HUYA.GetLivingInfoRsp
}
;
HUYA.GetLivingInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetLivingInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetLivingInfoRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.bIsLiving);
    t.writeStruct(1, this.tNotice);
    t.writeStruct(2, this.tStreamSettingNotice);
    t.writeInt32(3, this.bIsSelfLiving)
}
;
HUYA.GetLivingInfoRsp.prototype.readFrom = function(t) {
    this.bIsLiving = t.readInt32(0, false, this.bIsLiving);
    this.tNotice = t.readStruct(1, false, this.tNotice);
    this.tStreamSettingNotice = t.readStruct(2, false, this.tStreamSettingNotice);
    this.bIsSelfLiving = t.readInt32(3, false, this.bIsSelfLiving)
}
;
HUYA.StreamInfo = function() {
    this.sCdnType = "";
    this.iIsMaster = 0;
    this.lChannelId = 0;
    this.lSubChannelId = 0;
    this.lPresenterUid = 0;
    this.sStreamName = "";
    this.sFlvUrl = "";
    this.sFlvUrlSuffix = "";
    this.sFlvAntiCode = "";
    this.sHlsUrl = "";
    this.sHlsUrlSuffix = "";
    this.sHlsAntiCode = "";
    this.iLineIndex = 0;
    this.iIsMultiStream = 0;
    this.iPCPriorityRate = 0;
    this.iWebPriorityRate = 0;
    this.iMobilePriorityRate = 0;
    this.vFlvIPList = new Taf.Vector(new Taf.STRING);
    this.iIsP2PSupport = 0;
    this.sP2pUrl = "";
    this.sP2pUrlSuffix = "";
    this.sP2pAntiCode = "";
    this.lFreeFlag = 0;
    this.iIsHEVCSupport = 0;
    this.vP2pIPList = new Taf.Vector(new Taf.STRING)
}
;
HUYA.StreamInfo.prototype._clone = function() {
    return new HUYA.StreamInfo
}
;
HUYA.StreamInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.StreamInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.StreamInfo.prototype.writeTo = function(t) {
    t.writeString(0, this.sCdnType);
    t.writeInt32(1, this.iIsMaster);
    t.writeInt64(2, this.lChannelId);
    t.writeInt64(3, this.lSubChannelId);
    t.writeInt64(4, this.lPresenterUid);
    t.writeString(5, this.sStreamName);
    t.writeString(6, this.sFlvUrl);
    t.writeString(7, this.sFlvUrlSuffix);
    t.writeString(8, this.sFlvAntiCode);
    t.writeString(9, this.sHlsUrl);
    t.writeString(10, this.sHlsUrlSuffix);
    t.writeString(11, this.sHlsAntiCode);
    t.writeInt32(12, this.iLineIndex);
    t.writeInt32(13, this.iIsMultiStream);
    t.writeInt32(14, this.iPCPriorityRate);
    t.writeInt32(15, this.iWebPriorityRate);
    t.writeInt32(16, this.iMobilePriorityRate);
    t.writeVector(17, this.vFlvIPList);
    t.writeInt32(18, this.iIsP2PSupport);
    t.writeString(19, this.sP2pUrl);
    t.writeString(20, this.sP2pUrlSuffix);
    t.writeString(21, this.sP2pAntiCode);
    t.writeInt64(22, this.lFreeFlag);
    t.writeInt32(23, this.iIsHEVCSupport);
    t.writeVector(24, this.vP2pIPList)
}
;
HUYA.StreamInfo.prototype.readFrom = function(t) {
    this.sCdnType = t.readString(0, false, this.sCdnType);
    this.iIsMaster = t.readInt32(1, false, this.iIsMaster);
    this.lChannelId = t.readInt64(2, false, this.lChannelId);
    this.lSubChannelId = t.readInt64(3, false, this.lSubChannelId);
    this.lPresenterUid = t.readInt64(4, false, this.lPresenterUid);
    this.sStreamName = t.readString(5, false, this.sStreamName);
    this.sFlvUrl = t.readString(6, false, this.sFlvUrl);
    this.sFlvUrlSuffix = t.readString(7, false, this.sFlvUrlSuffix);
    this.sFlvAntiCode = t.readString(8, false, this.sFlvAntiCode);
    this.sHlsUrl = t.readString(9, false, this.sHlsUrl);
    this.sHlsUrlSuffix = t.readString(10, false, this.sHlsUrlSuffix);
    this.sHlsAntiCode = t.readString(11, false, this.sHlsAntiCode);
    this.iLineIndex = t.readInt32(12, false, this.iLineIndex);
    this.iIsMultiStream = t.readInt32(13, false, this.iIsMultiStream);
    this.iPCPriorityRate = t.readInt32(14, false, this.iPCPriorityRate);
    this.iWebPriorityRate = t.readInt32(15, false, this.iWebPriorityRate);
    this.iMobilePriorityRate = t.readInt32(16, false, this.iMobilePriorityRate);
    this.vFlvIPList = t.readVector(17, false, this.vFlvIPList);
    this.iIsP2PSupport = t.readInt32(18, false, this.iIsP2PSupport);
    this.sP2pUrl = t.readString(19, false, this.sP2pUrl);
    this.sP2pUrlSuffix = t.readString(20, false, this.sP2pUrlSuffix);
    this.sP2pAntiCode = t.readString(21, false, this.sP2pAntiCode);
    this.lFreeFlag = t.readInt64(22, false, this.lFreeFlag);
    this.iIsHEVCSupport = t.readInt32(23, false, this.iIsHEVCSupport);
    this.vP2pIPList = t.readVector(24, false, this.vP2pIPList)
}
;
HUYA.MultiStreamInfo = function() {
    this.sDisplayName = "";
    this.iBitRate = 0;
    this.iCodecType = 0;
    this.iCompatibleFlag = 0;
    this.iHEVCBitRate = -1
}
;
HUYA.MultiStreamInfo.prototype._clone = function() {
    return new HUYA.MultiStreamInfo
}
;
HUYA.MultiStreamInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MultiStreamInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MultiStreamInfo.prototype.writeTo = function(t) {
    t.writeString(0, this.sDisplayName);
    t.writeInt32(1, this.iBitRate);
    t.writeInt32(2, this.iCodecType);
    t.writeInt32(3, this.iCompatibleFlag);
    t.writeInt32(4, this.iHEVCBitRate)
}
;
HUYA.MultiStreamInfo.prototype.readFrom = function(t) {
    this.sDisplayName = t.readString(0, false, this.sDisplayName);
    this.iBitRate = t.readInt32(1, false, this.iBitRate);
    this.iCodecType = t.readInt32(2, false, this.iCodecType);
    this.iCompatibleFlag = t.readInt32(3, false, this.iCompatibleFlag);
    this.iHEVCBitRate = t.readInt32(4, false, this.iHEVCBitRate)
}
;
HUYA.StreamSettingNotice = function() {
    this.lPresenterUid = 0;
    this.iBitRate = 0;
    this.iResolution = 0;
    this.iFrameRate = 0;
    this.lLiveId = 0;
    this.sDisplayName = ""
}
;
HUYA.StreamSettingNotice.prototype._clone = function() {
    return new HUYA.StreamSettingNotice
}
;
HUYA.StreamSettingNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.StreamSettingNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.StreamSettingNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPresenterUid);
    t.writeInt32(1, this.iBitRate);
    t.writeInt32(2, this.iResolution);
    t.writeInt32(3, this.iFrameRate);
    t.writeInt64(4, this.lLiveId);
    t.writeString(5, this.sDisplayName)
}
;
HUYA.StreamSettingNotice.prototype.readFrom = function(t) {
    this.lPresenterUid = t.readInt64(0, false, this.lPresenterUid);
    this.iBitRate = t.readInt32(1, false, this.iBitRate);
    this.iResolution = t.readInt32(2, false, this.iResolution);
    this.iFrameRate = t.readInt32(3, false, this.iFrameRate);
    this.lLiveId = t.readInt64(4, false, this.lLiveId);
    this.sDisplayName = t.readString(5, false, this.sDisplayName)
}
;
HUYA.FansInfo = function() {
    this.lUid = 0;
    this.lBadgeId = 0;
    this.iBadgeLevel = 0;
    this.iScore = 0;
    this.iVFlag = 0;
    this.iBadgeType = 0;
    this.iSFFlag = 0
}
;
HUYA.FansInfo.prototype._clone = function() {
    return new HUYA.FansInfo
}
;
HUYA.FansInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.FansInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.FansInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lBadgeId);
    t.writeInt32(2, this.iBadgeLevel);
    t.writeInt32(3, this.iScore);
    t.writeInt32(4, this.iVFlag);
    t.writeInt32(5, this.iBadgeType);
    t.writeInt32(6, this.iSFFlag)
}
;
HUYA.FansInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lBadgeId = t.readInt64(1, false, this.lBadgeId);
    this.iBadgeLevel = t.readInt32(2, false, this.iBadgeLevel);
    this.iScore = t.readInt32(3, false, this.iScore);
    this.iVFlag = t.readInt32(4, false, this.iVFlag);
    this.iBadgeType = t.readInt32(5, false, this.iBadgeType);
    this.iSFFlag = t.readInt32(6, false, this.iSFFlag)
}
;
HUYA.GetCdnTokenReq = function() {
    this.url = "";
    this.cdn_type = "";
    this.stream_name = "";
    this.presenter_uid = 0
}
;
HUYA.GetCdnTokenReq.prototype._clone = function() {
    return new HUYA.GetCdnTokenReq
}
;
HUYA.GetCdnTokenReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetCdnTokenReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetCdnTokenReq.prototype.writeTo = function(t) {
    t.writeString(0, this.url);
    t.writeString(1, this.cdn_type);
    t.writeString(2, this.stream_name);
    t.writeInt64(3, this.presenter_uid)
}
;
HUYA.GetCdnTokenReq.prototype.readFrom = function(t) {
    this.url = t.readString(0, false, this.url);
    this.cdn_type = t.readString(1, false, this.cdn_type);
    this.stream_name = t.readString(2, false, this.stream_name);
    this.presenter_uid = t.readInt64(3, false, this.presenter_uid)
}
;
HUYA.GetCdnTokenRsp = function() {
    this.url = "";
    this.cdn_type = "";
    this.stream_name = "";
    this.presenter_uid = 0;
    this.anti_code = "";
    this.sTime = "";
    this.flv_anti_code = "";
    this.hls_anti_code = ""
}
;
HUYA.GetCdnTokenRsp.prototype._clone = function() {
    return new HUYA.GetCdnTokenRsp
}
;
HUYA.GetCdnTokenRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetCdnTokenRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetCdnTokenRsp.prototype.writeTo = function(t) {
    t.writeString(0, this.url);
    t.writeString(1, this.cdn_type);
    t.writeString(2, this.stream_name);
    t.writeInt64(3, this.presenter_uid);
    t.writeString(4, this.anti_code);
    t.writeString(5, this.sTime);
    t.writeString(6, this.flv_anti_code);
    t.writeString(7, this.hls_anti_code)
}
;
HUYA.GetCdnTokenRsp.prototype.readFrom = function(t) {
    this.url = t.readString(0, false, this.url);
    this.cdn_type = t.readString(1, false, this.cdn_type);
    this.stream_name = t.readString(2, false, this.stream_name);
    this.presenter_uid = t.readInt64(3, false, this.presenter_uid);
    this.anti_code = t.readString(4, false, this.anti_code);
    this.sTime = t.readString(5, false, this.sTime);
    this.flv_anti_code = t.readString(6, false, this.flv_anti_code);
    this.hls_anti_code = t.readString(7, false, this.hls_anti_code)
}
;
HUYA.LiveLaunchReq = function() {
    this.tId = new HUYA.UserId;
    this.tLiveUB = new HUYA.LiveUserbase;
    this.bSupportDomain = 0
}
;
HUYA.LiveLaunchReq.prototype._clone = function() {
    return new HUYA.LiveLaunchReq
}
;
HUYA.LiveLaunchReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LiveLaunchReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LiveLaunchReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeStruct(1, this.tLiveUB);
    t.writeInt32(2, this.bSupportDomain)
}
;
HUYA.LiveLaunchReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.tLiveUB = t.readStruct(1, false, this.tLiveUB);
    this.bSupportDomain = t.readInt32(2, false, this.bSupportDomain)
}
;
HUYA.LiveLaunchRsp = function() {
    this.sGuid = "";
    this.iTime = 0;
    this.vProxyList = new Taf.Vector(new HUYA.LiveProxyValue);
    this.eAccess = 0;
    this.sClientIp = ""
}
;
HUYA.LiveLaunchRsp.prototype._clone = function() {
    return new HUYA.LiveLaunchRsp
}
;
HUYA.LiveLaunchRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LiveLaunchRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LiveLaunchRsp.prototype.writeTo = function(t) {
    t.writeString(0, this.sGuid);
    t.writeInt32(1, this.iTime);
    t.writeVector(2, this.vProxyList);
    t.writeInt32(3, this.eAccess);
    t.writeString(4, this.sClientIp)
}
;
HUYA.LiveLaunchRsp.prototype.readFrom = function(t) {
    this.sGuid = t.readString(0, false, this.sGuid);
    this.iTime = t.readInt32(1, false, this.iTime);
    this.vProxyList = t.readVector(2, false, this.vProxyList);
    this.eAccess = t.readInt32(3, false, this.eAccess);
    this.sClientIp = t.readString(4, false, this.sClientIp)
}
;
HUYA.LiveAppUAEx = function() {
    this.sIMEI = "";
    this.sAPN = "";
    this.sNetType = "";
    this.sDeviceId = ""
}
;
HUYA.LiveAppUAEx.prototype._clone = function() {
    return new HUYA.LiveAppUAEx
}
;
HUYA.LiveAppUAEx.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LiveAppUAEx.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LiveAppUAEx.prototype.writeTo = function(t) {
    t.writeString(1, this.sIMEI);
    t.writeString(2, this.sAPN);
    t.writeString(3, this.sNetType);
    t.writeString(4, this.sDeviceId)
}
;
HUYA.LiveAppUAEx.prototype.readFrom = function(t) {
    this.sIMEI = t.readString(1, false, this.sIMEI);
    this.sAPN = t.readString(2, false, this.sAPN);
    this.sNetType = t.readString(3, false, this.sNetType);
    this.sDeviceId = t.readString(4, false, this.sDeviceId)
}
;
HUYA.LiveUserbase = function() {
    this.eSource = 0;
    this.eType = 0;
    this.tUAEx = new HUYA.LiveAppUAEx
}
;
HUYA.LiveUserbase.prototype._clone = function() {
    return new HUYA.LiveUserbase
}
;
HUYA.LiveUserbase.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LiveUserbase.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LiveUserbase.prototype.writeTo = function(t) {
    t.writeInt32(0, this.eSource);
    t.writeInt32(1, this.eType);
    t.writeStruct(2, this.tUAEx)
}
;
HUYA.LiveUserbase.prototype.readFrom = function(t) {
    this.eSource = t.readInt32(0, false, this.eSource);
    this.eType = t.readInt32(1, false, this.eType);
    this.tUAEx = t.readStruct(2, false, this.tUAEx)
}
;
HUYA.LiveProxyValue = function() {
    this.eProxyType = 0;
    this.sProxy = new Taf.Vector(new Taf.STRING)
}
;
HUYA.LiveProxyValue.prototype._clone = function() {
    return new HUYA.LiveProxyValue
}
;
HUYA.LiveProxyValue.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LiveProxyValue.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LiveProxyValue.prototype.writeTo = function(t) {
    t.writeInt32(0, this.eProxyType);
    t.writeVector(1, this.sProxy)
}
;
HUYA.LiveProxyValue.prototype.readFrom = function(t) {
    this.eProxyType = t.readInt32(0, false, this.eProxyType);
    this.sProxy = t.readVector(1, false, this.sProxy)
}
;
HUYA.SendCardPackageItemReq = function() {
    this.tId = new HUYA.UserId;
    this.lSid = 0;
    this.lSubSid = 0;
    this.iShowFreeitemInfo = 0;
    this.iItemType = 0;
    this.iItemCount = 0;
    this.lPresenterUid = 0;
    this.sPayId = "";
    this.sSendContent = "";
    this.sSenderNick = "";
    this.sPresenterNick = "";
    this.iPayPloy = 0;
    this.iItemCountByGroup = 0;
    this.iItemGroup = 0;
    this.iSuperPupleLevel = 0;
    this.iFromType = 0;
    this.sExpand = "";
    this.sToken = "";
    this.iTemplateType = 0;
    this.sTokencaKey = "";
    this.sPassport = "";
    this.iSenderShortSid = 0;
    this.iPayByFreeItem = 0;
    this.tExtUser = new HUYA.ExternalUser;
    this.iEventType = 0;
    this.mapParam = new Taf.Map(new Taf.STRING,new Taf.STRING);
    this.lRoomId = 0;
    this.lHomeOwnerUid = 0;
    this.iUseType = 0;
    this.iMergeDeliver = 0;
    this.iMultiSend = 0
}
;
HUYA.SendCardPackageItemReq.prototype._clone = function() {
    return new HUYA.SendCardPackageItemReq
}
;
HUYA.SendCardPackageItemReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SendCardPackageItemReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SendCardPackageItemReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lSid);
    t.writeInt64(2, this.lSubSid);
    t.writeInt32(3, this.iShowFreeitemInfo);
    t.writeInt32(4, this.iItemType);
    t.writeInt32(5, this.iItemCount);
    t.writeInt64(6, this.lPresenterUid);
    t.writeString(7, this.sPayId);
    t.writeString(9, this.sSendContent);
    t.writeString(10, this.sSenderNick);
    t.writeString(11, this.sPresenterNick);
    t.writeInt32(12, this.iPayPloy);
    t.writeInt32(13, this.iItemCountByGroup);
    t.writeInt32(14, this.iItemGroup);
    t.writeInt32(15, this.iSuperPupleLevel);
    t.writeInt32(16, this.iFromType);
    t.writeString(17, this.sExpand);
    t.writeString(18, this.sToken);
    t.writeInt32(19, this.iTemplateType);
    t.writeString(20, this.sTokencaKey);
    t.writeString(21, this.sPassport);
    t.writeInt64(22, this.iSenderShortSid);
    t.writeInt32(23, this.iPayByFreeItem);
    t.writeStruct(24, this.tExtUser);
    t.writeInt16(25, this.iEventType);
    t.writeMap(26, this.mapParam);
    t.writeInt64(27, this.lRoomId);
    t.writeInt64(28, this.lHomeOwnerUid);
    t.writeInt32(29, this.iUseType);
    t.writeInt32(30, this.iMergeDeliver);
    t.writeInt32(31, this.iMultiSend)
}
;
HUYA.SendCardPackageItemReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lSid = t.readInt64(1, false, this.lSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid);
    this.iShowFreeitemInfo = t.readInt32(3, false, this.iShowFreeitemInfo);
    this.iItemType = t.readInt32(4, false, this.iItemType);
    this.iItemCount = t.readInt32(5, false, this.iItemCount);
    this.lPresenterUid = t.readInt64(6, false, this.lPresenterUid);
    this.sPayId = t.readString(7, false, this.sPayId);
    this.sSendContent = t.readString(9, false, this.sSendContent);
    this.sSenderNick = t.readString(10, false, this.sSenderNick);
    this.sPresenterNick = t.readString(11, false, this.sPresenterNick);
    this.iPayPloy = t.readInt32(12, false, this.iPayPloy);
    this.iItemCountByGroup = t.readInt32(13, false, this.iItemCountByGroup);
    this.iItemGroup = t.readInt32(14, false, this.iItemGroup);
    this.iSuperPupleLevel = t.readInt32(15, false, this.iSuperPupleLevel);
    this.iFromType = t.readInt32(16, false, this.iFromType);
    this.sExpand = t.readString(17, false, this.sExpand);
    this.sToken = t.readString(18, false, this.sToken);
    this.iTemplateType = t.readInt32(19, false, this.iTemplateType);
    this.sTokencaKey = t.readString(20, false, this.sTokencaKey);
    this.sPassport = t.readString(21, false, this.sPassport);
    this.iSenderShortSid = t.readInt64(22, false, this.iSenderShortSid);
    this.iPayByFreeItem = t.readInt32(23, false, this.iPayByFreeItem);
    this.tExtUser = t.readStruct(24, false, this.tExtUser);
    this.iEventType = t.readInt16(25, false, this.iEventType);
    this.mapParam = t.readMap(26, false, this.mapParam);
    this.lRoomId = t.readInt64(27, false, this.lRoomId);
    this.lHomeOwnerUid = t.readInt64(28, false, this.lHomeOwnerUid);
    this.iUseType = t.readInt32(29, false, this.iUseType);
    this.iMergeDeliver = t.readInt32(30, false, this.iMergeDeliver);
    this.iMultiSend = t.readInt32(31, false, this.iMultiSend)
}
;
HUYA.SendCardPackageItemRsp = function() {
    this.iPayRespCode = 0;
    this.iItemType = 0;
    this.iItemCount = 0;
    this.strPayId = "";
    this.strPayConfirmUrl = "";
    this.strSendContent = "";
    this.iItemCountByGroup = 0;
    this.iItemGroup = 0;
    this.lPresenterUid = 0;
    this.sExpand = "";
    this.strPayItemInfo = "";
    this.iPayType = 0;
    this.sMsg = "";
    this.iPayTotal = 0
}
;
HUYA.SendCardPackageItemRsp.prototype._clone = function() {
    return new HUYA.SendCardPackageItemRsp
}
;
HUYA.SendCardPackageItemRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SendCardPackageItemRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SendCardPackageItemRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iPayRespCode);
    t.writeInt32(1, this.iItemType);
    t.writeInt32(2, this.iItemCount);
    t.writeString(3, this.strPayId);
    t.writeString(4, this.strPayConfirmUrl);
    t.writeString(5, this.strSendContent);
    t.writeInt32(6, this.iItemCountByGroup);
    t.writeInt32(7, this.iItemGroup);
    t.writeInt64(8, this.lPresenterUid);
    t.writeString(9, this.sExpand);
    t.writeString(10, this.strPayItemInfo);
    t.writeInt32(11, this.iPayType);
    t.writeString(12, this.sMsg);
    t.writeInt32(13, this.iPayTotal)
}
;
HUYA.SendCardPackageItemRsp.prototype.readFrom = function(t) {
    this.iPayRespCode = t.readInt32(0, false, this.iPayRespCode);
    this.iItemType = t.readInt32(1, false, this.iItemType);
    this.iItemCount = t.readInt32(2, false, this.iItemCount);
    this.strPayId = t.readString(3, false, this.strPayId);
    this.strPayConfirmUrl = t.readString(4, false, this.strPayConfirmUrl);
    this.strSendContent = t.readString(5, false, this.strSendContent);
    this.iItemCountByGroup = t.readInt32(6, false, this.iItemCountByGroup);
    this.iItemGroup = t.readInt32(7, false, this.iItemGroup);
    this.lPresenterUid = t.readInt64(8, false, this.lPresenterUid);
    this.sExpand = t.readString(9, false, this.sExpand);
    this.strPayItemInfo = t.readString(10, false, this.strPayItemInfo);
    this.iPayType = t.readInt32(11, false, this.iPayType);
    this.sMsg = t.readString(12, false, this.sMsg);
    this.iPayTotal = t.readInt32(13, false, this.iPayTotal)
}
;
HUYA.GetVerificationStatusReq = function() {
    this.tId = new HUYA.UserId
}
;
HUYA.GetVerificationStatusReq.prototype._clone = function() {
    return new HUYA.GetVerificationStatusReq
}
;
HUYA.GetVerificationStatusReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetVerificationStatusReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetVerificationStatusReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId)
}
;
HUYA.GetVerificationStatusReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId)
}
;
HUYA.GetFirstRechargePkgStatusReq = function() {
    this.tId = new HUYA.UserId
}
;
HUYA.GetFirstRechargePkgStatusReq.prototype._clone = function() {
    return new HUYA.GetFirstRechargePkgStatusReq
}
;
HUYA.GetFirstRechargePkgStatusReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetFirstRechargePkgStatusReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetFirstRechargePkgStatusReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId)
}
;
HUYA.GetFirstRechargePkgStatusReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId)
}
;
HUYA.MuteRoomUserReq = function() {
    this.tId = new HUYA.UserId;
    this.lUid = 0;
    this.sText = "";
    this.lPresenterUid = 0;
    this.lSubcid = 0;
    this.iMutedTime = 0;
    this.iMutedAction = 0;
    this.iReasonType = 0;
    this.sReason = "";
    this.iComeFromType = 0;
    this.mutedFromType = HUYA.MutedComeFromType.Muted_DefaultBarrage
}
;
HUYA.MuteRoomUserReq.prototype._clone = function() {
    return new HUYA.MuteRoomUserReq
}
;
HUYA.MuteRoomUserReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MuteRoomUserReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MuteRoomUserReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lUid);
    t.writeString(2, this.sText);
    t.writeInt64(3, this.lPresenterUid);
    t.writeInt64(4, this.lSubcid);
    t.writeInt32(5, this.iMutedTime);
    t.writeInt32(6, this.iMutedAction);
    t.writeInt32(7, this.iReasonType);
    t.writeString(8, this.sReason);
    t.writeInt32(9, this.iComeFromType);
    t.writeInt32(10, this.mutedFromType)
}
;
HUYA.MuteRoomUserReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lUid = t.readInt64(1, false, this.lUid);
    this.sText = t.readString(2, false, this.sText);
    this.lPresenterUid = t.readInt64(3, false, this.lPresenterUid);
    this.lSubcid = t.readInt64(4, false, this.lSubcid);
    this.iMutedTime = t.readInt32(5, false, this.iMutedTime);
    this.iMutedAction = t.readInt32(6, false, this.iMutedAction);
    this.iReasonType = t.readInt32(7, false, this.iReasonType);
    this.sReason = t.readString(8, false, this.sReason);
    this.iComeFromType = t.readInt32(9, false, this.iComeFromType);
    this.mutedFromType = t.readInt32(10, false, this.mutedFromType)
}
;
HUYA.MuteRoomUserRsp = function() {
    this.iRetCode = 0;
    this.sMsg = ""
}
;
HUYA.MuteRoomUserRsp.prototype._clone = function() {
    return new HUYA.MuteRoomUserRsp
}
;
HUYA.MuteRoomUserRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MuteRoomUserRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MuteRoomUserRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRetCode);
    t.writeString(1, this.sMsg)
}
;
HUYA.MuteRoomUserRsp.prototype.readFrom = function(t) {
    this.iRetCode = t.readInt32(0, false, this.iRetCode);
    this.sMsg = t.readString(1, false, this.sMsg)
}
;
HUYA.MutedComeFromType = {
    Muted_DefaultBarrage: 0,
    Muted_WeekRank: 1,
    Muted_FansRank: 2,
    Muted_VipBar: 3,
    Muted_FansSurport: 4,
    Muted_WeekHeartStirRank: 5,
    Muted_WeekHeartBlockRank: 6,
    Muted_OnSendItem: 7,
    Muted_OnUserEnterNotic: 8
};
HUYA.GetVerificationStatusResp = function() {
    this.iStatus = 0;
    this.lExpenditure = 0
}
;
HUYA.GetVerificationStatusResp.prototype._clone = function() {
    return new HUYA.GetVerificationStatusResp
}
;
HUYA.GetVerificationStatusResp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetVerificationStatusResp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetVerificationStatusResp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iStatus);
    t.writeInt64(1, this.lExpenditure)
}
;
HUYA.GetVerificationStatusResp.prototype.readFrom = function(t) {
    this.iStatus = t.readInt32(0, false, this.iStatus);
    this.lExpenditure = t.readInt64(1, false, this.lExpenditure)
}
;
HUYA.GetFirstRechargePkgStatusResp = function() {
    this.iStatus = 0;
    this.iFetch = 0;
    this.sTip = ""
}
;
HUYA.GetFirstRechargePkgStatusResp.prototype._clone = function() {
    return new HUYA.GetFirstRechargePkgStatusResp
}
;
HUYA.GetFirstRechargePkgStatusResp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetFirstRechargePkgStatusResp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetFirstRechargePkgStatusResp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iStatus);
    t.writeInt32(1, this.iFetch);
    t.writeString(2, this.sTip)
}
;
HUYA.GetFirstRechargePkgStatusResp.prototype.readFrom = function(t) {
    this.iStatus = t.readInt32(0, false, this.iStatus);
    this.iFetch = t.readInt32(1, false, this.iFetch);
    this.sTip = t.readString(2, false, this.sTip)
}
;
HUYA.SendItemSubBroadcastPacket = function() {
    this.iItemType = 0;
    this.strPayId = "";
    this.iItemCount = 0;
    this.lPresenterUid = 0;
    this.lSenderUid = 0;
    this.sPresenterNick = "";
    this.sSenderNick = "";
    this.sSendContent = "";
    this.iItemCountByGroup = 0;
    this.iItemGroup = 0;
    this.iSuperPupleLevel = 0;
    this.iComboScore = 0;
    this.iDisplayInfo = 0;
    this.iEffectType = 0;
    this.iSenderIcon = "";
    this.iPresenterIcon = "";
    this.iTemplateType = 0;
    this.sExpand = "";
    this.bBusi = false;
    this.iColorEffectType = 0;
    this.sPropsName = "";
    this.iAccpet = 0;
    this.iEventType = 0;
    this.userInfo = new HUYA.UserIdentityInfo;
    this.lRoomId = 0;
    this.lHomeOwnerUid = 0;
    this.streamerInfo = new HUYA.StreamerNode;
    this.iPayType = -1;
    this.iNobleLevel = 0;
    this.tNobleLevel = new HUYA.NobleLevelInfo;
    this.tEffectInfo = new HUYA.ItemEffectInfo;
    this.vExUid = new Taf.Vector(new Taf.INT64);
    this.iComboStatus = 0;
    this.iPidColorType = 0
}
;
HUYA.SendItemSubBroadcastPacket.prototype._clone = function() {
    return new HUYA.SendItemSubBroadcastPacket
}
;
HUYA.SendItemSubBroadcastPacket.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SendItemSubBroadcastPacket.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SendItemSubBroadcastPacket.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iItemType);
    t.writeString(1, this.strPayId);
    t.writeInt32(2, this.iItemCount);
    t.writeInt64(3, this.lPresenterUid);
    t.writeInt64(4, this.lSenderUid);
    t.writeString(5, this.sPresenterNick);
    t.writeString(6, this.sSenderNick);
    t.writeString(7, this.sSendContent);
    t.writeInt32(8, this.iItemCountByGroup);
    t.writeInt32(9, this.iItemGroup);
    t.writeInt32(10, this.iSuperPupleLevel);
    t.writeInt32(11, this.iComboScore);
    t.writeInt32(12, this.iDisplayInfo);
    t.writeInt32(13, this.iEffectType);
    t.writeString(14, this.iSenderIcon);
    t.writeString(15, this.iPresenterIcon);
    t.writeInt32(16, this.iTemplateType);
    t.writeString(17, this.sExpand);
    t.writeBoolean(18, this.bBusi);
    t.writeInt32(19, this.iColorEffectType);
    t.writeString(20, this.sPropsName);
    t.writeInt16(21, this.iAccpet);
    t.writeInt16(22, this.iEventType);
    t.writeStruct(23, this.userInfo);
    t.writeInt64(24, this.lRoomId);
    t.writeInt64(25, this.lHomeOwnerUid);
    t.writeStruct(26, this.streamerInfo);
    t.writeInt32(27, this.iPayType);
    t.writeInt32(28, this.iNobleLevel);
    t.writeStruct(29, this.tNobleLevel);
    t.writeStruct(30, this.tEffectInfo);
    t.writeVector(31, this.vExUid);
    t.writeInt32(32, this.iComboStatus);
    t.writeInt32(33, this.iPidColorType)
}
;
HUYA.SendItemSubBroadcastPacket.prototype.readFrom = function(t) {
    this.iItemType = t.readInt32(0, false, this.iItemType);
    this.strPayId = t.readString(1, false, this.strPayId);
    this.iItemCount = t.readInt32(2, false, this.iItemCount);
    this.lPresenterUid = t.readInt64(3, false, this.lPresenterUid);
    this.lSenderUid = t.readInt64(4, false, this.lSenderUid);
    this.sPresenterNick = t.readString(5, false, this.sPresenterNick);
    this.sSenderNick = t.readString(6, false, this.sSenderNick);
    this.sSendContent = t.readString(7, false, this.sSendContent);
    this.iItemCountByGroup = t.readInt32(8, false, this.iItemCountByGroup);
    this.iItemGroup = t.readInt32(9, false, this.iItemGroup);
    this.iSuperPupleLevel = t.readInt32(10, false, this.iSuperPupleLevel);
    this.iComboScore = t.readInt32(11, false, this.iComboScore);
    this.iDisplayInfo = t.readInt32(12, false, this.iDisplayInfo);
    this.iEffectType = t.readInt32(13, false, this.iEffectType);
    this.iSenderIcon = t.readString(14, false, this.iSenderIcon);
    this.iPresenterIcon = t.readString(15, false, this.iPresenterIcon);
    this.iTemplateType = t.readInt32(16, false, this.iTemplateType);
    this.sExpand = t.readString(17, false, this.sExpand);
    this.bBusi = t.readBoolean(18, false, this.bBusi);
    this.iColorEffectType = t.readInt32(19, false, this.iColorEffectType);
    this.sPropsName = t.readString(20, false, this.sPropsName);
    this.iAccpet = t.readInt16(21, false, this.iAccpet);
    this.iEventType = t.readInt16(22, false, this.iEventType);
    this.userInfo = t.readStruct(23, false, this.userInfo);
    this.lRoomId = t.readInt64(24, false, this.lRoomId);
    this.lHomeOwnerUid = t.readInt64(25, false, this.lHomeOwnerUid);
    this.streamerInfo = t.readStruct(26, false, this.streamerInfo);
    this.iPayType = t.readInt32(27, false, this.iPayType);
    this.iNobleLevel = t.readInt32(28, false, this.iNobleLevel);
    this.tNobleLevel = t.readStruct(29, false, this.tNobleLevel);
    this.tEffectInfo = t.readStruct(30, false, this.tEffectInfo);
    this.vExUid = t.readVector(31, false, this.vExUid);
    this.iComboStatus = t.readInt32(32, false, this.iComboStatus);
    this.iPidColorType = t.readInt32(33, false, this.iPidColorType)
}
;
HUYA.SendItemNoticeWordBroadcastPacket = function() {
    this.iItemType = 0;
    this.iItemCount = 0;
    this.lSenderSid = 0;
    this.lSenderUid = 0;
    this.sSenderNick = "";
    this.lPresenterUid = 0;
    this.sPresenterNick = "";
    this.lNoticeChannelCount = 0;
    this.iItemCountByGroup = 0;
    this.iItemGroup = 0;
    this.iDisplayInfo = 0;
    this.iSuperPupleLevel = 0;
    this.iTemplateType = 0;
    this.sExpand = "";
    this.bBusi = false;
    this.iShowTime = 0;
    this.lPresenterYY = 0;
    this.lSid = 0;
    this.lSubSid = 0;
    this.lRoomId = 0;
    this.iNobleLevel = 0;
    this.tNobleLevel = new HUYA.NobleLevelInfo
}
;
HUYA.SendItemNoticeWordBroadcastPacket.prototype._clone = function() {
    return new HUYA.SendItemNoticeWordBroadcastPacket
}
;
HUYA.SendItemNoticeWordBroadcastPacket.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SendItemNoticeWordBroadcastPacket.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SendItemNoticeWordBroadcastPacket.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iItemType);
    t.writeInt32(1, this.iItemCount);
    t.writeInt64(2, this.lSenderSid);
    t.writeInt64(3, this.lSenderUid);
    t.writeString(4, this.sSenderNick);
    t.writeInt64(5, this.lPresenterUid);
    t.writeString(6, this.sPresenterNick);
    t.writeInt64(7, this.lNoticeChannelCount);
    t.writeInt32(8, this.iItemCountByGroup);
    t.writeInt32(9, this.iItemGroup);
    t.writeInt32(10, this.iDisplayInfo);
    t.writeInt32(11, this.iSuperPupleLevel);
    t.writeInt32(12, this.iTemplateType);
    t.writeString(13, this.sExpand);
    t.writeBoolean(14, this.bBusi);
    t.writeInt32(15, this.iShowTime);
    t.writeInt64(16, this.lPresenterYY);
    t.writeInt64(17, this.lSid);
    t.writeInt64(18, this.lSubSid);
    t.writeInt64(19, this.lRoomId);
    t.writeInt32(20, this.iNobleLevel);
    t.writeStruct(21, this.tNobleLevel)
}
;
HUYA.SendItemNoticeWordBroadcastPacket.prototype.readFrom = function(t) {
    this.iItemType = t.readInt32(0, false, this.iItemType);
    this.iItemCount = t.readInt32(1, false, this.iItemCount);
    this.lSenderSid = t.readInt64(2, false, this.lSenderSid);
    this.lSenderUid = t.readInt64(3, false, this.lSenderUid);
    this.sSenderNick = t.readString(4, false, this.sSenderNick);
    this.lPresenterUid = t.readInt64(5, false, this.lPresenterUid);
    this.sPresenterNick = t.readString(6, false, this.sPresenterNick);
    this.lNoticeChannelCount = t.readInt64(7, false, this.lNoticeChannelCount);
    this.iItemCountByGroup = t.readInt32(8, false, this.iItemCountByGroup);
    this.iItemGroup = t.readInt32(9, false, this.iItemGroup);
    this.iDisplayInfo = t.readInt32(10, false, this.iDisplayInfo);
    this.iSuperPupleLevel = t.readInt32(11, false, this.iSuperPupleLevel);
    this.iTemplateType = t.readInt32(12, false, this.iTemplateType);
    this.sExpand = t.readString(13, false, this.sExpand);
    this.bBusi = t.readBoolean(14, false, this.bBusi);
    this.iShowTime = t.readInt32(15, false, this.iShowTime);
    this.lPresenterYY = t.readInt64(16, false, this.lPresenterYY);
    this.lSid = t.readInt64(17, false, this.lSid);
    this.lSubSid = t.readInt64(18, false, this.lSubSid);
    this.lRoomId = t.readInt64(19, false, this.lRoomId);
    this.iNobleLevel = t.readInt32(20, false, this.iNobleLevel);
    this.tNobleLevel = t.readStruct(21, false, this.tNobleLevel)
}
;
HUYA.BeginLiveNotice = function() {
    this.lPresenterUid = 0;
    this.iGameId = 0;
    this.sGameName = "";
    this.iRandomRange = 0;
    this.iStreamType = 0;
    this.vStreamInfo = new Taf.Vector(new HUYA.StreamInfo);
    this.vCdnList = new Taf.Vector(new Taf.STRING);
    this.lLiveId = 0;
    this.iPCDefaultBitRate = 0;
    this.iWebDefaultBitRate = 0;
    this.iMobileDefaultBitRate = 0;
    this.lMultiStreamFlag = 0;
    this.sNick = "";
    this.lYYId = 0;
    this.lAttendeeCount = 0;
    this.iCodecType = 0;
    this.iScreenType = 0;
    this.vMultiStreamInfo = new Taf.Vector(new HUYA.MultiStreamInfo);
    this.sLiveDesc = "";
    this.lLiveCompatibleFlag = 0;
    this.sAvatarUrl = "";
    this.iSourceType = 0;
    this.sSubchannelName = "";
    this.sVideoCaptureUrl = "";
    this.iStartTime = 0;
    this.lChannelId = 0;
    this.lSubChannelId = 0;
    this.sLocation = "";
    this.iCdnPolicyLevel = 0;
    this.iGameType = 0;
    this.mMiscInfo = new Taf.Map(new Taf.STRING,new Taf.STRING);
    this.iShortChannel = 0;
    this.iRoomId = 0;
    this.bIsRoomSecret = 0;
    this.iHashPolicy = 0;
    this.lSignChannel = 0
}
;
HUYA.BeginLiveNotice.prototype._clone = function() {
    return new HUYA.BeginLiveNotice
}
;
HUYA.BeginLiveNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BeginLiveNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BeginLiveNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPresenterUid);
    t.writeInt32(1, this.iGameId);
    t.writeString(2, this.sGameName);
    t.writeInt32(3, this.iRandomRange);
    t.writeInt32(4, this.iStreamType);
    t.writeVector(5, this.vStreamInfo);
    t.writeVector(6, this.vCdnList);
    t.writeInt64(7, this.lLiveId);
    t.writeInt32(8, this.iPCDefaultBitRate);
    t.writeInt32(9, this.iWebDefaultBitRate);
    t.writeInt32(10, this.iMobileDefaultBitRate);
    t.writeInt64(11, this.lMultiStreamFlag);
    t.writeString(12, this.sNick);
    t.writeInt64(13, this.lYYId);
    t.writeInt64(14, this.lAttendeeCount);
    t.writeInt32(15, this.iCodecType);
    t.writeInt32(16, this.iScreenType);
    t.writeVector(17, this.vMultiStreamInfo);
    t.writeString(18, this.sLiveDesc);
    t.writeInt64(19, this.lLiveCompatibleFlag);
    t.writeString(20, this.sAvatarUrl);
    t.writeInt32(21, this.iSourceType);
    t.writeString(22, this.sSubchannelName);
    t.writeString(23, this.sVideoCaptureUrl);
    t.writeInt32(24, this.iStartTime);
    t.writeInt64(25, this.lChannelId);
    t.writeInt64(26, this.lSubChannelId);
    t.writeString(27, this.sLocation);
    t.writeInt32(28, this.iCdnPolicyLevel);
    t.writeInt32(29, this.iGameType);
    t.writeMap(30, this.mMiscInfo);
    t.writeInt32(31, this.iShortChannel);
    t.writeInt32(32, this.iRoomId);
    t.writeInt32(33, this.bIsRoomSecret);
    t.writeInt32(34, this.iHashPolicy);
    t.writeInt64(35, this.lSignChannel)
}
;
HUYA.BeginLiveNotice.prototype.readFrom = function(t) {
    this.lPresenterUid = t.readInt64(0, false, this.lPresenterUid);
    this.iGameId = t.readInt32(1, false, this.iGameId);
    this.sGameName = t.readString(2, false, this.sGameName);
    this.iRandomRange = t.readInt32(3, false, this.iRandomRange);
    this.iStreamType = t.readInt32(4, false, this.iStreamType);
    this.vStreamInfo = t.readVector(5, false, this.vStreamInfo);
    this.vCdnList = t.readVector(6, false, this.vCdnList);
    this.lLiveId = t.readInt64(7, false, this.lLiveId);
    this.iPCDefaultBitRate = t.readInt32(8, false, this.iPCDefaultBitRate);
    this.iWebDefaultBitRate = t.readInt32(9, false, this.iWebDefaultBitRate);
    this.iMobileDefaultBitRate = t.readInt32(10, false, this.iMobileDefaultBitRate);
    this.lMultiStreamFlag = t.readInt64(11, false, this.lMultiStreamFlag);
    this.sNick = t.readString(12, false, this.sNick);
    this.lYYId = t.readInt64(13, false, this.lYYId);
    this.lAttendeeCount = t.readInt64(14, false, this.lAttendeeCount);
    this.iCodecType = t.readInt32(15, false, this.iCodecType);
    this.iScreenType = t.readInt32(16, false, this.iScreenType);
    this.vMultiStreamInfo = t.readVector(17, false, this.vMultiStreamInfo);
    this.sLiveDesc = t.readString(18, false, this.sLiveDesc);
    this.lLiveCompatibleFlag = t.readInt64(19, false, this.lLiveCompatibleFlag);
    this.sAvatarUrl = t.readString(20, false, this.sAvatarUrl);
    this.iSourceType = t.readInt32(21, false, this.iSourceType);
    this.sSubchannelName = t.readString(22, false, this.sSubchannelName);
    this.sVideoCaptureUrl = t.readString(23, false, this.sVideoCaptureUrl);
    this.iStartTime = t.readInt32(24, false, this.iStartTime);
    this.lChannelId = t.readInt64(25, false, this.lChannelId);
    this.lSubChannelId = t.readInt64(26, false, this.lSubChannelId);
    this.sLocation = t.readString(27, false, this.sLocation);
    this.iCdnPolicyLevel = t.readInt32(28, false, this.iCdnPolicyLevel);
    this.iGameType = t.readInt32(29, false, this.iGameType);
    this.mMiscInfo = t.readMap(30, false, this.mMiscInfo);
    this.iShortChannel = t.readInt32(31, false, this.iShortChannel);
    this.iRoomId = t.readInt32(32, false, this.iRoomId);
    this.bIsRoomSecret = t.readInt32(33, false, this.bIsRoomSecret);
    this.iHashPolicy = t.readInt32(34, false, this.iHashPolicy);
    this.lSignChannel = t.readInt64(35, false, this.lSignChannel)
}
;
HUYA.EndLiveNotice = function() {
    this.lPresenterUid = 0;
    this.iReason = 0;
    this.lLiveId = 0;
    this.sReason = ""
}
;
HUYA.EndLiveNotice.prototype._clone = function() {
    return new HUYA.EndLiveNotice
}
;
HUYA.EndLiveNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.EndLiveNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.EndLiveNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPresenterUid);
    t.writeInt32(1, this.iReason);
    t.writeInt64(2, this.lLiveId);
    t.writeString(3, this.sReason)
}
;
HUYA.EndLiveNotice.prototype.readFrom = function(t) {
    this.lPresenterUid = t.readInt64(0, false, this.lPresenterUid);
    this.iReason = t.readInt32(1, false, this.iReason);
    this.lLiveId = t.readInt64(2, false, this.lLiveId);
    this.sReason = t.readString(3, false, this.sReason)
}
;
HUYA.LiveInfoChangedNotice = function() {
    this.lPresenterUid = 0;
    this.iGameId = 0;
    this.sGameName = "";
    this.lLiveId = 0;
    this.sLiveDesc = ""
}
;
HUYA.LiveInfoChangedNotice.prototype._clone = function() {
    return new HUYA.LiveInfoChangedNotice
}
;
HUYA.LiveInfoChangedNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LiveInfoChangedNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LiveInfoChangedNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPresenterUid);
    t.writeInt32(1, this.iGameId);
    t.writeString(2, this.sGameName);
    t.writeInt64(3, this.lLiveId);
    t.writeString(4, this.sLiveDesc)
}
;
HUYA.LiveInfoChangedNotice.prototype.readFrom = function(t) {
    this.lPresenterUid = t.readInt64(0, false, this.lPresenterUid);
    this.iGameId = t.readInt32(1, false, this.iGameId);
    this.sGameName = t.readString(2, false, this.sGameName);
    this.lLiveId = t.readInt64(3, false, this.lLiveId);
    this.sLiveDesc = t.readString(4, false, this.sLiveDesc)
}
;
HUYA.NobleNotice = function() {
    this.tNobleInfo = new HUYA.NobleBase
}
;
HUYA.NobleNotice.prototype._clone = function() {
    return new HUYA.NobleNotice
}
;
HUYA.NobleNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NobleNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NobleNotice.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tNobleInfo)
}
;
HUYA.NobleNotice.prototype.readFrom = function(t) {
    this.tNobleInfo = t.readStruct(0, false, this.tNobleInfo)
}
;
HUYA.NobleItem = function() {
    this.iNobleLevel = 0;
    this.lDeadLine = 0
}
;
HUYA.NobleItem.prototype._clone = function() {
    return new HUYA.NobleItem
}
;
HUYA.NobleItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NobleItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NobleItem.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iNobleLevel);
    t.writeInt64(1, this.lDeadLine)
}
;
HUYA.NobleItem.prototype.readFrom = function(t) {
    this.iNobleLevel = t.readInt32(0, false, this.iNobleLevel);
    this.lDeadLine = t.readInt64(1, false, this.lDeadLine)
}
;
HUYA.NobleEnterNotice = function() {
    this.tNobleInfo = new HUYA.NobleBase
}
;
HUYA.NobleEnterNotice.prototype._clone = function() {
    return new HUYA.NobleEnterNotice
}
;
HUYA.NobleEnterNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NobleEnterNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NobleEnterNotice.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tNobleInfo)
}
;
HUYA.NobleEnterNotice.prototype.readFrom = function(t) {
    this.tNobleInfo = t.readStruct(0, false, this.tNobleInfo)
}
;
HUYA.NobleSpeakReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0;
    this.sMsg = "";
    this.tSender = new HUYA.SenderItem;
    this.tNoble = new HUYA.NobleItem;
    this.tFans = new HUYA.FansItem;
    this.tVipSimle = new HUYA.VipSmileItem;
    this.tStamp = new HUYA.StampItem;
    this.tMass = new HUYA.MassItem;
    this.mReserver = new Taf.Map(new Taf.STRING,new Taf.STRING)
}
;
HUYA.NobleSpeakReq.prototype._clone = function() {
    return new HUYA.NobleSpeakReq
}
;
HUYA.NobleSpeakReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NobleSpeakReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NobleSpeakReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeInt64(3, this.lPid);
    t.writeString(4, this.sMsg);
    t.writeStruct(5, this.tSender);
    t.writeStruct(6, this.tNoble);
    t.writeStruct(7, this.tFans);
    t.writeStruct(8, this.tVipSimle);
    t.writeStruct(9, this.tStamp);
    t.writeStruct(10, this.tMass);
    t.writeMap(11, this.mReserver)
}
;
HUYA.NobleSpeakReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.lPid = t.readInt64(3, false, this.lPid);
    this.sMsg = t.readString(4, false, this.sMsg);
    this.tSender = t.readStruct(5, false, this.tSender);
    this.tNoble = t.readStruct(6, false, this.tNoble);
    this.tFans = t.readStruct(7, false, this.tFans);
    this.tVipSimle = t.readStruct(8, false, this.tVipSimle);
    this.tStamp = t.readStruct(9, false, this.tStamp);
    this.tMass = t.readStruct(10, false, this.tMass);
    this.mReserver = t.readMap(11, false, this.mReserver)
}
;
HUYA.NobleSpeakResp = function() {
    this.iRespCode = 0;
    this.lUid = 0;
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0
}
;
HUYA.NobleSpeakResp.prototype._clone = function() {
    return new HUYA.NobleSpeakResp
}
;
HUYA.NobleSpeakResp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NobleSpeakResp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NobleSpeakResp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRespCode);
    t.writeInt64(1, this.lUid);
    t.writeInt64(2, this.lTid);
    t.writeInt64(3, this.lSid);
    t.writeInt64(4, this.lPid)
}
;
HUYA.NobleSpeakResp.prototype.readFrom = function(t) {
    this.iRespCode = t.readInt32(0, false, this.iRespCode);
    this.lUid = t.readInt64(1, false, this.lUid);
    this.lTid = t.readInt64(2, false, this.lTid);
    this.lSid = t.readInt64(3, false, this.lSid);
    this.lPid = t.readInt64(4, false, this.lPid)
}
;
HUYA.NobleSpeakBrst = function() {
    this.tUserId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0;
    this.sMsg = "";
    this.tSender = new HUYA.SenderItem;
    this.tNoble = new HUYA.NobleItem;
    this.tFans = new HUYA.FansItem;
    this.tVipSimle = new HUYA.VipSmileItem;
    this.tStamp = new HUYA.StampItem;
    this.tMass = new HUYA.MassItem;
    this.mReserver = new Taf.Map(new Taf.STRING,new Taf.STRING);
    this.iChatCache = 0;
    this.iRoomAuditLevel = 0
}
;
HUYA.NobleSpeakBrst.prototype._clone = function() {
    return new HUYA.NobleSpeakBrst
}
;
HUYA.NobleSpeakBrst.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NobleSpeakBrst.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NobleSpeakBrst.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeInt64(3, this.lPid);
    t.writeString(4, this.sMsg);
    t.writeStruct(5, this.tSender);
    t.writeStruct(6, this.tNoble);
    t.writeStruct(7, this.tFans);
    t.writeStruct(8, this.tVipSimle);
    t.writeStruct(9, this.tStamp);
    t.writeStruct(10, this.tMass);
    t.writeMap(11, this.mReserver);
    t.writeInt32(12, this.iChatCache);
    t.writeInt32(13, this.iRoomAuditLevel)
}
;
HUYA.NobleSpeakBrst.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.lPid = t.readInt64(3, false, this.lPid);
    this.sMsg = t.readString(4, false, this.sMsg);
    this.tSender = t.readStruct(5, false, this.tSender);
    this.tNoble = t.readStruct(6, false, this.tNoble);
    this.tFans = t.readStruct(7, false, this.tFans);
    this.tVipSimle = t.readStruct(8, false, this.tVipSimle);
    this.tStamp = t.readStruct(9, false, this.tStamp);
    this.tMass = t.readStruct(10, false, this.tMass);
    this.mReserver = t.readMap(11, false, this.mReserver);
    this.iChatCache = t.readInt32(12, false, this.iChatCache);
    this.iRoomAuditLevel = t.readInt32(13, false, this.iRoomAuditLevel)
}
;
HUYA.SenderItem = function() {
    this.lSenderUid = 0;
    this.lYYid = 0;
    this.iSenderRole = 0;
    this.iSenderGender = 0;
    this.sSenderNick = ""
}
;
HUYA.SenderItem.prototype._clone = function() {
    return new HUYA.SenderItem
}
;
HUYA.SenderItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SenderItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SenderItem.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lSenderUid);
    t.writeInt64(1, this.lYYid);
    t.writeInt32(2, this.iSenderRole);
    t.writeInt32(3, this.iSenderGender);
    t.writeString(4, this.sSenderNick)
}
;
HUYA.SenderItem.prototype.readFrom = function(t) {
    this.lSenderUid = t.readInt64(0, false, this.lSenderUid);
    this.lYYid = t.readInt64(1, false, this.lYYid);
    this.iSenderRole = t.readInt32(2, false, this.iSenderRole);
    this.iSenderGender = t.readInt32(3, false, this.iSenderGender);
    this.sSenderNick = t.readString(4, false, this.sSenderNick)
}
;
HUYA.FansItem = function() {
    this.iFansLevel = 0;
    this.sFansNick = "";
    this.sFansPresenterNick = ""
}
;
HUYA.FansItem.prototype._clone = function() {
    return new HUYA.FansItem
}
;
HUYA.FansItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.FansItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.FansItem.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iFansLevel);
    t.writeString(1, this.sFansNick);
    t.writeString(2, this.sFansPresenterNick)
}
;
HUYA.FansItem.prototype.readFrom = function(t) {
    this.iFansLevel = t.readInt32(0, false, this.iFansLevel);
    this.sFansNick = t.readString(1, false, this.sFansNick);
    this.sFansPresenterNick = t.readString(2, false, this.sFansPresenterNick)
}
;
HUYA.VipSmileItem = function() {
    this.sVipSmileKey = "";
    this.sVipSmilePath = ""
}
;
HUYA.VipSmileItem.prototype._clone = function() {
    return new HUYA.VipSmileItem
}
;
HUYA.VipSmileItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.VipSmileItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.VipSmileItem.prototype.writeTo = function(t) {
    t.writeString(0, this.sVipSmileKey);
    t.writeString(1, this.sVipSmilePath)
}
;
HUYA.VipSmileItem.prototype.readFrom = function(t) {
    this.sVipSmileKey = t.readString(0, false, this.sVipSmileKey);
    this.sVipSmilePath = t.readString(1, false, this.sVipSmilePath)
}
;
HUYA.StampItem = function() {
    this.sSealIconPath = "";
    this.sKeyImg = "";
    this.lStampTime = 0;
    this.lStampEndTime = 0;
    this.iValidity = 0;
    this.sStampUserNick = ""
}
;
HUYA.StampItem.prototype._clone = function() {
    return new HUYA.StampItem
}
;
HUYA.StampItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.StampItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.StampItem.prototype.writeTo = function(t) {
    t.writeString(0, this.sSealIconPath);
    t.writeString(1, this.sKeyImg);
    t.writeInt64(2, this.lStampTime);
    t.writeInt64(3, this.lStampEndTime);
    t.writeInt32(4, this.iValidity);
    t.writeString(5, this.sStampUserNick)
}
;
HUYA.StampItem.prototype.readFrom = function(t) {
    this.sSealIconPath = t.readString(0, false, this.sSealIconPath);
    this.sKeyImg = t.readString(1, false, this.sKeyImg);
    this.lStampTime = t.readInt64(2, false, this.lStampTime);
    this.lStampEndTime = t.readInt64(3, false, this.lStampEndTime);
    this.iValidity = t.readInt32(4, false, this.iValidity);
    this.sStampUserNick = t.readString(5, false, this.sStampUserNick)
}
;
HUYA.MassItem = function() {
    this.iGoldHostLevel = 0;
    this.iSuperPupleLevel = 0;
    this.iVipLevel = 0;
    this.iUserLevel = 0;
    this.iIsVipRed = 0;
    this.iAtSomebody = 0;
    this.sAtSomebodyNick = "";
    this.ibarrageColor = 0;
    this.sDevSourceType = ""
}
;
HUYA.MassItem.prototype._clone = function() {
    return new HUYA.MassItem
}
;
HUYA.MassItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MassItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MassItem.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iGoldHostLevel);
    t.writeInt32(1, this.iSuperPupleLevel);
    t.writeInt32(2, this.iVipLevel);
    t.writeInt32(3, this.iUserLevel);
    t.writeInt32(4, this.iIsVipRed);
    t.writeInt32(5, this.iAtSomebody);
    t.writeString(6, this.sAtSomebodyNick);
    t.writeInt32(7, this.ibarrageColor);
    t.writeString(8, this.sDevSourceType)
}
;
HUYA.MassItem.prototype.readFrom = function(t) {
    this.iGoldHostLevel = t.readInt32(0, false, this.iGoldHostLevel);
    this.iSuperPupleLevel = t.readInt32(1, false, this.iSuperPupleLevel);
    this.iVipLevel = t.readInt32(2, false, this.iVipLevel);
    this.iUserLevel = t.readInt32(3, false, this.iUserLevel);
    this.iIsVipRed = t.readInt32(4, false, this.iIsVipRed);
    this.iAtSomebody = t.readInt32(5, false, this.iAtSomebody);
    this.sAtSomebodyNick = t.readString(6, false, this.sAtSomebodyNick);
    this.ibarrageColor = t.readInt32(7, false, this.ibarrageColor);
    this.sDevSourceType = t.readString(8, false, this.sDevSourceType)
}
;
HUYA.NobleInfoReq = function() {
    this.tUserId = new HUYA.UserId;
    this.iNoCache = 0;
    this.lUid = 0
}
;
HUYA.NobleInfoReq.prototype._clone = function() {
    return new HUYA.NobleInfoReq
}
;
HUYA.NobleInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NobleInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NobleInfoReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt32(1, this.iNoCache);
    t.writeInt64(2, this.lUid)
}
;
HUYA.NobleInfoReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.iNoCache = t.readInt32(1, false, this.iNoCache);
    this.lUid = t.readInt64(2, false, this.lUid)
}
;
HUYA.NobleInfoRsp = function() {
    this.tInfo = new HUYA.NobleInfo
}
;
HUYA.NobleInfoRsp.prototype._clone = function() {
    return new HUYA.NobleInfoRsp
}
;
HUYA.NobleInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NobleInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NobleInfoRsp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tInfo)
}
;
HUYA.NobleInfoRsp.prototype.readFrom = function(t) {
    this.tInfo = t.readStruct(0, false, this.tInfo)
}
;
HUYA.NobleInfo = function() {
    this.lUid = 0;
    this.lPid = 0;
    this.lValidDate = 0;
    this.sNobleName = "";
    this.iNobleLevel = 0;
    this.iNoblePet = 0;
    this.iNobleStatus = 0;
    this.iNobleType = 0;
    this.iRemainDays = 0;
    this.tLevelAttr = new HUYA.NobleLevelAttr
}
;
HUYA.NobleInfo.prototype._clone = function() {
    return new HUYA.NobleInfo
}
;
HUYA.NobleInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NobleInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NobleInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lPid);
    t.writeInt64(2, this.lValidDate);
    t.writeString(3, this.sNobleName);
    t.writeInt32(4, this.iNobleLevel);
    t.writeInt32(5, this.iNoblePet);
    t.writeInt32(6, this.iNobleStatus);
    t.writeInt32(7, this.iNobleType);
    t.writeInt32(8, this.iRemainDays);
    t.writeStruct(9, this.tLevelAttr)
}
;
HUYA.NobleInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.lValidDate = t.readInt64(2, false, this.lValidDate);
    this.sNobleName = t.readString(3, false, this.sNobleName);
    this.iNobleLevel = t.readInt32(4, false, this.iNobleLevel);
    this.iNoblePet = t.readInt32(5, false, this.iNoblePet);
    this.iNobleStatus = t.readInt32(6, false, this.iNobleStatus);
    this.iNobleType = t.readInt32(7, false, this.iNobleType);
    this.iRemainDays = t.readInt32(8, false, this.iRemainDays);
    this.tLevelAttr = t.readStruct(9, false, this.tLevelAttr)
}
;
HUYA.NobleBase = function() {
    this.lUid = 0;
    this.sNickName = "";
    this.iLevel = 0;
    this.sName = "";
    this.iPet = 0;
    this.lPid = 0;
    this.lTid = 0;
    this.lSid = 0;
    this.lStartTime = 0;
    this.lEndTime = 0;
    this.iLeftDay = 0;
    this.iStatus = 0;
    this.iOpenFlag = 0;
    this.iMonths = 0;
    this.sPNickName = "";
    this.lShortSid = 0;
    this.iSourceType = 0;
    this.iPayType = 0;
    this.sLogoUrl = "";
    this.vDecorationPrefix = new Taf.Vector(new HUYA.DecorationInfo);
    this.vDecorationSuffix = new Taf.Vector(new HUYA.DecorationInfo);
    this.iScreenType = 0;
    this.tLevel = new HUYA.NobleLevelInfo;
    this.lRoomId = 0
}
;
HUYA.NobleBase.prototype._clone = function() {
    return new HUYA.NobleBase
}
;
HUYA.NobleBase.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NobleBase.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NobleBase.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName);
    t.writeInt32(2, this.iLevel);
    t.writeString(3, this.sName);
    t.writeInt32(4, this.iPet);
    t.writeInt64(5, this.lPid);
    t.writeInt64(6, this.lTid);
    t.writeInt64(7, this.lSid);
    t.writeInt64(8, this.lStartTime);
    t.writeInt64(9, this.lEndTime);
    t.writeInt32(10, this.iLeftDay);
    t.writeInt32(11, this.iStatus);
    t.writeInt32(12, this.iOpenFlag);
    t.writeInt32(13, this.iMonths);
    t.writeString(14, this.sPNickName);
    t.writeInt64(15, this.lShortSid);
    t.writeInt32(16, this.iSourceType);
    t.writeInt64(17, this.iPayType);
    t.writeString(18, this.sLogoUrl);
    t.writeVector(19, this.vDecorationPrefix);
    t.writeVector(20, this.vDecorationSuffix);
    t.writeInt32(21, this.iScreenType);
    t.writeStruct(22, this.tLevel);
    t.writeInt64(23, this.lRoomId)
}
;
HUYA.NobleBase.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.iLevel = t.readInt32(2, false, this.iLevel);
    this.sName = t.readString(3, false, this.sName);
    this.iPet = t.readInt32(4, false, this.iPet);
    this.lPid = t.readInt64(5, false, this.lPid);
    this.lTid = t.readInt64(6, false, this.lTid);
    this.lSid = t.readInt64(7, false, this.lSid);
    this.lStartTime = t.readInt64(8, false, this.lStartTime);
    this.lEndTime = t.readInt64(9, false, this.lEndTime);
    this.iLeftDay = t.readInt32(10, false, this.iLeftDay);
    this.iStatus = t.readInt32(11, false, this.iStatus);
    this.iOpenFlag = t.readInt32(12, false, this.iOpenFlag);
    this.iMonths = t.readInt32(13, false, this.iMonths);
    this.sPNickName = t.readString(14, false, this.sPNickName);
    this.lShortSid = t.readInt64(15, false, this.lShortSid);
    this.iSourceType = t.readInt32(16, false, this.iSourceType);
    this.iPayType = t.readInt64(17, false, this.iPayType);
    this.sLogoUrl = t.readString(18, false, this.sLogoUrl);
    this.vDecorationPrefix = t.readVector(19, false, this.vDecorationPrefix);
    this.vDecorationSuffix = t.readVector(20, false, this.vDecorationSuffix);
    this.iScreenType = t.readInt32(21, false, this.iScreenType);
    this.tLevel = t.readStruct(22, false, this.tLevel);
    this.lRoomId = t.readInt64(23, false, this.lRoomId)
}
;
HUYA.NobleLevelNotice = function() {
    this.tNobleInfo = new HUYA.NobleBase;
    this.iAttrType = 0
}
;
HUYA.NobleLevelNotice.prototype._clone = function() {
    return new HUYA.NobleLevelNotice
}
;
HUYA.NobleLevelNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NobleLevelNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NobleLevelNotice.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tNobleInfo);
    t.writeInt32(1, this.iAttrType)
}
;
HUYA.NobleLevelNotice.prototype.readFrom = function(t) {
    this.tNobleInfo = t.readStruct(0, false, this.tNobleInfo);
    this.iAttrType = t.readInt32(1, false, this.iAttrType)
}
;
HUYA.GetPropsListReq = function() {
    this.tUserId = new HUYA.UserId;
    this.sMd5 = "";
    this.iTemplateType = 64;
    this.sVersion = "";
    this.iAppId = 0;
    this.lPresenterUid = 0;
    this.lSid = 0;
    this.lSubSid = 0;
    this.iGameId = 0
}
;
HUYA.GetPropsListReq.prototype._clone = function() {
    return new HUYA.GetPropsListReq
}
;
HUYA.GetPropsListReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetPropsListReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetPropsListReq.prototype.writeTo = function(t) {
    t.writeStruct(1, this.tUserId);
    t.writeString(2, this.sMd5);
    t.writeInt32(3, this.iTemplateType);
    t.writeString(4, this.sVersion);
    t.writeInt32(5, this.iAppId);
    t.writeInt64(6, this.lPresenterUid);
    t.writeInt64(7, this.lSid);
    t.writeInt64(8, this.lSubSid);
    t.writeInt32(9, this.iGameId)
}
;
HUYA.GetPropsListReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(1, false, this.tUserId);
    this.sMd5 = t.readString(2, false, this.sMd5);
    this.iTemplateType = t.readInt32(3, false, this.iTemplateType);
    this.sVersion = t.readString(4, false, this.sVersion);
    this.iAppId = t.readInt32(5, false, this.iAppId);
    this.lPresenterUid = t.readInt64(6, false, this.lPresenterUid);
    this.lSid = t.readInt64(7, false, this.lSid);
    this.lSubSid = t.readInt64(8, false, this.lSubSid);
    this.iGameId = t.readInt32(9, false, this.iGameId)
}
;
HUYA.GetPropsListRsp = function() {
    this.vPropsItemList = new Taf.Vector(new HUYA.PropsItem);
    this.sMd5 = "";
    this.iNewEffectSwitch = 0;
    this.iMirrorRoomShowNum = 0;
    this.iGameRoomShowNum = 0
}
;
HUYA.GetPropsListRsp.prototype._clone = function() {
    return new HUYA.GetPropsListRsp
}
;
HUYA.GetPropsListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetPropsListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetPropsListRsp.prototype.writeTo = function(t) {
    t.writeVector(1, this.vPropsItemList);
    t.writeString(2, this.sMd5);
    t.writeInt16(3, this.iNewEffectSwitch);
    t.writeInt16(4, this.iMirrorRoomShowNum);
    t.writeInt16(5, this.iGameRoomShowNum)
}
;
HUYA.GetPropsListRsp.prototype.readFrom = function(t) {
    this.vPropsItemList = t.readVector(1, false, this.vPropsItemList);
    this.sMd5 = t.readString(2, false, this.sMd5);
    this.iNewEffectSwitch = t.readInt16(3, false, this.iNewEffectSwitch);
    this.iMirrorRoomShowNum = t.readInt16(4, false, this.iMirrorRoomShowNum);
    this.iGameRoomShowNum = t.readInt16(5, false, this.iGameRoomShowNum)
}
;
HUYA.PropsItem = function() {
    this.iPropsId = 0;
    this.sPropsName = "";
    this.iPropsYb = 0;
    this.iPropsGreenBean = 0;
    this.iPropsWhiteBean = 0;
    this.iPropsGoldenBean = 0;
    this.iPropsRed = 0;
    this.iPropsPopular = 0;
    this.iPropsExpendNum = -1;
    this.iPropsFansValue = -1;
    this.vPropsNum = new Taf.Vector(new Taf.INT32);
    this.iPropsMaxNum = 0;
    this.iPropsBatterFlag = 0;
    this.vPropsChannel = new Taf.Vector(new Taf.INT32);
    this.sPropsToolTip = "";
    this.vPropsIdentity = new Taf.Vector(new HUYA.PropsIdentity);
    this.iPropsWeights = 0;
    this.iPropsLevel = 0;
    this.tDisplayInfo = new HUYA.DisplayInfo;
    this.tSpecialInfo = new HUYA.SpecialInfo;
    this.iPropsGrade = 0;
    this.iPropsGroupNum = 0;
    this.sPropsCommBannerResource = "";
    this.sPropsOwnBannerResource = "";
    this.iPropsShowFlag = 0;
    this.iTemplateType = 0;
    this.iShelfStatus = 0;
    this.sAndroidLogo = "";
    this.sIpadLogo = "";
    this.sIphoneLogo = "";
    this.sPropsCommBannerResourceEx = "";
    this.sPropsOwnBannerResourceEx = "";
    this.vPresenterUid = new Taf.Vector(new Taf.INT64);
    this.vPropView = new Taf.Vector(new HUYA.PropView);
    this.iFaceUSwitch = 0;
    this.iDisplayCd = 0;
    this.iCount = 0;
    this.iVbCount = 0;
    this.vWebPropsNum = new Taf.Vector(new Taf.STRING);
    this.iPropsType = 0;
    this.iPropsTypeLevel = 0;
    this.vPropsIdentityGod = new Taf.Vector(new HUYA.PropsIdentityGod);
    this.tEffectInfo = new HUYA.EffectInfo;
    this.iPropsPermission = 0
}
;
HUYA.PropsItem.prototype._clone = function() {
    return new HUYA.PropsItem
}
;
HUYA.PropsItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PropsItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PropsItem.prototype.writeTo = function(t) {
    t.writeInt32(1, this.iPropsId);
    t.writeString(2, this.sPropsName);
    t.writeInt32(3, this.iPropsYb);
    t.writeInt32(4, this.iPropsGreenBean);
    t.writeInt32(5, this.iPropsWhiteBean);
    t.writeInt32(6, this.iPropsGoldenBean);
    t.writeInt32(7, this.iPropsRed);
    t.writeInt32(8, this.iPropsPopular);
    t.writeInt32(9, this.iPropsExpendNum);
    t.writeInt32(10, this.iPropsFansValue);
    t.writeVector(11, this.vPropsNum);
    t.writeInt32(12, this.iPropsMaxNum);
    t.writeInt32(13, this.iPropsBatterFlag);
    t.writeVector(14, this.vPropsChannel);
    t.writeString(15, this.sPropsToolTip);
    t.writeVector(16, this.vPropsIdentity);
    t.writeInt32(17, this.iPropsWeights);
    t.writeInt32(18, this.iPropsLevel);
    t.writeStruct(19, this.tDisplayInfo);
    t.writeStruct(20, this.tSpecialInfo);
    t.writeInt32(21, this.iPropsGrade);
    t.writeInt32(22, this.iPropsGroupNum);
    t.writeString(23, this.sPropsCommBannerResource);
    t.writeString(24, this.sPropsOwnBannerResource);
    t.writeInt32(25, this.iPropsShowFlag);
    t.writeInt32(26, this.iTemplateType);
    t.writeInt32(27, this.iShelfStatus);
    t.writeString(28, this.sAndroidLogo);
    t.writeString(29, this.sIpadLogo);
    t.writeString(30, this.sIphoneLogo);
    t.writeString(31, this.sPropsCommBannerResourceEx);
    t.writeString(32, this.sPropsOwnBannerResourceEx);
    t.writeVector(33, this.vPresenterUid);
    t.writeVector(34, this.vPropView);
    t.writeInt16(35, this.iFaceUSwitch);
    t.writeInt16(36, this.iDisplayCd);
    t.writeInt16(37, this.iCount);
    t.writeInt32(38, this.iVbCount);
    t.writeVector(39, this.vWebPropsNum);
    t.writeInt32(40, this.iPropsType);
    t.writeInt32(41, this.iPropsTypeLevel);
    t.writeVector(42, this.vPropsIdentityGod);
    t.writeStruct(45, this.tEffectInfo);
    t.writeInt32(46, this.iPropsPermission)
}
;
HUYA.PropsItem.prototype.readFrom = function(t) {
    this.iPropsId = t.readInt32(1, false, this.iPropsId);
    this.sPropsName = t.readString(2, false, this.sPropsName);
    this.iPropsYb = t.readInt32(3, false, this.iPropsYb);
    this.iPropsGreenBean = t.readInt32(4, false, this.iPropsGreenBean);
    this.iPropsWhiteBean = t.readInt32(5, false, this.iPropsWhiteBean);
    this.iPropsGoldenBean = t.readInt32(6, false, this.iPropsGoldenBean);
    this.iPropsRed = t.readInt32(7, false, this.iPropsRed);
    this.iPropsPopular = t.readInt32(8, false, this.iPropsPopular);
    this.iPropsExpendNum = t.readInt32(9, false, this.iPropsExpendNum);
    this.iPropsFansValue = t.readInt32(10, false, this.iPropsFansValue);
    this.vPropsNum = t.readVector(11, false, this.vPropsNum);
    this.iPropsMaxNum = t.readInt32(12, false, this.iPropsMaxNum);
    this.iPropsBatterFlag = t.readInt32(13, false, this.iPropsBatterFlag);
    this.vPropsChannel = t.readVector(14, false, this.vPropsChannel);
    this.sPropsToolTip = t.readString(15, false, this.sPropsToolTip);
    this.vPropsIdentity = t.readVector(16, false, this.vPropsIdentity);
    this.iPropsWeights = t.readInt32(17, false, this.iPropsWeights);
    this.iPropsLevel = t.readInt32(18, false, this.iPropsLevel);
    this.tDisplayInfo = t.readStruct(19, false, this.tDisplayInfo);
    this.tSpecialInfo = t.readStruct(20, false, this.tSpecialInfo);
    this.iPropsGrade = t.readInt32(21, false, this.iPropsGrade);
    this.iPropsGroupNum = t.readInt32(22, false, this.iPropsGroupNum);
    this.sPropsCommBannerResource = t.readString(23, false, this.sPropsCommBannerResource);
    this.sPropsOwnBannerResource = t.readString(24, false, this.sPropsOwnBannerResource);
    this.iPropsShowFlag = t.readInt32(25, false, this.iPropsShowFlag);
    this.iTemplateType = t.readInt32(26, false, this.iTemplateType);
    this.iShelfStatus = t.readInt32(27, false, this.iShelfStatus);
    this.sAndroidLogo = t.readString(28, false, this.sAndroidLogo);
    this.sIpadLogo = t.readString(29, false, this.sIpadLogo);
    this.sIphoneLogo = t.readString(30, false, this.sIphoneLogo);
    this.sPropsCommBannerResourceEx = t.readString(31, false, this.sPropsCommBannerResourceEx);
    this.sPropsOwnBannerResourceEx = t.readString(32, false, this.sPropsOwnBannerResourceEx);
    this.vPresenterUid = t.readVector(33, false, this.vPresenterUid);
    this.vPropView = t.readVector(34, false, this.vPropView);
    this.iFaceUSwitch = t.readInt16(35, false, this.iFaceUSwitch);
    this.iDisplayCd = t.readInt16(36, false, this.iDisplayCd);
    this.iCount = t.readInt16(37, false, this.iCount);
    this.iVbCount = t.readInt32(38, false, this.iVbCount);
    this.vWebPropsNum = t.readVector(39, false, this.vWebPropsNum);
    this.iPropsType = t.readInt32(40, false, this.iPropsType);
    this.iPropsTypeLevel = t.readInt32(41, false, this.iPropsTypeLevel);
    this.vPropsIdentityGod = t.readVector(42, false, this.vPropsIdentityGod);
    this.tEffectInfo = t.readStruct(45, false, this.tEffectInfo);
    this.iPropsPermission = t.readInt32(46, false, this.iPropsPermission)
}
;
HUYA.PropsIdentity = function() {
    this.iPropsIdType = 0;
    this.sPropsPic18 = "";
    this.sPropsPic24 = "";
    this.sPropsPicGif = "";
    this.sPropsBannerResource = "";
    this.sPropsBannerSize = "";
    this.sPropsBannerMaxTime = "";
    this.sPropsChatBannerResource = "";
    this.sPropsChatBannerSize = "";
    this.sPropsChatBannerMaxTime = "";
    this.iPropsChatBannerPos = 0;
    this.iPropsChatBannerIsCombo = 0;
    this.sPropsRollContent = "";
    this.iPropsBannerAnimationstyle = 0;
    this.sPropFaceu = "";
    this.sPropH5Resource = "";
    this.sPropsWeb = "";
    this.sWitch = 0;
    this.sCornerMark = "";
    this.iPropViewId = 0;
    this.sPropStreamerResource = "";
    this.iStreamerFrameRate = 0;
    this.sPropsPic108 = "";
    this.sPcBannerResource = "";
    this.sPropBigGiftPc = "";
    this.sPropBigGiftWeb = "";
    this.iWebBigGiftFrameRate = 0;
    this.sPropWebStaticDown = "";
    this.sPropWebDynamicDown = "";
    this.sPropPCDown = ""
}
;
HUYA.PropsIdentity.prototype._clone = function() {
    return new HUYA.PropsIdentity
}
;
HUYA.PropsIdentity.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PropsIdentity.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PropsIdentity.prototype.writeTo = function(t) {
    t.writeInt32(1, this.iPropsIdType);
    t.writeString(2, this.sPropsPic18);
    t.writeString(3, this.sPropsPic24);
    t.writeString(4, this.sPropsPicGif);
    t.writeString(5, this.sPropsBannerResource);
    t.writeString(6, this.sPropsBannerSize);
    t.writeString(7, this.sPropsBannerMaxTime);
    t.writeString(8, this.sPropsChatBannerResource);
    t.writeString(9, this.sPropsChatBannerSize);
    t.writeString(10, this.sPropsChatBannerMaxTime);
    t.writeInt32(11, this.iPropsChatBannerPos);
    t.writeInt32(12, this.iPropsChatBannerIsCombo);
    t.writeString(13, this.sPropsRollContent);
    t.writeInt32(14, this.iPropsBannerAnimationstyle);
    t.writeString(15, this.sPropFaceu);
    t.writeString(16, this.sPropH5Resource);
    t.writeString(17, this.sPropsWeb);
    t.writeInt32(18, this.sWitch);
    t.writeString(19, this.sCornerMark);
    t.writeInt32(20, this.iPropViewId);
    t.writeString(21, this.sPropStreamerResource);
    t.writeInt16(22, this.iStreamerFrameRate);
    t.writeString(23, this.sPropsPic108);
    t.writeString(24, this.sPcBannerResource);
    t.writeString(25, this.sPropBigGiftPc);
    t.writeString(26, this.sPropBigGiftWeb);
    t.writeInt32(27, this.iWebBigGiftFrameRate);
    t.writeString(28, this.sPropWebStaticDown);
    t.writeString(29, this.sPropWebDynamicDown);
    t.writeString(30, this.sPropPCDown)
}
;
HUYA.PropsIdentity.prototype.readFrom = function(t) {
    this.iPropsIdType = t.readInt32(1, false, this.iPropsIdType);
    this.sPropsPic18 = t.readString(2, false, this.sPropsPic18);
    this.sPropsPic24 = t.readString(3, false, this.sPropsPic24);
    this.sPropsPicGif = t.readString(4, false, this.sPropsPicGif);
    this.sPropsBannerResource = t.readString(5, false, this.sPropsBannerResource);
    this.sPropsBannerSize = t.readString(6, false, this.sPropsBannerSize);
    this.sPropsBannerMaxTime = t.readString(7, false, this.sPropsBannerMaxTime);
    this.sPropsChatBannerResource = t.readString(8, false, this.sPropsChatBannerResource);
    this.sPropsChatBannerSize = t.readString(9, false, this.sPropsChatBannerSize);
    this.sPropsChatBannerMaxTime = t.readString(10, false, this.sPropsChatBannerMaxTime);
    this.iPropsChatBannerPos = t.readInt32(11, false, this.iPropsChatBannerPos);
    this.iPropsChatBannerIsCombo = t.readInt32(12, false, this.iPropsChatBannerIsCombo);
    this.sPropsRollContent = t.readString(13, false, this.sPropsRollContent);
    this.iPropsBannerAnimationstyle = t.readInt32(14, false, this.iPropsBannerAnimationstyle);
    this.sPropFaceu = t.readString(15, false, this.sPropFaceu);
    this.sPropH5Resource = t.readString(16, false, this.sPropH5Resource);
    this.sPropsWeb = t.readString(17, false, this.sPropsWeb);
    this.sWitch = t.readInt32(18, false, this.sWitch);
    this.sCornerMark = t.readString(19, false, this.sCornerMark);
    this.iPropViewId = t.readInt32(20, false, this.iPropViewId);
    this.sPropStreamerResource = t.readString(21, false, this.sPropStreamerResource);
    this.iStreamerFrameRate = t.readInt16(22, false, this.iStreamerFrameRate);
    this.sPropsPic108 = t.readString(23, false, this.sPropsPic108);
    this.sPcBannerResource = t.readString(24, false, this.sPcBannerResource);
    this.sPropBigGiftPc = t.readString(25, false, this.sPropBigGiftPc);
    this.sPropBigGiftWeb = t.readString(26, false, this.sPropBigGiftWeb);
    this.iWebBigGiftFrameRate = t.readInt32(27, false, this.iWebBigGiftFrameRate);
    this.sPropWebStaticDown = t.readString(28, false, this.sPropWebStaticDown);
    this.sPropWebDynamicDown = t.readString(29, false, this.sPropWebDynamicDown);
    this.sPropPCDown = t.readString(30, false, this.sPropPCDown)
}
;
HUYA.PropView = function() {
    this.id = 0;
    this.name = "";
    this.uids = new Taf.Map(new Taf.INT64,new Taf.INT16);
    this.tips = "";
    this.gameids = new Taf.Map(new Taf.INT64,new Taf.INT16);
    this.sPropsBannerText = ""
}
;
HUYA.PropView.prototype._clone = function() {
    return new HUYA.PropView
}
;
HUYA.PropView.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PropView.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PropView.prototype.writeTo = function(t) {
    t.writeInt32(0, this.id);
    t.writeString(1, this.name);
    t.writeMap(2, this.uids);
    t.writeString(3, this.tips);
    t.writeMap(4, this.gameids);
    t.writeString(5, this.sPropsBannerText)
}
;
HUYA.PropView.prototype.readFrom = function(t) {
    this.id = t.readInt32(0, false, this.id);
    this.name = t.readString(1, false, this.name);
    this.uids = t.readMap(2, false, this.uids);
    this.tips = t.readString(3, false, this.tips);
    this.gameids = t.readMap(4, false, this.gameids);
    this.sPropsBannerText = t.readString(5, false, this.sPropsBannerText)
}
;
HUYA.PropsIdentityGod = function() {
    this.iPropsIdType = 0;
    this.sPropH5Resource = "";
    this.sPcBannerResource = "";
    this.sPropBigGiftWeb = "";
    this.sPropBigGiftPc = "";
    this.iPropViewId = 0;
    this.iWebBigGiftFrameRate = 0
}
;
HUYA.PropsIdentityGod.prototype._clone = function() {
    return new HUYA.PropsIdentityGod
}
;
HUYA.PropsIdentityGod.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PropsIdentityGod.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PropsIdentityGod.prototype.writeTo = function(t) {
    t.writeInt32(1, this.iPropsIdType);
    t.writeString(2, this.sPropH5Resource);
    t.writeString(3, this.sPcBannerResource);
    t.writeString(4, this.sPropBigGiftWeb);
    t.writeString(5, this.sPropBigGiftPc);
    t.writeInt32(6, this.iPropViewId);
    t.writeInt32(7, this.iWebBigGiftFrameRate)
}
;
HUYA.PropsIdentityGod.prototype.readFrom = function(t) {
    this.iPropsIdType = t.readInt32(1, false, this.iPropsIdType);
    this.sPropH5Resource = t.readString(2, false, this.sPropH5Resource);
    this.sPcBannerResource = t.readString(3, false, this.sPcBannerResource);
    this.sPropBigGiftWeb = t.readString(4, false, this.sPropBigGiftWeb);
    this.sPropBigGiftPc = t.readString(5, false, this.sPropBigGiftPc);
    this.iPropViewId = t.readInt32(6, false, this.iPropViewId);
    this.iWebBigGiftFrameRate = t.readInt32(7, false, this.iWebBigGiftFrameRate)
}
;
HUYA.DisplayInfo = function() {
    this.iMarqueeScopeMin = 0;
    this.iMarqueeScopeMax = 0;
    this.iCurrentVideoNum = 0;
    this.iCurrentVideoMin = 0;
    this.iCurrentVideoMax = 0;
    this.iAllVideoNum = 0;
    this.iAllVideoMin = 0;
    this.iAllVideoMax = 0;
    this.iCurrentScreenNum = 0;
    this.iCurrentScreenMin = 0;
    this.iCurrentScreenMax = 0
}
;
HUYA.DisplayInfo.prototype._clone = function() {
    return new HUYA.DisplayInfo
}
;
HUYA.DisplayInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.DisplayInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.DisplayInfo.prototype.writeTo = function(t) {
    t.writeInt32(1, this.iMarqueeScopeMin);
    t.writeInt32(2, this.iMarqueeScopeMax);
    t.writeInt32(3, this.iCurrentVideoNum);
    t.writeInt32(4, this.iCurrentVideoMin);
    t.writeInt32(5, this.iCurrentVideoMax);
    t.writeInt32(6, this.iAllVideoNum);
    t.writeInt32(7, this.iAllVideoMin);
    t.writeInt32(8, this.iAllVideoMax);
    t.writeInt32(9, this.iCurrentScreenNum);
    t.writeInt32(10, this.iCurrentScreenMin);
    t.writeInt32(11, this.iCurrentScreenMax)
}
;
HUYA.DisplayInfo.prototype.readFrom = function(t) {
    this.iMarqueeScopeMin = t.readInt32(1, false, this.iMarqueeScopeMin);
    this.iMarqueeScopeMax = t.readInt32(2, false, this.iMarqueeScopeMax);
    this.iCurrentVideoNum = t.readInt32(3, false, this.iCurrentVideoNum);
    this.iCurrentVideoMin = t.readInt32(4, false, this.iCurrentVideoMin);
    this.iCurrentVideoMax = t.readInt32(5, false, this.iCurrentVideoMax);
    this.iAllVideoNum = t.readInt32(6, false, this.iAllVideoNum);
    this.iAllVideoMin = t.readInt32(7, false, this.iAllVideoMin);
    this.iAllVideoMax = t.readInt32(8, false, this.iAllVideoMax);
    this.iCurrentScreenNum = t.readInt32(9, false, this.iCurrentScreenNum);
    this.iCurrentScreenMin = t.readInt32(10, false, this.iCurrentScreenMin);
    this.iCurrentScreenMax = t.readInt32(11, false, this.iCurrentScreenMax)
}
;
HUYA.SpecialInfo = function() {
    this.iFirstSingle = 0;
    this.iFirstGroup = 0;
    this.sFirstTips = "";
    this.iSecondSingle = 0;
    this.iSecondGroup = 0;
    this.sSecondTips = "";
    this.iThirdSingle = 0;
    this.iThirdGroup = 0;
    this.sThirdTips = "";
    this.iWorldSingle = 0;
    this.iWorldGroup = 0;
    this.iAmbilightNum = 0;
    this.iAmbilightUpgradeNum = 0;
    this.iWorldBannerNum = 0;
    this.iShowType = 0;
    this.iOpenFaceu = 0;
    this.iOpenGesture = 0
}
;
HUYA.SpecialInfo.prototype._clone = function() {
    return new HUYA.SpecialInfo
}
;
HUYA.SpecialInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SpecialInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SpecialInfo.prototype.writeTo = function(t) {
    t.writeInt32(1, this.iFirstSingle);
    t.writeInt32(2, this.iFirstGroup);
    t.writeString(3, this.sFirstTips);
    t.writeInt32(4, this.iSecondSingle);
    t.writeInt32(5, this.iSecondGroup);
    t.writeString(6, this.sSecondTips);
    t.writeInt32(7, this.iThirdSingle);
    t.writeInt32(8, this.iThirdGroup);
    t.writeString(9, this.sThirdTips);
    t.writeInt32(10, this.iWorldSingle);
    t.writeInt32(11, this.iWorldGroup);
    t.writeInt32(12, this.iAmbilightNum);
    t.writeInt32(13, this.iAmbilightUpgradeNum);
    t.writeInt32(14, this.iWorldBannerNum);
    t.writeInt16(15, this.iShowType);
    t.writeInt16(16, this.iOpenFaceu);
    t.writeInt16(17, this.iOpenGesture)
}
;
HUYA.SpecialInfo.prototype.readFrom = function(t) {
    this.iFirstSingle = t.readInt32(1, false, this.iFirstSingle);
    this.iFirstGroup = t.readInt32(2, false, this.iFirstGroup);
    this.sFirstTips = t.readString(3, false, this.sFirstTips);
    this.iSecondSingle = t.readInt32(4, false, this.iSecondSingle);
    this.iSecondGroup = t.readInt32(5, false, this.iSecondGroup);
    this.sSecondTips = t.readString(6, false, this.sSecondTips);
    this.iThirdSingle = t.readInt32(7, false, this.iThirdSingle);
    this.iThirdGroup = t.readInt32(8, false, this.iThirdGroup);
    this.sThirdTips = t.readString(9, false, this.sThirdTips);
    this.iWorldSingle = t.readInt32(10, false, this.iWorldSingle);
    this.iWorldGroup = t.readInt32(11, false, this.iWorldGroup);
    this.iAmbilightNum = t.readInt32(12, false, this.iAmbilightNum);
    this.iAmbilightUpgradeNum = t.readInt32(13, false, this.iAmbilightUpgradeNum);
    this.iWorldBannerNum = t.readInt32(14, false, this.iWorldBannerNum);
    this.iShowType = t.readInt16(15, false, this.iShowType);
    this.iOpenFaceu = t.readInt16(16, false, this.iOpenFaceu);
    this.iOpenGesture = t.readInt16(17, false, this.iOpenGesture)
}
;
HUYA.TokenCdnInfo = function() {
    this.sCdnName = "";
    this.sUrl = "";
    this.sStreamName = ""
}
;
HUYA.TokenCdnInfo.prototype._clone = function() {
    return new HUYA.TokenCdnInfo
}
;
HUYA.TokenCdnInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.TokenCdnInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.TokenCdnInfo.prototype.writeTo = function(t) {
    t.writeString(0, this.sCdnName);
    t.writeString(1, this.sUrl);
    t.writeString(2, this.sStreamName)
}
;
HUYA.TokenCdnInfo.prototype.readFrom = function(t) {
    this.sCdnName = t.readString(0, false, this.sCdnName);
    this.sUrl = t.readString(1, false, this.sUrl);
    this.sStreamName = t.readString(2, false, this.sStreamName)
}
;
HUYA.CdnAntiCodeInfo = function() {
    this.sCdnName = "";
    this.sAntiCode = "";
    this.sStreamName = ""
}
;
HUYA.CdnAntiCodeInfo.prototype._clone = function() {
    return new HUYA.CdnAntiCodeInfo
}
;
HUYA.CdnAntiCodeInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.CdnAntiCodeInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.CdnAntiCodeInfo.prototype.writeTo = function(t) {
    t.writeString(0, this.sCdnName);
    t.writeString(1, this.sAntiCode);
    t.writeString(2, this.sStreamName)
}
;
HUYA.CdnAntiCodeInfo.prototype.readFrom = function(t) {
    this.sCdnName = t.readString(0, false, this.sCdnName);
    this.sAntiCode = t.readString(1, false, this.sAntiCode);
    this.sStreamName = t.readString(2, false, this.sStreamName)
}
;
HUYA.BatchGetCdnTokenReq = function() {
    this.vCdnInfos = new Taf.Vector(new HUYA.TokenCdnInfo);
    this.sStreamName = "";
    this.tId = new HUYA.UserId
}
;
HUYA.BatchGetCdnTokenReq.prototype._clone = function() {
    return new HUYA.BatchGetCdnTokenReq
}
;
HUYA.BatchGetCdnTokenReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BatchGetCdnTokenReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BatchGetCdnTokenReq.prototype.writeTo = function(t) {
    t.writeVector(0, this.vCdnInfos);
    t.writeString(1, this.sStreamName);
    t.writeStruct(2, this.tId)
}
;
HUYA.BatchGetCdnTokenReq.prototype.readFrom = function(t) {
    this.vCdnInfos = t.readVector(0, false, this.vCdnInfos);
    this.sStreamName = t.readString(1, false, this.sStreamName);
    this.tId = t.readStruct(2, false, this.tId)
}
;
HUYA.BatchGetCdnTokenRsp = function() {
    this.vCdnAntiCodes = new Taf.Vector(new HUYA.CdnAntiCodeInfo)
}
;
HUYA.BatchGetCdnTokenRsp.prototype._clone = function() {
    return new HUYA.BatchGetCdnTokenRsp
}
;
HUYA.BatchGetCdnTokenRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BatchGetCdnTokenRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BatchGetCdnTokenRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vCdnAntiCodes)
}
;
HUYA.BatchGetCdnTokenRsp.prototype.readFrom = function(t) {
    this.vCdnAntiCodes = t.readVector(0, false, this.vCdnAntiCodes)
}
;
HUYA.GetWebdbUserInfoReq = function() {
    this.lUid = 0;
    this.lImid = 0;
    this.sPassport = "";
    this.sAccount = "";
    this.bCacheFirst = true
}
;
HUYA.GetWebdbUserInfoReq.prototype._clone = function() {
    return new HUYA.GetWebdbUserInfoReq
}
;
HUYA.GetWebdbUserInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetWebdbUserInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetWebdbUserInfoReq.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lImid);
    t.writeString(2, this.sPassport);
    t.writeString(3, this.sAccount);
    t.writeBoolean(4, this.bCacheFirst)
}
;
HUYA.GetWebdbUserInfoReq.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lImid = t.readInt64(1, false, this.lImid);
    this.sPassport = t.readString(2, false, this.sPassport);
    this.sAccount = t.readString(3, false, this.sAccount);
    this.bCacheFirst = t.readBoolean(4, false, this.bCacheFirst)
}
;
HUYA.GetWebdbUserInfoRsp = function() {
    this.tUserInfo = new HUYA.DBUserInfo
}
;
HUYA.GetWebdbUserInfoRsp.prototype._clone = function() {
    return new HUYA.GetWebdbUserInfoRsp
}
;
HUYA.GetWebdbUserInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetWebdbUserInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetWebdbUserInfoRsp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserInfo)
}
;
HUYA.GetWebdbUserInfoRsp.prototype.readFrom = function(t) {
    this.tUserInfo = t.readStruct(0, false, this.tUserInfo)
}
;
HUYA.DBUserInfo = function() {
    this.lUid = 0;
    this.sPassport = "";
    this.sAccount = "";
    this.sNick = "";
    this.iSex = 0;
    this.iBirthday = 0;
    this.sArea = "";
    this.sProvince = "";
    this.sCity = "";
    this.sSign = "";
    this.sIntro = "";
    this.iJifen = 0;
    this.sRegisterTime = "";
    this.sHdlogo = "";
    this.sSessionCard = "";
    this.lImid = 0;
    this.iLogoIndex = 0;
    this.sHYId = ""
}
;
HUYA.DBUserInfo.prototype._clone = function() {
    return new HUYA.DBUserInfo
}
;
HUYA.DBUserInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.DBUserInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.DBUserInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sPassport);
    t.writeString(2, this.sAccount);
    t.writeString(3, this.sNick);
    t.writeInt32(4, this.iSex);
    t.writeInt32(5, this.iBirthday);
    t.writeString(6, this.sArea);
    t.writeString(7, this.sProvince);
    t.writeString(8, this.sCity);
    t.writeString(9, this.sSign);
    t.writeString(10, this.sIntro);
    t.writeInt32(11, this.iJifen);
    t.writeString(12, this.sRegisterTime);
    t.writeString(13, this.sHdlogo);
    t.writeString(14, this.sSessionCard);
    t.writeInt64(16, this.lImid);
    t.writeInt32(17, this.iLogoIndex);
    t.writeString(18, this.sHYId)
}
;
HUYA.DBUserInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sPassport = t.readString(1, false, this.sPassport);
    this.sAccount = t.readString(2, false, this.sAccount);
    this.sNick = t.readString(3, false, this.sNick);
    this.iSex = t.readInt32(4, false, this.iSex);
    this.iBirthday = t.readInt32(5, false, this.iBirthday);
    this.sArea = t.readString(6, false, this.sArea);
    this.sProvince = t.readString(7, false, this.sProvince);
    this.sCity = t.readString(8, false, this.sCity);
    this.sSign = t.readString(9, false, this.sSign);
    this.sIntro = t.readString(10, false, this.sIntro);
    this.iJifen = t.readInt32(11, false, this.iJifen);
    this.sRegisterTime = t.readString(12, false, this.sRegisterTime);
    this.sHdlogo = t.readString(13, false, this.sHdlogo);
    this.sSessionCard = t.readString(14, false, this.sSessionCard);
    this.lImid = t.readInt64(16, false, this.lImid);
    this.iLogoIndex = t.readInt32(17, false, this.iLogoIndex);
    this.sHYId = t.readString(18, false, this.sHYId)
}
;
HUYA.GiftInfo = function() {
    this.iItemType = 0;
    this.iItemCount = 0
}
;
HUYA.GiftInfo.prototype._clone = function() {
    return new HUYA.GiftInfo
}
;
HUYA.GiftInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GiftInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GiftInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iItemType);
    t.writeInt32(1, this.iItemCount)
}
;
HUYA.GiftInfo.prototype.readFrom = function(t) {
    this.iItemType = t.readInt32(0, false, this.iItemType);
    this.iItemCount = t.readInt32(1, false, this.iItemCount)
}
;
HUYA.GetUserBoxInfoReq = function() {
    this.tId = new HUYA.UserId;
    this.sChannel = "";
    this.sIp = ""
}
;
HUYA.GetUserBoxInfoReq.prototype._clone = function() {
    return new HUYA.GetUserBoxInfoReq
}
;
HUYA.GetUserBoxInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetUserBoxInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetUserBoxInfoReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeString(1, this.sChannel);
    t.writeString(2, this.sIp)
}
;
HUYA.GetUserBoxInfoReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.sChannel = t.readString(1, false, this.sChannel);
    this.sIp = t.readString(2, false, this.sIp)
}
;
HUYA.GetUserBoxInfoRsp = function() {
    this.lUid = 0;
    this.tTask1 = new HUYA.BoxTaskInfo;
    this.tTask2 = new HUYA.BoxTaskInfo;
    this.tTask3 = new HUYA.BoxTaskInfo;
    this.tTask4 = new HUYA.BoxTaskInfo;
    this.tTask5 = new HUYA.BoxTaskInfo;
    this.tTask6 = new HUYA.BoxTaskInfo;
    this.iBoxLevel = 0
}
;
HUYA.GetUserBoxInfoRsp.prototype._clone = function() {
    return new HUYA.GetUserBoxInfoRsp
}
;
HUYA.GetUserBoxInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetUserBoxInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetUserBoxInfoRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeStruct(1, this.tTask1);
    t.writeStruct(2, this.tTask2);
    t.writeStruct(3, this.tTask3);
    t.writeStruct(4, this.tTask4);
    t.writeStruct(5, this.tTask5);
    t.writeStruct(7, this.tTask6);
    t.writeInt32(8, this.iBoxLevel)
}
;
HUYA.GetUserBoxInfoRsp.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.tTask1 = t.readStruct(1, false, this.tTask1);
    this.tTask2 = t.readStruct(2, false, this.tTask2);
    this.tTask3 = t.readStruct(3, false, this.tTask3);
    this.tTask4 = t.readStruct(4, false, this.tTask4);
    this.tTask5 = t.readStruct(5, false, this.tTask5);
    this.tTask6 = t.readStruct(7, false, this.tTask6);
    this.iBoxLevel = t.readInt32(8, false, this.iBoxLevel)
}
;
HUYA.FinishTaskNoticeReq = function() {
    this.tId = new HUYA.UserId;
    this.lSid = 0;
    this.lSubSid = 0;
    this.iTaskId = 0;
    this.sPassport = "";
    this.iFromType = 0;
    this.fVersion = 1;
    this.sTime = "";
    this.sMd5 = "";
    this.sChannel = "";
    this.sIp = "";
    this.iPrizeType = 0;
    this.lPid = 0
}
;
HUYA.FinishTaskNoticeReq.prototype._clone = function() {
    return new HUYA.FinishTaskNoticeReq
}
;
HUYA.FinishTaskNoticeReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.FinishTaskNoticeReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.FinishTaskNoticeReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lSid);
    t.writeInt64(2, this.lSubSid);
    t.writeInt32(3, this.iTaskId);
    t.writeString(4, this.sPassport);
    t.writeInt32(5, this.iFromType);
    t.writeFloat(6, this.fVersion);
    t.writeString(7, this.sTime);
    t.writeString(8, this.sMd5);
    t.writeString(9, this.sChannel);
    t.writeString(10, this.sIp);
    t.writeInt32(11, this.iPrizeType);
    t.writeInt64(12, this.lPid)
}
;
HUYA.FinishTaskNoticeReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lSid = t.readInt64(1, false, this.lSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid);
    this.iTaskId = t.readInt32(3, false, this.iTaskId);
    this.sPassport = t.readString(4, false, this.sPassport);
    this.iFromType = t.readInt32(5, false, this.iFromType);
    this.fVersion = t.readFloat(6, false, this.fVersion);
    this.sTime = t.readString(7, false, this.sTime);
    this.sMd5 = t.readString(8, false, this.sMd5);
    this.sChannel = t.readString(9, false, this.sChannel);
    this.sIp = t.readString(10, false, this.sIp);
    this.iPrizeType = t.readInt32(11, false, this.iPrizeType);
    this.lPid = t.readInt64(12, false, this.lPid)
}
;
HUYA.FinishTaskNoticeRsp = function() {
    this.iRspCode = 0;
    this.iTaskId = 0;
    this.iPrizeType = 0
}
;
HUYA.FinishTaskNoticeRsp.prototype._clone = function() {
    return new HUYA.FinishTaskNoticeRsp
}
;
HUYA.FinishTaskNoticeRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.FinishTaskNoticeRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.FinishTaskNoticeRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRspCode);
    t.writeInt32(1, this.iTaskId);
    t.writeInt32(3, this.iPrizeType)
}
;
HUYA.FinishTaskNoticeRsp.prototype.readFrom = function(t) {
    this.iRspCode = t.readInt32(0, false, this.iRspCode);
    this.iTaskId = t.readInt32(1, false, this.iTaskId);
    this.iPrizeType = t.readInt32(3, false, this.iPrizeType)
}
;
HUYA.AwardBoxPrizeReq = function() {
    this.tId = new HUYA.UserId;
    this.lSid = 0;
    this.lSubSid = 0;
    this.iTaskId = 0;
    this.sPassport = "";
    this.iFromType = 0;
    this.fVersion = 1;
    this.sTime = "";
    this.sMd5 = "";
    this.sChannel = "";
    this.sIp = "";
    this.iPrizeType = 0;
    this.lPid = 0;
    this.iADType = 0
}
;
HUYA.AwardBoxPrizeReq.prototype._clone = function() {
    return new HUYA.AwardBoxPrizeReq
}
;
HUYA.AwardBoxPrizeReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.AwardBoxPrizeReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.AwardBoxPrizeReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lSid);
    t.writeInt64(2, this.lSubSid);
    t.writeInt32(3, this.iTaskId);
    t.writeString(4, this.sPassport);
    t.writeInt32(5, this.iFromType);
    t.writeFloat(6, this.fVersion);
    t.writeString(7, this.sTime);
    t.writeString(8, this.sMd5);
    t.writeString(9, this.sChannel);
    t.writeString(10, this.sIp);
    t.writeInt32(11, this.iPrizeType);
    t.writeInt64(12, this.lPid);
    t.writeInt32(13, this.iADType)
}
;
HUYA.AwardBoxPrizeReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lSid = t.readInt64(1, false, this.lSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid);
    this.iTaskId = t.readInt32(3, false, this.iTaskId);
    this.sPassport = t.readString(4, false, this.sPassport);
    this.iFromType = t.readInt32(5, false, this.iFromType);
    this.fVersion = t.readFloat(6, false, this.fVersion);
    this.sTime = t.readString(7, false, this.sTime);
    this.sMd5 = t.readString(8, false, this.sMd5);
    this.sChannel = t.readString(9, false, this.sChannel);
    this.sIp = t.readString(10, false, this.sIp);
    this.iPrizeType = t.readInt32(11, false, this.iPrizeType);
    this.lPid = t.readInt64(12, false, this.lPid);
    this.iADType = t.readInt32(13, false, this.iADType)
}
;
HUYA.AwardBoxPrizeRsp = function() {
    this.iRspCode = 0;
    this.iTaskId = 0;
    this.iItemType = 0;
    this.iCount = 0;
    this.iRewardLevel = 0;
    this.iOptStatus = 0;
    this.sOptText = "";
    this.iPrizeType = 0;
    this.sDiyAwardName = "";
    this.iADType = 0;
    this.iGiftType = 0;
    this.sCode = "";
    this.sDiyAwardName4App = "";
    this.iExistsSysMeg = 0;
    this.sAuthUrl = ""
}
;
HUYA.AwardBoxPrizeRsp.prototype._clone = function() {
    return new HUYA.AwardBoxPrizeRsp
}
;
HUYA.AwardBoxPrizeRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.AwardBoxPrizeRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.AwardBoxPrizeRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRspCode);
    t.writeInt32(1, this.iTaskId);
    t.writeInt32(2, this.iItemType);
    t.writeInt32(3, this.iCount);
    t.writeInt32(4, this.iRewardLevel);
    t.writeInt32(5, this.iOptStatus);
    t.writeString(6, this.sOptText);
    t.writeInt32(7, this.iPrizeType);
    t.writeString(8, this.sDiyAwardName);
    t.writeInt32(9, this.iADType);
    t.writeInt32(10, this.iGiftType);
    t.writeString(11, this.sCode);
    t.writeString(12, this.sDiyAwardName4App);
    t.writeInt32(13, this.iExistsSysMeg);
    t.writeString(14, this.sAuthUrl)
}
;
HUYA.AwardBoxPrizeRsp.prototype.readFrom = function(t) {
    this.iRspCode = t.readInt32(0, false, this.iRspCode);
    this.iTaskId = t.readInt32(1, false, this.iTaskId);
    this.iItemType = t.readInt32(2, false, this.iItemType);
    this.iCount = t.readInt32(3, false, this.iCount);
    this.iRewardLevel = t.readInt32(4, false, this.iRewardLevel);
    this.iOptStatus = t.readInt32(5, false, this.iOptStatus);
    this.sOptText = t.readString(6, false, this.sOptText);
    this.iPrizeType = t.readInt32(7, false, this.iPrizeType);
    this.sDiyAwardName = t.readString(8, false, this.sDiyAwardName);
    this.iADType = t.readInt32(9, false, this.iADType);
    this.iGiftType = t.readInt32(10, false, this.iGiftType);
    this.sCode = t.readString(11, false, this.sCode);
    this.sDiyAwardName4App = t.readString(12, false, this.sDiyAwardName4App);
    this.iExistsSysMeg = t.readInt32(13, false, this.iExistsSysMeg);
    this.sAuthUrl = t.readString(14, false, this.sAuthUrl)
}
;
HUYA.BoxTaskInfo = function() {
    this.iStat = 0;
    this.iItemType = 0;
    this.iItemCount = 0;
    this.iRewardLevel = 0;
    this.iTaskId = 0
}
;
HUYA.BoxTaskInfo.prototype._clone = function() {
    return new HUYA.BoxTaskInfo
}
;
HUYA.BoxTaskInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BoxTaskInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BoxTaskInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iStat);
    t.writeInt32(1, this.iItemType);
    t.writeInt32(2, this.iItemCount);
    t.writeInt32(3, this.iRewardLevel);
    t.writeInt32(4, this.iTaskId)
}
;
HUYA.BoxTaskInfo.prototype.readFrom = function(t) {
    this.iStat = t.readInt32(0, false, this.iStat);
    this.iItemType = t.readInt32(1, false, this.iItemType);
    this.iItemCount = t.readInt32(2, false, this.iItemCount);
    this.iRewardLevel = t.readInt32(3, false, this.iRewardLevel);
    this.iTaskId = t.readInt32(4, false, this.iTaskId)
}
;
HUYA.InterveneCountRsp = function() {
    this.lTimeStamp = 0;
    this.iExpire = 0;
    this.lChannelId = 0;
    this.vCountInfos = new Taf.Vector(new HUYA.InterveneCountInfo)
}
;
HUYA.InterveneCountRsp.prototype._clone = function() {
    return new HUYA.InterveneCountRsp
}
;
HUYA.InterveneCountRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.InterveneCountRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.InterveneCountRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lTimeStamp);
    t.writeInt32(1, this.iExpire);
    t.writeInt64(2, this.lChannelId);
    t.writeVector(3, this.vCountInfos)
}
;
HUYA.InterveneCountRsp.prototype.readFrom = function(t) {
    this.lTimeStamp = t.readInt64(0, false, this.lTimeStamp);
    this.iExpire = t.readInt32(1, false, this.iExpire);
    this.lChannelId = t.readInt64(2, false, this.lChannelId);
    this.vCountInfos = t.readVector(3, false, this.vCountInfos)
}
;
HUYA.InterveneCountInfo = function() {
    this.lSubChannelId = 0;
    this.lAttendeeCount = 0
}
;
HUYA.InterveneCountInfo.prototype._clone = function() {
    return new HUYA.InterveneCountInfo
}
;
HUYA.InterveneCountInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.InterveneCountInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.InterveneCountInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lSubChannelId);
    t.writeInt64(1, this.lAttendeeCount)
}
;
HUYA.InterveneCountInfo.prototype.readFrom = function(t) {
    this.lSubChannelId = t.readInt64(0, false, this.lSubChannelId);
    this.lAttendeeCount = t.readInt64(1, false, this.lAttendeeCount)
}
;
HUYA.AuditorEnterLiveNotice = function() {
    this.iUserType = 0;
    this.lUid = 0;
    this.sNick = "";
    this.bSendMessagePopUp = false;
    this.sSendMessageTips = "";
    this.lSubcid = 0;
    this.iSendMessagePopUpAmtTime = 0;
    this.iGHManagerType = 0
}
;
HUYA.AuditorEnterLiveNotice.prototype._clone = function() {
    return new HUYA.AuditorEnterLiveNotice
}
;
HUYA.AuditorEnterLiveNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.AuditorEnterLiveNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.AuditorEnterLiveNotice.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iUserType);
    t.writeInt64(1, this.lUid);
    t.writeString(2, this.sNick);
    t.writeBoolean(3, this.bSendMessagePopUp);
    t.writeString(4, this.sSendMessageTips);
    t.writeInt64(5, this.lSubcid);
    t.writeInt32(6, this.iSendMessagePopUpAmtTime);
    t.writeInt32(7, this.iGHManagerType)
}
;
HUYA.AuditorEnterLiveNotice.prototype.readFrom = function(t) {
    this.iUserType = t.readInt32(0, false, this.iUserType);
    this.lUid = t.readInt64(1, false, this.lUid);
    this.sNick = t.readString(2, false, this.sNick);
    this.bSendMessagePopUp = t.readBoolean(3, false, this.bSendMessagePopUp);
    this.sSendMessageTips = t.readString(4, false, this.sSendMessageTips);
    this.lSubcid = t.readInt64(5, false, this.lSubcid);
    this.iSendMessagePopUpAmtTime = t.readInt32(6, false, this.iSendMessagePopUpAmtTime);
    this.iGHManagerType = t.readInt32(7, false, this.iGHManagerType)
}
;
HUYA.GetAuditorRoleReq = function() {
    this.tId = new HUYA.UserId;
    this.lPresenterUid = 0;
    this.lSubcid = 0;
    this.lTid = 0
}
;
HUYA.GetAuditorRoleReq.prototype._clone = function() {
    return new HUYA.GetAuditorRoleReq
}
;
HUYA.GetAuditorRoleReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetAuditorRoleReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetAuditorRoleReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lPresenterUid);
    t.writeInt64(2, this.lSubcid);
    t.writeInt64(3, this.lTid)
}
;
HUYA.GetAuditorRoleReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lPresenterUid = t.readInt64(1, false, this.lPresenterUid);
    this.lSubcid = t.readInt64(2, false, this.lSubcid);
    this.lTid = t.readInt64(3, false, this.lTid)
}
;
HUYA.AuditorRoleChangeNotice = function() {
    this.iOldUserType = 0;
    this.iNewUserType = 0;
    this.lUid = 0;
    this.lSubcid = 0;
    this.sNick = "";
    this.bPopUp = false;
    this.sSystemTips = "";
    this.bSendMessagePopUp = false;
    this.sSendMessageTips = "";
    this.iSendMessagePopUpAmtTime = 0;
    this.lPid = 0
}
;
HUYA.AuditorRoleChangeNotice.prototype._clone = function() {
    return new HUYA.AuditorRoleChangeNotice
}
;
HUYA.AuditorRoleChangeNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.AuditorRoleChangeNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.AuditorRoleChangeNotice.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iOldUserType);
    t.writeInt32(1, this.iNewUserType);
    t.writeInt64(2, this.lUid);
    t.writeInt64(3, this.lSubcid);
    t.writeString(4, this.sNick);
    t.writeBoolean(5, this.bPopUp);
    t.writeString(6, this.sSystemTips);
    t.writeBoolean(7, this.bSendMessagePopUp);
    t.writeString(8, this.sSendMessageTips);
    t.writeInt32(9, this.iSendMessagePopUpAmtTime);
    t.writeInt64(10, this.lPid)
}
;
HUYA.AuditorRoleChangeNotice.prototype.readFrom = function(t) {
    this.iOldUserType = t.readInt32(0, false, this.iOldUserType);
    this.iNewUserType = t.readInt32(1, false, this.iNewUserType);
    this.lUid = t.readInt64(2, false, this.lUid);
    this.lSubcid = t.readInt64(3, false, this.lSubcid);
    this.sNick = t.readString(4, false, this.sNick);
    this.bPopUp = t.readBoolean(5, false, this.bPopUp);
    this.sSystemTips = t.readString(6, false, this.sSystemTips);
    this.bSendMessagePopUp = t.readBoolean(7, false, this.bSendMessagePopUp);
    this.sSendMessageTips = t.readString(8, false, this.sSendMessageTips);
    this.iSendMessagePopUpAmtTime = t.readInt32(9, false, this.iSendMessagePopUpAmtTime);
    this.lPid = t.readInt64(10, false, this.lPid)
}
;
HUYA.AttendeeCountNotice = function() {
    this.iAttendeeCount = 0
}
;
HUYA.AttendeeCountNotice.prototype._clone = function() {
    return new HUYA.AttendeeCountNotice
}
;
HUYA.AttendeeCountNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.AttendeeCountNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.AttendeeCountNotice.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iAttendeeCount)
}
;
HUYA.AttendeeCountNotice.prototype.readFrom = function(t) {
    this.iAttendeeCount = t.readInt32(0, false, this.iAttendeeCount)
}
;
HUYA.ExternalUser = function() {
    this.sId = "";
    this.sToken = "";
    this.sOther = ""
}
;
HUYA.ExternalUser.prototype._clone = function() {
    return new HUYA.ExternalUser
}
;
HUYA.ExternalUser.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ExternalUser.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ExternalUser.prototype.writeTo = function(t) {
    t.writeString(0, this.sId);
    t.writeString(1, this.sToken);
    t.writeString(2, this.sOther)
}
;
HUYA.ExternalUser.prototype.readFrom = function(t) {
    this.sId = t.readString(0, false, this.sId);
    this.sToken = t.readString(1, false, this.sToken);
    this.sOther = t.readString(2, false, this.sOther)
}
;
HUYA.VipCardReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0;
    this.lUid = 0
}
;
HUYA.VipCardReq.prototype._clone = function() {
    return new HUYA.VipCardReq
}
;
HUYA.VipCardReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.VipCardReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.VipCardReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeInt64(3, this.lPid);
    t.writeInt64(4, this.lUid)
}
;
HUYA.VipCardReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.lPid = t.readInt64(3, false, this.lPid);
    this.lUid = t.readInt64(4, false, this.lUid)
}
;
HUYA.VipCardRsp = function() {
    this.lUid = 0;
    this.sNickName = "";
    this.tNobleInfo = new HUYA.NobleInfo;
    this.tGuardInfo = new HUYA.GuardInfo;
    this.tFansInfo = new HUYA.FansInfoEx;
    this.sLogoURL = "";
    this.iUserLevel = 0;
    this.iGender = 0;
    this.iAge = 0;
    this.sSign = "";
    this.sLocation = "";
    this.sUserPageUrl = "";
    this.sArea = "";
    this.sPresenterName = "";
    this.iSubscribeStatus = 0;
    this.iSubscribedCount = 0;
    this.lYYId = 0;
    this.vInterestGame = new Taf.Vector(new Taf.STRING);
    this.sLogoDecoUrl = ""
}
;
HUYA.VipCardRsp.prototype._clone = function() {
    return new HUYA.VipCardRsp
}
;
HUYA.VipCardRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.VipCardRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.VipCardRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName);
    t.writeStruct(2, this.tNobleInfo);
    t.writeStruct(3, this.tGuardInfo);
    t.writeStruct(4, this.tFansInfo);
    t.writeString(5, this.sLogoURL);
    t.writeInt32(6, this.iUserLevel);
    t.writeInt32(7, this.iGender);
    t.writeInt32(8, this.iAge);
    t.writeString(9, this.sSign);
    t.writeString(10, this.sLocation);
    t.writeString(11, this.sUserPageUrl);
    t.writeString(12, this.sArea);
    t.writeString(13, this.sPresenterName);
    t.writeInt32(14, this.iSubscribeStatus);
    t.writeInt32(15, this.iSubscribedCount);
    t.writeInt64(16, this.lYYId);
    t.writeVector(17, this.vInterestGame);
    t.writeString(18, this.sLogoDecoUrl)
}
;
HUYA.VipCardRsp.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.tNobleInfo = t.readStruct(2, false, this.tNobleInfo);
    this.tGuardInfo = t.readStruct(3, false, this.tGuardInfo);
    this.tFansInfo = t.readStruct(4, false, this.tFansInfo);
    this.sLogoURL = t.readString(5, false, this.sLogoURL);
    this.iUserLevel = t.readInt32(6, false, this.iUserLevel);
    this.iGender = t.readInt32(7, false, this.iGender);
    this.iAge = t.readInt32(8, false, this.iAge);
    this.sSign = t.readString(9, false, this.sSign);
    this.sLocation = t.readString(10, false, this.sLocation);
    this.sUserPageUrl = t.readString(11, false, this.sUserPageUrl);
    this.sArea = t.readString(12, false, this.sArea);
    this.sPresenterName = t.readString(13, false, this.sPresenterName);
    this.iSubscribeStatus = t.readInt32(14, false, this.iSubscribeStatus);
    this.iSubscribedCount = t.readInt32(15, false, this.iSubscribedCount);
    this.lYYId = t.readInt64(16, false, this.lYYId);
    this.vInterestGame = t.readVector(17, false, this.vInterestGame);
    this.sLogoDecoUrl = t.readString(18, false, this.sLogoDecoUrl)
}
;
HUYA.FansInfoEx = function() {
    this.lUid = 0;
    this.lBadgeId = 0;
    this.sBadgeName = "";
    this.iBadgeLevel = 0;
    this.iScore = 0;
    this.iBadgeType = 0
}
;
HUYA.FansInfoEx.prototype._clone = function() {
    return new HUYA.FansInfoEx
}
;
HUYA.FansInfoEx.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.FansInfoEx.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.FansInfoEx.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lBadgeId);
    t.writeString(2, this.sBadgeName);
    t.writeInt32(3, this.iBadgeLevel);
    t.writeInt32(4, this.iScore);
    t.writeInt32(6, this.iBadgeType)
}
;
HUYA.FansInfoEx.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lBadgeId = t.readInt64(1, false, this.lBadgeId);
    this.sBadgeName = t.readString(2, false, this.sBadgeName);
    this.iBadgeLevel = t.readInt32(3, false, this.iBadgeLevel);
    this.iScore = t.readInt32(4, false, this.iScore);
    this.iBadgeType = t.readInt32(6, false, this.iBadgeType)
}
;
HUYA.WeekStarPropsIds = function() {
    this.vPropsId = new Taf.Vector(new Taf.INT64);
    this.iType = 0;
    this.iAppShowType = 0;
    this.iWeekStarType = 0;
    this.iGameID = 0
}
;
HUYA.WeekStarPropsIds.prototype._clone = function() {
    return new HUYA.WeekStarPropsIds
}
;
HUYA.WeekStarPropsIds.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WeekStarPropsIds.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WeekStarPropsIds.prototype.writeTo = function(t) {
    t.writeVector(0, this.vPropsId);
    t.writeInt32(1, this.iType);
    t.writeInt32(2, this.iAppShowType);
    t.writeInt32(3, this.iWeekStarType);
    t.writeInt32(4, this.iGameID)
}
;
HUYA.WeekStarPropsIds.prototype.readFrom = function(t) {
    this.vPropsId = t.readVector(0, false, this.vPropsId);
    this.iType = t.readInt32(1, false, this.iType);
    this.iAppShowType = t.readInt32(2, false, this.iAppShowType);
    this.iWeekStarType = t.readInt32(3, false, this.iWeekStarType);
    this.iGameID = t.readInt32(4, false, this.iGameID)
}
;
HUYA.WeekStarPropsIdsReq = function() {
    this.tUserId = new HUYA.UserId;
    this.iWeekStarType = 0;
    this.iGameID = 0
}
;
HUYA.WeekStarPropsIdsReq.prototype._clone = function() {
    return new HUYA.WeekStarPropsIdsReq
}
;
HUYA.WeekStarPropsIdsReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WeekStarPropsIdsReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WeekStarPropsIdsReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt32(1, this.iWeekStarType);
    t.writeInt32(2, this.iGameID)
}
;
HUYA.WeekStarPropsIdsReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.iWeekStarType = t.readInt32(1, false, this.iWeekStarType);
    this.iGameID = t.readInt32(2, false, this.iGameID)
}
;
HUYA.WeekStarPropsIdsTab = function() {
    this.mapType2Props = new Taf.Map(new Taf.INT32,new HUYA.WeekStarPropsIds)
}
;
HUYA.WeekStarPropsIdsTab.prototype._clone = function() {
    return new HUYA.WeekStarPropsIdsTab
}
;
HUYA.WeekStarPropsIdsTab.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WeekStarPropsIdsTab.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WeekStarPropsIdsTab.prototype.writeTo = function(t) {
    t.writeMap(0, this.mapType2Props)
}
;
HUYA.WeekStarPropsIdsTab.prototype.readFrom = function(t) {
    this.mapType2Props = t.readMap(0, false, this.mapType2Props)
}
;
HUYA.VipEnterBanner = function() {
    this.lUid = 0;
    this.sNickName = "";
    this.lPid = 0;
    this.tNobleInfo = new HUYA.NobleInfo;
    this.tGuardInfo = new HUYA.GuardInfo;
    this.tWeekRankInfo = new HUYA.WeekRankInfo;
    this.sLogoURL = "";
    this.bFromNearby = false;
    this.sLocation = "";
    this.tDecorationInfo = new HUYA.DecorationInfoRsp;
    this.tWeekHeartStirRankInfo = new HUYA.WeekRankInfo;
    this.tWeekHeartBlockRankInfo = new HUYA.WeekRankInfo;
    this.iMasterRank = 0;
    this.tACInfo = new HUYA.ACEnterBanner
}
;
HUYA.VipEnterBanner.prototype._clone = function() {
    return new HUYA.VipEnterBanner
}
;
HUYA.VipEnterBanner.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.VipEnterBanner.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.VipEnterBanner.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName);
    t.writeInt64(2, this.lPid);
    t.writeStruct(3, this.tNobleInfo);
    t.writeStruct(4, this.tGuardInfo);
    t.writeStruct(5, this.tWeekRankInfo);
    t.writeString(6, this.sLogoURL);
    t.writeBoolean(7, this.bFromNearby);
    t.writeString(8, this.sLocation);
    t.writeStruct(9, this.tDecorationInfo);
    t.writeStruct(10, this.tWeekHeartStirRankInfo);
    t.writeStruct(11, this.tWeekHeartBlockRankInfo);
    t.writeInt32(12, this.iMasterRank);
    t.writeStruct(13, this.tACInfo)
}
;
HUYA.VipEnterBanner.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.lPid = t.readInt64(2, false, this.lPid);
    this.tNobleInfo = t.readStruct(3, false, this.tNobleInfo);
    this.tGuardInfo = t.readStruct(4, false, this.tGuardInfo);
    this.tWeekRankInfo = t.readStruct(5, false, this.tWeekRankInfo);
    this.sLogoURL = t.readString(6, false, this.sLogoURL);
    this.bFromNearby = t.readBoolean(7, false, this.bFromNearby);
    this.sLocation = t.readString(8, false, this.sLocation);
    this.tDecorationInfo = t.readStruct(9, false, this.tDecorationInfo);
    this.tWeekHeartStirRankInfo = t.readStruct(10, false, this.tWeekHeartStirRankInfo);
    this.tWeekHeartBlockRankInfo = t.readStruct(11, false, this.tWeekHeartBlockRankInfo);
    this.iMasterRank = t.readInt32(12, false, this.iMasterRank);
    this.tACInfo = t.readStruct(13, false, this.tACInfo)
}
;
HUYA.ACEnterBanner = function() {
    this.iWeekHeartStirRank = 0;
    this.iWeekHeartBlockRank = 0;
    this.iMasterRank = 0;
    this.iACWeekRank = 0
}
;
HUYA.ACEnterBanner.prototype._clone = function() {
    return new HUYA.ACEnterBanner
}
;
HUYA.ACEnterBanner.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ACEnterBanner.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ACEnterBanner.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iWeekHeartStirRank);
    t.writeInt32(1, this.iWeekHeartBlockRank);
    t.writeInt32(2, this.iMasterRank);
    t.writeInt32(3, this.iACWeekRank)
}
;
HUYA.ACEnterBanner.prototype.readFrom = function(t) {
    this.iWeekHeartStirRank = t.readInt32(0, false, this.iWeekHeartStirRank);
    this.iWeekHeartBlockRank = t.readInt32(1, false, this.iWeekHeartBlockRank);
    this.iMasterRank = t.readInt32(2, false, this.iMasterRank);
    this.iACWeekRank = t.readInt32(3, false, this.iACWeekRank)
}
;
HUYA.WeekRankInfo = function() {
    this.lUid = 0;
    this.iRank = 0
}
;
HUYA.WeekRankInfo.prototype._clone = function() {
    return new HUYA.WeekRankInfo
}
;
HUYA.WeekRankInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WeekRankInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WeekRankInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt32(1, this.iRank)
}
;
HUYA.WeekRankInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.iRank = t.readInt32(1, false, this.iRank)
}
;
HUYA.UserLevelUpgradeNotice = function() {
    this.lUid = 0;
    this.iNewLevel = 0;
    this.iOldLevel = 0
}
;
HUYA.UserLevelUpgradeNotice.prototype._clone = function() {
    return new HUYA.UserLevelUpgradeNotice
}
;
HUYA.UserLevelUpgradeNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserLevelUpgradeNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserLevelUpgradeNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt32(1, this.iNewLevel);
    t.writeInt32(2, this.iOldLevel)
}
;
HUYA.UserLevelUpgradeNotice.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.iNewLevel = t.readInt32(1, false, this.iNewLevel);
    this.iOldLevel = t.readInt32(2, false, this.iOldLevel)
}
;
HUYA.UserNovieTaskCompleteNotice = function() {
    this.lUid = 0;
    this.tInfo = new HUYA.UserTaskInfo
}
;
HUYA.UserNovieTaskCompleteNotice.prototype._clone = function() {
    return new HUYA.UserNovieTaskCompleteNotice
}
;
HUYA.UserNovieTaskCompleteNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserNovieTaskCompleteNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserNovieTaskCompleteNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeStruct(1, this.tInfo)
}
;
HUYA.UserNovieTaskCompleteNotice.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.tInfo = t.readStruct(1, false, this.tInfo)
}
;
HUYA.UserTaskInfo = function() {
    this.iId = 0;
    this.sName = "";
    this.sDesc = "";
    this.iType = 0;
    this.iProgressMode = 0;
    this.iTargetLevel = 0;
    this.tSubTaskTargetLevel = new Taf.Map(new Taf.STRING,new Taf.INT32);
    this.sClassName = "";
    this.bEnable = true;
    this.iProgress = 0;
    this.bAwardPrize = true;
    this.tPrize = new Taf.Map(new Taf.STRING,new Taf.INT32);
    this.sIcon = "";
    this.iExper = 0;
    this.iDisplay = 0;
    this.sMobileDesc = ""
}
;
HUYA.UserTaskInfo.prototype._clone = function() {
    return new HUYA.UserTaskInfo
}
;
HUYA.UserTaskInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserTaskInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserTaskInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iId);
    t.writeString(1, this.sName);
    t.writeString(2, this.sDesc);
    t.writeInt32(3, this.iType);
    t.writeInt32(4, this.iProgressMode);
    t.writeInt32(5, this.iTargetLevel);
    t.writeMap(6, this.tSubTaskTargetLevel);
    t.writeString(7, this.sClassName);
    t.writeBoolean(8, this.bEnable);
    t.writeInt32(9, this.iProgress);
    t.writeBoolean(10, this.bAwardPrize);
    t.writeMap(11, this.tPrize);
    t.writeString(12, this.sIcon);
    t.writeInt32(13, this.iExper);
    t.writeInt32(14, this.iDisplay);
    t.writeString(15, this.sMobileDesc)
}
;
HUYA.UserTaskInfo.prototype.readFrom = function(t) {
    this.iId = t.readInt32(0, false, this.iId);
    this.sName = t.readString(1, false, this.sName);
    this.sDesc = t.readString(2, false, this.sDesc);
    this.iType = t.readInt32(3, false, this.iType);
    this.iProgressMode = t.readInt32(4, false, this.iProgressMode);
    this.iTargetLevel = t.readInt32(5, false, this.iTargetLevel);
    this.tSubTaskTargetLevel = t.readMap(6, false, this.tSubTaskTargetLevel);
    this.sClassName = t.readString(7, false, this.sClassName);
    this.bEnable = t.readBoolean(8, false, this.bEnable);
    this.iProgress = t.readInt32(9, false, this.iProgress);
    this.bAwardPrize = t.readBoolean(10, false, this.bAwardPrize);
    this.tPrize = t.readMap(11, false, this.tPrize);
    this.sIcon = t.readString(12, false, this.sIcon);
    this.iExper = t.readInt32(13, false, this.iExper);
    this.iDisplay = t.readInt32(14, false, this.iDisplay);
    this.sMobileDesc = t.readString(15, false, this.sMobileDesc)
}
;
HUYA.GetSuperFansCardReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lUid = 0;
    this.lPid = 0
}
;
HUYA.GetSuperFansCardReq.prototype._clone = function() {
    return new HUYA.GetSuperFansCardReq
}
;
HUYA.GetSuperFansCardReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetSuperFansCardReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetSuperFansCardReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lUid);
    t.writeInt64(2, this.lPid)
}
;
HUYA.GetSuperFansCardReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lUid = t.readInt64(1, false, this.lUid);
    this.lPid = t.readInt64(2, false, this.lPid)
}
;
HUYA.GetSuperFansCardRsp = function() {
    this.lUid = 0;
    this.lPid = 0;
    this.iCardCount = 0;
    this.iItemType = 0
}
;
HUYA.GetSuperFansCardRsp.prototype._clone = function() {
    return new HUYA.GetSuperFansCardRsp
}
;
HUYA.GetSuperFansCardRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetSuperFansCardRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetSuperFansCardRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lPid);
    t.writeInt32(2, this.iCardCount);
    t.writeInt32(3, this.iItemType)
}
;
HUYA.GetSuperFansCardRsp.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.iCardCount = t.readInt32(2, false, this.iCardCount);
    this.iItemType = t.readInt32(3, false, this.iItemType)
}
;
HUYA.SuperFansRankListReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lPid = 0
}
;
HUYA.SuperFansRankListReq.prototype._clone = function() {
    return new HUYA.SuperFansRankListReq
}
;
HUYA.SuperFansRankListReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SuperFansRankListReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SuperFansRankListReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lPid)
}
;
HUYA.SuperFansRankListReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lPid = t.readInt64(1, false, this.lPid)
}
;
HUYA.SuperFansRankListRsp = function() {
    this.vSuperFansRankItem = new Taf.Vector(new HUYA.SuperFansRankItem);
    this.lPid = 0;
    this.iStart = 0;
    this.iCount = 0;
    this.iSFItemType = 0;
    this.iNum = 0
}
;
HUYA.SuperFansRankListRsp.prototype._clone = function() {
    return new HUYA.SuperFansRankListRsp
}
;
HUYA.SuperFansRankListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SuperFansRankListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SuperFansRankListRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vSuperFansRankItem);
    t.writeInt64(1, this.lPid);
    t.writeInt32(2, this.iStart);
    t.writeInt32(3, this.iCount);
    t.writeInt32(4, this.iSFItemType);
    t.writeInt32(5, this.iNum)
}
;
HUYA.SuperFansRankListRsp.prototype.readFrom = function(t) {
    this.vSuperFansRankItem = t.readVector(0, false, this.vSuperFansRankItem);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.iStart = t.readInt32(2, false, this.iStart);
    this.iCount = t.readInt32(3, false, this.iCount);
    this.iSFItemType = t.readInt32(4, false, this.iSFItemType);
    this.iNum = t.readInt32(5, false, this.iNum)
}
;
HUYA.SuperFansRankItem = function() {
    this.lUid = 0;
    this.sNickName = "";
    this.sLogo = "";
    this.iUserLevel = 0;
    this.iRank = 0;
    this.lScore = 0;
    this.tNobleLevel = new HUYA.NobleLevelInfo;
    this.iSFFlag = 0
}
;
HUYA.SuperFansRankItem.prototype._clone = function() {
    return new HUYA.SuperFansRankItem
}
;
HUYA.SuperFansRankItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SuperFansRankItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SuperFansRankItem.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName);
    t.writeString(2, this.sLogo);
    t.writeInt32(3, this.iUserLevel);
    t.writeInt32(4, this.iRank);
    t.writeInt64(5, this.lScore);
    t.writeStruct(6, this.tNobleLevel);
    t.writeInt32(7, this.iSFFlag)
}
;
HUYA.SuperFansRankItem.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.sLogo = t.readString(2, false, this.sLogo);
    this.iUserLevel = t.readInt32(3, false, this.iUserLevel);
    this.iRank = t.readInt32(4, false, this.iRank);
    this.lScore = t.readInt64(5, false, this.lScore);
    this.tNobleLevel = t.readStruct(6, false, this.tNobleLevel);
    this.iSFFlag = t.readInt32(7, false, this.iSFFlag)
}
;
HUYA.SuperFansInfo = function() {
    this.lSFExpiredTS = 0;
    this.iSFFlag = 0
}
;
HUYA.SuperFansInfo.prototype._clone = function() {
    return new HUYA.SuperFansInfo
}
;
HUYA.SuperFansInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SuperFansInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SuperFansInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lSFExpiredTS);
    t.writeInt32(1, this.iSFFlag)
}
;
HUYA.SuperFansInfo.prototype.readFrom = function(t) {
    this.lSFExpiredTS = t.readInt64(0, false, this.lSFExpiredTS);
    this.iSFFlag = t.readInt32(1, false, this.iSFFlag)
}
;
HUYA.GetGameInfoListReq = function() {
    this.tId = new HUYA.UserId;
    this.lTopSid = 0;
    this.lSubSid = 0;
    this.lPid = 0
}
;
HUYA.GetGameInfoListReq.prototype._clone = function() {
    return new HUYA.GetGameInfoListReq
}
;
HUYA.GetGameInfoListReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetGameInfoListReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetGameInfoListReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lTopSid);
    t.writeInt64(2, this.lSubSid);
    t.writeInt64(3, this.lPid)
}
;
HUYA.GetGameInfoListReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lTopSid = t.readInt64(1, false, this.lTopSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid);
    this.lPid = t.readInt64(3, false, this.lPid)
}
;
HUYA.GetGameInfoListRsp = function() {
    this.vGameNoticeInfoList = new Taf.Vector(new HUYA.GameNoticeInfoList);
    this.iCommission = 0
}
;
HUYA.GetGameInfoListRsp.prototype._clone = function() {
    return new HUYA.GetGameInfoListRsp
}
;
HUYA.GetGameInfoListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetGameInfoListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetGameInfoListRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vGameNoticeInfoList);
    t.writeInt32(1, this.iCommission)
}
;
HUYA.GetGameInfoListRsp.prototype.readFrom = function(t) {
    this.vGameNoticeInfoList = t.readVector(0, false, this.vGameNoticeInfoList);
    this.iCommission = t.readInt32(1, false, this.iCommission)
}
;
HUYA.GetRemainBeanNumReq = function() {
    this.tId = new HUYA.UserId;
    this.lTopSid = 0;
    this.lSubSid = 0;
    this.lPid = 0;
    this.iUnitId = 0;
    this.iBetOdds = 0
}
;
HUYA.GetRemainBeanNumReq.prototype._clone = function() {
    return new HUYA.GetRemainBeanNumReq
}
;
HUYA.GetRemainBeanNumReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetRemainBeanNumReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetRemainBeanNumReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lTopSid);
    t.writeInt64(2, this.lSubSid);
    t.writeInt64(3, this.lPid);
    t.writeInt32(4, this.iUnitId);
    t.writeInt32(5, this.iBetOdds)
}
;
HUYA.GetRemainBeanNumReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lTopSid = t.readInt64(1, false, this.lTopSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid);
    this.lPid = t.readInt64(3, false, this.lPid);
    this.iUnitId = t.readInt32(4, false, this.iUnitId);
    this.iBetOdds = t.readInt32(5, false, this.iBetOdds)
}
;
HUYA.GetRemainBeanNumRsp = function() {
    this.iCode = 0;
    this.iBetType = 0;
    this.iBetRemainNum = 0;
    this.iBuyAllNum = 0;
    this.lBetRemainNum = 0;
    this.lBuyAllNum = 0
}
;
HUYA.GetRemainBeanNumRsp.prototype._clone = function() {
    return new HUYA.GetRemainBeanNumRsp
}
;
HUYA.GetRemainBeanNumRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetRemainBeanNumRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetRemainBeanNumRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iCode);
    t.writeInt32(1, this.iBetType);
    t.writeInt32(2, this.iBetRemainNum);
    t.writeInt32(3, this.iBuyAllNum);
    t.writeInt64(4, this.lBetRemainNum);
    t.writeInt64(5, this.lBuyAllNum)
}
;
HUYA.GetRemainBeanNumRsp.prototype.readFrom = function(t) {
    this.iCode = t.readInt32(0, false, this.iCode);
    this.iBetType = t.readInt32(1, false, this.iBetType);
    this.iBetRemainNum = t.readInt32(2, false, this.iBetRemainNum);
    this.iBuyAllNum = t.readInt32(3, false, this.iBuyAllNum);
    this.lBetRemainNum = t.readInt64(4, false, this.lBetRemainNum);
    this.lBuyAllNum = t.readInt64(5, false, this.lBuyAllNum)
}
;
HUYA.QueryPackageReq = function() {
    this.tId = new HUYA.UserId;
    this.lTopSid = 0;
    this.lSubSid = 0
}
;
HUYA.QueryPackageReq.prototype._clone = function() {
    return new HUYA.QueryPackageReq
}
;
HUYA.QueryPackageReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.QueryPackageReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.QueryPackageReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lTopSid);
    t.writeInt64(2, this.lSubSid)
}
;
HUYA.QueryPackageReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lTopSid = t.readInt64(1, false, this.lTopSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
}
;
HUYA.QueryPackageRsp = function() {
    this.iCode = 0;
    this.iItemWhiteBeanCount = 0;
    this.iItemGreenBeanCount = 0;
    this.lItemWhiteBeanCount = 0;
    this.lItemGreenBeanCount = 0
}
;
HUYA.QueryPackageRsp.prototype._clone = function() {
    return new HUYA.QueryPackageRsp
}
;
HUYA.QueryPackageRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.QueryPackageRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.QueryPackageRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iCode);
    t.writeInt32(1, this.iItemWhiteBeanCount);
    t.writeInt32(2, this.iItemGreenBeanCount);
    t.writeInt64(3, this.lItemWhiteBeanCount);
    t.writeInt64(4, this.lItemGreenBeanCount)
}
;
HUYA.QueryPackageRsp.prototype.readFrom = function(t) {
    this.iCode = t.readInt32(0, false, this.iCode);
    this.iItemWhiteBeanCount = t.readInt32(1, false, this.iItemWhiteBeanCount);
    this.iItemGreenBeanCount = t.readInt32(2, false, this.iItemGreenBeanCount);
    this.lItemWhiteBeanCount = t.readInt64(3, false, this.lItemWhiteBeanCount);
    this.lItemGreenBeanCount = t.readInt64(4, false, this.lItemGreenBeanCount)
}
;
HUYA.QueryCardPackageReq = function() {
    this.tUserId = new HUYA.UserId;
    this.vUids = new Taf.Vector(new Taf.INT64);
    this.vItemTypes = new Taf.Vector(new Taf.INT32);
    this.vCardTypes = new Taf.Vector(new Taf.INT32);
    this.lExpiredTime = 0;
    this.iIsStorage = 0;
    this.iType = 0
}
;
HUYA.QueryCardPackageReq.prototype._clone = function() {
    return new HUYA.QueryCardPackageReq
}
;
HUYA.QueryCardPackageReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.QueryCardPackageReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.QueryCardPackageReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeVector(1, this.vUids);
    t.writeVector(2, this.vItemTypes);
    t.writeVector(3, this.vCardTypes);
    t.writeInt64(4, this.lExpiredTime);
    t.writeInt32(5, this.iIsStorage);
    t.writeInt32(6, this.iType)
}
;
HUYA.QueryCardPackageReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.vUids = t.readVector(1, false, this.vUids);
    this.vItemTypes = t.readVector(2, false, this.vItemTypes);
    this.vCardTypes = t.readVector(3, false, this.vCardTypes);
    this.lExpiredTime = t.readInt64(4, false, this.lExpiredTime);
    this.iIsStorage = t.readInt32(5, false, this.iIsStorage);
    this.iType = t.readInt32(6, false, this.iType)
}
;
HUYA.QueryCardPackageRsp = function() {
    this.vItemsInUsers = new Taf.Vector(new HUYA.UserPackageItemInfo)
}
;
HUYA.QueryCardPackageRsp.prototype._clone = function() {
    return new HUYA.QueryCardPackageRsp
}
;
HUYA.QueryCardPackageRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.QueryCardPackageRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.QueryCardPackageRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vItemsInUsers)
}
;
HUYA.QueryCardPackageRsp.prototype.readFrom = function(t) {
    this.vItemsInUsers = t.readVector(0, false, this.vItemsInUsers)
}
;
HUYA.UserPackageItemInfo = function() {
    this.lUid = 0;
    this.iItemType = 0;
    this.sCardName = "";
    this.iCardType = 0;
    this.lExpireTime = 0;
    this.iIsPay = 0;
    this.lItemCount = 0
}
;
HUYA.UserPackageItemInfo.prototype._clone = function() {
    return new HUYA.UserPackageItemInfo
}
;
HUYA.UserPackageItemInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserPackageItemInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserPackageItemInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt32(1, this.iItemType);
    t.writeString(2, this.sCardName);
    t.writeInt32(3, this.iCardType);
    t.writeInt32(4, this.lExpireTime);
    t.writeInt32(5, this.iIsPay);
    t.writeInt64(6, this.lItemCount)
}
;
HUYA.UserPackageItemInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.iItemType = t.readInt32(1, false, this.iItemType);
    this.sCardName = t.readString(2, false, this.sCardName);
    this.iCardType = t.readInt32(3, false, this.iCardType);
    this.lExpireTime = t.readInt32(4, false, this.lExpireTime);
    this.iIsPay = t.readInt32(5, false, this.iIsPay);
    this.lItemCount = t.readInt64(6, false, this.lItemCount)
}
;
HUYA.BuyBetReq = function() {
    this.tId = new HUYA.UserId;
    this.lTopSid = 0;
    this.lSubSid = 0;
    this.lPid = 0;
    this.iUnitId = 0;
    this.iBetOdds = 0;
    this.sUserName = "";
    this.iExchangeAmount = 0;
    this.sTokencakey = "";
    this.sOrderId = ""
}
;
HUYA.BuyBetReq.prototype._clone = function() {
    return new HUYA.BuyBetReq
}
;
HUYA.BuyBetReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BuyBetReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BuyBetReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lTopSid);
    t.writeInt64(2, this.lSubSid);
    t.writeInt64(3, this.lPid);
    t.writeInt32(4, this.iUnitId);
    t.writeInt32(5, this.iBetOdds);
    t.writeString(6, this.sUserName);
    t.writeInt32(7, this.iExchangeAmount);
    t.writeString(8, this.sTokencakey);
    t.writeString(9, this.sOrderId)
}
;
HUYA.BuyBetReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lTopSid = t.readInt64(1, false, this.lTopSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid);
    this.lPid = t.readInt64(3, false, this.lPid);
    this.iUnitId = t.readInt32(4, false, this.iUnitId);
    this.iBetOdds = t.readInt32(5, false, this.iBetOdds);
    this.sUserName = t.readString(6, false, this.sUserName);
    this.iExchangeAmount = t.readInt32(7, false, this.iExchangeAmount);
    this.sTokencakey = t.readString(8, false, this.sTokencakey);
    this.sOrderId = t.readString(9, false, this.sOrderId)
}
;
HUYA.BuyBetRsp = function() {
    this.iCode = 0;
    this.iBetType = 0;
    this.iBetOdds = 0;
    this.iSuccessExchangeAmount = 0;
    this.iFailedExchangeAmount = 0;
    this.iNestBestOdds = 0;
    this.sMsg = ""
}
;
HUYA.BuyBetRsp.prototype._clone = function() {
    return new HUYA.BuyBetRsp
}
;
HUYA.BuyBetRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BuyBetRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BuyBetRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iCode);
    t.writeInt32(1, this.iBetType);
    t.writeInt32(2, this.iBetOdds);
    t.writeInt32(3, this.iSuccessExchangeAmount);
    t.writeInt32(4, this.iFailedExchangeAmount);
    t.writeInt32(5, this.iNestBestOdds);
    t.writeString(6, this.sMsg)
}
;
HUYA.BuyBetRsp.prototype.readFrom = function(t) {
    this.iCode = t.readInt32(0, false, this.iCode);
    this.iBetType = t.readInt32(1, false, this.iBetType);
    this.iBetOdds = t.readInt32(2, false, this.iBetOdds);
    this.iSuccessExchangeAmount = t.readInt32(3, false, this.iSuccessExchangeAmount);
    this.iFailedExchangeAmount = t.readInt32(4, false, this.iFailedExchangeAmount);
    this.iNestBestOdds = t.readInt32(5, false, this.iNestBestOdds);
    this.sMsg = t.readString(6, false, this.sMsg)
}
;
HUYA.BetReq = function() {
    this.tId = new HUYA.UserId;
    this.lTopSid = 0;
    this.lSubSid = 0;
    this.lPid = 0;
    this.sBankerName = "";
    this.iBetAmount = 0;
    this.iBetOdds = 0;
    this.iGameUnitId = 0;
    this.iBetType = 0;
    this.sTokencakey = "";
    this.sOrderId = ""
}
;
HUYA.BetReq.prototype._clone = function() {
    return new HUYA.BetReq
}
;
HUYA.BetReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BetReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BetReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lTopSid);
    t.writeInt64(2, this.lSubSid);
    t.writeInt64(3, this.lPid);
    t.writeString(4, this.sBankerName);
    t.writeInt32(5, this.iBetAmount);
    t.writeInt32(6, this.iBetOdds);
    t.writeInt32(7, this.iGameUnitId);
    t.writeInt32(8, this.iBetType);
    t.writeString(9, this.sTokencakey);
    t.writeString(10, this.sOrderId)
}
;
HUYA.BetReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lTopSid = t.readInt64(1, false, this.lTopSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid);
    this.lPid = t.readInt64(3, false, this.lPid);
    this.sBankerName = t.readString(4, false, this.sBankerName);
    this.iBetAmount = t.readInt32(5, false, this.iBetAmount);
    this.iBetOdds = t.readInt32(6, false, this.iBetOdds);
    this.iGameUnitId = t.readInt32(7, false, this.iGameUnitId);
    this.iBetType = t.readInt32(8, false, this.iBetType);
    this.sTokencakey = t.readString(9, false, this.sTokencakey);
    this.sOrderId = t.readString(10, false, this.sOrderId)
}
;
HUYA.BetRsp = function() {
    this.iCode = 0;
    this.sMsg = ""
}
;
HUYA.BetRsp.prototype._clone = function() {
    return new HUYA.BetRsp
}
;
HUYA.BetRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BetRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BetRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iCode);
    t.writeString(1, this.sMsg)
}
;
HUYA.BetRsp.prototype.readFrom = function(t) {
    this.iCode = t.readInt32(0, false, this.iCode);
    this.sMsg = t.readString(1, false, this.sMsg)
}
;
HUYA.MyBetInfo = function() {
    this.iBetId = 0;
    this.sBankerName = "";
    this.iOperationType = 0;
    this.iBetType = 0;
    this.iBetAmount = 0;
    this.iBetExchangeAmount = 0;
    this.iBetOdds = 0;
    this.lBetTime = 0;
    this.sBetWinnerName = "";
    this.sGameName = "";
    this.lBetExchangeAmount = 0
}
;
HUYA.MyBetInfo.prototype._clone = function() {
    return new HUYA.MyBetInfo
}
;
HUYA.MyBetInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MyBetInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MyBetInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iBetId);
    t.writeString(1, this.sBankerName);
    t.writeInt32(2, this.iOperationType);
    t.writeInt32(3, this.iBetType);
    t.writeInt32(4, this.iBetAmount);
    t.writeInt32(5, this.iBetExchangeAmount);
    t.writeInt32(6, this.iBetOdds);
    t.writeInt64(7, this.lBetTime);
    t.writeString(8, this.sBetWinnerName);
    t.writeString(9, this.sGameName);
    t.writeInt64(10, this.lBetExchangeAmount)
}
;
HUYA.MyBetInfo.prototype.readFrom = function(t) {
    this.iBetId = t.readInt32(0, false, this.iBetId);
    this.sBankerName = t.readString(1, false, this.sBankerName);
    this.iOperationType = t.readInt32(2, false, this.iOperationType);
    this.iBetType = t.readInt32(3, false, this.iBetType);
    this.iBetAmount = t.readInt32(4, false, this.iBetAmount);
    this.iBetExchangeAmount = t.readInt32(5, false, this.iBetExchangeAmount);
    this.iBetOdds = t.readInt32(6, false, this.iBetOdds);
    this.lBetTime = t.readInt64(7, false, this.lBetTime);
    this.sBetWinnerName = t.readString(8, false, this.sBetWinnerName);
    this.sGameName = t.readString(9, false, this.sGameName);
    this.lBetExchangeAmount = t.readInt64(10, false, this.lBetExchangeAmount)
}
;
HUYA.BatchGameInfoNotice = function() {
    this.vGameNoticeInfoList = new Taf.Vector(new HUYA.GameNoticeInfoList);
    this.lTopSid = 0;
    this.lSubSid = 0;
    this.iCommission = 0
}
;
HUYA.BatchGameInfoNotice.prototype._clone = function() {
    return new HUYA.BatchGameInfoNotice
}
;
HUYA.BatchGameInfoNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BatchGameInfoNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BatchGameInfoNotice.prototype.writeTo = function(t) {
    t.writeVector(0, this.vGameNoticeInfoList);
    t.writeInt64(1, this.lTopSid);
    t.writeInt64(2, this.lSubSid);
    t.writeInt32(3, this.iCommission)
}
;
HUYA.BatchGameInfoNotice.prototype.readFrom = function(t) {
    this.vGameNoticeInfoList = t.readVector(0, false, this.vGameNoticeInfoList);
    this.lTopSid = t.readInt64(1, false, this.lTopSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid);
    this.iCommission = t.readInt32(3, false, this.iCommission)
}
;
HUYA.GameNoticeInfoList = function() {
    this.vGameNoticeInfo = new Taf.Vector(new HUYA.GameNoticeInfo)
}
;
HUYA.GameNoticeInfoList.prototype._clone = function() {
    return new HUYA.GameNoticeInfoList
}
;
HUYA.GameNoticeInfoList.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GameNoticeInfoList.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GameNoticeInfoList.prototype.writeTo = function(t) {
    t.writeVector(0, this.vGameNoticeInfo)
}
;
HUYA.GameNoticeInfoList.prototype.readFrom = function(t) {
    this.vGameNoticeInfo = t.readVector(0, false, this.vGameNoticeInfo)
}
;
HUYA.GameNoticeInfo = function() {
    this.iGameId = 0;
    this.iGameStats = 0;
    this.lGameStarterUid = 0;
    this.sGameName = "";
    this.lGameStarttime = 0;
    this.sGameDescription = "";
    this.vGameUnitInfo = new Taf.Vector(new HUYA.GameUnitInfoV1);
    this.iStarterTotalGames = 0;
    this.iStarterUncloseGames = 0;
    this.iStarterCreditValue = 0;
    this.iExchangeCredit = 0;
    this.iBetType = 0;
    this.lGameBetOffTime = 0;
    this.iGameBetOffRetTime = 0
}
;
HUYA.GameNoticeInfo.prototype._clone = function() {
    return new HUYA.GameNoticeInfo
}
;
HUYA.GameNoticeInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GameNoticeInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GameNoticeInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iGameId);
    t.writeInt32(1, this.iGameStats);
    t.writeInt64(2, this.lGameStarterUid);
    t.writeString(3, this.sGameName);
    t.writeInt64(4, this.lGameStarttime);
    t.writeString(5, this.sGameDescription);
    t.writeVector(6, this.vGameUnitInfo);
    t.writeInt32(7, this.iStarterTotalGames);
    t.writeInt32(8, this.iStarterUncloseGames);
    t.writeInt32(9, this.iStarterCreditValue);
    t.writeInt32(10, this.iExchangeCredit);
    t.writeInt32(11, this.iBetType);
    t.writeInt32(12, this.lGameBetOffTime);
    t.writeInt32(13, this.iGameBetOffRetTime)
}
;
HUYA.GameNoticeInfo.prototype.readFrom = function(t) {
    this.iGameId = t.readInt32(0, false, this.iGameId);
    this.iGameStats = t.readInt32(1, false, this.iGameStats);
    this.lGameStarterUid = t.readInt64(2, false, this.lGameStarterUid);
    this.sGameName = t.readString(3, false, this.sGameName);
    this.lGameStarttime = t.readInt64(4, false, this.lGameStarttime);
    this.sGameDescription = t.readString(5, false, this.sGameDescription);
    this.vGameUnitInfo = t.readVector(6, false, this.vGameUnitInfo);
    this.iStarterTotalGames = t.readInt32(7, false, this.iStarterTotalGames);
    this.iStarterUncloseGames = t.readInt32(8, false, this.iStarterUncloseGames);
    this.iStarterCreditValue = t.readInt32(9, false, this.iStarterCreditValue);
    this.iExchangeCredit = t.readInt32(10, false, this.iExchangeCredit);
    this.iBetType = t.readInt32(11, false, this.iBetType);
    this.lGameBetOffTime = t.readInt32(12, false, this.lGameBetOffTime);
    this.iGameBetOffRetTime = t.readInt32(13, false, this.iGameBetOffRetTime)
}
;
HUYA.GameInfoChangeNotice = function() {
    this.iGameId = 0;
    this.iGameStats = 0;
    this.vGameUnitInfo = new Taf.Vector(new HUYA.GameUnitInfoV1);
    this.lTopSid = 0;
    this.lSubSid = 0
}
;
HUYA.GameInfoChangeNotice.prototype._clone = function() {
    return new HUYA.GameInfoChangeNotice
}
;
HUYA.GameInfoChangeNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GameInfoChangeNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GameInfoChangeNotice.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iGameId);
    t.writeInt32(1, this.iGameStats);
    t.writeVector(2, this.vGameUnitInfo);
    t.writeInt64(3, this.lTopSid);
    t.writeInt64(4, this.lSubSid)
}
;
HUYA.GameInfoChangeNotice.prototype.readFrom = function(t) {
    this.iGameId = t.readInt32(0, false, this.iGameId);
    this.iGameStats = t.readInt32(1, false, this.iGameStats);
    this.vGameUnitInfo = t.readVector(2, false, this.vGameUnitInfo);
    this.lTopSid = t.readInt64(3, false, this.lTopSid);
    this.lSubSid = t.readInt64(4, false, this.lSubSid)
}
;
HUYA.GameUnitInfoV1 = function() {
    this.iGameUnitId = 0;
    this.sGameUnitName = "";
    this.iBetOdds = 0;
    this.iBetExchangeAmount = 0;
    this.lBetExchangeAmount = 0
}
;
HUYA.GameUnitInfoV1.prototype._clone = function() {
    return new HUYA.GameUnitInfoV1
}
;
HUYA.GameUnitInfoV1.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GameUnitInfoV1.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GameUnitInfoV1.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iGameUnitId);
    t.writeString(1, this.sGameUnitName);
    t.writeInt32(2, this.iBetOdds);
    t.writeInt32(3, this.iBetExchangeAmount);
    t.writeInt64(4, this.lBetExchangeAmount)
}
;
HUYA.GameUnitInfoV1.prototype.readFrom = function(t) {
    this.iGameUnitId = t.readInt32(0, false, this.iGameUnitId);
    this.sGameUnitName = t.readString(1, false, this.sGameUnitName);
    this.iBetOdds = t.readInt32(2, false, this.iBetOdds);
    this.iBetExchangeAmount = t.readInt32(3, false, this.iBetExchangeAmount);
    this.lBetExchangeAmount = t.readInt64(4, false, this.lBetExchangeAmount)
}
;
HUYA.EndHistoryGameNotice = function() {
    this.vHistoryGameInfo = new Taf.Vector(new HUYA.HistoryGameInfo);
    this.lTopSid = 0;
    this.lSubSid = 0
}
;
HUYA.EndHistoryGameNotice.prototype._clone = function() {
    return new HUYA.EndHistoryGameNotice
}
;
HUYA.EndHistoryGameNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.EndHistoryGameNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.EndHistoryGameNotice.prototype.writeTo = function(t) {
    t.writeVector(0, this.vHistoryGameInfo);
    t.writeInt64(1, this.lTopSid);
    t.writeInt64(2, this.lSubSid)
}
;
HUYA.EndHistoryGameNotice.prototype.readFrom = function(t) {
    this.vHistoryGameInfo = t.readVector(0, false, this.vHistoryGameInfo);
    this.lTopSid = t.readInt64(1, false, this.lTopSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid)
}
;
HUYA.HistoryGameInfo = function() {
    this.sTopicName = "";
    this.iBreakFlag = 0;
    this.sWinnerName = ""
}
;
HUYA.HistoryGameInfo.prototype._clone = function() {
    return new HUYA.HistoryGameInfo
}
;
HUYA.HistoryGameInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.HistoryGameInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.HistoryGameInfo.prototype.writeTo = function(t) {
    t.writeString(0, this.sTopicName);
    t.writeInt32(1, this.iBreakFlag);
    t.writeString(2, this.sWinnerName)
}
;
HUYA.HistoryGameInfo.prototype.readFrom = function(t) {
    this.sTopicName = t.readString(0, false, this.sTopicName);
    this.iBreakFlag = t.readInt32(1, false, this.iBreakFlag);
    this.sWinnerName = t.readString(2, false, this.sWinnerName)
}
;
HUYA.GameSettlementNotice = function() {
    this.vGameUnitNames = new Taf.Vector(new Taf.STRING);
    this.iWinnerUnitId = 0;
    this.iBetIncome = 0;
    this.iBuyIncome = 0;
    this.lGameTime = 0;
    this.vMyInfoList = new Taf.Vector(new HUYA.MyBetInfo);
    this.iGameId = 0;
    this.lBetIncome = 0
}
;
HUYA.GameSettlementNotice.prototype._clone = function() {
    return new HUYA.GameSettlementNotice
}
;
HUYA.GameSettlementNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GameSettlementNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GameSettlementNotice.prototype.writeTo = function(t) {
    t.writeVector(0, this.vGameUnitNames);
    t.writeInt32(1, this.iWinnerUnitId);
    t.writeInt32(2, this.iBetIncome);
    t.writeInt32(3, this.iBuyIncome);
    t.writeInt64(4, this.lGameTime);
    t.writeVector(5, this.vMyInfoList);
    t.writeInt32(6, this.iGameId);
    t.writeInt64(7, this.lBetIncome)
}
;
HUYA.GameSettlementNotice.prototype.readFrom = function(t) {
    this.vGameUnitNames = t.readVector(0, false, this.vGameUnitNames);
    this.iWinnerUnitId = t.readInt32(1, false, this.iWinnerUnitId);
    this.iBetIncome = t.readInt32(2, false, this.iBetIncome);
    this.iBuyIncome = t.readInt32(3, false, this.iBuyIncome);
    this.lGameTime = t.readInt64(4, false, this.lGameTime);
    this.vMyInfoList = t.readVector(5, false, this.vMyInfoList);
    this.iGameId = t.readInt32(6, false, this.iGameId);
    this.lBetIncome = t.readInt64(7, false, this.lBetIncome)
}
;
HUYA.PresenterEndGameNotice = function() {
    this.iGameId = 0;
    this.iGameUnitId = 0;
    this.iGameResult = 0
}
;
HUYA.PresenterEndGameNotice.prototype._clone = function() {
    return new HUYA.PresenterEndGameNotice
}
;
HUYA.PresenterEndGameNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterEndGameNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterEndGameNotice.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iGameId);
    t.writeInt32(1, this.iGameUnitId);
    t.writeInt32(2, this.iGameResult)
}
;
HUYA.PresenterEndGameNotice.prototype.readFrom = function(t) {
    this.iGameId = t.readInt32(0, false, this.iGameId);
    this.iGameUnitId = t.readInt32(1, false, this.iGameUnitId);
    this.iGameResult = t.readInt32(2, false, this.iGameResult)
}
;
HUYA.GetAssistantReq = function() {
    this.tId = new HUYA.UserId;
    this.lPid = 0;
    this.lAssistantUid = 0
}
;
HUYA.GetAssistantReq.prototype._clone = function() {
    return new HUYA.GetAssistantReq
}
;
HUYA.GetAssistantReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetAssistantReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetAssistantReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lPid);
    t.writeInt64(2, this.lAssistantUid)
}
;
HUYA.GetAssistantReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.lAssistantUid = t.readInt64(2, false, this.lAssistantUid)
}
;
HUYA.GetAssistantRsp = function() {
    this.iCode = 0;
    this.lAssistantUid = 0
}
;
HUYA.GetAssistantRsp.prototype._clone = function() {
    return new HUYA.GetAssistantRsp
}
;
HUYA.GetAssistantRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetAssistantRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetAssistantRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iCode);
    t.writeInt64(1, this.lAssistantUid)
}
;
HUYA.GetAssistantRsp.prototype.readFrom = function(t) {
    this.iCode = t.readInt32(0, false, this.iCode);
    this.lAssistantUid = t.readInt64(1, false, this.lAssistantUid)
}
;
HUYA.ShowScreenSkinNotify = function() {
    this.data = new HUYA.ScreenSkinData
}
;
HUYA.ShowScreenSkinNotify.prototype._clone = function() {
    return new HUYA.ShowScreenSkinNotify
}
;
HUYA.ShowScreenSkinNotify.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ShowScreenSkinNotify.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ShowScreenSkinNotify.prototype.writeTo = function(t) {
    t.writeStruct(0, this.data)
}
;
HUYA.ShowScreenSkinNotify.prototype.readFrom = function(t) {
    this.data = t.readStruct(0, false, this.data)
}
;
HUYA.HideScreenSkinNotify = function() {
    this.lId = 0
}
;
HUYA.HideScreenSkinNotify.prototype._clone = function() {
    return new HUYA.HideScreenSkinNotify
}
;
HUYA.HideScreenSkinNotify.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.HideScreenSkinNotify.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.HideScreenSkinNotify.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lId)
}
;
HUYA.HideScreenSkinNotify.prototype.readFrom = function(t) {
    this.lId = t.readInt64(0, false, this.lId)
}
;
HUYA.ScreenSkinData = function() {
    this.lId = 0;
    this.sTitle = "";
    this.sPicUrl = "";
    this.iStatus = 0;
    this.iTemplate = 0;
    this.iPresenterUid = 0;
    this.sWebPicUrl = ""
}
;
HUYA.ScreenSkinData.prototype._clone = function() {
    return new HUYA.ScreenSkinData
}
;
HUYA.ScreenSkinData.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ScreenSkinData.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ScreenSkinData.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lId);
    t.writeString(1, this.sTitle);
    t.writeString(2, this.sPicUrl);
    t.writeInt16(3, this.iStatus);
    t.writeInt32(4, this.iTemplate);
    t.writeInt64(5, this.iPresenterUid);
    t.writeString(6, this.sWebPicUrl)
}
;
HUYA.ScreenSkinData.prototype.readFrom = function(t) {
    this.lId = t.readInt64(0, false, this.lId);
    this.sTitle = t.readString(1, false, this.sTitle);
    this.sPicUrl = t.readString(2, false, this.sPicUrl);
    this.iStatus = t.readInt16(3, false, this.iStatus);
    this.iTemplate = t.readInt32(4, false, this.iTemplate);
    this.iPresenterUid = t.readInt64(5, false, this.iPresenterUid);
    this.sWebPicUrl = t.readString(6, false, this.sWebPicUrl)
}
;
HUYA.getScreenSkinReq = function() {
    this.tId = new HUYA.UserId;
    this.lPresenterUid = 0;
    this.iTemplate = 0;
    this.iFromType = 0
}
;
HUYA.getScreenSkinReq.prototype._clone = function() {
    return new HUYA.getScreenSkinReq
}
;
HUYA.getScreenSkinReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.getScreenSkinReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.getScreenSkinReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lPresenterUid);
    t.writeInt32(2, this.iTemplate);
    t.writeInt32(3, this.iFromType)
}
;
HUYA.getScreenSkinReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lPresenterUid = t.readInt64(1, false, this.lPresenterUid);
    this.iTemplate = t.readInt32(2, false, this.iTemplate);
    this.iFromType = t.readInt32(3, false, this.iFromType)
}
;
HUYA.getScreenSkinRsp = function() {
    this.iRetCode = 0;
    this.data = new HUYA.ScreenSkinData
}
;
HUYA.getScreenSkinRsp.prototype._clone = function() {
    return new HUYA.getScreenSkinRsp
}
;
HUYA.getScreenSkinRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.getScreenSkinRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.getScreenSkinRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRetCode);
    t.writeStruct(1, this.data)
}
;
HUYA.getScreenSkinRsp.prototype.readFrom = function(t) {
    this.iRetCode = t.readInt32(0, false, this.iRetCode);
    this.data = t.readStruct(1, false, this.data)
}
;
HUYA.GetRoomAuditConfReq = function() {
    this.tId = new HUYA.UserId;
    this.lTopCid = 0;
    this.lSubCid = 0;
    this.lPresenterUid = 0
}
;
HUYA.GetRoomAuditConfReq.prototype._clone = function() {
    return new HUYA.GetRoomAuditConfReq
}
;
HUYA.GetRoomAuditConfReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetRoomAuditConfReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetRoomAuditConfReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lTopCid);
    t.writeInt64(2, this.lSubCid);
    t.writeInt64(3, this.lPresenterUid)
}
;
HUYA.GetRoomAuditConfReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lTopCid = t.readInt64(1, false, this.lTopCid);
    this.lSubCid = t.readInt64(2, false, this.lSubCid);
    this.lPresenterUid = t.readInt64(3, false, this.lPresenterUid)
}
;
HUYA.GetRoomAuditConfRsp = function() {
    this.lPresenterUid = 0;
    this.vSpeakSwitchItem = new Taf.Vector(new HUYA.SpeakSwitchItem)
}
;
HUYA.GetRoomAuditConfRsp.prototype._clone = function() {
    return new HUYA.GetRoomAuditConfRsp
}
;
HUYA.GetRoomAuditConfRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetRoomAuditConfRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetRoomAuditConfRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPresenterUid);
    t.writeVector(1, this.vSpeakSwitchItem)
}
;
HUYA.GetRoomAuditConfRsp.prototype.readFrom = function(t) {
    this.lPresenterUid = t.readInt64(0, false, this.lPresenterUid);
    this.vSpeakSwitchItem = t.readVector(1, false, this.vSpeakSwitchItem)
}
;
HUYA.SpeakSwitchItem = function() {
    this.iItemID = 0;
    this.iValue = 0
}
;
HUYA.SpeakSwitchItem.prototype._clone = function() {
    return new HUYA.SpeakSwitchItem
}
;
HUYA.SpeakSwitchItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SpeakSwitchItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SpeakSwitchItem.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iItemID);
    t.writeInt32(1, this.iValue)
}
;
HUYA.SpeakSwitchItem.prototype.readFrom = function(t) {
    this.iItemID = t.readInt32(0, false, this.iItemID);
    this.iValue = t.readInt32(1, false, this.iValue)
}
;
HUYA.ERoomAuditConfItem = {
    EItem_NormalNoSpeak: 1001,
    EItem_TextLimit: 1002,
    EItem_SpeakCD: 1003,
    EItem_ResetNoSpeakConf: 1004
};
HUYA.GetPresenterDetailReq = function() {
    this.tId = new HUYA.UserId;
    this.lUid = 0
}
;
HUYA.GetPresenterDetailReq.prototype._clone = function() {
    return new HUYA.GetPresenterDetailReq
}
;
HUYA.GetPresenterDetailReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetPresenterDetailReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetPresenterDetailReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lUid)
}
;
HUYA.GetPresenterDetailReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lUid = t.readInt64(1, false, this.lUid)
}
;
HUYA.GetPresenterDetailRsp = function() {
    this.mMiscInfo = new Taf.Map(new Taf.STRING,new Taf.STRING);
    this.iStartTime = 0
}
;
HUYA.GetPresenterDetailRsp.prototype._clone = function() {
    return new HUYA.GetPresenterDetailRsp
}
;
HUYA.GetPresenterDetailRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetPresenterDetailRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetPresenterDetailRsp.prototype.writeTo = function(t) {
    t.writeMap(0, this.mMiscInfo);
    t.writeInt32(1, this.iStartTime)
}
;
HUYA.GetPresenterDetailRsp.prototype.readFrom = function(t) {
    this.mMiscInfo = t.readMap(0, false, this.mMiscInfo);
    this.iStartTime = t.readInt32(1, false, this.iStartTime)
}
;
HUYA.BadgeNameRsp = function() {
    this.lPid = 0;
    this.sBadgeName = "";
    this.iBadgeType = 0;
    this.lBadgeId = 0
}
;
HUYA.BadgeNameRsp.prototype._clone = function() {
    return new HUYA.BadgeNameRsp
}
;
HUYA.BadgeNameRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BadgeNameRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BadgeNameRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPid);
    t.writeString(1, this.sBadgeName);
    t.writeInt32(2, this.iBadgeType);
    t.writeInt64(3, this.lBadgeId)
}
;
HUYA.BadgeNameRsp.prototype.readFrom = function(t) {
    this.lPid = t.readInt64(0, false, this.lPid);
    this.sBadgeName = t.readString(1, false, this.sBadgeName);
    this.iBadgeType = t.readInt32(2, false, this.iBadgeType);
    this.lBadgeId = t.readInt64(3, false, this.lBadgeId)
}
;
HUYA.GameBaseInfo = function() {
    this.iId = 0;
    this.sFullName = "";
    this.sShortName = "";
    this.sIcon = "";
    this.iCategory = 0;
    this.sCategoryName = "";
    this.iExeId = 0
}
;
HUYA.GameBaseInfo.prototype._clone = function() {
    return new HUYA.GameBaseInfo
}
;
HUYA.GameBaseInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GameBaseInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GameBaseInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iId);
    t.writeString(1, this.sFullName);
    t.writeString(2, this.sShortName);
    t.writeString(3, this.sIcon);
    t.writeInt32(4, this.iCategory);
    t.writeString(5, this.sCategoryName);
    t.writeInt32(6, this.iExeId)
}
;
HUYA.GameBaseInfo.prototype.readFrom = function(t) {
    this.iId = t.readInt32(0, false, this.iId);
    this.sFullName = t.readString(1, false, this.sFullName);
    this.sShortName = t.readString(2, false, this.sShortName);
    this.sIcon = t.readString(3, false, this.sIcon);
    this.iCategory = t.readInt32(4, false, this.iCategory);
    this.sCategoryName = t.readString(5, false, this.sCategoryName);
    this.iExeId = t.readInt32(6, false, this.iExeId)
}
;
HUYA.NobleLevelAttr = function() {
    this.iAttrType = 0;
    this.lValidDate = 0;
    this.iAttrStatus = 0;
    this.iProgress = 0;
    this.iTask = 0;
    this.iRemainDays = 0
}
;
HUYA.NobleLevelAttr.prototype._clone = function() {
    return new HUYA.NobleLevelAttr
}
;
HUYA.NobleLevelAttr.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NobleLevelAttr.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NobleLevelAttr.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iAttrType);
    t.writeInt64(1, this.lValidDate);
    t.writeInt32(2, this.iAttrStatus);
    t.writeInt32(3, this.iProgress);
    t.writeInt32(4, this.iTask);
    t.writeInt32(5, this.iRemainDays)
}
;
HUYA.NobleLevelAttr.prototype.readFrom = function(t) {
    this.iAttrType = t.readInt32(0, false, this.iAttrType);
    this.lValidDate = t.readInt64(1, false, this.lValidDate);
    this.iAttrStatus = t.readInt32(2, false, this.iAttrStatus);
    this.iProgress = t.readInt32(3, false, this.iProgress);
    this.iTask = t.readInt32(4, false, this.iTask);
    this.iRemainDays = t.readInt32(5, false, this.iRemainDays)
}
;
HUYA.AwardUser = function() {
    this.sUserNick = "";
    this.iPrizeType = 0;
    this.sPrizeName = ""
}
;
HUYA.AwardUser.prototype._clone = function() {
    return new HUYA.AwardUser
}
;
HUYA.AwardUser.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.AwardUser.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.AwardUser.prototype.writeTo = function(t) {
    t.writeString(0, this.sUserNick);
    t.writeInt16(1, this.iPrizeType);
    t.writeString(2, this.sPrizeName)
}
;
HUYA.AwardUser.prototype.readFrom = function(t) {
    this.sUserNick = t.readString(0, false, this.sUserNick);
    this.iPrizeType = t.readInt16(1, false, this.iPrizeType);
    this.sPrizeName = t.readString(2, false, this.sPrizeName)
}
;
HUYA.TreasureResultBroadcastPacket = function() {
    this.lStarterUid = 0;
    this.sStarterNick = "";
    this.iShortChannelId = 0;
    this.vAwardUsers = new Taf.Vector(new HUYA.AwardUser);
    this.lTid = 0;
    this.lSid = 0;
    this.iTreasureType0 = 0;
    this.sTreasureName = "";
    this.lPid = 0;
    this.iTreasureType = 0
}
;
HUYA.TreasureResultBroadcastPacket.prototype._clone = function() {
    return new HUYA.TreasureResultBroadcastPacket
}
;
HUYA.TreasureResultBroadcastPacket.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.TreasureResultBroadcastPacket.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.TreasureResultBroadcastPacket.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lStarterUid);
    t.writeString(1, this.sStarterNick);
    t.writeInt32(2, this.iShortChannelId);
    t.writeVector(3, this.vAwardUsers);
    t.writeInt64(4, this.lTid);
    t.writeInt64(5, this.lSid);
    t.writeInt32(6, this.iTreasureType0);
    t.writeString(7, this.sTreasureName);
    t.writeInt64(8, this.lPid);
    t.writeInt32(9, this.iTreasureType)
}
;
HUYA.TreasureResultBroadcastPacket.prototype.readFrom = function(t) {
    this.lStarterUid = t.readInt64(0, false, this.lStarterUid);
    this.sStarterNick = t.readString(1, false, this.sStarterNick);
    this.iShortChannelId = t.readInt32(2, false, this.iShortChannelId);
    this.vAwardUsers = t.readVector(3, false, this.vAwardUsers);
    this.lTid = t.readInt64(4, false, this.lTid);
    this.lSid = t.readInt64(5, false, this.lSid);
    this.iTreasureType0 = t.readInt32(6, false, this.iTreasureType0);
    this.sTreasureName = t.readString(7, false, this.sTreasureName);
    this.lPid = t.readInt64(8, false, this.lPid);
    this.iTreasureType = t.readInt32(9, false, this.iTreasureType)
}
;
HUYA.TreasureUpdateNotice = function() {
    this.lSendUid = 0;
    this.sSendNick = "";
    this.iQueneSize = 0;
    this.iCountDown = 0;
    this.iState = 0;
    this.Id = "";
    this.iTreasureType0 = 0;
    this.sTreasureName = "";
    this.iTreasureType = 0;
    this.iItemType = 0
}
;
HUYA.TreasureUpdateNotice.prototype._clone = function() {
    return new HUYA.TreasureUpdateNotice
}
;
HUYA.TreasureUpdateNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.TreasureUpdateNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.TreasureUpdateNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lSendUid);
    t.writeString(1, this.sSendNick);
    t.writeInt16(2, this.iQueneSize);
    t.writeInt32(3, this.iCountDown);
    t.writeInt16(4, this.iState);
    t.writeString(5, this.Id);
    t.writeInt32(6, this.iTreasureType0);
    t.writeString(7, this.sTreasureName);
    t.writeInt32(8, this.iTreasureType);
    t.writeInt32(9, this.iItemType)
}
;
HUYA.TreasureUpdateNotice.prototype.readFrom = function(t) {
    this.lSendUid = t.readInt64(0, false, this.lSendUid);
    this.sSendNick = t.readString(1, false, this.sSendNick);
    this.iQueneSize = t.readInt16(2, false, this.iQueneSize);
    this.iCountDown = t.readInt32(3, false, this.iCountDown);
    this.iState = t.readInt16(4, false, this.iState);
    this.Id = t.readString(5, false, this.Id);
    this.iTreasureType0 = t.readInt32(6, false, this.iTreasureType0);
    this.sTreasureName = t.readString(7, false, this.sTreasureName);
    this.iTreasureType = t.readInt32(8, false, this.iTreasureType);
    this.iItemType = t.readInt32(9, false, this.iItemType)
}
;
HUYA.TreasureLotteryDrawReq = function() {
    this.tId = new HUYA.UserId;
    this.sStarterNick = "";
    this.lSid = 0;
    this.lSubSid = 0;
    this.iFromType = 0;
    this.lRoomId = 0;
    this.lPid = 0
}
;
HUYA.TreasureLotteryDrawReq.prototype._clone = function() {
    return new HUYA.TreasureLotteryDrawReq
}
;
HUYA.TreasureLotteryDrawReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.TreasureLotteryDrawReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.TreasureLotteryDrawReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeString(1, this.sStarterNick);
    t.writeInt64(2, this.lSid);
    t.writeInt64(3, this.lSubSid);
    t.writeInt16(4, this.iFromType);
    t.writeInt64(5, this.lRoomId);
    t.writeInt64(6, this.lPid)
}
;
HUYA.TreasureLotteryDrawReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.sStarterNick = t.readString(1, false, this.sStarterNick);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.lSubSid = t.readInt64(3, false, this.lSubSid);
    this.iFromType = t.readInt16(4, false, this.iFromType);
    this.lRoomId = t.readInt64(5, false, this.lRoomId);
    this.lPid = t.readInt64(6, false, this.lPid)
}
;
HUYA.TreasureLotteryDrawRsp = function() {
    this.lStarterUid = 0;
    this.iRetCode = 0;
    this.iPrizeType = 0;
    this.sNickName = "";
    this.sPrizeName = ""
}
;
HUYA.TreasureLotteryDrawRsp.prototype._clone = function() {
    return new HUYA.TreasureLotteryDrawRsp
}
;
HUYA.TreasureLotteryDrawRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.TreasureLotteryDrawRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.TreasureLotteryDrawRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lStarterUid);
    t.writeInt32(1, this.iRetCode);
    t.writeInt16(2, this.iPrizeType);
    t.writeString(3, this.sNickName);
    t.writeString(4, this.sPrizeName)
}
;
HUYA.TreasureLotteryDrawRsp.prototype.readFrom = function(t) {
    this.lStarterUid = t.readInt64(0, false, this.lStarterUid);
    this.iRetCode = t.readInt32(1, false, this.iRetCode);
    this.iPrizeType = t.readInt16(2, false, this.iPrizeType);
    this.sNickName = t.readString(3, false, this.sNickName);
    this.sPrizeName = t.readString(4, false, this.sPrizeName)
}
;
HUYA.QueryTreasureInfoReq = function() {
    this.tId = new HUYA.UserId;
    this.lSid = 0;
    this.lSubSid = 0;
    this.iFromType = 0;
    this.lRoomId = 0;
    this.lPid = 0
}
;
HUYA.QueryTreasureInfoReq.prototype._clone = function() {
    return new HUYA.QueryTreasureInfoReq
}
;
HUYA.QueryTreasureInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.QueryTreasureInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.QueryTreasureInfoReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lSid);
    t.writeInt64(2, this.lSubSid);
    t.writeInt16(4, this.iFromType);
    t.writeInt64(5, this.lRoomId);
    t.writeInt64(6, this.lPid)
}
;
HUYA.QueryTreasureInfoReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lSid = t.readInt64(1, false, this.lSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid);
    this.iFromType = t.readInt16(4, false, this.iFromType);
    this.lRoomId = t.readInt64(5, false, this.lRoomId);
    this.lPid = t.readInt64(6, false, this.lPid)
}
;
HUYA.QueryTreasureInfoRsp = function() {
    this.iRetCode = 0;
    this.iQueneSize = 0;
    this.iStatus = 0;
    this.iCountDown = 0;
    this.lUid = 0;
    this.sNickName = "";
    this.iTreasureType0 = 0;
    this.sTreasureName = "";
    this.iTreasureType = 0;
    this.iItemType = 0
}
;
HUYA.QueryTreasureInfoRsp.prototype._clone = function() {
    return new HUYA.QueryTreasureInfoRsp
}
;
HUYA.QueryTreasureInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.QueryTreasureInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.QueryTreasureInfoRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRetCode);
    t.writeInt16(1, this.iQueneSize);
    t.writeInt16(2, this.iStatus);
    t.writeInt32(3, this.iCountDown);
    t.writeInt64(4, this.lUid);
    t.writeString(5, this.sNickName);
    t.writeInt32(6, this.iTreasureType0);
    t.writeString(7, this.sTreasureName);
    t.writeInt32(8, this.iTreasureType);
    t.writeInt32(9, this.iItemType)
}
;
HUYA.QueryTreasureInfoRsp.prototype.readFrom = function(t) {
    this.iRetCode = t.readInt32(0, false, this.iRetCode);
    this.iQueneSize = t.readInt16(1, false, this.iQueneSize);
    this.iStatus = t.readInt16(2, false, this.iStatus);
    this.iCountDown = t.readInt32(3, false, this.iCountDown);
    this.lUid = t.readInt64(4, false, this.lUid);
    this.sNickName = t.readString(5, false, this.sNickName);
    this.iTreasureType0 = t.readInt32(6, false, this.iTreasureType0);
    this.sTreasureName = t.readString(7, false, this.sTreasureName);
    this.iTreasureType = t.readInt32(8, false, this.iTreasureType);
    this.iItemType = t.readInt32(9, false, this.iItemType)
}
;
HUYA.TreasureLotteryResultNoticePacket = function() {
    this.lStarterUid = 0;
    this.lSid = 0;
    this.lSubSid = 0;
    this.lTimeStamp = 0;
    this.iPrizeType = 0;
    this.lUserUid = 0;
    this.sKey = "";
    this.sCode = "";
    this.sPrizeName = "";
    this.sStarterNick = "";
    this.sUserNick = "";
    this.lRoomId = 0
}
;
HUYA.TreasureLotteryResultNoticePacket.prototype._clone = function() {
    return new HUYA.TreasureLotteryResultNoticePacket
}
;
HUYA.TreasureLotteryResultNoticePacket.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.TreasureLotteryResultNoticePacket.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.TreasureLotteryResultNoticePacket.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lStarterUid);
    t.writeInt64(1, this.lSid);
    t.writeInt64(2, this.lSubSid);
    t.writeInt64(3, this.lTimeStamp);
    t.writeInt16(4, this.iPrizeType);
    t.writeInt64(5, this.lUserUid);
    t.writeString(6, this.sKey);
    t.writeString(7, this.sCode);
    t.writeString(8, this.sPrizeName);
    t.writeString(9, this.sStarterNick);
    t.writeString(10, this.sUserNick);
    t.writeInt64(11, this.lRoomId)
}
;
HUYA.TreasureLotteryResultNoticePacket.prototype.readFrom = function(t) {
    this.lStarterUid = t.readInt64(0, false, this.lStarterUid);
    this.lSid = t.readInt64(1, false, this.lSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid);
    this.lTimeStamp = t.readInt64(3, false, this.lTimeStamp);
    this.iPrizeType = t.readInt16(4, false, this.iPrizeType);
    this.lUserUid = t.readInt64(5, false, this.lUserUid);
    this.sKey = t.readString(6, false, this.sKey);
    this.sCode = t.readString(7, false, this.sCode);
    this.sPrizeName = t.readString(8, false, this.sPrizeName);
    this.sStarterNick = t.readString(9, false, this.sStarterNick);
    this.sUserNick = t.readString(10, false, this.sUserNick);
    this.lRoomId = t.readInt64(11, false, this.lRoomId)
}
;
HUYA.ViewerListReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0
}
;
HUYA.ViewerListReq.prototype._clone = function() {
    return new HUYA.ViewerListReq
}
;
HUYA.ViewerListReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ViewerListReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ViewerListReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid)
}
;
HUYA.ViewerListReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid)
}
;
HUYA.ViewerListRsp = function() {
    this.lTid = 0;
    this.lSid = 0;
    this.vViewerItem = new Taf.Vector(new HUYA.ViewerItem);
    this.iNobleNum = 0;
    this.iUserNum = 0
}
;
HUYA.ViewerListRsp.prototype._clone = function() {
    return new HUYA.ViewerListRsp
}
;
HUYA.ViewerListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ViewerListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ViewerListRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lTid);
    t.writeInt64(1, this.lSid);
    t.writeVector(2, this.vViewerItem);
    t.writeInt32(3, this.iNobleNum);
    t.writeInt32(4, this.iUserNum)
}
;
HUYA.ViewerListRsp.prototype.readFrom = function(t) {
    this.lTid = t.readInt64(0, false, this.lTid);
    this.lSid = t.readInt64(1, false, this.lSid);
    this.vViewerItem = t.readVector(2, false, this.vViewerItem);
    this.iNobleNum = t.readInt32(3, false, this.iNobleNum);
    this.iUserNum = t.readInt32(4, false, this.iUserNum)
}
;
HUYA.ViewerItem = function() {
    this.lUid = 0;
    this.sNickName = "";
    this.sLogo = "";
    this.iNobleLevel = 0;
    this.iUserLevel = 0
}
;
HUYA.ViewerItem.prototype._clone = function() {
    return new HUYA.ViewerItem
}
;
HUYA.ViewerItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ViewerItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ViewerItem.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName);
    t.writeString(2, this.sLogo);
    t.writeInt32(3, this.iNobleLevel);
    t.writeInt32(4, this.iUserLevel)
}
;
HUYA.ViewerItem.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.sLogo = t.readString(2, false, this.sLogo);
    this.iNobleLevel = t.readInt32(3, false, this.iNobleLevel);
    this.iUserLevel = t.readInt32(4, false, this.iUserLevel)
}
;
HUYA.FansSupportListReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lPid = 0
}
;
HUYA.FansSupportListReq.prototype._clone = function() {
    return new HUYA.FansSupportListReq
}
;
HUYA.FansSupportListReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.FansSupportListReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.FansSupportListReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lPid)
}
;
HUYA.FansSupportListReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lPid = t.readInt64(1, false, this.lPid)
}
;
HUYA.FansSupportListRsp = function() {
    this.lPid = 0;
    this.vFansSupportList = new Taf.Vector(new HUYA.FansSupportItem);
    this.sBadgeName = ""
}
;
HUYA.FansSupportListRsp.prototype._clone = function() {
    return new HUYA.FansSupportListRsp
}
;
HUYA.FansSupportListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.FansSupportListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.FansSupportListRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPid);
    t.writeVector(1, this.vFansSupportList);
    t.writeString(2, this.sBadgeName)
}
;
HUYA.FansSupportListRsp.prototype.readFrom = function(t) {
    this.lPid = t.readInt64(0, false, this.lPid);
    this.vFansSupportList = t.readVector(1, false, this.vFansSupportList);
    this.sBadgeName = t.readString(2, false, this.sBadgeName)
}
;
HUYA.FansSupportItem = function() {
    this.lUid = 0;
    this.sNickName = "";
    this.sLogo = "";
    this.iFansLevel = 0;
    this.iGuardianLevel = 0;
    this.sBadgeName = "";
    this.iUserLevel = 0;
    this.iNobleLevel = 0
}
;
HUYA.FansSupportItem.prototype._clone = function() {
    return new HUYA.FansSupportItem
}
;
HUYA.FansSupportItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.FansSupportItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.FansSupportItem.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName);
    t.writeString(2, this.sLogo);
    t.writeInt32(3, this.iFansLevel);
    t.writeInt32(4, this.iGuardianLevel);
    t.writeString(5, this.sBadgeName);
    t.writeInt32(6, this.iUserLevel);
    t.writeInt32(7, this.iNobleLevel)
}
;
HUYA.FansSupportItem.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.sLogo = t.readString(2, false, this.sLogo);
    this.iFansLevel = t.readInt32(3, false, this.iFansLevel);
    this.iGuardianLevel = t.readInt32(4, false, this.iGuardianLevel);
    this.sBadgeName = t.readString(5, false, this.sBadgeName);
    this.iUserLevel = t.readInt32(6, false, this.iUserLevel);
    this.iNobleLevel = t.readInt32(7, false, this.iNobleLevel)
}
;
HUYA.LinkMicStatusChangeNotice = function() {
    this.lLMSessionId = 0;
    this.iLinkMicStatus = 0;
    this.lOwnerUid = 0;
    this.vLMPresenterInfos = new Taf.Vector(new HUYA.LMPresenterInfo);
    this.lPid = 0
}
;
HUYA.LinkMicStatusChangeNotice.prototype._clone = function() {
    return new HUYA.LinkMicStatusChangeNotice
}
;
HUYA.LinkMicStatusChangeNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LinkMicStatusChangeNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LinkMicStatusChangeNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lLMSessionId);
    t.writeInt32(1, this.iLinkMicStatus);
    t.writeInt64(2, this.lOwnerUid);
    t.writeVector(3, this.vLMPresenterInfos);
    t.writeInt64(4, this.lPid)
}
;
HUYA.LinkMicStatusChangeNotice.prototype.readFrom = function(t) {
    this.lLMSessionId = t.readInt64(0, false, this.lLMSessionId);
    this.iLinkMicStatus = t.readInt32(1, false, this.iLinkMicStatus);
    this.lOwnerUid = t.readInt64(2, false, this.lOwnerUid);
    this.vLMPresenterInfos = t.readVector(3, false, this.vLMPresenterInfos);
    this.lPid = t.readInt64(4, false, this.lPid)
}
;
HUYA.LMPresenterInfo = function() {
    this.lUid = 0;
    this.lChannelId = 0;
    this.lSubChannelId = 0;
    this.sNick = "";
    this.sAvatarUrl = "";
    this.iActivityCount = 0;
    this.iLevel = 0;
    this.lYYId = 0;
    this.sGameName = "";
    this.iSourceType = 0;
    this.iScreenType = 0;
    this.bLive = true;
    this.sChannelName = "";
    this.sChannelTitle = "";
    this.sVideoCaptureUrl = "";
    this.iRoomId = 0
}
;
HUYA.LMPresenterInfo.prototype._clone = function() {
    return new HUYA.LMPresenterInfo
}
;
HUYA.LMPresenterInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LMPresenterInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LMPresenterInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lChannelId);
    t.writeInt64(2, this.lSubChannelId);
    t.writeString(3, this.sNick);
    t.writeString(4, this.sAvatarUrl);
    t.writeInt32(5, this.iActivityCount);
    t.writeInt32(6, this.iLevel);
    t.writeInt64(7, this.lYYId);
    t.writeString(8, this.sGameName);
    t.writeInt32(9, this.iSourceType);
    t.writeInt32(10, this.iScreenType);
    t.writeBoolean(11, this.bLive);
    t.writeString(12, this.sChannelName);
    t.writeString(13, this.sChannelTitle);
    t.writeString(14, this.sVideoCaptureUrl);
    t.writeInt32(15, this.iRoomId)
}
;
HUYA.LMPresenterInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lChannelId = t.readInt64(1, false, this.lChannelId);
    this.lSubChannelId = t.readInt64(2, false, this.lSubChannelId);
    this.sNick = t.readString(3, false, this.sNick);
    this.sAvatarUrl = t.readString(4, false, this.sAvatarUrl);
    this.iActivityCount = t.readInt32(5, false, this.iActivityCount);
    this.iLevel = t.readInt32(6, false, this.iLevel);
    this.lYYId = t.readInt64(7, false, this.lYYId);
    this.sGameName = t.readString(8, false, this.sGameName);
    this.iSourceType = t.readInt32(9, false, this.iSourceType);
    this.iScreenType = t.readInt32(10, false, this.iScreenType);
    this.bLive = t.readBoolean(11, false, this.bLive);
    this.sChannelName = t.readString(12, false, this.sChannelName);
    this.sChannelTitle = t.readString(13, false, this.sChannelTitle);
    this.sVideoCaptureUrl = t.readString(14, false, this.sVideoCaptureUrl);
    this.iRoomId = t.readInt32(15, false, this.iRoomId)
}
;
HUYA.GetLinkMicPresenterInfoReq = function() {
    this.tId = new HUYA.UserId;
    this.lUid = 0
}
;
HUYA.GetLinkMicPresenterInfoReq.prototype._clone = function() {
    return new HUYA.GetLinkMicPresenterInfoReq
}
;
HUYA.GetLinkMicPresenterInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetLinkMicPresenterInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetLinkMicPresenterInfoReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lUid)
}
;
HUYA.GetLinkMicPresenterInfoReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lUid = t.readInt64(1, false, this.lUid)
}
;
HUYA.GetLinkMicPresenterInfoRsp = function() {
    this.lLMSessionId = 0;
    this.iLinkMicStatus = 0;
    this.lOwnerUid = 0;
    this.vLMPresenterInfos = new Taf.Vector(new HUYA.LMPresenterInfo);
    this.mPid2SubscribeStatus = new Taf.Map(new Taf.INT64,new Taf.INT32);
    this.bDirector = false
}
;
HUYA.GetLinkMicPresenterInfoRsp.prototype._clone = function() {
    return new HUYA.GetLinkMicPresenterInfoRsp
}
;
HUYA.GetLinkMicPresenterInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetLinkMicPresenterInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetLinkMicPresenterInfoRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lLMSessionId);
    t.writeInt32(1, this.iLinkMicStatus);
    t.writeInt64(2, this.lOwnerUid);
    t.writeVector(3, this.vLMPresenterInfos);
    t.writeMap(4, this.mPid2SubscribeStatus);
    t.writeBoolean(5, this.bDirector)
}
;
HUYA.GetLinkMicPresenterInfoRsp.prototype.readFrom = function(t) {
    this.lLMSessionId = t.readInt64(0, false, this.lLMSessionId);
    this.iLinkMicStatus = t.readInt32(1, false, this.iLinkMicStatus);
    this.lOwnerUid = t.readInt64(2, false, this.lOwnerUid);
    this.vLMPresenterInfos = t.readVector(3, false, this.vLMPresenterInfos);
    this.mPid2SubscribeStatus = t.readMap(4, false, this.mPid2SubscribeStatus);
    this.bDirector = t.readBoolean(5, false, this.bDirector)
}
;
HUYA.SubscribeInfoNotify = function() {
    this.tTo = new HUYA.Activity;
    this.iToCount = 0
}
;
HUYA.SubscribeInfoNotify.prototype._clone = function() {
    return new HUYA.SubscribeInfoNotify
}
;
HUYA.SubscribeInfoNotify.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SubscribeInfoNotify.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SubscribeInfoNotify.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tTo);
    t.writeInt32(1, this.iToCount)
}
;
HUYA.SubscribeInfoNotify.prototype.readFrom = function(t) {
    this.tTo = t.readStruct(0, false, this.tTo);
    this.iToCount = t.readInt32(1, false, this.iToCount)
}
;
HUYA.Activity = function() {
    this.iType = 0;
    this.sKey = ""
}
;
HUYA.Activity.prototype._clone = function() {
    return new HUYA.Activity
}
;
HUYA.Activity.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.Activity.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.Activity.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iType);
    t.writeString(1, this.sKey)
}
;
HUYA.Activity.prototype.readFrom = function(t) {
    this.iType = t.readInt32(0, false, this.iType);
    this.sKey = t.readString(1, false, this.sKey)
}
;
HUYA.BannerNotice = function() {
    this.lBannerId = 0;
    this.mParam = new Taf.Map(new Taf.STRING,new Taf.STRING);
    this.tChInfo = new HUYA.PresenterChannelInfo
}
;
HUYA.BannerNotice.prototype._clone = function() {
    return new HUYA.BannerNotice
}
;
HUYA.BannerNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BannerNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BannerNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lBannerId);
    t.writeMap(1, this.mParam);
    t.writeStruct(2, this.tChInfo)
}
;
HUYA.BannerNotice.prototype.readFrom = function(t) {
    this.lBannerId = t.readInt64(0, false, this.lBannerId);
    this.mParam = t.readMap(1, false, this.mParam);
    this.tChInfo = t.readStruct(2, false, this.tChInfo)
}
;
HUYA.GetUserLevelInfoReq = function() {
    this.tId = new HUYA.UserId
}
;
HUYA.GetUserLevelInfoReq.prototype._clone = function() {
    return new HUYA.GetUserLevelInfoReq
}
;
HUYA.GetUserLevelInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetUserLevelInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetUserLevelInfoReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId)
}
;
HUYA.GetUserLevelInfoReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId)
}
;
HUYA.GetUserLevelInfoRsp = function() {
    this.tUserProfile = new HUYA.UserProfile;
    this.lCurrLevelExp = 0;
    this.lNextLevelExp = 0;
    this.lDailyIncExp = 0;
    this.lNext2LevelExp = 0;
    this.iNeedSetInitializeNick = 0
}
;
HUYA.GetUserLevelInfoRsp.prototype._clone = function() {
    return new HUYA.GetUserLevelInfoRsp
}
;
HUYA.GetUserLevelInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetUserLevelInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetUserLevelInfoRsp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserProfile);
    t.writeInt64(1, this.lCurrLevelExp);
    t.writeInt64(2, this.lNextLevelExp);
    t.writeInt64(3, this.lDailyIncExp);
    t.writeInt64(4, this.lNext2LevelExp);
    t.writeInt32(5, this.iNeedSetInitializeNick)
}
;
HUYA.GetUserLevelInfoRsp.prototype.readFrom = function(t) {
    this.tUserProfile = t.readStruct(0, false, this.tUserProfile);
    this.lCurrLevelExp = t.readInt64(1, false, this.lCurrLevelExp);
    this.lNextLevelExp = t.readInt64(2, false, this.lNextLevelExp);
    this.lDailyIncExp = t.readInt64(3, false, this.lDailyIncExp);
    this.lNext2LevelExp = t.readInt64(4, false, this.lNext2LevelExp);
    this.iNeedSetInitializeNick = t.readInt32(5, false, this.iNeedSetInitializeNick)
}
;
HUYA.UserProfile = function() {
    this.tUserBase = new HUYA.UserBase;
    this.tPresenterBase = new HUYA.PresenterBase;
    this.tRecentLive = new HUYA.GameLiveInfo
}
;
HUYA.UserProfile.prototype._clone = function() {
    return new HUYA.UserProfile
}
;
HUYA.UserProfile.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserProfile.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserProfile.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserBase);
    t.writeStruct(1, this.tPresenterBase);
    t.writeStruct(2, this.tRecentLive)
}
;
HUYA.UserProfile.prototype.readFrom = function(t) {
    this.tUserBase = t.readStruct(0, false, this.tUserBase);
    this.tPresenterBase = t.readStruct(1, false, this.tPresenterBase);
    this.tRecentLive = t.readStruct(2, false, this.tRecentLive)
}
;
HUYA.UserBase = function() {
    this.lUid = 0;
    this.sNickName = "";
    this.sAvatarUrl = "";
    this.iGender = 0;
    this.lYYId = 0;
    this.iCertified = 0;
    this.iSubscribedCount = 0;
    this.iSubscribeToCount = 0;
    this.iUserLevel = 0;
    this.lUserExp = 0;
    this.iBirthday = 0;
    this.sSign = "";
    this.sArea = "";
    this.sLocation = "";
    this.sRegisterTime = "";
    this.iFreezeTime = 0;
    this.iBindPhone = 0;
    this.sHuyaId = ""
}
;
HUYA.UserBase.prototype._clone = function() {
    return new HUYA.UserBase
}
;
HUYA.UserBase.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserBase.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserBase.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName);
    t.writeString(2, this.sAvatarUrl);
    t.writeInt32(3, this.iGender);
    t.writeInt64(4, this.lYYId);
    t.writeInt32(5, this.iCertified);
    t.writeInt32(6, this.iSubscribedCount);
    t.writeInt32(7, this.iSubscribeToCount);
    t.writeInt32(8, this.iUserLevel);
    t.writeInt64(9, this.lUserExp);
    t.writeInt32(10, this.iBirthday);
    t.writeString(11, this.sSign);
    t.writeString(12, this.sArea);
    t.writeString(13, this.sLocation);
    t.writeString(14, this.sRegisterTime);
    t.writeInt32(15, this.iFreezeTime);
    t.writeInt32(16, this.iBindPhone);
    t.writeString(17, this.sHuyaId)
}
;
HUYA.UserBase.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.sAvatarUrl = t.readString(2, false, this.sAvatarUrl);
    this.iGender = t.readInt32(3, false, this.iGender);
    this.lYYId = t.readInt64(4, false, this.lYYId);
    this.iCertified = t.readInt32(5, false, this.iCertified);
    this.iSubscribedCount = t.readInt32(6, false, this.iSubscribedCount);
    this.iSubscribeToCount = t.readInt32(7, false, this.iSubscribeToCount);
    this.iUserLevel = t.readInt32(8, false, this.iUserLevel);
    this.lUserExp = t.readInt64(9, false, this.lUserExp);
    this.iBirthday = t.readInt32(10, false, this.iBirthday);
    this.sSign = t.readString(11, false, this.sSign);
    this.sArea = t.readString(12, false, this.sArea);
    this.sLocation = t.readString(13, false, this.sLocation);
    this.sRegisterTime = t.readString(14, false, this.sRegisterTime);
    this.iFreezeTime = t.readInt32(15, false, this.iFreezeTime);
    this.iBindPhone = t.readInt32(16, false, this.iBindPhone);
    this.sHuyaId = t.readString(17, false, this.sHuyaId)
}
;
HUYA.PresenterBase = function() {
    this.iIsPresenter = 0;
    this.sPresenterName = "";
    this.lSignedChannel = 0;
    this.sPrivateHost = "";
    this.iRecType = 0;
    this.iFreeze = 0;
    this.iPresenterLevel = 0;
    this.lPresenterExp = 0;
    this.vPresentedGames = new Taf.Vector(new HUYA.GameBaseInfo);
    this.iCertified = 0;
    this.iRoomId = 0
}
;
HUYA.PresenterBase.prototype._clone = function() {
    return new HUYA.PresenterBase
}
;
HUYA.PresenterBase.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterBase.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterBase.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iIsPresenter);
    t.writeString(1, this.sPresenterName);
    t.writeInt64(2, this.lSignedChannel);
    t.writeString(3, this.sPrivateHost);
    t.writeInt32(4, this.iRecType);
    t.writeInt32(5, this.iFreeze);
    t.writeInt32(6, this.iPresenterLevel);
    t.writeInt64(7, this.lPresenterExp);
    t.writeVector(8, this.vPresentedGames);
    t.writeInt32(9, this.iCertified);
    t.writeInt32(10, this.iRoomId)
}
;
HUYA.PresenterBase.prototype.readFrom = function(t) {
    this.iIsPresenter = t.readInt32(0, false, this.iIsPresenter);
    this.sPresenterName = t.readString(1, false, this.sPresenterName);
    this.lSignedChannel = t.readInt64(2, false, this.lSignedChannel);
    this.sPrivateHost = t.readString(3, false, this.sPrivateHost);
    this.iRecType = t.readInt32(4, false, this.iRecType);
    this.iFreeze = t.readInt32(5, false, this.iFreeze);
    this.iPresenterLevel = t.readInt32(6, false, this.iPresenterLevel);
    this.lPresenterExp = t.readInt64(7, false, this.lPresenterExp);
    this.vPresentedGames = t.readVector(8, false, this.vPresentedGames);
    this.iCertified = t.readInt32(9, false, this.iCertified);
    this.iRoomId = t.readInt32(10, false, this.iRoomId)
}
;
HUYA.GameLiveInfo = function() {
    this.lLiveId = 0;
    this.lUid = 0;
    this.lChannelId = 0;
    this.iShortChannel = 0;
    this.lSubchannel = 0;
    this.sSubchannelName = "";
    this.iGameId = 0;
    this.sGameName = "";
    this.iAttendeeCount = 0;
    this.eGender = HUYA.EGender.MALE;
    this.iAid = 0;
    this.sNick = "";
    this.sAvatarUrl = "";
    this.iStartTime = 0;
    this.iEndTime = 0;
    this.iSourceType = 0;
    this.bIsCameraOpen = false;
    this.bIsRoomSecret = false;
    this.sVideoCaptureUrl = "";
    this.iCdnAttendee = 0;
    this.lYYId = 0;
    this.bCertified = false;
    this.iRecType = 0;
    this.lSignChannel = 0;
    this.sLiveDesc = "";
    this.iLevel = 0;
    this.sGameShortName = "";
    this.iGameType = 0;
    this.sPrivateHost = "";
    this.iActivityCount = 0;
    this.iStreamType = 0;
    this.iBitRate = 0;
    this.iResolution = 0;
    this.iFrameRate = 0;
    this.iIsMultiStream = 0;
    this.iExeGameId = 0;
    this.lExp = 0;
    this.sReplayHls = "";
    this.lMultiStreamFlag = 0;
    this.iScreenType = 0;
    this.iChannelType = 0;
    this.sLocation = "";
    this.iCodecType = 0;
    this.vPresenterTags = new Taf.Vector(new HUYA.GameLiveTag);
    this.vGameTags = new Taf.Vector(new HUYA.GameLiveTag);
    this.lLiveCompatibleFlag = 0;
    this.sTraceId = "";
    this.iRoomId = 0
}
;
HUYA.GameLiveInfo.prototype._clone = function() {
    return new HUYA.GameLiveInfo
}
;
HUYA.GameLiveInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GameLiveInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GameLiveInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lLiveId);
    t.writeInt64(1, this.lUid);
    t.writeInt64(2, this.lChannelId);
    t.writeInt32(3, this.iShortChannel);
    t.writeInt64(4, this.lSubchannel);
    t.writeString(5, this.sSubchannelName);
    t.writeInt32(6, this.iGameId);
    t.writeString(7, this.sGameName);
    t.writeInt32(8, this.iAttendeeCount);
    t.writeInt32(9, this.eGender);
    t.writeInt32(10, this.iAid);
    t.writeString(11, this.sNick);
    t.writeString(12, this.sAvatarUrl);
    t.writeInt32(13, this.iStartTime);
    t.writeInt32(14, this.iEndTime);
    t.writeInt32(15, this.iSourceType);
    t.writeBoolean(16, this.bIsCameraOpen);
    t.writeBoolean(17, this.bIsRoomSecret);
    t.writeString(18, this.sVideoCaptureUrl);
    t.writeInt32(19, this.iCdnAttendee);
    t.writeInt64(20, this.lYYId);
    t.writeBoolean(21, this.bCertified);
    t.writeInt32(22, this.iRecType);
    t.writeInt64(23, this.lSignChannel);
    t.writeString(24, this.sLiveDesc);
    t.writeInt32(25, this.iLevel);
    t.writeString(26, this.sGameShortName);
    t.writeInt32(27, this.iGameType);
    t.writeString(28, this.sPrivateHost);
    t.writeInt32(29, this.iActivityCount);
    t.writeInt32(30, this.iStreamType);
    t.writeInt32(31, this.iBitRate);
    t.writeInt32(32, this.iResolution);
    t.writeInt32(33, this.iFrameRate);
    t.writeInt32(34, this.iIsMultiStream);
    t.writeInt32(35, this.iExeGameId);
    t.writeInt64(36, this.lExp);
    t.writeString(37, this.sReplayHls);
    t.writeInt64(38, this.lMultiStreamFlag);
    t.writeInt32(39, this.iScreenType);
    t.writeInt32(40, this.iChannelType);
    t.writeString(41, this.sLocation);
    t.writeInt32(42, this.iCodecType);
    t.writeVector(43, this.vPresenterTags);
    t.writeVector(44, this.vGameTags);
    t.writeInt64(45, this.lLiveCompatibleFlag);
    t.writeString(46, this.sTraceId);
    t.writeInt32(47, this.iRoomId)
}
;
HUYA.GameLiveInfo.prototype.readFrom = function(t) {
    this.lLiveId = t.readInt64(0, false, this.lLiveId);
    this.lUid = t.readInt64(1, false, this.lUid);
    this.lChannelId = t.readInt64(2, false, this.lChannelId);
    this.iShortChannel = t.readInt32(3, false, this.iShortChannel);
    this.lSubchannel = t.readInt64(4, false, this.lSubchannel);
    this.sSubchannelName = t.readString(5, false, this.sSubchannelName);
    this.iGameId = t.readInt32(6, false, this.iGameId);
    this.sGameName = t.readString(7, false, this.sGameName);
    this.iAttendeeCount = t.readInt32(8, false, this.iAttendeeCount);
    this.eGender = t.readInt32(9, false, this.eGender);
    this.iAid = t.readInt32(10, false, this.iAid);
    this.sNick = t.readString(11, false, this.sNick);
    this.sAvatarUrl = t.readString(12, false, this.sAvatarUrl);
    this.iStartTime = t.readInt32(13, false, this.iStartTime);
    this.iEndTime = t.readInt32(14, false, this.iEndTime);
    this.iSourceType = t.readInt32(15, false, this.iSourceType);
    this.bIsCameraOpen = t.readBoolean(16, false, this.bIsCameraOpen);
    this.bIsRoomSecret = t.readBoolean(17, false, this.bIsRoomSecret);
    this.sVideoCaptureUrl = t.readString(18, false, this.sVideoCaptureUrl);
    this.iCdnAttendee = t.readInt32(19, false, this.iCdnAttendee);
    this.lYYId = t.readInt64(20, false, this.lYYId);
    this.bCertified = t.readBoolean(21, false, this.bCertified);
    this.iRecType = t.readInt32(22, false, this.iRecType);
    this.lSignChannel = t.readInt64(23, false, this.lSignChannel);
    this.sLiveDesc = t.readString(24, false, this.sLiveDesc);
    this.iLevel = t.readInt32(25, false, this.iLevel);
    this.sGameShortName = t.readString(26, false, this.sGameShortName);
    this.iGameType = t.readInt32(27, false, this.iGameType);
    this.sPrivateHost = t.readString(28, false, this.sPrivateHost);
    this.iActivityCount = t.readInt32(29, false, this.iActivityCount);
    this.iStreamType = t.readInt32(30, false, this.iStreamType);
    this.iBitRate = t.readInt32(31, false, this.iBitRate);
    this.iResolution = t.readInt32(32, false, this.iResolution);
    this.iFrameRate = t.readInt32(33, false, this.iFrameRate);
    this.iIsMultiStream = t.readInt32(34, false, this.iIsMultiStream);
    this.iExeGameId = t.readInt32(35, false, this.iExeGameId);
    this.lExp = t.readInt64(36, false, this.lExp);
    this.sReplayHls = t.readString(37, false, this.sReplayHls);
    this.lMultiStreamFlag = t.readInt64(38, false, this.lMultiStreamFlag);
    this.iScreenType = t.readInt32(39, false, this.iScreenType);
    this.iChannelType = t.readInt32(40, false, this.iChannelType);
    this.sLocation = t.readString(41, false, this.sLocation);
    this.iCodecType = t.readInt32(42, false, this.iCodecType);
    this.vPresenterTags = t.readVector(43, false, this.vPresenterTags);
    this.vGameTags = t.readVector(44, false, this.vGameTags);
    this.lLiveCompatibleFlag = t.readInt64(45, false, this.lLiveCompatibleFlag);
    this.sTraceId = t.readString(46, false, this.sTraceId);
    this.iRoomId = t.readInt32(47, false, this.iRoomId)
}
;
HUYA.GameLiveTag = function() {
    this.iTagId = 0;
    this.sTagName = "";
    this.bIsShow = true;
    this.iBindingGameId = 0;
    this.iShowType = 0
}
;
HUYA.GameLiveTag.prototype._clone = function() {
    return new HUYA.GameLiveTag
}
;
HUYA.GameLiveTag.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GameLiveTag.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GameLiveTag.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iTagId);
    t.writeString(1, this.sTagName);
    t.writeBoolean(2, this.bIsShow);
    t.writeInt32(3, this.iBindingGameId);
    t.writeInt32(4, this.iShowType)
}
;
HUYA.GameLiveTag.prototype.readFrom = function(t) {
    this.iTagId = t.readInt32(0, false, this.iTagId);
    this.sTagName = t.readString(1, false, this.sTagName);
    this.bIsShow = t.readBoolean(2, false, this.bIsShow);
    this.iBindingGameId = t.readInt32(3, false, this.iBindingGameId);
    this.iShowType = t.readInt32(4, false, this.iShowType)
}
;
HUYA.MatchRaffleResultNotice = function() {
    this.sPrizeName = "";
    this.sUrl = "";
    this.sShowDoc = "";
    this.sIcon = "";
    this.tBanner = new HUYA.MatchRaffleBanner
}
;
HUYA.MatchRaffleResultNotice.prototype._clone = function() {
    return new HUYA.MatchRaffleResultNotice
}
;
HUYA.MatchRaffleResultNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MatchRaffleResultNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MatchRaffleResultNotice.prototype.writeTo = function(t) {
    t.writeString(0, this.sPrizeName);
    t.writeString(1, this.sUrl);
    t.writeString(2, this.sShowDoc);
    t.writeString(3, this.sIcon);
    t.writeStruct(4, this.tBanner)
}
;
HUYA.MatchRaffleResultNotice.prototype.readFrom = function(t) {
    this.sPrizeName = t.readString(0, false, this.sPrizeName);
    this.sUrl = t.readString(1, false, this.sUrl);
    this.sShowDoc = t.readString(2, false, this.sShowDoc);
    this.sIcon = t.readString(3, false, this.sIcon);
    this.tBanner = t.readStruct(4, false, this.tBanner)
}
;
HUYA.MatchRaffleBanner = function() {
    this.sPcBanner = "";
    this.sH5Banner = "";
    this.sFlashBanner = "";
    this.sAdrBanner = "";
    this.sIosBanner = "";
    this.sPadBanner = ""
}
;
HUYA.MatchRaffleBanner.prototype._clone = function() {
    return new HUYA.MatchRaffleBanner
}
;
HUYA.MatchRaffleBanner.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MatchRaffleBanner.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MatchRaffleBanner.prototype.writeTo = function(t) {
    t.writeString(0, this.sPcBanner);
    t.writeString(1, this.sH5Banner);
    t.writeString(2, this.sFlashBanner);
    t.writeString(3, this.sAdrBanner);
    t.writeString(4, this.sIosBanner);
    t.writeString(5, this.sPadBanner)
}
;
HUYA.MatchRaffleBanner.prototype.readFrom = function(t) {
    this.sPcBanner = t.readString(0, false, this.sPcBanner);
    this.sH5Banner = t.readString(1, false, this.sH5Banner);
    this.sFlashBanner = t.readString(2, false, this.sFlashBanner);
    this.sAdrBanner = t.readString(3, false, this.sAdrBanner);
    this.sIosBanner = t.readString(4, false, this.sIosBanner);
    this.sPadBanner = t.readString(5, false, this.sPadBanner)
}
;
HUYA.GuardianPresenterInfoNotice = function() {
    this.lUid = 0;
    this.sNick = "";
    this.iLevel = 0;
    this.lGuardianUid = 0;
    this.sGuardianNick = "";
    this.eNoticeType = 0;
    this.iOpenDays = 0;
    this.iLastLevel = 0;
    this.iNobleLevel = 0;
    this.sGuardianLogo = ""
}
;
HUYA.GuardianPresenterInfoNotice.prototype._clone = function() {
    return new HUYA.GuardianPresenterInfoNotice
}
;
HUYA.GuardianPresenterInfoNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GuardianPresenterInfoNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GuardianPresenterInfoNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNick);
    t.writeInt32(2, this.iLevel);
    t.writeInt64(3, this.lGuardianUid);
    t.writeString(4, this.sGuardianNick);
    t.writeInt32(5, this.eNoticeType);
    t.writeInt32(6, this.iOpenDays);
    t.writeInt32(7, this.iLastLevel);
    t.writeInt32(8, this.iNobleLevel);
    t.writeString(9, this.sGuardianLogo)
}
;
HUYA.GuardianPresenterInfoNotice.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNick = t.readString(1, false, this.sNick);
    this.iLevel = t.readInt32(2, false, this.iLevel);
    this.lGuardianUid = t.readInt64(3, false, this.lGuardianUid);
    this.sGuardianNick = t.readString(4, false, this.sGuardianNick);
    this.eNoticeType = t.readInt32(5, false, this.eNoticeType);
    this.iOpenDays = t.readInt32(6, false, this.iOpenDays);
    this.iLastLevel = t.readInt32(7, false, this.iLastLevel);
    this.iNobleLevel = t.readInt32(8, false, this.iNobleLevel);
    this.sGuardianLogo = t.readString(9, false, this.sGuardianLogo)
}
;
HUYA.SubscribeReq = function() {
    this.tId = new HUYA.UserId;
    this.tFrom = new HUYA.Subscriber;
    this.tTo = new HUYA.Activity;
    this.iAction = 0
}
;
HUYA.SubscribeReq.prototype._clone = function() {
    return new HUYA.SubscribeReq
}
;
HUYA.SubscribeReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SubscribeReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SubscribeReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeStruct(1, this.tFrom);
    t.writeStruct(2, this.tTo);
    t.writeInt32(3, this.iAction)
}
;
HUYA.SubscribeReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.tFrom = t.readStruct(1, false, this.tFrom);
    this.tTo = t.readStruct(2, false, this.tTo);
    this.iAction = t.readInt32(3, false, this.iAction)
}
;
HUYA.SubscribeResp = function() {
    this.tFrom = new HUYA.Subscriber;
    this.tTo = new HUYA.Activity;
    this.iAction = 0;
    this.iFlag = 0
}
;
HUYA.SubscribeResp.prototype._clone = function() {
    return new HUYA.SubscribeResp
}
;
HUYA.SubscribeResp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SubscribeResp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SubscribeResp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tFrom);
    t.writeStruct(1, this.tTo);
    t.writeInt32(2, this.iAction);
    t.writeInt32(3, this.iFlag)
}
;
HUYA.SubscribeResp.prototype.readFrom = function(t) {
    this.tFrom = t.readStruct(0, false, this.tFrom);
    this.tTo = t.readStruct(1, false, this.tTo);
    this.iAction = t.readInt32(2, false, this.iAction);
    this.iFlag = t.readInt32(3, false, this.iFlag)
}
;
HUYA.UnsubscribeReq = function() {
    this.tId = new HUYA.UserId;
    this.tFrom = new HUYA.Subscriber;
    this.tTo = new HUYA.Activity
}
;
HUYA.UnsubscribeReq.prototype._clone = function() {
    return new HUYA.UnsubscribeReq
}
;
HUYA.UnsubscribeReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UnsubscribeReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UnsubscribeReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeStruct(1, this.tFrom);
    t.writeStruct(2, this.tTo)
}
;
HUYA.UnsubscribeReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.tFrom = t.readStruct(1, false, this.tFrom);
    this.tTo = t.readStruct(2, false, this.tTo)
}
;
HUYA.UnsubscribeResp = function() {
    this.tFrom = new HUYA.Subscriber;
    this.tTo = new HUYA.Activity;
    this.iFlag = 0
}
;
HUYA.UnsubscribeResp.prototype._clone = function() {
    return new HUYA.UnsubscribeResp
}
;
HUYA.UnsubscribeResp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UnsubscribeResp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UnsubscribeResp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tFrom);
    t.writeStruct(1, this.tTo);
    t.writeInt32(3, this.iFlag)
}
;
HUYA.UnsubscribeResp.prototype.readFrom = function(t) {
    this.tFrom = t.readStruct(0, false, this.tFrom);
    this.tTo = t.readStruct(1, false, this.tTo);
    this.iFlag = t.readInt32(3, false, this.iFlag)
}
;
HUYA.SubscribeStatusReq = function() {
    this.tId = new HUYA.UserId;
    this.tFrom = new HUYA.Subscriber;
    this.tTo = new HUYA.Activity
}
;
HUYA.SubscribeStatusReq.prototype._clone = function() {
    return new HUYA.SubscribeStatusReq
}
;
HUYA.SubscribeStatusReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SubscribeStatusReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SubscribeStatusReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeStruct(1, this.tFrom);
    t.writeStruct(2, this.tTo)
}
;
HUYA.SubscribeStatusReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.tFrom = t.readStruct(1, false, this.tFrom);
    this.tTo = t.readStruct(2, false, this.tTo)
}
;
HUYA.SubscribeStatusResp = function() {
    this.tFrom = new HUYA.Subscriber;
    this.tTo = new HUYA.Activity;
    this.iSubscribedCount = 0;
    this.iStatus = 0
}
;
HUYA.SubscribeStatusResp.prototype._clone = function() {
    return new HUYA.SubscribeStatusResp
}
;
HUYA.SubscribeStatusResp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SubscribeStatusResp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SubscribeStatusResp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tFrom);
    t.writeStruct(1, this.tTo);
    t.writeInt32(2, this.iSubscribedCount);
    t.writeInt32(3, this.iStatus)
}
;
HUYA.SubscribeStatusResp.prototype.readFrom = function(t) {
    this.tFrom = t.readStruct(0, false, this.tFrom);
    this.tTo = t.readStruct(1, false, this.tTo);
    this.iSubscribedCount = t.readInt32(2, false, this.iSubscribedCount);
    this.iStatus = t.readInt32(3, false, this.iStatus)
}
;
HUYA.Subscriber = function() {
    this.iType = 0;
    this.sKey = "";
    this.lSubscribeTime = 0
}
;
HUYA.Subscriber.prototype._clone = function() {
    return new HUYA.Subscriber
}
;
HUYA.Subscriber.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.Subscriber.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.Subscriber.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iType);
    t.writeString(1, this.sKey);
    t.writeInt64(2, this.lSubscribeTime)
}
;
HUYA.Subscriber.prototype.readFrom = function(t) {
    this.iType = t.readInt32(0, false, this.iType);
    this.sKey = t.readString(1, false, this.sKey);
    this.lSubscribeTime = t.readInt64(2, false, this.lSubscribeTime)
}
;
HUYA.PresenterChannelInfo = function() {
    this.lYYId = 0;
    this.lTid = 0;
    this.lSid = 0;
    this.iSourceType = 0;
    this.iScreenType = 0;
    this.lUid = 0;
    this.iGameId = 0;
    this.iRoomId = 0
}
;
HUYA.PresenterChannelInfo.prototype._clone = function() {
    return new HUYA.PresenterChannelInfo
}
;
HUYA.PresenterChannelInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterChannelInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterChannelInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lYYId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(3, this.lSid);
    t.writeInt32(4, this.iSourceType);
    t.writeInt32(5, this.iScreenType);
    t.writeInt64(6, this.lUid);
    t.writeInt32(7, this.iGameId);
    t.writeInt32(8, this.iRoomId)
}
;
HUYA.PresenterChannelInfo.prototype.readFrom = function(t) {
    this.lYYId = t.readInt64(0, false, this.lYYId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(3, false, this.lSid);
    this.iSourceType = t.readInt32(4, false, this.iSourceType);
    this.iScreenType = t.readInt32(5, false, this.iScreenType);
    this.lUid = t.readInt64(6, false, this.lUid);
    this.iGameId = t.readInt32(7, false, this.iGameId);
    this.iRoomId = t.readInt32(8, false, this.iRoomId)
}
;
HUYA.GetRelationReq = function() {
    this.tId = new HUYA.UserId;
    this.lUid = 0
}
;
HUYA.GetRelationReq.prototype._clone = function() {
    return new HUYA.GetRelationReq
}
;
HUYA.GetRelationReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetRelationReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetRelationReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lUid)
}
;
HUYA.GetRelationReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lUid = t.readInt64(1, false, this.lUid)
}
;
HUYA.GetRelationRsp = function() {
    this.tItem = new HUYA.RelationItem
}
;
HUYA.GetRelationRsp.prototype._clone = function() {
    return new HUYA.GetRelationRsp
}
;
HUYA.GetRelationRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetRelationRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetRelationRsp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tItem)
}
;
HUYA.GetRelationRsp.prototype.readFrom = function(t) {
    this.tItem = t.readStruct(0, false, this.tItem)
}
;
HUYA.RelationItem = function() {
    this.lUid = 0;
    this.iRelation = 0;
    this.iSubscribeToTime = 0;
    this.iSubscribeFromTime = 0;
    this.iBlackTime = 0;
    this.iModifyTime = 0
}
;
HUYA.RelationItem.prototype._clone = function() {
    return new HUYA.RelationItem
}
;
HUYA.RelationItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.RelationItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.RelationItem.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt32(1, this.iRelation);
    t.writeInt32(2, this.iSubscribeToTime);
    t.writeInt32(3, this.iSubscribeFromTime);
    t.writeInt32(4, this.iBlackTime);
    t.writeInt32(5, this.iModifyTime)
}
;
HUYA.RelationItem.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.iRelation = t.readInt32(1, false, this.iRelation);
    this.iSubscribeToTime = t.readInt32(2, false, this.iSubscribeToTime);
    this.iSubscribeFromTime = t.readInt32(3, false, this.iSubscribeFromTime);
    this.iBlackTime = t.readInt32(4, false, this.iBlackTime);
    this.iModifyTime = t.readInt32(5, false, this.iModifyTime)
}
;
HUYA.ModRelationReq = function() {
    this.tId = new HUYA.UserId;
    this.lUid = 0;
    this.iOp = 0;
    this.sSource = ""
}
;
HUYA.ModRelationReq.prototype._clone = function() {
    return new HUYA.ModRelationReq
}
;
HUYA.ModRelationReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ModRelationReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ModRelationReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lUid);
    t.writeInt32(2, this.iOp);
    t.writeString(3, this.sSource)
}
;
HUYA.ModRelationReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lUid = t.readInt64(1, false, this.lUid);
    this.iOp = t.readInt32(2, false, this.iOp);
    this.sSource = t.readString(3, false, this.sSource)
}
;
HUYA.ModRelationRsp = function() {
    this.iNewRelation = 0;
    this.sMessage = ""
}
;
HUYA.ModRelationRsp.prototype._clone = function() {
    return new HUYA.ModRelationRsp
}
;
HUYA.ModRelationRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ModRelationRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ModRelationRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iNewRelation);
    t.writeString(1, this.sMessage)
}
;
HUYA.ModRelationRsp.prototype.readFrom = function(t) {
    this.iNewRelation = t.readInt32(0, false, this.iNewRelation);
    this.sMessage = t.readString(1, false, this.sMessage)
}
;
HUYA.GetRelationBatchReq = function() {
    this.tId = new HUYA.UserId;
    this.vUid = new Taf.Vector(new Taf.INT64)
}
;
HUYA.GetRelationBatchReq.prototype._clone = function() {
    return new HUYA.GetRelationBatchReq
}
;
HUYA.GetRelationBatchReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetRelationBatchReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetRelationBatchReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeVector(1, this.vUid)
}
;
HUYA.GetRelationBatchReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.vUid = t.readVector(1, false, this.vUid)
}
;
HUYA.GetRelationBatchRsp = function() {
    this.mItem = new Taf.Map(new Taf.INT64,new HUYA.RelationItem)
}
;
HUYA.GetRelationBatchRsp.prototype._clone = function() {
    return new HUYA.GetRelationBatchRsp
}
;
HUYA.GetRelationBatchRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetRelationBatchRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetRelationBatchRsp.prototype.writeTo = function(t) {
    t.writeMap(0, this.mItem)
}
;
HUYA.GetRelationBatchRsp.prototype.readFrom = function(t) {
    this.mItem = t.readMap(0, false, this.mItem)
}
;
HUYA.LiveAdvertisementInfo = function() {
    this.iType = 0;
    this.sTagUrl = "";
    this.iHLeftPercent = 0;
    this.iHRightPercent = 0;
    this.iVAbovePercent = 0;
    this.iVBelowPercent = 0;
    this.iLifeTime = 0;
    this.iLoadTime = 0;
    this.iPlayNow = 0;
    this.sAdPercent = "";
    this.iIsCountDown = 0;
    this.iId = 0;
    this.sTitle = "";
    this.iPlayNum = 0;
    this.iHasPlayNum = 0
}
;
HUYA.LiveAdvertisementInfo.prototype._clone = function() {
    return new HUYA.LiveAdvertisementInfo
}
;
HUYA.LiveAdvertisementInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LiveAdvertisementInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LiveAdvertisementInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iType);
    t.writeString(1, this.sTagUrl);
    t.writeInt32(2, this.iHLeftPercent);
    t.writeInt32(3, this.iHRightPercent);
    t.writeInt32(4, this.iVAbovePercent);
    t.writeInt32(5, this.iVBelowPercent);
    t.writeInt32(6, this.iLifeTime);
    t.writeInt32(7, this.iLoadTime);
    t.writeInt32(8, this.iPlayNow);
    t.writeString(9, this.sAdPercent);
    t.writeInt32(10, this.iIsCountDown);
    t.writeInt32(11, this.iId);
    t.writeString(12, this.sTitle);
    t.writeInt32(13, this.iPlayNum);
    t.writeInt32(14, this.iHasPlayNum)
}
;
HUYA.LiveAdvertisementInfo.prototype.readFrom = function(t) {
    this.iType = t.readInt32(0, false, this.iType);
    this.sTagUrl = t.readString(1, false, this.sTagUrl);
    this.iHLeftPercent = t.readInt32(2, false, this.iHLeftPercent);
    this.iHRightPercent = t.readInt32(3, false, this.iHRightPercent);
    this.iVAbovePercent = t.readInt32(4, false, this.iVAbovePercent);
    this.iVBelowPercent = t.readInt32(5, false, this.iVBelowPercent);
    this.iLifeTime = t.readInt32(6, false, this.iLifeTime);
    this.iLoadTime = t.readInt32(7, false, this.iLoadTime);
    this.iPlayNow = t.readInt32(8, false, this.iPlayNow);
    this.sAdPercent = t.readString(9, false, this.sAdPercent);
    this.iIsCountDown = t.readInt32(10, false, this.iIsCountDown);
    this.iId = t.readInt32(11, false, this.iId);
    this.sTitle = t.readString(12, false, this.sTitle);
    this.iPlayNum = t.readInt32(13, false, this.iPlayNum);
    this.iHasPlayNum = t.readInt32(14, false, this.iHasPlayNum)
}
;
HUYA.GetLiveAdInfoReq = function() {
    this.tId = new HUYA.UserId;
    this.lPresenterUid = 0
}
;
HUYA.GetLiveAdInfoReq.prototype._clone = function() {
    return new HUYA.GetLiveAdInfoReq
}
;
HUYA.GetLiveAdInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetLiveAdInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetLiveAdInfoReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lPresenterUid)
}
;
HUYA.GetLiveAdInfoReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lPresenterUid = t.readInt64(1, false, this.lPresenterUid)
}
;
HUYA.GetLiveAdInfoRsp = function() {
    this.tAdInfo = new HUYA.LiveAdvertisementInfo;
    this.iIsConfig = 0;
    this.tEndLiveAdInfo = new HUYA.LiveAdvertisementInfo;
    this.iIsEndLiveConfig = 0
}
;
HUYA.GetLiveAdInfoRsp.prototype._clone = function() {
    return new HUYA.GetLiveAdInfoRsp
}
;
HUYA.GetLiveAdInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetLiveAdInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetLiveAdInfoRsp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tAdInfo);
    t.writeInt32(1, this.iIsConfig);
    t.writeStruct(2, this.tEndLiveAdInfo);
    t.writeInt32(3, this.iIsEndLiveConfig)
}
;
HUYA.GetLiveAdInfoRsp.prototype.readFrom = function(t) {
    this.tAdInfo = t.readStruct(0, false, this.tAdInfo);
    this.iIsConfig = t.readInt32(1, false, this.iIsConfig);
    this.tEndLiveAdInfo = t.readStruct(2, false, this.tEndLiveAdInfo);
    this.iIsEndLiveConfig = t.readInt32(3, false, this.iIsEndLiveConfig)
}
;
HUYA.LiveAdvertisementNotice = function() {
    this.tAdInfo = new HUYA.LiveAdvertisementInfo;
    this.iAdrPlay = 0;
    this.iIosPlay = 0;
    this.iAdrtvPlay = 0;
    this.iIPadPlay = 0;
    this.iAdrPadPlay = 0;
    this.iWebPlay = 0
}
;
HUYA.LiveAdvertisementNotice.prototype._clone = function() {
    return new HUYA.LiveAdvertisementNotice
}
;
HUYA.LiveAdvertisementNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LiveAdvertisementNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LiveAdvertisementNotice.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tAdInfo);
    t.writeInt32(1, this.iAdrPlay);
    t.writeInt32(2, this.iIosPlay);
    t.writeInt32(3, this.iAdrtvPlay);
    t.writeInt32(4, this.iIPadPlay);
    t.writeInt32(5, this.iAdrPadPlay);
    t.writeInt32(6, this.iWebPlay)
}
;
HUYA.LiveAdvertisementNotice.prototype.readFrom = function(t) {
    this.tAdInfo = t.readStruct(0, false, this.tAdInfo);
    this.iAdrPlay = t.readInt32(1, false, this.iAdrPlay);
    this.iIosPlay = t.readInt32(2, false, this.iIosPlay);
    this.iAdrtvPlay = t.readInt32(3, false, this.iAdrtvPlay);
    this.iIPadPlay = t.readInt32(4, false, this.iIPadPlay);
    this.iAdrPadPlay = t.readInt32(5, false, this.iAdrPadPlay);
    this.iWebPlay = t.readInt32(6, false, this.iWebPlay)
}
;
HUYA.ActivityMsgReq = function() {
    this.tUserId = new HUYA.UserId;
    this.iActivityId = 0;
    this.lPid = 0;
    this.lTid = 0;
    this.lSid = 0;
    this.iChannelType = 0;
    this.iSubUri = 0
}
;
HUYA.ActivityMsgReq.prototype._clone = function() {
    return new HUYA.ActivityMsgReq
}
;
HUYA.ActivityMsgReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ActivityMsgReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ActivityMsgReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt32(1, this.iActivityId);
    t.writeInt64(2, this.lPid);
    t.writeInt64(3, this.lTid);
    t.writeInt64(4, this.lSid);
    t.writeInt32(5, this.iChannelType);
    t.writeInt32(6, this.iSubUri)
}
;
HUYA.ActivityMsgReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.iActivityId = t.readInt32(1, false, this.iActivityId);
    this.lPid = t.readInt64(2, false, this.lPid);
    this.lTid = t.readInt64(3, false, this.lTid);
    this.lSid = t.readInt64(4, false, this.lSid);
    this.iChannelType = t.readInt32(5, false, this.iChannelType);
    this.iSubUri = t.readInt32(6, false, this.iSubUri)
}
;
HUYA.ActivityMsgRsp = function() {
    this.iEnable = 0;
    this.vSerializedMsg = new Taf.Vector(new HUYA.ActivitySerializedMsg);
    this.iTimeStamp = 0
}
;
HUYA.ActivityMsgRsp.prototype._clone = function() {
    return new HUYA.ActivityMsgRsp
}
;
HUYA.ActivityMsgRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ActivityMsgRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ActivityMsgRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iEnable);
    t.writeVector(1, this.vSerializedMsg);
    t.writeInt32(2, this.iTimeStamp)
}
;
HUYA.ActivityMsgRsp.prototype.readFrom = function(t) {
    this.iEnable = t.readInt32(0, false, this.iEnable);
    this.vSerializedMsg = t.readVector(1, false, this.vSerializedMsg);
    this.iTimeStamp = t.readInt32(2, false, this.iTimeStamp)
}
;
HUYA.ActivitySerializedMsg = function() {
    this.iSubUri = 0;
    this.vContent = new Taf.BinBuffer
}
;
HUYA.ActivitySerializedMsg.prototype._clone = function() {
    return new HUYA.ActivitySerializedMsg
}
;
HUYA.ActivitySerializedMsg.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ActivitySerializedMsg.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ActivitySerializedMsg.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iSubUri);
    t.writeBytes(1, this.vContent)
}
;
HUYA.ActivitySerializedMsg.prototype.readFrom = function(t) {
    this.iSubUri = t.readInt32(0, false, this.iSubUri);
    this.vContent = t.readBytes(1, false, this.vContent)
}
;
HUYA.GetGameLiveHisUponReq = function() {
    this.lUid = 0;
    this.iMinutes = 0;
    this.iNumberWanted = 0;
    this.tId = new HUYA.UserId
}
;
HUYA.GetGameLiveHisUponReq.prototype._clone = function() {
    return new HUYA.GetGameLiveHisUponReq
}
;
HUYA.GetGameLiveHisUponReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetGameLiveHisUponReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetGameLiveHisUponReq.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt32(1, this.iMinutes);
    t.writeInt32(2, this.iNumberWanted);
    t.writeStruct(3, this.tId)
}
;
HUYA.GetGameLiveHisUponReq.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.iMinutes = t.readInt32(1, false, this.iMinutes);
    this.iNumberWanted = t.readInt32(2, false, this.iNumberWanted);
    this.tId = t.readStruct(3, false, this.tId)
}
;
HUYA.GetGameLiveHisUponRsp = function() {
    this.lUid = 0;
    this.vHistoryList = new Taf.Vector(new HUYA.GameLiveHlsInfo)
}
;
HUYA.GetGameLiveHisUponRsp.prototype._clone = function() {
    return new HUYA.GetGameLiveHisUponRsp
}
;
HUYA.GetGameLiveHisUponRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetGameLiveHisUponRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetGameLiveHisUponRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeVector(1, this.vHistoryList)
}
;
HUYA.GetGameLiveHisUponRsp.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.vHistoryList = t.readVector(1, false, this.vHistoryList)
}
;
HUYA.GameLiveHlsInfo = function() {
    this.tGameInfo = new HUYA.GameLiveInfo;
    this.sHlsUrl = "";
    this.iVideoSyncTime = 0
}
;
HUYA.GameLiveHlsInfo.prototype._clone = function() {
    return new HUYA.GameLiveHlsInfo
}
;
HUYA.GameLiveHlsInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GameLiveHlsInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GameLiveHlsInfo.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tGameInfo);
    t.writeString(1, this.sHlsUrl);
    t.writeInt32(2, this.iVideoSyncTime)
}
;
HUYA.GameLiveHlsInfo.prototype.readFrom = function(t) {
    this.tGameInfo = t.readStruct(0, false, this.tGameInfo);
    this.sHlsUrl = t.readString(1, false, this.sHlsUrl);
    this.iVideoSyncTime = t.readInt32(2, false, this.iVideoSyncTime)
}
;
HUYA.GetVideoHisUponReq = function() {
    this.lUid = 0;
    this.lLiveId = 0;
    this.tId = new HUYA.UserId
}
;
HUYA.GetVideoHisUponReq.prototype._clone = function() {
    return new HUYA.GetVideoHisUponReq
}
;
HUYA.GetVideoHisUponReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetVideoHisUponReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetVideoHisUponReq.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lLiveId);
    t.writeStruct(2, this.tId)
}
;
HUYA.GetVideoHisUponReq.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lLiveId = t.readInt64(1, false, this.lLiveId);
    this.tId = t.readStruct(2, false, this.tId)
}
;
HUYA.GetVideoHisUponRsp = function() {
    this.lUid = 0;
    this.vHistoryList = new Taf.Vector(new HUYA.GameLiveHlsInfo)
}
;
HUYA.GetVideoHisUponRsp.prototype._clone = function() {
    return new HUYA.GetVideoHisUponRsp
}
;
HUYA.GetVideoHisUponRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetVideoHisUponRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetVideoHisUponRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeVector(1, this.vHistoryList)
}
;
HUYA.GetVideoHisUponRsp.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.vHistoryList = t.readVector(1, false, this.vHistoryList)
}
;
HUYA.SendReplayMessageReq = function() {
    this.tId = new HUYA.UserId;
    this.sSenderNickName = "";
    this.iGroupType = 0;
    this.iGroupId = 0;
    this.sMessage = ""
}
;
HUYA.SendReplayMessageReq.prototype._clone = function() {
    return new HUYA.SendReplayMessageReq
}
;
HUYA.SendReplayMessageReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SendReplayMessageReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SendReplayMessageReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeString(1, this.sSenderNickName);
    t.writeInt32(2, this.iGroupType);
    t.writeInt32(3, this.iGroupId);
    t.writeString(4, this.sMessage)
}
;
HUYA.SendReplayMessageReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.sSenderNickName = t.readString(1, false, this.sSenderNickName);
    this.iGroupType = t.readInt32(2, false, this.iGroupType);
    this.iGroupId = t.readInt32(3, false, this.iGroupId);
    this.sMessage = t.readString(4, false, this.sMessage)
}
;
HUYA.SendReplayMessageRsp = function() {
    this.lUid = 0;
    this.iValidate = 0
}
;
HUYA.SendReplayMessageRsp.prototype._clone = function() {
    return new HUYA.SendReplayMessageRsp
}
;
HUYA.SendReplayMessageRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SendReplayMessageRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SendReplayMessageRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt32(1, this.iValidate)
}
;
HUYA.SendReplayMessageRsp.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.iValidate = t.readInt32(1, false, this.iValidate)
}
;
HUYA.PresenterActivityReq = function() {
    this.tId = new HUYA.UserId;
    this.lUid = 0
}
;
HUYA.PresenterActivityReq.prototype._clone = function() {
    return new HUYA.PresenterActivityReq
}
;
HUYA.PresenterActivityReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterActivityReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterActivityReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lUid)
}
;
HUYA.PresenterActivityReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lUid = t.readInt64(1, false, this.lUid)
}
;
HUYA.PresenterActivityRsp = function() {
    this.tAct = new HUYA.PresenterActivityEx
}
;
HUYA.PresenterActivityRsp.prototype._clone = function() {
    return new HUYA.PresenterActivityRsp
}
;
HUYA.PresenterActivityRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterActivityRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterActivityRsp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tAct)
}
;
HUYA.PresenterActivityRsp.prototype.readFrom = function(t) {
    this.tAct = t.readStruct(0, false, this.tAct)
}
;
HUYA.PresenterActivityEx = function() {
    this.tAct = new HUYA.ActivityEx;
    this.lUid = 0;
    this.lYYId = 0;
    this.sNick = "";
    this.sAvatar = "";
    this.bLive = true;
    this.tLive = new HUYA.GameLiveInfo;
    this.iLevel = 0;
    this.iCanBeSubscribed = 0;
    this.iSubscribeStatus = 0;
    this.lSubscribeCount = 0;
    this.iGender = 0;
    this.iFansNum = 0;
    this.iDiamondFansNum = 0;
    this.iDiamondFansQuota = 0;
    this.sDiamondUrl = "";
    this.iIsPresenter = 0;
    this.iCertified = 0;
    this.iRoomId = 0;
    this.sScheduleTime = "";
    this.sDescription = "";
    this.iRelation = 0
}
;
HUYA.PresenterActivityEx.prototype._clone = function() {
    return new HUYA.PresenterActivityEx
}
;
HUYA.PresenterActivityEx.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterActivityEx.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterActivityEx.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tAct);
    t.writeInt64(1, this.lUid);
    t.writeInt64(2, this.lYYId);
    t.writeString(3, this.sNick);
    t.writeString(4, this.sAvatar);
    t.writeBoolean(5, this.bLive);
    t.writeStruct(6, this.tLive);
    t.writeInt32(7, this.iLevel);
    t.writeInt32(8, this.iCanBeSubscribed);
    t.writeInt32(9, this.iSubscribeStatus);
    t.writeInt64(10, this.lSubscribeCount);
    t.writeInt32(11, this.iGender);
    t.writeInt32(12, this.iFansNum);
    t.writeInt32(13, this.iDiamondFansNum);
    t.writeInt32(14, this.iDiamondFansQuota);
    t.writeString(15, this.sDiamondUrl);
    t.writeInt32(16, this.iIsPresenter);
    t.writeInt32(17, this.iCertified);
    t.writeInt32(18, this.iRoomId);
    t.writeString(19, this.sScheduleTime);
    t.writeString(20, this.sDescription);
    t.writeInt32(21, this.iRelation)
}
;
HUYA.PresenterActivityEx.prototype.readFrom = function(t) {
    this.tAct = t.readStruct(0, false, this.tAct);
    this.lUid = t.readInt64(1, false, this.lUid);
    this.lYYId = t.readInt64(2, false, this.lYYId);
    this.sNick = t.readString(3, false, this.sNick);
    this.sAvatar = t.readString(4, false, this.sAvatar);
    this.bLive = t.readBoolean(5, false, this.bLive);
    this.tLive = t.readStruct(6, false, this.tLive);
    this.iLevel = t.readInt32(7, false, this.iLevel);
    this.iCanBeSubscribed = t.readInt32(8, false, this.iCanBeSubscribed);
    this.iSubscribeStatus = t.readInt32(9, false, this.iSubscribeStatus);
    this.lSubscribeCount = t.readInt64(10, false, this.lSubscribeCount);
    this.iGender = t.readInt32(11, false, this.iGender);
    this.iFansNum = t.readInt32(12, false, this.iFansNum);
    this.iDiamondFansNum = t.readInt32(13, false, this.iDiamondFansNum);
    this.iDiamondFansQuota = t.readInt32(14, false, this.iDiamondFansQuota);
    this.sDiamondUrl = t.readString(15, false, this.sDiamondUrl);
    this.iIsPresenter = t.readInt32(16, false, this.iIsPresenter);
    this.iCertified = t.readInt32(17, false, this.iCertified);
    this.iRoomId = t.readInt32(18, false, this.iRoomId);
    this.sScheduleTime = t.readString(19, false, this.sScheduleTime);
    this.sDescription = t.readString(20, false, this.sDescription);
    this.iRelation = t.readInt32(21, false, this.iRelation)
}
;
HUYA.ActivityEx = function() {
    this.iType = 0;
    this.sKey = "";
    this.lAid = 0;
    this.iDateline = 0
}
;
HUYA.ActivityEx.prototype._clone = function() {
    return new HUYA.ActivityEx
}
;
HUYA.ActivityEx.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ActivityEx.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ActivityEx.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iType);
    t.writeString(1, this.sKey);
    t.writeInt64(2, this.lAid);
    t.writeInt32(3, this.iDateline)
}
;
HUYA.ActivityEx.prototype.readFrom = function(t) {
    this.iType = t.readInt32(0, false, this.iType);
    this.sKey = t.readString(1, false, this.sKey);
    this.lAid = t.readInt64(2, false, this.lAid);
    this.iDateline = t.readInt32(3, false, this.iDateline)
}
;
HUYA.GetCdnTokenExReq = function() {
    this.sFlvUrl = "";
    this.sStreamName = "";
    this.iLoopTime = 0;
    this.tId = new HUYA.UserId
}
;
HUYA.GetCdnTokenExReq.prototype._clone = function() {
    return new HUYA.GetCdnTokenExReq
}
;
HUYA.GetCdnTokenExReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetCdnTokenExReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetCdnTokenExReq.prototype.writeTo = function(t) {
    t.writeString(0, this.sFlvUrl);
    t.writeString(1, this.sStreamName);
    t.writeInt32(2, this.iLoopTime);
    t.writeStruct(3, this.tId)
}
;
HUYA.GetCdnTokenExReq.prototype.readFrom = function(t) {
    this.sFlvUrl = t.readString(0, false, this.sFlvUrl);
    this.sStreamName = t.readString(1, false, this.sStreamName);
    this.iLoopTime = t.readInt32(2, false, this.iLoopTime);
    this.tId = t.readStruct(3, false, this.tId)
}
;
HUYA.GetCdnTokenExRsp = function() {
    this.sFlvToken = "";
    this.iExpireTime = 0
}
;
HUYA.GetCdnTokenExRsp.prototype._clone = function() {
    return new HUYA.GetCdnTokenExRsp
}
;
HUYA.GetCdnTokenExRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetCdnTokenExRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetCdnTokenExRsp.prototype.writeTo = function(t) {
    t.writeString(0, this.sFlvToken);
    t.writeInt32(1, this.iExpireTime)
}
;
HUYA.GetCdnTokenExRsp.prototype.readFrom = function(t) {
    this.sFlvToken = t.readString(0, false, this.sFlvToken);
    this.iExpireTime = t.readInt32(1, false, this.iExpireTime)
}
;
HUYA.SetBadgeVReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lFansUid = 0;
    this.lBadgeId = 0;
    this.iVFlag = 0;
    this.iEffectiveDay = 0
}
;
HUYA.SetBadgeVReq.prototype._clone = function() {
    return new HUYA.SetBadgeVReq
}
;
HUYA.SetBadgeVReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SetBadgeVReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SetBadgeVReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lFansUid);
    t.writeInt64(2, this.lBadgeId);
    t.writeInt32(3, this.iVFlag);
    t.writeInt32(4, this.iEffectiveDay)
}
;
HUYA.SetBadgeVReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lFansUid = t.readInt64(1, false, this.lFansUid);
    this.lBadgeId = t.readInt64(2, false, this.lBadgeId);
    this.iVFlag = t.readInt32(3, false, this.iVFlag);
    this.iEffectiveDay = t.readInt32(4, false, this.iEffectiveDay)
}
;
HUYA.SetBadgeVRsp = function() {
    this.iRet = 0;
    this.lFansUid = 0;
    this.lBadgeId = 0;
    this.iVFlag = -1;
    this.lVExpiredTS = 0
}
;
HUYA.SetBadgeVRsp.prototype._clone = function() {
    return new HUYA.SetBadgeVRsp
}
;
HUYA.SetBadgeVRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SetBadgeVRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SetBadgeVRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRet);
    t.writeInt64(1, this.lFansUid);
    t.writeInt64(2, this.lBadgeId);
    t.writeInt32(3, this.iVFlag);
    t.writeInt64(4, this.lVExpiredTS)
}
;
HUYA.SetBadgeVRsp.prototype.readFrom = function(t) {
    this.iRet = t.readInt32(0, false, this.iRet);
    this.lFansUid = t.readInt64(1, false, this.lFansUid);
    this.lBadgeId = t.readInt64(2, false, this.lBadgeId);
    this.iVFlag = t.readInt32(3, false, this.iVFlag);
    this.lVExpiredTS = t.readInt64(4, false, this.lVExpiredTS)
}
;
HUYA.Metric = function() {
    this.sMetricName = "";
    this.vDimension = new Taf.Vector(new HUYA.Dimension);
    this.iTS = 0;
    this.iSuccess = 0;
    this.iRetCode = 0;
    this.fValue = 0;
    this.eUnit = 0;
    this.tStatsSet = new HUYA.StatsSet;
    this.sExtDesc = "";
    this.vExLog = new Taf.Vector(new HUYA.Dimension)
}
;
HUYA.Metric.prototype._clone = function() {
    return new HUYA.Metric
}
;
HUYA.Metric.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.Metric.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.Metric.prototype.writeTo = function(t) {
    t.writeString(0, this.sMetricName);
    t.writeVector(1, this.vDimension);
    t.writeInt64(2, this.iTS);
    t.writeInt32(3, this.iSuccess);
    t.writeInt32(4, this.iRetCode);
    t.writeDouble(5, this.fValue);
    t.writeInt32(6, this.eUnit);
    t.writeStruct(7, this.tStatsSet);
    t.writeString(8, this.sExtDesc);
    t.writeVector(9, this.vExLog)
}
;
HUYA.Metric.prototype.readFrom = function(t) {
    this.sMetricName = t.readString(0, true, this.sMetricName);
    this.vDimension = t.readVector(1, false, this.vDimension);
    this.iTS = t.readInt64(2, false, this.iTS);
    this.iSuccess = t.readInt32(3, false, this.iSuccess);
    this.iRetCode = t.readInt32(4, false, this.iRetCode);
    this.fValue = t.readDouble(5, false, this.fValue);
    this.eUnit = t.readInt32(6, false, this.eUnit);
    this.tStatsSet = t.readStruct(7, false, this.tStatsSet);
    this.sExtDesc = t.readString(8, false, this.sExtDesc);
    this.vExLog = t.readVector(9, false, this.vExLog)
}
;
HUYA.Dimension = function() {
    this.sName = "";
    this.sValue = ""
}
;
HUYA.Dimension.prototype._clone = function() {
    return new HUYA.Dimension
}
;
HUYA.Dimension.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.Dimension.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.Dimension.prototype.writeTo = function(t) {
    t.writeString(0, this.sName);
    t.writeString(1, this.sValue)
}
;
HUYA.Dimension.prototype.readFrom = function(t) {
    this.sName = t.readString(0, false, this.sName);
    this.sValue = t.readString(1, false, this.sValue)
}
;
HUYA.EUnit = {
    EUnit_None: 0,
    EUnit_Seconds: 1,
    EUnit_Microseconds: 2,
    EUnit_Milliseconds: 3,
    EUnit_Bytes: 4,
    EUnit_Kilobytes: 5,
    EUnit_Megabytes: 6,
    EUnit_Gigabytes: 7,
    EUnit_Terabytes: 8,
    EUnit_Bits: 9,
    EUnit_Kilobits: 10,
    EUnit_Megabits: 11,
    EUnit_Gigabits: 12,
    EUnit_Terabits: 13,
    EUnit_Percent: 14,
    EUnit_Count: 15,
    EUnit_BytesPerSecond: 16,
    EUnit_KilobytesPerSecond: 17,
    EUnit_MegabytesPerSecond: 18,
    EUnit_GigabytesPerSecond: 19,
    EUnit_TerabytesPerSecond: 20,
    EUnit_BitsPerSecond: 21,
    EUnit_KilobitsPerSecond: 22,
    EUnit_MegabitsPerSecond: 23,
    EUnit_GigabitsPerSecond: 24,
    EUnit_TerabitsPerSecond: 25,
    EUnit_CountPerSecond: 26
};
HUYA.MetricSet = function() {
    this.tId = new HUYA.UserId;
    this.vMetric = new Taf.Vector(new HUYA.Metric)
}
;
HUYA.MetricSet.prototype._clone = function() {
    return new HUYA.MetricSet
}
;
HUYA.MetricSet.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MetricSet.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MetricSet.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeVector(1, this.vMetric)
}
;
HUYA.MetricSet.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, true, this.tId);
    this.vMetric = t.readVector(1, true, this.vMetric)
}
;
HUYA.StatsSet = function() {
    this.fSum = 0;
    this.fMaxValue = 0;
    this.fMinValue = 0;
    this.lSampleCnt = 0
}
;
HUYA.StatsSet.prototype._clone = function() {
    return new HUYA.StatsSet
}
;
HUYA.StatsSet.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.StatsSet.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.StatsSet.prototype.writeTo = function(t) {
    t.writeDouble(0, this.fSum);
    t.writeDouble(1, this.fMaxValue);
    t.writeDouble(2, this.fMinValue);
    t.writeInt64(3, this.lSampleCnt)
}
;
HUYA.StatsSet.prototype.readFrom = function(t) {
    this.fSum = t.readDouble(0, false, this.fSum);
    this.fMaxValue = t.readDouble(1, false, this.fMaxValue);
    this.fMinValue = t.readDouble(2, false, this.fMinValue);
    this.lSampleCnt = t.readInt64(3, false, this.lSampleCnt)
}
;
HUYA.MetricDetailSet = function() {
    this.tId = new HUYA.UserId;
    this.vMetricDetail = new Taf.Vector(new HUYA.MetricDetail)
}
;
HUYA.MetricDetailSet.prototype._clone = function() {
    return new HUYA.MetricDetailSet
}
;
HUYA.MetricDetailSet.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MetricDetailSet.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MetricDetailSet.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeVector(1, this.vMetricDetail)
}
;
HUYA.MetricDetailSet.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, true, this.tId);
    this.vMetricDetail = t.readVector(1, true, this.vMetricDetail)
}
;
HUYA.MetricDetail = function() {
    this.sMetricName = "";
    this.iTS = 0;
    this.vDimension = new Taf.Vector(new HUYA.Dimension);
    this.vFiled = new Taf.Vector(new HUYA.Field);
    this.vExLog = new Taf.Vector(new HUYA.Dimension)
}
;
HUYA.MetricDetail.prototype._clone = function() {
    return new HUYA.MetricDetail
}
;
HUYA.MetricDetail.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MetricDetail.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MetricDetail.prototype.writeTo = function(t) {
    t.writeString(0, this.sMetricName);
    t.writeInt64(1, this.iTS);
    t.writeVector(2, this.vDimension);
    t.writeVector(3, this.vFiled);
    t.writeVector(4, this.vExLog)
}
;
HUYA.MetricDetail.prototype.readFrom = function(t) {
    this.sMetricName = t.readString(0, true, this.sMetricName);
    this.iTS = t.readInt64(1, false, this.iTS);
    this.vDimension = t.readVector(2, false, this.vDimension);
    this.vFiled = t.readVector(3, false, this.vFiled);
    this.vExLog = t.readVector(4, false, this.vExLog)
}
;
HUYA.Field = function() {
    this.sName = "";
    this.fValue = 0
}
;
HUYA.Field.prototype._clone = function() {
    return new HUYA.Field
}
;
HUYA.Field.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.Field.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.Field.prototype.writeTo = function(t) {
    t.writeString(0, this.sName);
    t.writeDouble(1, this.fValue)
}
;
HUYA.Field.prototype.readFrom = function(t) {
    this.sName = t.readString(0, false, this.sName);
    this.fValue = t.readDouble(1, false, this.fValue)
}
;
HUYA.SetUserProfileReq = function() {
    this.tId = new HUYA.UserId;
    this.iGender = -1;
    this.iBirthday = -1;
    this.sSign = "[NOMODIFY]";
    this.sArea = "";
    this.sLocation = "";
    this.sNickName = "";
    this.setType = HUYA.ESetUserProfileType.THIRD_SET
}
;
HUYA.SetUserProfileReq.prototype._clone = function() {
    return new HUYA.SetUserProfileReq
}
;
HUYA.SetUserProfileReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SetUserProfileReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SetUserProfileReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt32(1, this.iGender);
    t.writeInt32(2, this.iBirthday);
    t.writeString(3, this.sSign);
    t.writeString(4, this.sArea);
    t.writeString(5, this.sLocation);
    t.writeString(6, this.sNickName);
    t.writeInt32(7, this.setType)
}
;
HUYA.SetUserProfileReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.iGender = t.readInt32(1, false, this.iGender);
    this.iBirthday = t.readInt32(2, false, this.iBirthday);
    this.sSign = t.readString(3, false, this.sSign);
    this.sArea = t.readString(4, false, this.sArea);
    this.sLocation = t.readString(5, false, this.sLocation);
    this.sNickName = t.readString(6, false, this.sNickName);
    this.setType = t.readInt32(7, false, this.setType)
}
;
HUYA.SetUserProfileRsp = function() {
    this.tUserProfile = new HUYA.UserProfile;
    this.sTip = ""
}
;
HUYA.SetUserProfileRsp.prototype._clone = function() {
    return new HUYA.SetUserProfileRsp
}
;
HUYA.SetUserProfileRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SetUserProfileRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SetUserProfileRsp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserProfile);
    t.writeString(1, this.sTip)
}
;
HUYA.SetUserProfileRsp.prototype.readFrom = function(t) {
    this.tUserProfile = t.readStruct(0, false, this.tUserProfile);
    this.sTip = t.readString(1, false, this.sTip)
}
;
HUYA.MaiXuChangeNotice = function() {
    this.lTid = 0;
    this.lSid = 0;
    this.vUids = new Taf.Vector(new Taf.INT64)
}
;
HUYA.MaiXuChangeNotice.prototype._clone = function() {
    return new HUYA.MaiXuChangeNotice
}
;
HUYA.MaiXuChangeNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MaiXuChangeNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MaiXuChangeNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lTid);
    t.writeInt64(1, this.lSid);
    t.writeVector(2, this.vUids)
}
;
HUYA.MaiXuChangeNotice.prototype.readFrom = function(t) {
    this.lTid = t.readInt64(0, false, this.lTid);
    this.lSid = t.readInt64(1, false, this.lSid);
    this.vUids = t.readVector(2, false, this.vUids)
}
;
HUYA.MaiXuSearchReq = function() {
    this.tId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0
}
;
HUYA.MaiXuSearchReq.prototype._clone = function() {
    return new HUYA.MaiXuSearchReq
}
;
HUYA.MaiXuSearchReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MaiXuSearchReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MaiXuSearchReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid)
}
;
HUYA.MaiXuSearchReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid)
}
;
HUYA.MaiXuSearchRsp = function() {
    this.vUids = new Taf.Vector(new Taf.INT64)
}
;
HUYA.MaiXuSearchRsp.prototype._clone = function() {
    return new HUYA.MaiXuSearchRsp
}
;
HUYA.MaiXuSearchRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MaiXuSearchRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MaiXuSearchRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vUids)
}
;
HUYA.MaiXuSearchRsp.prototype.readFrom = function(t) {
    this.vUids = t.readVector(0, false, this.vUids)
}
;
HUYA.NewsTickerItem = function() {
    this.sContent = "";
    this.sColor = ""
}
;
HUYA.NewsTickerItem.prototype._clone = function() {
    return new HUYA.NewsTickerItem
}
;
HUYA.NewsTickerItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NewsTickerItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NewsTickerItem.prototype.writeTo = function(t) {
    t.writeString(0, this.sContent);
    t.writeString(1, this.sColor)
}
;
HUYA.NewsTickerItem.prototype.readFrom = function(t) {
    this.sContent = t.readString(0, false, this.sContent);
    this.sColor = t.readString(1, false, this.sColor)
}
;
HUYA.NewsTicker = function() {
    this.vItem = new Taf.Vector(new HUYA.NewsTickerItem)
}
;
HUYA.NewsTicker.prototype._clone = function() {
    return new HUYA.NewsTicker
}
;
HUYA.NewsTicker.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NewsTicker.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NewsTicker.prototype.writeTo = function(t) {
    t.writeVector(0, this.vItem)
}
;
HUYA.NewsTicker.prototype.readFrom = function(t) {
    this.vItem = t.readVector(0, false, this.vItem)
}
;
HUYA.SupportCampInfoReq = function() {
    this.lPid = 0;
    this.lUid = 0
}
;
HUYA.SupportCampInfoReq.prototype._clone = function() {
    return new HUYA.SupportCampInfoReq
}
;
HUYA.SupportCampInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SupportCampInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SupportCampInfoReq.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPid);
    t.writeInt64(1, this.lUid)
}
;
HUYA.SupportCampInfoReq.prototype.readFrom = function(t) {
    this.lPid = t.readInt64(0, false, this.lPid);
    this.lUid = t.readInt64(1, false, this.lUid)
}
;
HUYA.SupportCampInfoRsp = function() {
    this.iType = 0;
    this.iActId = 0;
    this.iSubId = 0;
    this.vInfo = new Taf.Vector(new HUYA.SupportCampItem);
    this.iPriority = 0
}
;
HUYA.SupportCampInfoRsp.prototype._clone = function() {
    return new HUYA.SupportCampInfoRsp
}
;
HUYA.SupportCampInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SupportCampInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SupportCampInfoRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iType);
    t.writeInt32(1, this.iActId);
    t.writeInt32(2, this.iSubId);
    t.writeVector(3, this.vInfo);
    t.writeInt32(4, this.iPriority)
}
;
HUYA.SupportCampInfoRsp.prototype.readFrom = function(t) {
    this.iType = t.readInt32(0, false, this.iType);
    this.iActId = t.readInt32(1, false, this.iActId);
    this.iSubId = t.readInt32(2, false, this.iSubId);
    this.vInfo = t.readVector(3, false, this.vInfo);
    this.iPriority = t.readInt32(4, false, this.iPriority)
}
;
HUYA.SupportCampItem = function() {
    this.lXid = 0;
    this.vChatText = new Taf.Vector(new Taf.STRING);
    this.vFlowText = new Taf.Vector(new Taf.STRING);
    this.vPanelText = new Taf.Vector(new Taf.STRING);
    this.sLogoUrl = ""
}
;
HUYA.SupportCampItem.prototype._clone = function() {
    return new HUYA.SupportCampItem
}
;
HUYA.SupportCampItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SupportCampItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SupportCampItem.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lXid);
    t.writeVector(1, this.vChatText);
    t.writeVector(2, this.vFlowText);
    t.writeVector(3, this.vPanelText);
    t.writeString(4, this.sLogoUrl)
}
;
HUYA.SupportCampItem.prototype.readFrom = function(t) {
    this.lXid = t.readInt64(0, false, this.lXid);
    this.vChatText = t.readVector(1, false, this.vChatText);
    this.vFlowText = t.readVector(2, false, this.vFlowText);
    this.vPanelText = t.readVector(3, false, this.vPanelText);
    this.sLogoUrl = t.readString(4, false, this.sLogoUrl)
}
;
HUYA.UserSupportCampReq = function() {
    this.iType = 0;
    this.iActId = 0;
    this.iSubId = 0;
    this.lPid = 0;
    this.lUid = 0
}
;
HUYA.UserSupportCampReq.prototype._clone = function() {
    return new HUYA.UserSupportCampReq
}
;
HUYA.UserSupportCampReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserSupportCampReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserSupportCampReq.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iType);
    t.writeInt32(1, this.iActId);
    t.writeInt32(2, this.iSubId);
    t.writeInt64(3, this.lPid);
    t.writeInt64(4, this.lUid)
}
;
HUYA.UserSupportCampReq.prototype.readFrom = function(t) {
    this.iType = t.readInt32(0, false, this.iType);
    this.iActId = t.readInt32(1, false, this.iActId);
    this.iSubId = t.readInt32(2, false, this.iSubId);
    this.lPid = t.readInt64(3, false, this.lPid);
    this.lUid = t.readInt64(4, false, this.lUid)
}
;
HUYA.UserSupportCampRsp = function() {
    this.iType = 0;
    this.iActId = 0;
    this.iSubId = 0;
    this.lXid = 0
}
;
HUYA.UserSupportCampRsp.prototype._clone = function() {
    return new HUYA.UserSupportCampRsp
}
;
HUYA.UserSupportCampRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserSupportCampRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserSupportCampRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iType);
    t.writeInt32(1, this.iActId);
    t.writeInt32(2, this.iSubId);
    t.writeInt64(3, this.lXid)
}
;
HUYA.UserSupportCampRsp.prototype.readFrom = function(t) {
    this.iType = t.readInt32(0, false, this.iType);
    this.iActId = t.readInt32(1, false, this.iActId);
    this.iSubId = t.readInt32(2, false, this.iSubId);
    this.lXid = t.readInt64(3, false, this.lXid)
}
;
HUYA.LiveMeetingSyncNotice = function() {
    this.tStat = new HUYA.MeetingStat;
    this.vSeats = new Taf.Vector(new HUYA.MeetingSeat);
    this.iVersion = 0;
    this.sMessage = ""
}
;
HUYA.LiveMeetingSyncNotice.prototype._clone = function() {
    return new HUYA.LiveMeetingSyncNotice
}
;
HUYA.LiveMeetingSyncNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LiveMeetingSyncNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LiveMeetingSyncNotice.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tStat);
    t.writeVector(1, this.vSeats);
    t.writeInt32(2, this.iVersion);
    t.writeString(3, this.sMessage)
}
;
HUYA.LiveMeetingSyncNotice.prototype.readFrom = function(t) {
    this.tStat = t.readStruct(0, false, this.tStat);
    this.vSeats = t.readVector(1, false, this.vSeats);
    this.iVersion = t.readInt32(2, false, this.iVersion);
    this.sMessage = t.readString(3, false, this.sMessage)
}
;
HUYA.MeetingStat = function() {
    this.lPresenterUid = 0;
    this.sPresenterNick = "";
    this.sPresenterAvatarUrl = "";
    this.mpContext = new Taf.Map(new Taf.STRING,new Taf.STRING);
    this.iVersion = 0;
    this.iCurAction = 0;
    this.sPassword = "";
    this.lSessionId = 0;
    this.vApplyList = new Taf.Vector(new HUYA.ApplyUser);
    this.iState = 0;
    this.iSilence = 0;
    this.iActiveTime = 0;
    this.iLastSyncTime = 0;
    this.mpUserSession = new Taf.Map(new Taf.INT64,new Taf.STRING);
    this.iBeginTime = 0;
    this.iPresenterGender = 0
}
;
HUYA.MeetingStat.prototype._clone = function() {
    return new HUYA.MeetingStat
}
;
HUYA.MeetingStat.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MeetingStat.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MeetingStat.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPresenterUid);
    t.writeString(1, this.sPresenterNick);
    t.writeString(2, this.sPresenterAvatarUrl);
    t.writeMap(4, this.mpContext);
    t.writeInt32(5, this.iVersion);
    t.writeInt32(6, this.iCurAction);
    t.writeString(7, this.sPassword);
    t.writeInt64(8, this.lSessionId);
    t.writeVector(9, this.vApplyList);
    t.writeInt32(10, this.iState);
    t.writeInt32(11, this.iSilence);
    t.writeInt32(12, this.iActiveTime);
    t.writeInt32(13, this.iLastSyncTime);
    t.writeMap(14, this.mpUserSession);
    t.writeInt32(15, this.iBeginTime);
    t.writeInt32(16, this.iPresenterGender)
}
;
HUYA.MeetingStat.prototype.readFrom = function(t) {
    this.lPresenterUid = t.readInt64(0, false, this.lPresenterUid);
    this.sPresenterNick = t.readString(1, false, this.sPresenterNick);
    this.sPresenterAvatarUrl = t.readString(2, false, this.sPresenterAvatarUrl);
    this.mpContext = t.readMap(4, false, this.mpContext);
    this.iVersion = t.readInt32(5, false, this.iVersion);
    this.iCurAction = t.readInt32(6, false, this.iCurAction);
    this.sPassword = t.readString(7, false, this.sPassword);
    this.lSessionId = t.readInt64(8, false, this.lSessionId);
    this.vApplyList = t.readVector(9, false, this.vApplyList);
    this.iState = t.readInt32(10, false, this.iState);
    this.iSilence = t.readInt32(11, false, this.iSilence);
    this.iActiveTime = t.readInt32(12, false, this.iActiveTime);
    this.iLastSyncTime = t.readInt32(13, false, this.iLastSyncTime);
    this.mpUserSession = t.readMap(14, false, this.mpUserSession);
    this.iBeginTime = t.readInt32(15, false, this.iBeginTime);
    this.iPresenterGender = t.readInt32(16, false, this.iPresenterGender)
}
;
HUYA.MeetingSeat = function() {
    this.mpContext = new Taf.Map(new Taf.STRING,new Taf.STRING);
    this.iPos = 0;
    this.iLocked = 0;
    this.lUid = 0;
    this.sNick = "";
    this.sAvatarUrl = "";
    this.iMute = 0;
    this.iVersion = 0;
    this.iCurAction = 0;
    this.iActiveTime = 0;
    this.iSilence = 0;
    this.iGender = 0;
    this.lOfferSeatTimeStamp = 0
}
;
HUYA.MeetingSeat.prototype._clone = function() {
    return new HUYA.MeetingSeat
}
;
HUYA.MeetingSeat.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MeetingSeat.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MeetingSeat.prototype.writeTo = function(t) {
    t.writeMap(0, this.mpContext);
    t.writeInt32(1, this.iPos);
    t.writeInt32(2, this.iLocked);
    t.writeInt64(3, this.lUid);
    t.writeString(4, this.sNick);
    t.writeString(5, this.sAvatarUrl);
    t.writeInt32(7, this.iMute);
    t.writeInt32(8, this.iVersion);
    t.writeInt32(9, this.iCurAction);
    t.writeInt32(10, this.iActiveTime);
    t.writeInt32(11, this.iSilence);
    t.writeInt32(12, this.iGender);
    t.writeInt64(13, this.lOfferSeatTimeStamp)
}
;
HUYA.MeetingSeat.prototype.readFrom = function(t) {
    this.mpContext = t.readMap(0, false, this.mpContext);
    this.iPos = t.readInt32(1, false, this.iPos);
    this.iLocked = t.readInt32(2, false, this.iLocked);
    this.lUid = t.readInt64(3, false, this.lUid);
    this.sNick = t.readString(4, false, this.sNick);
    this.sAvatarUrl = t.readString(5, false, this.sAvatarUrl);
    this.iMute = t.readInt32(7, false, this.iMute);
    this.iVersion = t.readInt32(8, false, this.iVersion);
    this.iCurAction = t.readInt32(9, false, this.iCurAction);
    this.iActiveTime = t.readInt32(10, false, this.iActiveTime);
    this.iSilence = t.readInt32(11, false, this.iSilence);
    this.iGender = t.readInt32(12, false, this.iGender);
    this.lOfferSeatTimeStamp = t.readInt64(13, false, this.lOfferSeatTimeStamp)
}
;
HUYA.ApplyUser = function() {
    this.lUid = 0;
    this.sNick = "";
    this.sAvatarUrl = "";
    this.lActiveTime = 0;
    this.mpContext = new Taf.Map(new Taf.STRING,new Taf.STRING);
    this.iGender = 0
}
;
HUYA.ApplyUser.prototype._clone = function() {
    return new HUYA.ApplyUser
}
;
HUYA.ApplyUser.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ApplyUser.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ApplyUser.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNick);
    t.writeString(2, this.sAvatarUrl);
    t.writeInt64(3, this.lActiveTime);
    t.writeMap(4, this.mpContext);
    t.writeInt32(5, this.iGender)
}
;
HUYA.ApplyUser.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNick = t.readString(1, false, this.sNick);
    this.sAvatarUrl = t.readString(2, false, this.sAvatarUrl);
    this.lActiveTime = t.readInt64(3, false, this.lActiveTime);
    this.mpContext = t.readMap(4, false, this.mpContext);
    this.iGender = t.readInt32(5, false, this.iGender)
}
;
HUYA.GetMeetingStatByUidReq = function() {
    this.tId = new HUYA.UserId;
    this.lUid = 0;
    this.lSessionId = 0
}
;
HUYA.GetMeetingStatByUidReq.prototype._clone = function() {
    return new HUYA.GetMeetingStatByUidReq
}
;
HUYA.GetMeetingStatByUidReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetMeetingStatByUidReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetMeetingStatByUidReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lUid);
    t.writeInt64(2, this.lSessionId)
}
;
HUYA.GetMeetingStatByUidReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lUid = t.readInt64(1, false, this.lUid);
    this.lSessionId = t.readInt64(2, false, this.lSessionId)
}
;
HUYA.GetMeetingStatByUidRsp = function() {
    this.sMessage = "";
    this.tStat = new HUYA.LiveMeetingSyncNotice
}
;
HUYA.GetMeetingStatByUidRsp.prototype._clone = function() {
    return new HUYA.GetMeetingStatByUidRsp
}
;
HUYA.GetMeetingStatByUidRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetMeetingStatByUidRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetMeetingStatByUidRsp.prototype.writeTo = function(t) {
    t.writeString(0, this.sMessage);
    t.writeStruct(1, this.tStat)
}
;
HUYA.GetMeetingStatByUidRsp.prototype.readFrom = function(t) {
    this.sMessage = t.readString(0, false, this.sMessage);
    this.tStat = t.readStruct(1, false, this.tStat)
}
;
HUYA.MakeFriendsPKInfo = function() {
    this.lPKSessionId = 0;
    this.lPid = 0;
    this.iStatus = 0;
    this.lStartTime = 0;
    this.lEndTime = 0;
    this.lRemainingSecond = 0;
    this.tTeam1 = new HUYA.MakeFriendsPKTeam;
    this.tTeam2 = new HUYA.MakeFriendsPKTeam
}
;
HUYA.MakeFriendsPKInfo.prototype._clone = function() {
    return new HUYA.MakeFriendsPKInfo
}
;
HUYA.MakeFriendsPKInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MakeFriendsPKInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MakeFriendsPKInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPKSessionId);
    t.writeInt64(1, this.lPid);
    t.writeInt32(2, this.iStatus);
    t.writeInt64(3, this.lStartTime);
    t.writeInt64(4, this.lEndTime);
    t.writeInt64(5, this.lRemainingSecond);
    t.writeStruct(6, this.tTeam1);
    t.writeStruct(7, this.tTeam2)
}
;
HUYA.MakeFriendsPKInfo.prototype.readFrom = function(t) {
    this.lPKSessionId = t.readInt64(0, false, this.lPKSessionId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.iStatus = t.readInt32(2, false, this.iStatus);
    this.lStartTime = t.readInt64(3, false, this.lStartTime);
    this.lEndTime = t.readInt64(4, false, this.lEndTime);
    this.lRemainingSecond = t.readInt64(5, false, this.lRemainingSecond);
    this.tTeam1 = t.readStruct(6, false, this.tTeam1);
    this.tTeam2 = t.readStruct(7, false, this.tTeam2)
}
;
HUYA.MakeFriendsPKTeam = function() {
    this.sTeamName = "";
    this.lScore = 0
}
;
HUYA.MakeFriendsPKTeam.prototype._clone = function() {
    return new HUYA.MakeFriendsPKTeam
}
;
HUYA.MakeFriendsPKTeam.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MakeFriendsPKTeam.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MakeFriendsPKTeam.prototype.writeTo = function(t) {
    t.writeString(0, this.sTeamName);
    t.writeInt64(1, this.lScore)
}
;
HUYA.MakeFriendsPKTeam.prototype.readFrom = function(t) {
    this.sTeamName = t.readString(0, false, this.sTeamName);
    this.lScore = t.readInt64(1, false, this.lScore)
}
;
HUYA.GetMakeFriendsPKInfoReq = function() {
    this.tId = new HUYA.UserId;
    this.lPid = 0
}
;
HUYA.GetMakeFriendsPKInfoReq.prototype._clone = function() {
    return new HUYA.GetMakeFriendsPKInfoReq
}
;
HUYA.GetMakeFriendsPKInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetMakeFriendsPKInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetMakeFriendsPKInfoReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lPid)
}
;
HUYA.GetMakeFriendsPKInfoReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lPid = t.readInt64(1, false, this.lPid)
}
;
HUYA.GetMakeFriendsPKInfoRsp = function() {
    this.sMessage = "";
    this.tPKInfo = new HUYA.MakeFriendsPKInfo
}
;
HUYA.GetMakeFriendsPKInfoRsp.prototype._clone = function() {
    return new HUYA.GetMakeFriendsPKInfoRsp
}
;
HUYA.GetMakeFriendsPKInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetMakeFriendsPKInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetMakeFriendsPKInfoRsp.prototype.writeTo = function(t) {
    t.writeString(0, this.sMessage);
    t.writeStruct(1, this.tPKInfo)
}
;
HUYA.GetMakeFriendsPKInfoRsp.prototype.readFrom = function(t) {
    this.sMessage = t.readString(0, false, this.sMessage);
    this.tPKInfo = t.readStruct(1, false, this.tPKInfo)
}
;
HUYA.LiveRoomTransferNotice = function() {
    this.tNotice = new HUYA.BeginLiveNotice;
    this.tStreamSettingNotice = new HUYA.StreamSettingNotice
}
;
HUYA.LiveRoomTransferNotice.prototype._clone = function() {
    return new HUYA.LiveRoomTransferNotice
}
;
HUYA.LiveRoomTransferNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LiveRoomTransferNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LiveRoomTransferNotice.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tNotice);
    t.writeStruct(1, this.tStreamSettingNotice)
}
;
HUYA.LiveRoomTransferNotice.prototype.readFrom = function(t) {
    this.tNotice = t.readStruct(0, false, this.tNotice);
    this.tStreamSettingNotice = t.readStruct(1, false, this.tStreamSettingNotice)
}
;
HUYA.GetMakeFriendsAnnouncementReq = function() {
    this.tId = new HUYA.UserId;
    this.lUid = 0
}
;
HUYA.GetMakeFriendsAnnouncementReq.prototype._clone = function() {
    return new HUYA.GetMakeFriendsAnnouncementReq
}
;
HUYA.GetMakeFriendsAnnouncementReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetMakeFriendsAnnouncementReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetMakeFriendsAnnouncementReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lUid)
}
;
HUYA.GetMakeFriendsAnnouncementReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lUid = t.readInt64(1, false, this.lUid)
}
;
HUYA.GetMakeFriendsAnnouncementRsp = function() {
    this.sMessage = "";
    this.sAnnouncement = ""
}
;
HUYA.GetMakeFriendsAnnouncementRsp.prototype._clone = function() {
    return new HUYA.GetMakeFriendsAnnouncementRsp
}
;
HUYA.GetMakeFriendsAnnouncementRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetMakeFriendsAnnouncementRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetMakeFriendsAnnouncementRsp.prototype.writeTo = function(t) {
    t.writeString(0, this.sMessage);
    t.writeString(1, this.sAnnouncement)
}
;
HUYA.GetMakeFriendsAnnouncementRsp.prototype.readFrom = function(t) {
    this.sMessage = t.readString(0, false, this.sMessage);
    this.sAnnouncement = t.readString(1, false, this.sAnnouncement)
}
;
HUYA.GuildCard = function() {
    this.lGuildId = 0;
    this.lUid = 0;
    this.iPos = 0;
    this.sUrl = ""
}
;
HUYA.GuildCard.prototype._clone = function() {
    return new HUYA.GuildCard
}
;
HUYA.GuildCard.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GuildCard.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GuildCard.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lGuildId);
    t.writeInt64(1, this.lUid);
    t.writeInt32(2, this.iPos);
    t.writeString(3, this.sUrl)
}
;
HUYA.GuildCard.prototype.readFrom = function(t) {
    this.lGuildId = t.readInt64(0, false, this.lGuildId);
    this.lUid = t.readInt64(1, false, this.lUid);
    this.iPos = t.readInt32(2, false, this.iPos);
    this.sUrl = t.readString(3, false, this.sUrl)
}
;
HUYA.GetPresenterMomentFeedReq = function() {
    this.tId = new HUYA.UserId;
    this.lPid = 0;
    this.iFreeFlag = 0
}
;
HUYA.GetPresenterMomentFeedReq.prototype._clone = function() {
    return new HUYA.GetPresenterMomentFeedReq
}
;
HUYA.GetPresenterMomentFeedReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetPresenterMomentFeedReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetPresenterMomentFeedReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lPid);
    t.writeInt32(2, this.iFreeFlag)
}
;
HUYA.GetPresenterMomentFeedReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.iFreeFlag = t.readInt32(2, false, this.iFreeFlag)
}
;
HUYA.GetPresenterMomentFeedRsp = function() {
    this.tMoment = new HUYA.MomentInfo
}
;
HUYA.GetPresenterMomentFeedRsp.prototype._clone = function() {
    return new HUYA.GetPresenterMomentFeedRsp
}
;
HUYA.GetPresenterMomentFeedRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetPresenterMomentFeedRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetPresenterMomentFeedRsp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tMoment)
}
;
HUYA.GetPresenterMomentFeedRsp.prototype.readFrom = function(t) {
    this.tMoment = t.readStruct(0, false, this.tMoment)
}
;
HUYA.MomentInfo = function() {
    this.lMomId = 0;
    this.iType = 0;
    this.lUid = 0;
    this.sNickName = "";
    this.sIconUrl = "";
    this.sTitle = "";
    this.sContent = "";
    this.iFavorCount = 0;
    this.iCommentCount = 0;
    this.iShareCount = 0;
    this.vComment = new Taf.Vector(new HUYA.CommentInfo);
    this.iCTime = 0;
    this.iStatus = 0;
    this.iOpt = 0;
    this.tVideoInfo = new HUYA.VideoInfo;
    this.vKeyWord = new Taf.Vector(new Taf.STRING);
    this.iHasDraw = 0;
    this.vCoverUrl = new Taf.Vector(new Taf.STRING);
    this.sHtmlDoc = "";
    this.vTags = new Taf.Vector(new Taf.STRING);
    this.vBelongPlate = new Taf.Vector(new Taf.STRING);
    this.iBrowseCount = 0;
    this.iCardType = 0;
    this.vMomentAttachment = new Taf.Vector(new HUYA.MomentAttachment)
}
;
HUYA.MomentInfo.prototype._clone = function() {
    return new HUYA.MomentInfo
}
;
HUYA.MomentInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MomentInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MomentInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lMomId);
    t.writeInt32(1, this.iType);
    t.writeInt64(2, this.lUid);
    t.writeString(3, this.sNickName);
    t.writeString(4, this.sIconUrl);
    t.writeString(5, this.sTitle);
    t.writeString(6, this.sContent);
    t.writeInt32(7, this.iFavorCount);
    t.writeInt32(8, this.iCommentCount);
    t.writeInt32(9, this.iShareCount);
    t.writeVector(10, this.vComment);
    t.writeInt32(11, this.iCTime);
    t.writeInt32(12, this.iStatus);
    t.writeInt32(13, this.iOpt);
    t.writeStruct(14, this.tVideoInfo);
    t.writeVector(15, this.vKeyWord);
    t.writeInt32(16, this.iHasDraw);
    t.writeVector(17, this.vCoverUrl);
    t.writeString(18, this.sHtmlDoc);
    t.writeVector(19, this.vTags);
    t.writeVector(20, this.vBelongPlate);
    t.writeInt32(21, this.iBrowseCount);
    t.writeInt32(22, this.iCardType);
    t.writeVector(23, this.vMomentAttachment)
}
;
HUYA.MomentInfo.prototype.readFrom = function(t) {
    this.lMomId = t.readInt64(0, false, this.lMomId);
    this.iType = t.readInt32(1, false, this.iType);
    this.lUid = t.readInt64(2, false, this.lUid);
    this.sNickName = t.readString(3, false, this.sNickName);
    this.sIconUrl = t.readString(4, false, this.sIconUrl);
    this.sTitle = t.readString(5, false, this.sTitle);
    this.sContent = t.readString(6, false, this.sContent);
    this.iFavorCount = t.readInt32(7, false, this.iFavorCount);
    this.iCommentCount = t.readInt32(8, false, this.iCommentCount);
    this.iShareCount = t.readInt32(9, false, this.iShareCount);
    this.vComment = t.readVector(10, false, this.vComment);
    this.iCTime = t.readInt32(11, false, this.iCTime);
    this.iStatus = t.readInt32(12, false, this.iStatus);
    this.iOpt = t.readInt32(13, false, this.iOpt);
    this.tVideoInfo = t.readStruct(14, false, this.tVideoInfo);
    this.vKeyWord = t.readVector(15, false, this.vKeyWord);
    this.iHasDraw = t.readInt32(16, false, this.iHasDraw);
    this.vCoverUrl = t.readVector(17, false, this.vCoverUrl);
    this.sHtmlDoc = t.readString(18, false, this.sHtmlDoc);
    this.vTags = t.readVector(19, false, this.vTags);
    this.vBelongPlate = t.readVector(20, false, this.vBelongPlate);
    this.iBrowseCount = t.readInt32(21, false, this.iBrowseCount);
    this.iCardType = t.readInt32(22, false, this.iCardType);
    this.vMomentAttachment = t.readVector(23, false, this.vMomentAttachment)
}
;
HUYA.VideoInfo = function() {
    this.lUid = 0;
    this.sAvatarUrl = "";
    this.sNickName = "";
    this.lVid = 0;
    this.sVideoTitle = "";
    this.sVideoCover = "";
    this.lVideoPlayNum = 0;
    this.lVideoCommentNum = 0;
    this.sVideoDuration = "";
    this.sVideoUrl = "";
    this.sVideoUploadTime = "";
    this.sVideoChannel = "";
    this.sCategory = "";
    this.vDefinitions = new Taf.Vector(new HUYA.VideoDefinition);
    this.iVideoRecommend = 0;
    this.bVideoDot = true;
    this.lVideoRank = 0;
    this.bVideoHasRanked = true;
    this.sTraceId = "";
    this.lActorUid = 0;
    this.sActorNick = "";
    this.sActorAvatarUrl = "";
    this.iExtPlayTimes = 0;
    this.sVideoBigCover = "";
    this.iCommentCount = 0;
    this.vTags = new Taf.Vector(new Taf.STRING);
    this.iVideoDirection = 0;
    this.sBriefIntroduction = "";
    this.iVideoType = 0;
    this.iFavorCount = 0;
    this.lMomId = 0
}
;
HUYA.VideoInfo.prototype._clone = function() {
    return new HUYA.VideoInfo
}
;
HUYA.VideoInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.VideoInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.VideoInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sAvatarUrl);
    t.writeString(2, this.sNickName);
    t.writeInt64(3, this.lVid);
    t.writeString(4, this.sVideoTitle);
    t.writeString(5, this.sVideoCover);
    t.writeInt64(6, this.lVideoPlayNum);
    t.writeInt64(7, this.lVideoCommentNum);
    t.writeString(8, this.sVideoDuration);
    t.writeString(9, this.sVideoUrl);
    t.writeString(10, this.sVideoUploadTime);
    t.writeString(11, this.sVideoChannel);
    t.writeString(12, this.sCategory);
    t.writeVector(13, this.vDefinitions);
    t.writeInt32(14, this.iVideoRecommend);
    t.writeBoolean(15, this.bVideoDot);
    t.writeInt64(16, this.lVideoRank);
    t.writeBoolean(17, this.bVideoHasRanked);
    t.writeString(18, this.sTraceId);
    t.writeInt64(19, this.lActorUid);
    t.writeString(20, this.sActorNick);
    t.writeString(21, this.sActorAvatarUrl);
    t.writeInt32(22, this.iExtPlayTimes);
    t.writeString(23, this.sVideoBigCover);
    t.writeInt32(24, this.iCommentCount);
    t.writeVector(25, this.vTags);
    t.writeInt32(26, this.iVideoDirection);
    t.writeString(27, this.sBriefIntroduction);
    t.writeInt32(28, this.iVideoType);
    t.writeInt32(29, this.iFavorCount);
    t.writeInt64(30, this.lMomId)
}
;
HUYA.VideoInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sAvatarUrl = t.readString(1, false, this.sAvatarUrl);
    this.sNickName = t.readString(2, false, this.sNickName);
    this.lVid = t.readInt64(3, false, this.lVid);
    this.sVideoTitle = t.readString(4, false, this.sVideoTitle);
    this.sVideoCover = t.readString(5, false, this.sVideoCover);
    this.lVideoPlayNum = t.readInt64(6, false, this.lVideoPlayNum);
    this.lVideoCommentNum = t.readInt64(7, false, this.lVideoCommentNum);
    this.sVideoDuration = t.readString(8, false, this.sVideoDuration);
    this.sVideoUrl = t.readString(9, false, this.sVideoUrl);
    this.sVideoUploadTime = t.readString(10, false, this.sVideoUploadTime);
    this.sVideoChannel = t.readString(11, false, this.sVideoChannel);
    this.sCategory = t.readString(12, false, this.sCategory);
    this.vDefinitions = t.readVector(13, false, this.vDefinitions);
    this.iVideoRecommend = t.readInt32(14, false, this.iVideoRecommend);
    this.bVideoDot = t.readBoolean(15, false, this.bVideoDot);
    this.lVideoRank = t.readInt64(16, false, this.lVideoRank);
    this.bVideoHasRanked = t.readBoolean(17, false, this.bVideoHasRanked);
    this.sTraceId = t.readString(18, false, this.sTraceId);
    this.lActorUid = t.readInt64(19, false, this.lActorUid);
    this.sActorNick = t.readString(20, false, this.sActorNick);
    this.sActorAvatarUrl = t.readString(21, false, this.sActorAvatarUrl);
    this.iExtPlayTimes = t.readInt32(22, false, this.iExtPlayTimes);
    this.sVideoBigCover = t.readString(23, false, this.sVideoBigCover);
    this.iCommentCount = t.readInt32(24, false, this.iCommentCount);
    this.vTags = t.readVector(25, false, this.vTags);
    this.iVideoDirection = t.readInt32(26, false, this.iVideoDirection);
    this.sBriefIntroduction = t.readString(27, false, this.sBriefIntroduction);
    this.iVideoType = t.readInt32(28, false, this.iVideoType);
    this.iFavorCount = t.readInt32(29, false, this.iFavorCount);
    this.lMomId = t.readInt64(30, false, this.lMomId)
}
;
HUYA.VideoDefinition = function() {
    this.sSize = "";
    this.sWidth = "";
    this.sHeight = "";
    this.sDefinition = "";
    this.sUrl = "";
    this.sM3u8 = "";
    this.sDefName = ""
}
;
HUYA.VideoDefinition.prototype._clone = function() {
    return new HUYA.VideoDefinition
}
;
HUYA.VideoDefinition.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.VideoDefinition.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.VideoDefinition.prototype.writeTo = function(t) {
    t.writeString(0, this.sSize);
    t.writeString(1, this.sWidth);
    t.writeString(2, this.sHeight);
    t.writeString(3, this.sDefinition);
    t.writeString(4, this.sUrl);
    t.writeString(5, this.sM3u8);
    t.writeString(6, this.sDefName)
}
;
HUYA.VideoDefinition.prototype.readFrom = function(t) {
    this.sSize = t.readString(0, false, this.sSize);
    this.sWidth = t.readString(1, false, this.sWidth);
    this.sHeight = t.readString(2, false, this.sHeight);
    this.sDefinition = t.readString(3, false, this.sDefinition);
    this.sUrl = t.readString(4, false, this.sUrl);
    this.sM3u8 = t.readString(5, false, this.sM3u8);
    this.sDefName = t.readString(6, false, this.sDefName)
}
;
HUYA.MomentAttachment = function() {
    this.iType = 0;
    this.sContent = "";
    this.sUrl = new Taf.Vector(new HUYA.MomentUrl);
    this.iDataType = 0;
    this.sData = new Taf.BinBuffer
}
;
HUYA.MomentAttachment.prototype._clone = function() {
    return new HUYA.MomentAttachment
}
;
HUYA.MomentAttachment.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MomentAttachment.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MomentAttachment.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iType);
    t.writeString(1, this.sContent);
    t.writeVector(2, this.sUrl);
    t.writeInt32(3, this.iDataType);
    t.writeBytes(4, this.sData)
}
;
HUYA.MomentAttachment.prototype.readFrom = function(t) {
    this.iType = t.readInt32(0, false, this.iType);
    this.sContent = t.readString(1, false, this.sContent);
    this.sUrl = t.readVector(2, false, this.sUrl);
    this.iDataType = t.readInt32(3, false, this.iDataType);
    this.sData = t.readBytes(4, false, this.sData)
}
;
HUYA.MomentUrl = function() {
    this.sCover = "";
    this.sUrl = "";
    this.iDirection = 0;
    this.iDuration = 0
}
;
HUYA.MomentUrl.prototype._clone = function() {
    return new HUYA.MomentUrl
}
;
HUYA.MomentUrl.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MomentUrl.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MomentUrl.prototype.writeTo = function(t) {
    t.writeString(0, this.sCover);
    t.writeString(1, this.sUrl);
    t.writeInt32(2, this.iDirection);
    t.writeInt32(3, this.iDuration)
}
;
HUYA.MomentUrl.prototype.readFrom = function(t) {
    this.sCover = t.readString(0, false, this.sCover);
    this.sUrl = t.readString(1, false, this.sUrl);
    this.iDirection = t.readInt32(2, false, this.iDirection);
    this.iDuration = t.readInt32(3, false, this.iDuration)
}
;
HUYA.ActivityDIYReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lPid = 0;
    this.lTid = 0;
    this.lSid = 0;
    this.lRoomId = 0;
    this.iGameId = 0
}
;
HUYA.ActivityDIYReq.prototype._clone = function() {
    return new HUYA.ActivityDIYReq
}
;
HUYA.ActivityDIYReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ActivityDIYReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ActivityDIYReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lPid);
    t.writeInt64(2, this.lTid);
    t.writeInt64(3, this.lSid);
    t.writeInt64(4, this.lRoomId);
    t.writeInt32(5, this.iGameId)
}
;
HUYA.ActivityDIYReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.lTid = t.readInt64(2, false, this.lTid);
    this.lSid = t.readInt64(3, false, this.lSid);
    this.lRoomId = t.readInt64(4, false, this.lRoomId);
    this.iGameId = t.readInt32(5, false, this.iGameId)
}
;
HUYA.ActivityDIYInfo = function() {
    this.sActName = "";
    this.sEnterIcon = "";
    this.sEnterName = "";
    this.iWeight = 0;
    this.sBubbleTips = ""
}
;
HUYA.ActivityDIYInfo.prototype._clone = function() {
    return new HUYA.ActivityDIYInfo
}
;
HUYA.ActivityDIYInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ActivityDIYInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ActivityDIYInfo.prototype.writeTo = function(t) {
    t.writeString(0, this.sActName);
    t.writeString(1, this.sEnterIcon);
    t.writeString(2, this.sEnterName);
    t.writeInt32(3, this.iWeight);
    t.writeString(4, this.sBubbleTips)
}
;
HUYA.ActivityDIYInfo.prototype.readFrom = function(t) {
    this.sActName = t.readString(0, false, this.sActName);
    this.sEnterIcon = t.readString(1, false, this.sEnterIcon);
    this.sEnterName = t.readString(2, false, this.sEnterName);
    this.iWeight = t.readInt32(3, false, this.iWeight);
    this.sBubbleTips = t.readString(4, false, this.sBubbleTips)
}
;
HUYA.WebIssueConfig = function() {
    this.iSatus = 0;
    this.iIconPage = 0;
    this.sNativeUrl = "";
    this.iPos = 0;
    this.iHeight = 0;
    this.iWidth = 0;
    this.sJumpUrl = ""
}
;
HUYA.WebIssueConfig.prototype._clone = function() {
    return new HUYA.WebIssueConfig
}
;
HUYA.WebIssueConfig.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WebIssueConfig.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WebIssueConfig.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iSatus);
    t.writeInt32(1, this.iIconPage);
    t.writeString(2, this.sNativeUrl);
    t.writeInt32(3, this.iPos);
    t.writeInt32(4, this.iHeight);
    t.writeInt32(5, this.iWidth);
    t.writeString(6, this.sJumpUrl)
}
;
HUYA.WebIssueConfig.prototype.readFrom = function(t) {
    this.iSatus = t.readInt32(0, false, this.iSatus);
    this.iIconPage = t.readInt32(1, false, this.iIconPage);
    this.sNativeUrl = t.readString(2, false, this.sNativeUrl);
    this.iPos = t.readInt32(3, false, this.iPos);
    this.iHeight = t.readInt32(4, false, this.iHeight);
    this.iWidth = t.readInt32(5, false, this.iWidth);
    this.sJumpUrl = t.readString(6, false, this.sJumpUrl)
}
;
HUYA.PCIssueConfig = function() {
    this.iSatus = 0;
    this.iIconPage = 0;
    this.vCommUrl = new Taf.Vector(new Taf.STRING);
    this.sJumpUrl = "";
    this.sHash = "";
    this.iRankId = 0
}
;
HUYA.PCIssueConfig.prototype._clone = function() {
    return new HUYA.PCIssueConfig
}
;
HUYA.PCIssueConfig.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PCIssueConfig.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PCIssueConfig.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iSatus);
    t.writeInt32(1, this.iIconPage);
    t.writeVector(2, this.vCommUrl);
    t.writeString(3, this.sJumpUrl);
    t.writeString(4, this.sHash);
    t.writeInt32(5, this.iRankId)
}
;
HUYA.PCIssueConfig.prototype.readFrom = function(t) {
    this.iSatus = t.readInt32(0, false, this.iSatus);
    this.iIconPage = t.readInt32(1, false, this.iIconPage);
    this.vCommUrl = t.readVector(2, false, this.vCommUrl);
    this.sJumpUrl = t.readString(3, false, this.sJumpUrl);
    this.sHash = t.readString(4, false, this.sHash);
    this.iRankId = t.readInt32(5, false, this.iRankId)
}
;
HUYA.ActIssueItem = function() {
    this.tInfo = new HUYA.ActivityDIYInfo;
    this.tWebCfg = new HUYA.WebIssueConfig;
    this.tPCCfg = new HUYA.PCIssueConfig
}
;
HUYA.ActIssueItem.prototype._clone = function() {
    return new HUYA.ActIssueItem
}
;
HUYA.ActIssueItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ActIssueItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ActIssueItem.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tInfo);
    t.writeStruct(1, this.tWebCfg);
    t.writeStruct(2, this.tPCCfg)
}
;
HUYA.ActIssueItem.prototype.readFrom = function(t) {
    this.tInfo = t.readStruct(0, false, this.tInfo);
    this.tWebCfg = t.readStruct(1, false, this.tWebCfg);
    this.tPCCfg = t.readStruct(2, false, this.tPCCfg)
}
;
HUYA.ActivityDIYRsp = function() {
    this.vActList = new Taf.Vector(new HUYA.ActIssueItem)
}
;
HUYA.ActivityDIYRsp.prototype._clone = function() {
    return new HUYA.ActivityDIYRsp
}
;
HUYA.ActivityDIYRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ActivityDIYRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ActivityDIYRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vActList)
}
;
HUYA.ActivityDIYRsp.prototype.readFrom = function(t) {
    this.vActList = t.readVector(0, false, this.vActList)
}
;
var HYUDB = HYUDB || {};
HYUDB.UnionAuthPushMsg = function() {
    this.version = 0;
    this.authUrl = ""
}
;
HYUDB.UnionAuthPushMsg.prototype._clone = function() {
    return new HYUDB.UnionAuthPushMsg
}
;
HYUDB.UnionAuthPushMsg.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HYUDB.UnionAuthPushMsg.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HYUDB.UnionAuthPushMsg.prototype.writeTo = function(t) {
    t.writeInt32(0, this.version);
    t.writeString(1, this.authUrl)
}
;
HYUDB.UnionAuthPushMsg.prototype.readFrom = function(t) {
    this.version = t.readInt32(0, true, this.version);
    this.authUrl = t.readString(1, true, this.authUrl)
}
;
HUYA.GetPresenterAdReq = function() {
    this.tId = new HUYA.UserId;
    this.lPid = 0
}
;
HUYA.GetPresenterAdReq.prototype._clone = function() {
    return new HUYA.GetPresenterAdReq
}
;
HUYA.GetPresenterAdReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetPresenterAdReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetPresenterAdReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lPid)
}
;
HUYA.GetPresenterAdReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lPid = t.readInt64(1, false, this.lPid)
}
;
HUYA.GetPresenterAdRsp = function() {
    this.code = 0;
    this.message = "";
    this.data = new Taf.Vector(new HUYA.PresenterAd);
    this.adStatus = new HUYA.AdStatus;
    this.aiAd = new Taf.Vector(new HUYA.PresenterAd);
    this.turnAd = new Taf.Vector(new HUYA.CarouselAd);
    this.flag = true
}
;
HUYA.GetPresenterAdRsp.prototype._clone = function() {
    return new HUYA.GetPresenterAdRsp
}
;
HUYA.GetPresenterAdRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetPresenterAdRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetPresenterAdRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.code);
    t.writeString(1, this.message);
    t.writeVector(2, this.data);
    t.writeStruct(3, this.adStatus);
    t.writeVector(4, this.aiAd);
    t.writeVector(5, this.turnAd);
    t.writeBoolean(6, this.flag)
}
;
HUYA.GetPresenterAdRsp.prototype.readFrom = function(t) {
    this.code = t.readInt32(0, false, this.code);
    this.message = t.readString(1, false, this.message);
    this.data = t.readVector(2, false, this.data);
    this.adStatus = t.readStruct(3, false, this.adStatus);
    this.aiAd = t.readVector(4, false, this.aiAd);
    this.turnAd = t.readVector(5, false, this.turnAd);
    this.flag = t.readBoolean(6, false, this.flag)
}
;
HUYA.PresenterAd = function() {
    this.id = "";
    this.sdkConf = "";
    this.title = "";
    this.platform = "";
    this.uid = 0;
    this.startDate = "";
    this.endDate = "";
    this.timeRange = "";
    this.frequency = 0;
    this.material = new HUYA.Material;
    this.weight = 0;
    this.iPushTime = 0;
    this.contractType = 0;
    this.releaseTime = 0;
    this.adStatusTime = 0;
    this.thirdImpUrl = new Taf.Vector(new Taf.STRING);
    this.thirdClickUrl = new Taf.Vector(new Taf.STRING);
    this.closeButtonAppear = 0
}
;
HUYA.PresenterAd.prototype._clone = function() {
    return new HUYA.PresenterAd
}
;
HUYA.PresenterAd.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterAd.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterAd.prototype.writeTo = function(t) {
    t.writeString(0, this.id);
    t.writeString(1, this.sdkConf);
    t.writeString(2, this.title);
    t.writeString(3, this.platform);
    t.writeInt64(4, this.uid);
    t.writeString(5, this.startDate);
    t.writeString(6, this.endDate);
    t.writeString(7, this.timeRange);
    t.writeInt32(8, this.frequency);
    t.writeStruct(9, this.material);
    t.writeInt32(10, this.weight);
    t.writeInt32(11, this.iPushTime);
    t.writeInt32(12, this.contractType);
    t.writeInt64(13, this.releaseTime);
    t.writeInt32(14, this.adStatusTime);
    t.writeVector(17, this.thirdImpUrl);
    t.writeVector(18, this.thirdClickUrl);
    t.writeInt32(19, this.closeButtonAppear)
}
;
HUYA.PresenterAd.prototype.readFrom = function(t) {
    this.id = t.readString(0, false, this.id);
    this.sdkConf = t.readString(1, false, this.sdkConf);
    this.title = t.readString(2, false, this.title);
    this.platform = t.readString(3, false, this.platform);
    this.uid = t.readInt64(4, false, this.uid);
    this.startDate = t.readString(5, false, this.startDate);
    this.endDate = t.readString(6, false, this.endDate);
    this.timeRange = t.readString(7, false, this.timeRange);
    this.frequency = t.readInt32(8, false, this.frequency);
    this.material = t.readStruct(9, false, this.material);
    this.weight = t.readInt32(10, false, this.weight);
    this.iPushTime = t.readInt32(11, false, this.iPushTime);
    this.contractType = t.readInt32(12, false, this.contractType);
    this.releaseTime = t.readInt64(13, false, this.releaseTime);
    this.adStatusTime = t.readInt32(14, false, this.adStatusTime);
    this.thirdImpUrl = t.readVector(17, false, this.thirdImpUrl);
    this.thirdClickUrl = t.readVector(18, false, this.thirdClickUrl);
    this.closeButtonAppear = t.readInt32(19, false, this.closeButtonAppear)
}
;
HUYA.Material = function() {
    this.mid = "";
    this.pType = 0;
    this.adType = 0;
    this.imageUrl = "";
    this.videoUrl = "";
    this.adTitle = "";
    this.ardLandingUrl = "";
    this.iosLandingUrl = "";
    this.webLandingUrl = "";
    this.remark = "";
    this.showTime = 0;
    this.landingUrl = "";
    this.layout = new HUYA.AdLayout
}
;
HUYA.Material.prototype._clone = function() {
    return new HUYA.Material
}
;
HUYA.Material.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.Material.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.Material.prototype.writeTo = function(t) {
    t.writeString(0, this.mid);
    t.writeInt32(1, this.pType);
    t.writeInt32(2, this.adType);
    t.writeString(3, this.imageUrl);
    t.writeString(4, this.videoUrl);
    t.writeString(5, this.adTitle);
    t.writeString(6, this.ardLandingUrl);
    t.writeString(7, this.iosLandingUrl);
    t.writeString(8, this.webLandingUrl);
    t.writeString(9, this.remark);
    t.writeInt32(10, this.showTime);
    t.writeString(11, this.landingUrl);
    t.writeStruct(12, this.layout)
}
;
HUYA.Material.prototype.readFrom = function(t) {
    this.mid = t.readString(0, false, this.mid);
    this.pType = t.readInt32(1, false, this.pType);
    this.adType = t.readInt32(2, false, this.adType);
    this.imageUrl = t.readString(3, false, this.imageUrl);
    this.videoUrl = t.readString(4, false, this.videoUrl);
    this.adTitle = t.readString(5, false, this.adTitle);
    this.ardLandingUrl = t.readString(6, false, this.ardLandingUrl);
    this.iosLandingUrl = t.readString(7, false, this.iosLandingUrl);
    this.webLandingUrl = t.readString(8, false, this.webLandingUrl);
    this.remark = t.readString(9, false, this.remark);
    this.showTime = t.readInt32(10, false, this.showTime);
    this.landingUrl = t.readString(11, false, this.landingUrl);
    this.layout = t.readStruct(12, false, this.layout)
}
;
HUYA.AdLayout = function() {
    this.layoutType = 0;
    this.templateW = 0;
    this.templateH = 0;
    this.ratioW = 0;
    this.ratioH = 0;
    this.width = 0;
    this.height = 0
}
;
HUYA.AdLayout.prototype._clone = function() {
    return new HUYA.AdLayout
}
;
HUYA.AdLayout.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.AdLayout.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.AdLayout.prototype.writeTo = function(t) {
    t.writeInt32(0, this.layoutType);
    t.writeInt32(1, this.templateW);
    t.writeInt32(2, this.templateH);
    t.writeDouble(3, this.ratioW);
    t.writeDouble(4, this.ratioH);
    t.writeInt32(5, this.width);
    t.writeInt32(6, this.height)
}
;
HUYA.AdLayout.prototype.readFrom = function(t) {
    this.layoutType = t.readInt32(0, false, this.layoutType);
    this.templateW = t.readInt32(1, false, this.templateW);
    this.templateH = t.readInt32(2, false, this.templateH);
    this.ratioW = t.readDouble(3, false, this.ratioW);
    this.ratioH = t.readDouble(4, false, this.ratioH);
    this.width = t.readInt32(5, false, this.width);
    this.height = t.readInt32(6, false, this.height)
}
;
HUYA.PushPresenterAdNotice = function() {
    this.ad = new HUYA.PresenterAd;
    this.lTime = 0;
    this.lPid = 0;
    this.tRAd = new HUYA.RoundlAd;
    this.iType = 0
}
;
HUYA.PushPresenterAdNotice.prototype._clone = function() {
    return new HUYA.PushPresenterAdNotice
}
;
HUYA.PushPresenterAdNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PushPresenterAdNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PushPresenterAdNotice.prototype.writeTo = function(t) {
    t.writeStruct(0, this.ad);
    t.writeInt64(1, this.lTime);
    t.writeInt64(2, this.lPid);
    t.writeStruct(3, this.tRAd);
    t.writeInt32(4, this.iType)
}
;
HUYA.PushPresenterAdNotice.prototype.readFrom = function(t) {
    this.ad = t.readStruct(0, false, this.ad);
    this.lTime = t.readInt64(1, false, this.lTime);
    this.lPid = t.readInt64(2, false, this.lPid);
    this.tRAd = t.readStruct(3, false, this.tRAd);
    this.iType = t.readInt32(4, false, this.iType)
}
;
HUYA.AdStatus = function() {
    this.id = "";
    this.lastTime = 0
}
;
HUYA.AdStatus.prototype._clone = function() {
    return new HUYA.AdStatus
}
;
HUYA.AdStatus.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.AdStatus.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.AdStatus.prototype.writeTo = function(t) {
    t.writeString(0, this.id);
    t.writeInt32(1, this.lastTime)
}
;
HUYA.AdStatus.prototype.readFrom = function(t) {
    this.id = t.readString(0, false, this.id);
    this.lastTime = t.readInt32(1, false, this.lastTime)
}
;
HUYA.CarouselAd = function() {
    this.id = 0;
    this.times = 0;
    this.closable = true;
    this.data = new Taf.Vector(new Taf.STRING)
}
;
HUYA.CarouselAd.prototype._clone = function() {
    return new HUYA.CarouselAd
}
;
HUYA.CarouselAd.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.CarouselAd.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.CarouselAd.prototype.writeTo = function(t) {
    t.writeInt64(0, this.id);
    t.writeInt32(1, this.times);
    t.writeBoolean(2, this.closable);
    t.writeVector(3, this.data)
}
;
HUYA.CarouselAd.prototype.readFrom = function(t) {
    this.id = t.readInt64(0, false, this.id);
    this.times = t.readInt32(1, false, this.times);
    this.closable = t.readBoolean(2, false, this.closable);
    this.data = t.readVector(3, false, this.data)
}
;
HUYA.RoundlAd = function() {
    this.id = 0;
    this.times = 0;
    this.closable = true;
    this.data = new Taf.Vector(new HUYA.PresenterAd)
}
;
HUYA.RoundlAd.prototype._clone = function() {
    return new HUYA.RoundlAd
}
;
HUYA.RoundlAd.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.RoundlAd.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.RoundlAd.prototype.writeTo = function(t) {
    t.writeInt64(0, this.id);
    t.writeInt32(1, this.times);
    t.writeBoolean(2, this.closable);
    t.writeVector(3, this.data)
}
;
HUYA.RoundlAd.prototype.readFrom = function(t) {
    this.id = t.readInt64(0, false, this.id);
    this.times = t.readInt32(1, false, this.times);
    this.closable = t.readBoolean(2, false, this.closable);
    this.data = t.readVector(3, false, this.data)
}
;
HUYA.GetExpressionEmoticonPackageReq = function() {
    this.tId = new HUYA.UserId;
    this.lPid = 0;
    this.iGid = 0
}
;
HUYA.GetExpressionEmoticonPackageReq.prototype._clone = function() {
    return new HUYA.GetExpressionEmoticonPackageReq
}
;
HUYA.GetExpressionEmoticonPackageReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetExpressionEmoticonPackageReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetExpressionEmoticonPackageReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lPid);
    t.writeInt32(2, this.iGid)
}
;
HUYA.GetExpressionEmoticonPackageReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.iGid = t.readInt32(2, false, this.iGid)
}
;
HUYA.GetExpressionEmoticonPackageRsp = function() {
    this.sMessage = "";
    this.vPackage = new Taf.Vector(new HUYA.ExpressionEmoticonPackage);
    this.vAvailable = new Taf.Vector(new Taf.STRING)
}
;
HUYA.GetExpressionEmoticonPackageRsp.prototype._clone = function() {
    return new HUYA.GetExpressionEmoticonPackageRsp
}
;
HUYA.GetExpressionEmoticonPackageRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetExpressionEmoticonPackageRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetExpressionEmoticonPackageRsp.prototype.writeTo = function(t) {
    t.writeString(0, this.sMessage);
    t.writeVector(1, this.vPackage);
    t.writeVector(2, this.vAvailable)
}
;
HUYA.GetExpressionEmoticonPackageRsp.prototype.readFrom = function(t) {
    this.sMessage = t.readString(0, false, this.sMessage);
    this.vPackage = t.readVector(1, false, this.vPackage);
    this.vAvailable = t.readVector(2, false, this.vAvailable)
}
;
HUYA.ExpressionEmoticonPackage = function() {
    this.sPackageId = "";
    this.sName = "";
    this.iType = 0;
    this.sCoverUrl = "";
    this.vEmoticon = new Taf.Vector(new HUYA.ExpressionEmoticon)
}
;
HUYA.ExpressionEmoticonPackage.prototype._clone = function() {
    return new HUYA.ExpressionEmoticonPackage
}
;
HUYA.ExpressionEmoticonPackage.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ExpressionEmoticonPackage.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ExpressionEmoticonPackage.prototype.writeTo = function(t) {
    t.writeString(0, this.sPackageId);
    t.writeString(1, this.sName);
    t.writeInt32(2, this.iType);
    t.writeString(3, this.sCoverUrl);
    t.writeVector(4, this.vEmoticon)
}
;
HUYA.ExpressionEmoticonPackage.prototype.readFrom = function(t) {
    this.sPackageId = t.readString(0, false, this.sPackageId);
    this.sName = t.readString(1, false, this.sName);
    this.iType = t.readInt32(2, false, this.iType);
    this.sCoverUrl = t.readString(3, false, this.sCoverUrl);
    this.vEmoticon = t.readVector(4, false, this.vEmoticon)
}
;
HUYA.ExpressionEmoticon = function() {
    this.sId = "";
    this.sName = "";
    this.sEscape = "";
    this.sUrl = "";
    this.sExtraUrl = "";
    this.iType = 0;
    this.iFrameSize = 0
}
;
HUYA.ExpressionEmoticon.prototype._clone = function() {
    return new HUYA.ExpressionEmoticon
}
;
HUYA.ExpressionEmoticon.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ExpressionEmoticon.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ExpressionEmoticon.prototype.writeTo = function(t) {
    t.writeString(0, this.sId);
    t.writeString(1, this.sName);
    t.writeString(2, this.sEscape);
    t.writeString(3, this.sUrl);
    t.writeString(4, this.sExtraUrl);
    t.writeInt32(5, this.iType);
    t.writeInt32(6, this.iFrameSize)
}
;
HUYA.ExpressionEmoticon.prototype.readFrom = function(t) {
    this.sId = t.readString(0, false, this.sId);
    this.sName = t.readString(1, false, this.sName);
    this.sEscape = t.readString(2, false, this.sEscape);
    this.sUrl = t.readString(3, false, this.sUrl);
    this.sExtraUrl = t.readString(4, false, this.sExtraUrl);
    this.iType = t.readInt32(5, false, this.iType);
    this.iFrameSize = t.readInt32(6, false, this.iFrameSize)
}
;
HUYA.SendExpressionEmoticonReq = function() {
    this.tId = new HUYA.UserId;
    this.lPid = 0;
    this.sEmoticonId = ""
}
;
HUYA.SendExpressionEmoticonReq.prototype._clone = function() {
    return new HUYA.SendExpressionEmoticonReq
}
;
HUYA.SendExpressionEmoticonReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SendExpressionEmoticonReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SendExpressionEmoticonReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lPid);
    t.writeString(2, this.sEmoticonId)
}
;
HUYA.SendExpressionEmoticonReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.sEmoticonId = t.readString(2, false, this.sEmoticonId)
}
;
HUYA.SendExpressionEmoticonRsp = function() {
    this.sMessage = "";
    this.tResult = new HUYA.ExpressionEmoticonNotice
}
;
HUYA.SendExpressionEmoticonRsp.prototype._clone = function() {
    return new HUYA.SendExpressionEmoticonRsp
}
;
HUYA.SendExpressionEmoticonRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SendExpressionEmoticonRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SendExpressionEmoticonRsp.prototype.writeTo = function(t) {
    t.writeString(0, this.sMessage);
    t.writeStruct(1, this.tResult)
}
;
HUYA.SendExpressionEmoticonRsp.prototype.readFrom = function(t) {
    this.sMessage = t.readString(0, false, this.sMessage);
    this.tResult = t.readStruct(1, false, this.tResult)
}
;
HUYA.ExpressionEmoticonNotice = function() {
    this.lPid = 0;
    this.tDecoration = new HUYA.DecorationInfoRsp;
    this.vEmoticon = new Taf.Vector(new HUYA.ExpressionEmoticonMsg)
}
;
HUYA.ExpressionEmoticonNotice.prototype._clone = function() {
    return new HUYA.ExpressionEmoticonNotice
}
;
HUYA.ExpressionEmoticonNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ExpressionEmoticonNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ExpressionEmoticonNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPid);
    t.writeStruct(1, this.tDecoration);
    t.writeVector(2, this.vEmoticon)
}
;
HUYA.ExpressionEmoticonNotice.prototype.readFrom = function(t) {
    this.lPid = t.readInt64(0, false, this.lPid);
    this.tDecoration = t.readStruct(1, false, this.tDecoration);
    this.vEmoticon = t.readVector(2, false, this.vEmoticon)
}
;
HUYA.ExpressionEmoticonMsg = function() {
    this.sEmoticonId = "";
    this.iFrameIdx = 0
}
;
HUYA.ExpressionEmoticonMsg.prototype._clone = function() {
    return new HUYA.ExpressionEmoticonMsg
}
;
HUYA.ExpressionEmoticonMsg.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ExpressionEmoticonMsg.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ExpressionEmoticonMsg.prototype.writeTo = function(t) {
    t.writeString(0, this.sEmoticonId);
    t.writeInt32(1, this.iFrameIdx)
}
;
HUYA.ExpressionEmoticonMsg.prototype.readFrom = function(t) {
    this.sEmoticonId = t.readString(0, false, this.sEmoticonId);
    this.iFrameIdx = t.readInt32(1, false, this.iFrameIdx)
}
;
HUYA.DecorationInfoRsp = function() {
    this.vDecorationPrefix = new Taf.Vector(new HUYA.DecorationInfo);
    this.vDecorationSuffix = new Taf.Vector(new HUYA.DecorationInfo);
    this.tFormat = new HUYA.ContentFormat;
    this.tBulletFormat = new HUYA.BulletFormat;
    this.vForwardChannels = new Taf.Vector(new HUYA.ChannelPair);
    this.iModifyMask = 0;
    this.vBulletPrefix = new Taf.Vector(new HUYA.DecorationInfo);
    this.tUserInfo = new HUYA.SenderInfo;
    this.vBulletSuffix = new Taf.Vector(new HUYA.DecorationInfo)
}
;
HUYA.DecorationInfoRsp.prototype._clone = function() {
    return new HUYA.DecorationInfoRsp
}
;
HUYA.DecorationInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.DecorationInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.DecorationInfoRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vDecorationPrefix);
    t.writeVector(1, this.vDecorationSuffix);
    t.writeStruct(2, this.tFormat);
    t.writeStruct(3, this.tBulletFormat);
    t.writeVector(4, this.vForwardChannels);
    t.writeInt32(5, this.iModifyMask);
    t.writeVector(6, this.vBulletPrefix);
    t.writeStruct(7, this.tUserInfo);
    t.writeVector(8, this.vBulletSuffix)
}
;
HUYA.DecorationInfoRsp.prototype.readFrom = function(t) {
    this.vDecorationPrefix = t.readVector(0, false, this.vDecorationPrefix);
    this.vDecorationSuffix = t.readVector(1, false, this.vDecorationSuffix);
    this.tFormat = t.readStruct(2, false, this.tFormat);
    this.tBulletFormat = t.readStruct(3, false, this.tBulletFormat);
    this.vForwardChannels = t.readVector(4, false, this.vForwardChannels);
    this.iModifyMask = t.readInt32(5, false, this.iModifyMask);
    this.vBulletPrefix = t.readVector(6, false, this.vBulletPrefix);
    this.tUserInfo = t.readStruct(7, false, this.tUserInfo);
    this.vBulletSuffix = t.readVector(8, false, this.vBulletSuffix)
}
;
HUYA.ChannelPair = function() {
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0
}
;
HUYA.ChannelPair.prototype._clone = function() {
    return new HUYA.ChannelPair
}
;
HUYA.ChannelPair.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ChannelPair.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ChannelPair.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lTid);
    t.writeInt64(1, this.lSid);
    t.writeInt64(2, this.lPid)
}
;
HUYA.ChannelPair.prototype.readFrom = function(t) {
    this.lTid = t.readInt64(0, false, this.lTid);
    this.lSid = t.readInt64(1, false, this.lSid);
    this.lPid = t.readInt64(2, false, this.lPid)
}
;
HUYA.MatchEndNotice = function() {
    this.lUid = 0;
    this.iRoomId = 0;
    this.iDelay = 0
}
;
HUYA.MatchEndNotice.prototype._clone = function() {
    return new HUYA.MatchEndNotice
}
;
HUYA.MatchEndNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MatchEndNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MatchEndNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.iRoomId);
    t.writeInt32(2, this.iDelay)
}
;
HUYA.MatchEndNotice.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.iRoomId = t.readInt64(1, false, this.iRoomId);
    this.iDelay = t.readInt32(2, false, this.iDelay)
}
;
HUYA.LiveShareRankReq = function() {
    this.tId = new HUYA.UserId;
    this.iGameId = 0;
    this.iPageNum = 0;
    this.iPageSize = 0;
    this.lHostUid = 0;
    this.vExposedPids = new Taf.Vector(new Taf.INT64);
    this.iFromType = 0
}
;
HUYA.LiveShareRankReq.prototype._clone = function() {
    return new HUYA.LiveShareRankReq
}
;
HUYA.LiveShareRankReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LiveShareRankReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LiveShareRankReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt32(1, this.iGameId);
    t.writeInt32(2, this.iPageNum);
    t.writeInt32(3, this.iPageSize);
    t.writeInt64(4, this.lHostUid);
    t.writeVector(5, this.vExposedPids);
    t.writeInt32(6, this.iFromType)
}
;
HUYA.LiveShareRankReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.iGameId = t.readInt32(1, false, this.iGameId);
    this.iPageNum = t.readInt32(2, false, this.iPageNum);
    this.iPageSize = t.readInt32(3, false, this.iPageSize);
    this.lHostUid = t.readInt64(4, false, this.lHostUid);
    this.vExposedPids = t.readVector(5, false, this.vExposedPids);
    this.iFromType = t.readInt32(6, false, this.iFromType)
}
;
HUYA.WBAudienceShareRsp = function() {
    this.vLives = new Taf.Vector(new HUYA.GameLiveDetail);
    this.mpPreview = new Taf.Map(new Taf.INT64,new Taf.STRING)
}
;
HUYA.WBAudienceShareRsp.prototype._clone = function() {
    return new HUYA.WBAudienceShareRsp
}
;
HUYA.WBAudienceShareRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WBAudienceShareRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WBAudienceShareRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vLives);
    t.writeMap(1, this.mpPreview)
}
;
HUYA.WBAudienceShareRsp.prototype.readFrom = function(t) {
    this.vLives = t.readVector(0, false, this.vLives);
    this.mpPreview = t.readMap(1, false, this.mpPreview)
}
;
HUYA.GameLiveDetail = function() {
    this.tGameLiveInfo = new HUYA.GameLiveInfo;
    this.tStreamInfoPack = new HUYA.StreamInfoPack;
    this.tGameLiveMisc = new HUYA.GameLiveMisc
}
;
HUYA.GameLiveDetail.prototype._clone = function() {
    return new HUYA.GameLiveDetail
}
;
HUYA.GameLiveDetail.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GameLiveDetail.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GameLiveDetail.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tGameLiveInfo);
    t.writeStruct(1, this.tStreamInfoPack);
    t.writeStruct(2, this.tGameLiveMisc)
}
;
HUYA.GameLiveDetail.prototype.readFrom = function(t) {
    this.tGameLiveInfo = t.readStruct(0, false, this.tGameLiveInfo);
    this.tStreamInfoPack = t.readStruct(1, false, this.tStreamInfoPack);
    this.tGameLiveMisc = t.readStruct(2, false, this.tGameLiveMisc)
}
;
HUYA.StreamInfoPack = function() {
    this.iTimespan = 0;
    this.vStreamInfo = new Taf.Vector(new HUYA.StreamInfo);
    this.mStreamRatioWeb = new Taf.Map(new Taf.STRING,new Taf.INT32);
    this.mStreamRatioPC = new Taf.Map(new Taf.STRING,new Taf.INT32);
    this.vCdnList = new Taf.Vector(new Taf.STRING);
    this.mStreamRatioMobile = new Taf.Map(new Taf.STRING,new Taf.INT32);
    this.bIgnoreCdnSwitch = 0;
    this.bEnableP2PFlag = 1;
    this.iHashPolicy = 0
}
;
HUYA.StreamInfoPack.prototype._clone = function() {
    return new HUYA.StreamInfoPack
}
;
HUYA.StreamInfoPack.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.StreamInfoPack.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.StreamInfoPack.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iTimespan);
    t.writeVector(1, this.vStreamInfo);
    t.writeMap(2, this.mStreamRatioWeb);
    t.writeMap(3, this.mStreamRatioPC);
    t.writeVector(4, this.vCdnList);
    t.writeMap(5, this.mStreamRatioMobile);
    t.writeInt32(6, this.bIgnoreCdnSwitch);
    t.writeInt32(7, this.bEnableP2PFlag);
    t.writeInt32(8, this.iHashPolicy)
}
;
HUYA.StreamInfoPack.prototype.readFrom = function(t) {
    this.iTimespan = t.readInt32(0, false, this.iTimespan);
    this.vStreamInfo = t.readVector(1, false, this.vStreamInfo);
    this.mStreamRatioWeb = t.readMap(2, false, this.mStreamRatioWeb);
    this.mStreamRatioPC = t.readMap(3, false, this.mStreamRatioPC);
    this.vCdnList = t.readVector(4, false, this.vCdnList);
    this.mStreamRatioMobile = t.readMap(5, false, this.mStreamRatioMobile);
    this.bIgnoreCdnSwitch = t.readInt32(6, false, this.bIgnoreCdnSwitch);
    this.bEnableP2PFlag = t.readInt32(7, false, this.bEnableP2PFlag);
    this.iHashPolicy = t.readInt32(8, false, this.iHashPolicy)
}
;
HUYA.GameLiveMisc = function() {
    this.mMiscInfo = new Taf.Map(new Taf.STRING,new Taf.STRING);
    this.sIP = "";
    this.sGuid = "";
    this.iPresentType = 0;
    this.sGPSInfo = "";
    this.lBonusValue = 0;
    this.sIPLocation = "";
    this.sHuYaUA = "";
    this.iScore = 0;
    this.lRealAttendeeCount = 0;
    this.lSubscribedCount = 0;
    this.mpAttribute = new Taf.Map(new Taf.STRING,new HUYA.LiveAttributeInfo);
    this.sPassword = ""
}
;
HUYA.GameLiveMisc.prototype._clone = function() {
    return new HUYA.GameLiveMisc
}
;
HUYA.GameLiveMisc.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GameLiveMisc.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GameLiveMisc.prototype.writeTo = function(t) {
    t.writeMap(0, this.mMiscInfo);
    t.writeString(1, this.sIP);
    t.writeString(2, this.sGuid);
    t.writeInt32(3, this.iPresentType);
    t.writeString(4, this.sGPSInfo);
    t.writeInt64(5, this.lBonusValue);
    t.writeString(6, this.sIPLocation);
    t.writeString(7, this.sHuYaUA);
    t.writeInt64(8, this.iScore);
    t.writeInt64(9, this.lRealAttendeeCount);
    t.writeInt64(10, this.lSubscribedCount);
    t.writeMap(11, this.mpAttribute);
    t.writeString(12, this.sPassword)
}
;
HUYA.GameLiveMisc.prototype.readFrom = function(t) {
    this.mMiscInfo = t.readMap(0, false, this.mMiscInfo);
    this.sIP = t.readString(1, false, this.sIP);
    this.sGuid = t.readString(2, false, this.sGuid);
    this.iPresentType = t.readInt32(3, false, this.iPresentType);
    this.sGPSInfo = t.readString(4, false, this.sGPSInfo);
    this.lBonusValue = t.readInt64(5, false, this.lBonusValue);
    this.sIPLocation = t.readString(6, false, this.sIPLocation);
    this.sHuYaUA = t.readString(7, false, this.sHuYaUA);
    this.iScore = t.readInt64(8, false, this.iScore);
    this.lRealAttendeeCount = t.readInt64(9, false, this.lRealAttendeeCount);
    this.lSubscribedCount = t.readInt64(10, false, this.lSubscribedCount);
    this.mpAttribute = t.readMap(11, false, this.mpAttribute);
    this.sPassword = t.readString(12, false, this.sPassword)
}
;
HUYA.LiveAttributeInfo = function() {
    this.vData = new Taf.BinBuffer;
    this.lTimespan = 0
}
;
HUYA.LiveAttributeInfo.prototype._clone = function() {
    return new HUYA.LiveAttributeInfo
}
;
HUYA.LiveAttributeInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LiveAttributeInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LiveAttributeInfo.prototype.writeTo = function(t) {
    t.writeBytes(0, this.vData);
    t.writeInt64(1, this.lTimespan)
}
;
HUYA.LiveAttributeInfo.prototype.readFrom = function(t) {
    this.vData = t.readBytes(0, false, this.vData);
    this.lTimespan = t.readInt64(1, false, this.lTimespan)
}
;
HUYA.GiftBarRsp = function() {
    this.vTopGiftRankList = new Taf.Vector(new HUYA.GiftRankListItem);
    this.vRecentGiftRankList = new Taf.Vector(new HUYA.GiftRankListItem)
}
;
HUYA.GiftBarRsp.prototype._clone = function() {
    return new HUYA.GiftBarRsp
}
;
HUYA.GiftBarRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GiftBarRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GiftBarRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vTopGiftRankList);
    t.writeVector(1, this.vRecentGiftRankList)
}
;
HUYA.GiftBarRsp.prototype.readFrom = function(t) {
    this.vTopGiftRankList = t.readVector(0, false, this.vTopGiftRankList);
    this.vRecentGiftRankList = t.readVector(1, false, this.vRecentGiftRankList)
}
;
HUYA.ReplayPresenterInLiveNotify = function() {
    this.lUid = 0;
    this.lChannelId = 0;
    this.lSubChannelId = 0
}
;
HUYA.ReplayPresenterInLiveNotify.prototype._clone = function() {
    return new HUYA.ReplayPresenterInLiveNotify
}
;
HUYA.ReplayPresenterInLiveNotify.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ReplayPresenterInLiveNotify.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ReplayPresenterInLiveNotify.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lChannelId);
    t.writeInt64(2, this.lSubChannelId)
}
;
HUYA.ReplayPresenterInLiveNotify.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lChannelId = t.readInt64(1, false, this.lChannelId);
    this.lSubChannelId = t.readInt64(2, false, this.lSubChannelId)
}
;
HUYA.GiftRankListItem = function() {
    this.lUid = 0;
    this.sNickName = "";
    this.iItemType = 0;
    this.iItemCount = 0;
    this.iScore = 0
}
;
HUYA.GiftRankListItem.prototype._clone = function() {
    return new HUYA.GiftRankListItem
}
;
HUYA.GiftRankListItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GiftRankListItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GiftRankListItem.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sNickName);
    t.writeInt32(2, this.iItemType);
    t.writeInt32(3, this.iItemCount);
    t.writeInt32(4, this.iScore)
}
;
HUYA.GiftRankListItem.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.iItemType = t.readInt32(2, false, this.iItemType);
    this.iItemCount = t.readInt32(3, false, this.iItemCount);
    this.iScore = t.readInt32(4, false, this.iScore)
}
;
HUYA.ConsumeGiftReq = function() {
    this.tId = new HUYA.UserId;
    this.lSid = 0;
    this.lSubSid = 0;
    this.iShowFreeitemInfo = 0;
    this.iItemType = 0;
    this.iItemCount = 0;
    this.lPresenterUid = 0;
    this.sPayId = "";
    this.sSendContent = "";
    this.iPayPloy = 0;
    this.iFromType = 0;
    this.sExpand = "";
    this.iTemplateType = 0;
    this.sPassport = "";
    this.iEventType = 0;
    this.mapParam = new Taf.Map(new Taf.STRING,new Taf.STRING);
    this.sSenderNick = "";
    this.sPresenterNick = "";
    this.sSign = "";
    this.iUseType = 0;
    this.iMergeDeliver = 0
}
;
HUYA.ConsumeGiftReq.prototype._clone = function() {
    return new HUYA.ConsumeGiftReq
}
;
HUYA.ConsumeGiftReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ConsumeGiftReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ConsumeGiftReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lSid);
    t.writeInt64(2, this.lSubSid);
    t.writeInt32(3, this.iShowFreeitemInfo);
    t.writeInt32(4, this.iItemType);
    t.writeInt32(5, this.iItemCount);
    t.writeInt64(6, this.lPresenterUid);
    t.writeString(7, this.sPayId);
    t.writeString(8, this.sSendContent);
    t.writeInt32(9, this.iPayPloy);
    t.writeInt32(10, this.iFromType);
    t.writeString(11, this.sExpand);
    t.writeInt32(12, this.iTemplateType);
    t.writeString(13, this.sPassport);
    t.writeInt16(14, this.iEventType);
    t.writeMap(15, this.mapParam);
    t.writeString(16, this.sSenderNick);
    t.writeString(17, this.sPresenterNick);
    t.writeString(18, this.sSign);
    t.writeInt32(19, this.iUseType);
    t.writeInt32(20, this.iMergeDeliver)
}
;
HUYA.ConsumeGiftReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lSid = t.readInt64(1, false, this.lSid);
    this.lSubSid = t.readInt64(2, false, this.lSubSid);
    this.iShowFreeitemInfo = t.readInt32(3, false, this.iShowFreeitemInfo);
    this.iItemType = t.readInt32(4, false, this.iItemType);
    this.iItemCount = t.readInt32(5, false, this.iItemCount);
    this.lPresenterUid = t.readInt64(6, false, this.lPresenterUid);
    this.sPayId = t.readString(7, false, this.sPayId);
    this.sSendContent = t.readString(8, false, this.sSendContent);
    this.iPayPloy = t.readInt32(9, false, this.iPayPloy);
    this.iFromType = t.readInt32(10, false, this.iFromType);
    this.sExpand = t.readString(11, false, this.sExpand);
    this.iTemplateType = t.readInt32(12, false, this.iTemplateType);
    this.sPassport = t.readString(13, false, this.sPassport);
    this.iEventType = t.readInt16(14, false, this.iEventType);
    this.mapParam = t.readMap(15, false, this.mapParam);
    this.sSenderNick = t.readString(16, false, this.sSenderNick);
    this.sPresenterNick = t.readString(17, false, this.sPresenterNick);
    this.sSign = t.readString(18, false, this.sSign);
    this.iUseType = t.readInt32(19, false, this.iUseType);
    this.iMergeDeliver = t.readInt32(20, false, this.iMergeDeliver)
}
;
HUYA.ConsumeGiftRsp = function() {
    this.iPayRespCode = 0;
    this.iItemType = 0;
    this.iItemCount = 0;
    this.strPayId = "";
    this.strPayConfirmUrl = "";
    this.strSendContent = "";
    this.lPresenterUid = 0;
    this.sExpand = "";
    this.strPayItemInfo = "";
    this.iPayType = 0;
    this.sSign = "";
    this.sMsg = "";
    this.iPayTotal = 0;
    this.iItemGroup = 0
}
;
HUYA.ConsumeGiftRsp.prototype._clone = function() {
    return new HUYA.ConsumeGiftRsp
}
;
HUYA.ConsumeGiftRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ConsumeGiftRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ConsumeGiftRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iPayRespCode);
    t.writeInt32(1, this.iItemType);
    t.writeInt32(2, this.iItemCount);
    t.writeString(3, this.strPayId);
    t.writeString(4, this.strPayConfirmUrl);
    t.writeString(5, this.strSendContent);
    t.writeInt64(6, this.lPresenterUid);
    t.writeString(7, this.sExpand);
    t.writeString(8, this.strPayItemInfo);
    t.writeInt32(9, this.iPayType);
    t.writeString(10, this.sSign);
    t.writeString(11, this.sMsg);
    t.writeInt32(12, this.iPayTotal);
    t.writeInt32(13, this.iItemGroup)
}
;
HUYA.ConsumeGiftRsp.prototype.readFrom = function(t) {
    this.iPayRespCode = t.readInt32(0, false, this.iPayRespCode);
    this.iItemType = t.readInt32(1, false, this.iItemType);
    this.iItemCount = t.readInt32(2, false, this.iItemCount);
    this.strPayId = t.readString(3, false, this.strPayId);
    this.strPayConfirmUrl = t.readString(4, false, this.strPayConfirmUrl);
    this.strSendContent = t.readString(5, false, this.strSendContent);
    this.lPresenterUid = t.readInt64(6, false, this.lPresenterUid);
    this.sExpand = t.readString(7, false, this.sExpand);
    this.strPayItemInfo = t.readString(8, false, this.strPayItemInfo);
    this.iPayType = t.readInt32(9, false, this.iPayType);
    this.sSign = t.readString(10, false, this.sSign);
    this.sMsg = t.readString(11, false, this.sMsg);
    this.iPayTotal = t.readInt32(12, false, this.iPayTotal);
    this.iItemGroup = t.readInt32(13, false, this.iItemGroup)
}
;
HUYA.ConsumeGiftSafeReq = function() {
    this.tId = new HUYA.UserId;
    this.lRoomId = 0;
    this.iShowFreeitemInfo = 0;
    this.iItemType = 0;
    this.iItemCount = 0;
    this.lPresenterUid = 0;
    this.lHomeOwnerUid = 0;
    this.sPayId = "";
    this.sSendContent = "";
    this.iPayPloy = 0;
    this.iFromType = 0;
    this.sExpand = "";
    this.iTemplateType = 0;
    this.sPassport = "";
    this.iEventType = 0;
    this.sSign = "";
    this.iUseType = 0;
    this.iMergeDeliver = 0;
    this.iMultiSend = 0
}
;
HUYA.ConsumeGiftSafeReq.prototype._clone = function() {
    return new HUYA.ConsumeGiftSafeReq
}
;
HUYA.ConsumeGiftSafeReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ConsumeGiftSafeReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ConsumeGiftSafeReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lRoomId);
    t.writeInt32(2, this.iShowFreeitemInfo);
    t.writeInt32(3, this.iItemType);
    t.writeInt32(4, this.iItemCount);
    t.writeInt64(5, this.lPresenterUid);
    t.writeInt64(6, this.lHomeOwnerUid);
    t.writeString(7, this.sPayId);
    t.writeString(8, this.sSendContent);
    t.writeInt32(9, this.iPayPloy);
    t.writeInt32(10, this.iFromType);
    t.writeString(11, this.sExpand);
    t.writeInt32(12, this.iTemplateType);
    t.writeString(13, this.sPassport);
    t.writeInt16(14, this.iEventType);
    t.writeString(15, this.sSign);
    t.writeInt32(16, this.iUseType);
    t.writeInt32(17, this.iMergeDeliver);
    t.writeInt32(18, this.iMultiSend)
}
;
HUYA.ConsumeGiftSafeReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lRoomId = t.readInt64(1, false, this.lRoomId);
    this.iShowFreeitemInfo = t.readInt32(2, false, this.iShowFreeitemInfo);
    this.iItemType = t.readInt32(3, false, this.iItemType);
    this.iItemCount = t.readInt32(4, false, this.iItemCount);
    this.lPresenterUid = t.readInt64(5, false, this.lPresenterUid);
    this.lHomeOwnerUid = t.readInt64(6, false, this.lHomeOwnerUid);
    this.sPayId = t.readString(7, false, this.sPayId);
    this.sSendContent = t.readString(8, false, this.sSendContent);
    this.iPayPloy = t.readInt32(9, false, this.iPayPloy);
    this.iFromType = t.readInt32(10, false, this.iFromType);
    this.sExpand = t.readString(11, false, this.sExpand);
    this.iTemplateType = t.readInt32(12, false, this.iTemplateType);
    this.sPassport = t.readString(13, false, this.sPassport);
    this.iEventType = t.readInt16(14, false, this.iEventType);
    this.sSign = t.readString(15, false, this.sSign);
    this.iUseType = t.readInt32(16, false, this.iUseType);
    this.iMergeDeliver = t.readInt32(17, false, this.iMergeDeliver);
    this.iMultiSend = t.readInt32(18, false, this.iMultiSend)
}
;
HUYA.ConsumeGiftSafeRsp = function() {
    this.iPayRespCode = 0;
    this.iItemType = 0;
    this.iItemCount = 0;
    this.strPayId = "";
    this.strPayConfirmUrl = "";
    this.strSendContent = "";
    this.lPresenterUid = 0;
    this.sExpand = "";
    this.strPayItemInfo = "";
    this.iPayType = 0;
    this.sSign = "";
    this.sMsg = "";
    this.iPayTotal = 0;
    this.iItemGroup = 0
}
;
HUYA.ConsumeGiftSafeRsp.prototype._clone = function() {
    return new HUYA.ConsumeGiftSafeRsp
}
;
HUYA.ConsumeGiftSafeRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ConsumeGiftSafeRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ConsumeGiftSafeRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iPayRespCode);
    t.writeInt32(1, this.iItemType);
    t.writeInt32(2, this.iItemCount);
    t.writeString(3, this.strPayId);
    t.writeString(4, this.strPayConfirmUrl);
    t.writeString(5, this.strSendContent);
    t.writeInt64(6, this.lPresenterUid);
    t.writeString(7, this.sExpand);
    t.writeString(8, this.strPayItemInfo);
    t.writeInt32(9, this.iPayType);
    t.writeString(10, this.sSign);
    t.writeString(11, this.sMsg);
    t.writeInt32(12, this.iPayTotal);
    t.writeInt32(13, this.iItemGroup)
}
;
HUYA.ConsumeGiftSafeRsp.prototype.readFrom = function(t) {
    this.iPayRespCode = t.readInt32(0, false, this.iPayRespCode);
    this.iItemType = t.readInt32(1, false, this.iItemType);
    this.iItemCount = t.readInt32(2, false, this.iItemCount);
    this.strPayId = t.readString(3, false, this.strPayId);
    this.strPayConfirmUrl = t.readString(4, false, this.strPayConfirmUrl);
    this.strSendContent = t.readString(5, false, this.strSendContent);
    this.lPresenterUid = t.readInt64(6, false, this.lPresenterUid);
    this.sExpand = t.readString(7, false, this.sExpand);
    this.strPayItemInfo = t.readString(8, false, this.strPayItemInfo);
    this.iPayType = t.readInt32(9, false, this.iPayType);
    this.sSign = t.readString(10, false, this.sSign);
    this.sMsg = t.readString(11, false, this.sMsg);
    this.iPayTotal = t.readInt32(12, false, this.iPayTotal);
    this.iItemGroup = t.readInt32(13, false, this.iItemGroup)
}
;
HUYA.ItemEffectInfo = function() {
    this.iPriceLevel = 0;
    this.iStreamDuration = 0;
    this.iShowType = 0
}
;
HUYA.ItemEffectInfo.prototype._clone = function() {
    return new HUYA.ItemEffectInfo
}
;
HUYA.ItemEffectInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ItemEffectInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ItemEffectInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iPriceLevel);
    t.writeInt32(1, this.iStreamDuration);
    t.writeInt32(2, this.iShowType)
}
;
HUYA.ItemEffectInfo.prototype.readFrom = function(t) {
    this.iPriceLevel = t.readInt32(0, false, this.iPriceLevel);
    this.iStreamDuration = t.readInt32(1, false, this.iStreamDuration);
    this.iShowType = t.readInt32(2, false, this.iShowType)
}
;
HUYA.EffectInfo = function() {
    this.iStreamColor = 0;
    this.iTriggerType = 0;
    this.iStreamTiggerNum = 0;
    this.iBigGiftTiggerNum = 0
}
;
HUYA.EffectInfo.prototype._clone = function() {
    return new HUYA.EffectInfo
}
;
HUYA.EffectInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.EffectInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.EffectInfo.prototype.writeTo = function(t) {
    t.writeInt32(1, this.iStreamColor);
    t.writeInt32(2, this.iTriggerType);
    t.writeInt32(3, this.iStreamTiggerNum);
    t.writeInt32(4, this.iBigGiftTiggerNum)
}
;
HUYA.EffectInfo.prototype.readFrom = function(t) {
    this.iStreamColor = t.readInt32(1, false, this.iStreamColor);
    this.iTriggerType = t.readInt32(2, false, this.iTriggerType);
    this.iStreamTiggerNum = t.readInt32(3, false, this.iStreamTiggerNum);
    this.iBigGiftTiggerNum = t.readInt32(4, false, this.iBigGiftTiggerNum)
}
;
HUYA.LotteryUserReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lPid = 0;
    this.lTid = 0;
    this.lSid = 0
}
;
HUYA.LotteryUserReq.prototype._clone = function() {
    return new HUYA.LotteryUserReq
}
;
HUYA.LotteryUserReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryUserReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryUserReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lPid);
    t.writeInt64(2, this.lTid);
    t.writeInt64(3, this.lSid)
}
;
HUYA.LotteryUserReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.lTid = t.readInt64(2, false, this.lTid);
    this.lSid = t.readInt64(3, false, this.lSid)
}
;
HUYA.LotteryPanel = function() {
    this.iState = 0;
    this.tAward = new HUYA.LotteryAwardInfo;
    this.tData = new HUYA.LotteryData;
    this.tExtraAwardInfo = new HUYA.LotteryExtraAwardInfo;
    this.vGift2TicketCfgs = new Taf.Vector(new HUYA.Gift2TicketCfg);
    this.iTicketPrice = 0
}
;
HUYA.LotteryPanel.prototype._clone = function() {
    return new HUYA.LotteryPanel
}
;
HUYA.LotteryPanel.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryPanel.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryPanel.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iState);
    t.writeStruct(1, this.tAward);
    t.writeStruct(2, this.tData);
    t.writeStruct(3, this.tExtraAwardInfo);
    t.writeVector(4, this.vGift2TicketCfgs);
    t.writeInt32(5, this.iTicketPrice)
}
;
HUYA.LotteryPanel.prototype.readFrom = function(t) {
    this.iState = t.readInt32(0, false, this.iState);
    this.tAward = t.readStruct(1, false, this.tAward);
    this.tData = t.readStruct(2, false, this.tData);
    this.tExtraAwardInfo = t.readStruct(3, false, this.tExtraAwardInfo);
    this.vGift2TicketCfgs = t.readVector(4, false, this.vGift2TicketCfgs);
    this.iTicketPrice = t.readInt32(5, false, this.iTicketPrice)
}
;
HUYA.LotteryAwardInfo = function() {
    this.lLotteryId = 0;
    this.lPid = 0;
    this.iSettleState = 0;
    this.lTimestamp = 0;
    this.iAwardUserNum = 0;
    this.vInfo = new Taf.Vector(new HUYA.LotteryUserAwardInfo);
    this.tCurClassInfo = new HUYA.LotteryAwardClassInfo
}
;
HUYA.LotteryAwardInfo.prototype._clone = function() {
    return new HUYA.LotteryAwardInfo
}
;
HUYA.LotteryAwardInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryAwardInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryAwardInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lLotteryId);
    t.writeInt64(1, this.lPid);
    t.writeInt32(2, this.iSettleState);
    t.writeInt64(3, this.lTimestamp);
    t.writeInt32(4, this.iAwardUserNum);
    t.writeVector(5, this.vInfo);
    t.writeStruct(6, this.tCurClassInfo)
}
;
HUYA.LotteryAwardInfo.prototype.readFrom = function(t) {
    this.lLotteryId = t.readInt64(0, false, this.lLotteryId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.iSettleState = t.readInt32(2, false, this.iSettleState);
    this.lTimestamp = t.readInt64(3, false, this.lTimestamp);
    this.iAwardUserNum = t.readInt32(4, false, this.iAwardUserNum);
    this.vInfo = t.readVector(5, false, this.vInfo);
    this.tCurClassInfo = t.readStruct(6, false, this.tCurClassInfo)
}
;
HUYA.LotteryData = function() {
    this.tAggreData = new HUYA.LotteryAggreData;
    this.vInfo = new Taf.Vector(new HUYA.UserTicketInfo)
}
;
HUYA.LotteryData.prototype._clone = function() {
    return new HUYA.LotteryData
}
;
HUYA.LotteryData.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryData.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryData.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tAggreData);
    t.writeVector(1, this.vInfo)
}
;
HUYA.LotteryData.prototype.readFrom = function(t) {
    this.tAggreData = t.readStruct(0, false, this.tAggreData);
    this.vInfo = t.readVector(1, false, this.vInfo)
}
;
HUYA.LotteryExtraAwardInfo = function() {
    this.mClass2ExtraAward = new Taf.Map(new Taf.INT32,new HUYA.LotteryAwardItem);
    this.iExtraAwardMode = 0
}
;
HUYA.LotteryExtraAwardInfo.prototype._clone = function() {
    return new HUYA.LotteryExtraAwardInfo
}
;
HUYA.LotteryExtraAwardInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryExtraAwardInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryExtraAwardInfo.prototype.writeTo = function(t) {
    t.writeMap(0, this.mClass2ExtraAward);
    t.writeInt32(1, this.iExtraAwardMode)
}
;
HUYA.LotteryExtraAwardInfo.prototype.readFrom = function(t) {
    this.mClass2ExtraAward = t.readMap(0, false, this.mClass2ExtraAward);
    this.iExtraAwardMode = t.readInt32(1, false, this.iExtraAwardMode)
}
;
HUYA.LotteryUserAwardInfo = function() {
    this.lUid = 0;
    this.lYYid = 0;
    this.sNickName = "";
    this.sLogo = "";
    this.sAwardName = ""
}
;
HUYA.LotteryUserAwardInfo.prototype._clone = function() {
    return new HUYA.LotteryUserAwardInfo
}
;
HUYA.LotteryUserAwardInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryUserAwardInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryUserAwardInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lYYid);
    t.writeString(2, this.sNickName);
    t.writeString(3, this.sLogo);
    t.writeString(4, this.sAwardName)
}
;
HUYA.LotteryUserAwardInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lYYid = t.readInt64(1, false, this.lYYid);
    this.sNickName = t.readString(2, false, this.sNickName);
    this.sLogo = t.readString(3, false, this.sLogo);
    this.sAwardName = t.readString(4, false, this.sAwardName)
}
;
HUYA.LotteryAwardClassInfo = function() {
    this.iClass = 0;
    this.iClassType = 0;
    this.sLogo = "";
    this.sMiniLogo = "";
    this.sName = "";
    this.iTicketNum = 0;
    this.sNextClassName = "";
    this.iNextClassTicketNum = 0;
    this.tGreenBeanAward = new HUYA.LotteryAwardItem;
    this.tSpecialAward = new HUYA.LotteryAwardItem;
    this.tExtraAward = new HUYA.LotteryAwardItem
}
;
HUYA.LotteryAwardClassInfo.prototype._clone = function() {
    return new HUYA.LotteryAwardClassInfo
}
;
HUYA.LotteryAwardClassInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryAwardClassInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryAwardClassInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iClass);
    t.writeInt32(1, this.iClassType);
    t.writeString(2, this.sLogo);
    t.writeString(3, this.sMiniLogo);
    t.writeString(4, this.sName);
    t.writeInt32(5, this.iTicketNum);
    t.writeString(6, this.sNextClassName);
    t.writeInt32(7, this.iNextClassTicketNum);
    t.writeStruct(8, this.tGreenBeanAward);
    t.writeStruct(9, this.tSpecialAward);
    t.writeStruct(10, this.tExtraAward)
}
;
HUYA.LotteryAwardClassInfo.prototype.readFrom = function(t) {
    this.iClass = t.readInt32(0, false, this.iClass);
    this.iClassType = t.readInt32(1, false, this.iClassType);
    this.sLogo = t.readString(2, false, this.sLogo);
    this.sMiniLogo = t.readString(3, false, this.sMiniLogo);
    this.sName = t.readString(4, false, this.sName);
    this.iTicketNum = t.readInt32(5, false, this.iTicketNum);
    this.sNextClassName = t.readString(6, false, this.sNextClassName);
    this.iNextClassTicketNum = t.readInt32(7, false, this.iNextClassTicketNum);
    this.tGreenBeanAward = t.readStruct(8, false, this.tGreenBeanAward);
    this.tSpecialAward = t.readStruct(9, false, this.tSpecialAward);
    this.tExtraAward = t.readStruct(10, false, this.tExtraAward)
}
;
HUYA.LotteryAwardItem = function() {
    this.sAwardName = "";
    this.sAwardLogo = "";
    this.iAwardUserNum = 0;
    this.sAwardDesc = "";
    this.iAwardNum = 0;
    this.iAwardType = -1
}
;
HUYA.LotteryAwardItem.prototype._clone = function() {
    return new HUYA.LotteryAwardItem
}
;
HUYA.LotteryAwardItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryAwardItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryAwardItem.prototype.writeTo = function(t) {
    t.writeString(0, this.sAwardName);
    t.writeString(1, this.sAwardLogo);
    t.writeInt32(2, this.iAwardUserNum);
    t.writeString(3, this.sAwardDesc);
    t.writeInt32(4, this.iAwardNum);
    t.writeInt32(5, this.iAwardType)
}
;
HUYA.LotteryAwardItem.prototype.readFrom = function(t) {
    this.sAwardName = t.readString(0, false, this.sAwardName);
    this.sAwardLogo = t.readString(1, false, this.sAwardLogo);
    this.iAwardUserNum = t.readInt32(2, false, this.iAwardUserNum);
    this.sAwardDesc = t.readString(3, false, this.sAwardDesc);
    this.iAwardNum = t.readInt32(4, false, this.iAwardNum);
    this.iAwardType = t.readInt32(5, false, this.iAwardType)
}
;
HUYA.LotteryAggreData = function() {
    this.lLotteryId = 0;
    this.lPid = 0;
    this.tCurClassInfo = new HUYA.LotteryAwardClassInfo;
    this.iTicketNum = 0;
    this.iUserNum = 0;
    this.iAwardUserNum = 0;
    this.tDiyAwardInfo = new HUYA.LotteryDiyAwardInfo
}
;
HUYA.LotteryAggreData.prototype._clone = function() {
    return new HUYA.LotteryAggreData
}
;
HUYA.LotteryAggreData.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryAggreData.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryAggreData.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lLotteryId);
    t.writeInt64(1, this.lPid);
    t.writeStruct(2, this.tCurClassInfo);
    t.writeInt32(3, this.iTicketNum);
    t.writeInt32(4, this.iUserNum);
    t.writeInt32(5, this.iAwardUserNum);
    t.writeStruct(6, this.tDiyAwardInfo)
}
;
HUYA.LotteryAggreData.prototype.readFrom = function(t) {
    this.lLotteryId = t.readInt64(0, false, this.lLotteryId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.tCurClassInfo = t.readStruct(2, false, this.tCurClassInfo);
    this.iTicketNum = t.readInt32(3, false, this.iTicketNum);
    this.iUserNum = t.readInt32(4, false, this.iUserNum);
    this.iAwardUserNum = t.readInt32(5, false, this.iAwardUserNum);
    this.tDiyAwardInfo = t.readStruct(6, false, this.tDiyAwardInfo)
}
;
HUYA.UserTicketInfo = function() {
    this.lUid = 0;
    this.lYYid = 0;
    this.sNickName = "";
    this.sLogo = "";
    this.iTicketNum = 0
}
;
HUYA.UserTicketInfo.prototype._clone = function() {
    return new HUYA.UserTicketInfo
}
;
HUYA.UserTicketInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserTicketInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserTicketInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lYYid);
    t.writeString(2, this.sNickName);
    t.writeString(3, this.sLogo);
    t.writeInt32(4, this.iTicketNum)
}
;
HUYA.UserTicketInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lYYid = t.readInt64(1, false, this.lYYid);
    this.sNickName = t.readString(2, false, this.sNickName);
    this.sLogo = t.readString(3, false, this.sLogo);
    this.iTicketNum = t.readInt32(4, false, this.iTicketNum)
}
;
HUYA.LotteryUserInfoRsp = function() {
    this.lUid = 0;
    this.iTicketNum = 0
}
;
HUYA.LotteryUserInfoRsp.prototype._clone = function() {
    return new HUYA.LotteryUserInfoRsp
}
;
HUYA.LotteryUserInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryUserInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryUserInfoRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt32(1, this.iTicketNum)
}
;
HUYA.LotteryUserInfoRsp.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.iTicketNum = t.readInt32(1, false, this.iTicketNum)
}
;
HUYA.BuyTicketReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0;
    this.lLotteryId = 0;
    this.iTicketNum = 0
}
;
HUYA.BuyTicketReq.prototype._clone = function() {
    return new HUYA.BuyTicketReq
}
;
HUYA.BuyTicketReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BuyTicketReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BuyTicketReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeInt64(3, this.lPid);
    t.writeInt64(4, this.lLotteryId);
    t.writeInt32(5, this.iTicketNum)
}
;
HUYA.BuyTicketReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.lPid = t.readInt64(3, false, this.lPid);
    this.lLotteryId = t.readInt64(4, false, this.lLotteryId);
    this.iTicketNum = t.readInt32(5, false, this.iTicketNum)
}
;
HUYA.BuyTicketRsp = function() {
    this.iRet = 0;
    this.tInfo = new HUYA.LotteryUserInfoRsp;
    this.iTicketNum = 0;
    this.sNotEnoughMsg = ""
}
;
HUYA.BuyTicketRsp.prototype._clone = function() {
    return new HUYA.BuyTicketRsp
}
;
HUYA.BuyTicketRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BuyTicketRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BuyTicketRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRet);
    t.writeStruct(1, this.tInfo);
    t.writeInt32(2, this.iTicketNum);
    t.writeString(3, this.sNotEnoughMsg)
}
;
HUYA.BuyTicketRsp.prototype.readFrom = function(t) {
    this.iRet = t.readInt32(0, false, this.iRet);
    this.tInfo = t.readStruct(1, false, this.tInfo);
    this.iTicketNum = t.readInt32(2, false, this.iTicketNum);
    this.sNotEnoughMsg = t.readString(3, false, this.sNotEnoughMsg)
}
;
HUYA.LotteryEndNotice = function() {
    this.lLotteryId = 0
}
;
HUYA.LotteryEndNotice.prototype._clone = function() {
    return new HUYA.LotteryEndNotice
}
;
HUYA.LotteryEndNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryEndNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryEndNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lLotteryId)
}
;
HUYA.LotteryEndNotice.prototype.readFrom = function(t) {
    this.lLotteryId = t.readInt64(0, false, this.lLotteryId)
}
;
HUYA.LotteryAnnounce = function() {
    this.lPid = 0;
    this.sNickName = "";
    this.sContent = "";
    this.tChInfo = new HUYA.PresenterChannelInfo
}
;
HUYA.LotteryAnnounce.prototype._clone = function() {
    return new HUYA.LotteryAnnounce
}
;
HUYA.LotteryAnnounce.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryAnnounce.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryAnnounce.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPid);
    t.writeString(1, this.sNickName);
    t.writeString(2, this.sContent);
    t.writeStruct(3, this.tChInfo)
}
;
HUYA.LotteryAnnounce.prototype.readFrom = function(t) {
    this.lPid = t.readInt64(0, false, this.lPid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.sContent = t.readString(2, false, this.sContent);
    this.tChInfo = t.readStruct(3, false, this.tChInfo)
}
;
HUYA.LotteryDiyTerm = function() {
    this.sKey = "";
    this.sDesc = "";
    this.lValue = 0
}
;
HUYA.LotteryDiyTerm.prototype._clone = function() {
    return new HUYA.LotteryDiyTerm
}
;
HUYA.LotteryDiyTerm.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryDiyTerm.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryDiyTerm.prototype.writeTo = function(t) {
    t.writeString(0, this.sKey);
    t.writeString(1, this.sDesc);
    t.writeInt64(2, this.lValue)
}
;
HUYA.LotteryDiyTerm.prototype.readFrom = function(t) {
    this.sKey = t.readString(0, false, this.sKey);
    this.sDesc = t.readString(1, false, this.sDesc);
    this.lValue = t.readInt64(2, false, this.lValue)
}
;
HUYA.LotteryDiyAward = function() {
    this.lTypeId = 0;
    this.sName = "";
    this.sPic = "";
    this.sDesc = "";
    this.sGetDesc = "";
    this.iLv = 0;
    this.iNum = 0;
    this.iUsrNum = 0
}
;
HUYA.LotteryDiyAward.prototype._clone = function() {
    return new HUYA.LotteryDiyAward
}
;
HUYA.LotteryDiyAward.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryDiyAward.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryDiyAward.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lTypeId);
    t.writeString(1, this.sName);
    t.writeString(2, this.sPic);
    t.writeString(3, this.sDesc);
    t.writeString(4, this.sGetDesc);
    t.writeInt32(5, this.iLv);
    t.writeInt32(6, this.iNum);
    t.writeInt32(7, this.iUsrNum)
}
;
HUYA.LotteryDiyAward.prototype.readFrom = function(t) {
    this.lTypeId = t.readInt64(0, false, this.lTypeId);
    this.sName = t.readString(1, false, this.sName);
    this.sPic = t.readString(2, false, this.sPic);
    this.sDesc = t.readString(3, false, this.sDesc);
    this.sGetDesc = t.readString(4, false, this.sGetDesc);
    this.iLv = t.readInt32(5, false, this.iLv);
    this.iNum = t.readInt32(6, false, this.iNum);
    this.iUsrNum = t.readInt32(7, false, this.iUsrNum)
}
;
HUYA.LotteryDiyAwardInfo = function() {
    this.iTicketNum = 0;
    this.vTerms = new Taf.Vector(new HUYA.LotteryDiyTerm);
    this.vDiyAwards = new Taf.Vector(new HUYA.LotteryDiyAward)
}
;
HUYA.LotteryDiyAwardInfo.prototype._clone = function() {
    return new HUYA.LotteryDiyAwardInfo
}
;
HUYA.LotteryDiyAwardInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.LotteryDiyAwardInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.LotteryDiyAwardInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iTicketNum);
    t.writeVector(1, this.vTerms);
    t.writeVector(2, this.vDiyAwards)
}
;
HUYA.LotteryDiyAwardInfo.prototype.readFrom = function(t) {
    this.iTicketNum = t.readInt32(0, false, this.iTicketNum);
    this.vTerms = t.readVector(1, false, this.vTerms);
    this.vDiyAwards = t.readVector(2, false, this.vDiyAwards)
}
;
HUYA.Gift2TicketCfg = function() {
    this.iItemId = 0;
    this.iItemPrice = 0;
    this.iNum = 0
}
;
HUYA.Gift2TicketCfg.prototype._clone = function() {
    return new HUYA.Gift2TicketCfg
}
;
HUYA.Gift2TicketCfg.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.Gift2TicketCfg.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.Gift2TicketCfg.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iItemId);
    t.writeInt32(1, this.iItemPrice);
    t.writeInt32(2, this.iNum)
}
;
HUYA.Gift2TicketCfg.prototype.readFrom = function(t) {
    this.iItemId = t.readInt32(0, false, this.iItemId);
    this.iItemPrice = t.readInt32(1, false, this.iItemPrice);
    this.iNum = t.readInt32(2, false, this.iNum)
}
;
HUYA.OnTVUserReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lPid = 0;
    this.lTid = 0;
    this.lSid = 0;
    this.iSupportFlag = 0
}
;
HUYA.OnTVUserReq.prototype._clone = function() {
    return new HUYA.OnTVUserReq
}
;
HUYA.OnTVUserReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVUserReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVUserReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lPid);
    t.writeInt64(2, this.lTid);
    t.writeInt64(3, this.lSid);
    t.writeInt32(4, this.iSupportFlag)
}
;
HUYA.OnTVUserReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.lTid = t.readInt64(2, false, this.lTid);
    this.lSid = t.readInt64(3, false, this.lSid);
    this.iSupportFlag = t.readInt32(4, false, this.iSupportFlag)
}
;
HUYA.OnTVPanel = function() {
    this.iState = 0;
    this.tAward = new HUYA.OnTVAwardInfo;
    this.tInfo = new HUYA.OnTVGameInfo;
    this.iIsDiy = 0;
    this.tDiy = new HUYA.OnTVCfgDiy
}
;
HUYA.OnTVPanel.prototype._clone = function() {
    return new HUYA.OnTVPanel
}
;
HUYA.OnTVPanel.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVPanel.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVPanel.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iState);
    t.writeStruct(1, this.tAward);
    t.writeStruct(2, this.tInfo);
    t.writeInt32(3, this.iIsDiy);
    t.writeStruct(4, this.tDiy)
}
;
HUYA.OnTVPanel.prototype.readFrom = function(t) {
    this.iState = t.readInt32(0, false, this.iState);
    this.tAward = t.readStruct(1, false, this.tAward);
    this.tInfo = t.readStruct(2, false, this.tInfo);
    this.iIsDiy = t.readInt32(3, false, this.iIsDiy);
    this.tDiy = t.readStruct(4, false, this.tDiy)
}
;
HUYA.OnTVEndNotice = function() {
    this.lOnTVId = 0
}
;
HUYA.OnTVEndNotice.prototype._clone = function() {
    return new HUYA.OnTVEndNotice
}
;
HUYA.OnTVEndNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVEndNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVEndNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lOnTVId)
}
;
HUYA.OnTVEndNotice.prototype.readFrom = function(t) {
    this.lOnTVId = t.readInt64(0, false, this.lOnTVId)
}
;
HUYA.OnTVCfgDiy = function() {
    this.tBarrage = new HUYA.OnTVCfgDiyBarrage;
    this.tFlag = new HUYA.OnTVCfgDiyFlag;
    this.tPanel = new HUYA.OnTVCfgDiyPanel
}
;
HUYA.OnTVCfgDiy.prototype._clone = function() {
    return new HUYA.OnTVCfgDiy
}
;
HUYA.OnTVCfgDiy.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVCfgDiy.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVCfgDiy.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tBarrage);
    t.writeStruct(1, this.tFlag);
    t.writeStruct(2, this.tPanel)
}
;
HUYA.OnTVCfgDiy.prototype.readFrom = function(t) {
    this.tBarrage = t.readStruct(0, false, this.tBarrage);
    this.tFlag = t.readStruct(1, false, this.tFlag);
    this.tPanel = t.readStruct(2, false, this.tPanel)
}
;
HUYA.OnTVCfgDiyBarrage = function() {
    this.sIcon = ""
}
;
HUYA.OnTVCfgDiyBarrage.prototype._clone = function() {
    return new HUYA.OnTVCfgDiyBarrage
}
;
HUYA.OnTVCfgDiyBarrage.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVCfgDiyBarrage.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVCfgDiyBarrage.prototype.writeTo = function(t) {
    t.writeString(0, this.sIcon)
}
;
HUYA.OnTVCfgDiyBarrage.prototype.readFrom = function(t) {
    this.sIcon = t.readString(0, false, this.sIcon)
}
;
HUYA.OnTVCfgDiyFlag = function() {
    this.sName = "上电视";
    this.sPic = "http://livewebbs2.msstatic.com/ontv_<ua>.png"
}
;
HUYA.OnTVCfgDiyFlag.prototype._clone = function() {
    return new HUYA.OnTVCfgDiyFlag
}
;
HUYA.OnTVCfgDiyFlag.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVCfgDiyFlag.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVCfgDiyFlag.prototype.writeTo = function(t) {
    t.writeString(0, this.sName);
    t.writeString(1, this.sPic)
}
;
HUYA.OnTVCfgDiyFlag.prototype.readFrom = function(t) {
    this.sName = t.readString(0, false, this.sName);
    this.sPic = t.readString(1, false, this.sPic)
}
;
HUYA.OnTVCfgDiyPanel = function() {
    this.sLogo = "";
    this.sButtonIcon = "";
    this.sAD = "";
    this.sName = "";
    this.sADJump = "";
    this.sUIJson = ""
}
;
HUYA.OnTVCfgDiyPanel.prototype._clone = function() {
    return new HUYA.OnTVCfgDiyPanel
}
;
HUYA.OnTVCfgDiyPanel.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVCfgDiyPanel.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVCfgDiyPanel.prototype.writeTo = function(t) {
    t.writeString(0, this.sLogo);
    t.writeString(1, this.sButtonIcon);
    t.writeString(2, this.sAD);
    t.writeString(3, this.sName);
    t.writeString(4, this.sADJump);
    t.writeString(5, this.sUIJson)
}
;
HUYA.OnTVCfgDiyPanel.prototype.readFrom = function(t) {
    this.sLogo = t.readString(0, false, this.sLogo);
    this.sButtonIcon = t.readString(1, false, this.sButtonIcon);
    this.sAD = t.readString(2, false, this.sAD);
    this.sName = t.readString(3, false, this.sName);
    this.sADJump = t.readString(4, false, this.sADJump);
    this.sUIJson = t.readString(5, false, this.sUIJson)
}
;
HUYA.OnTVUserInfoRsp = function() {
    this.lUid = 0;
    this.iBarrageNum = 0;
    this.iIsFans = 0;
    this.iFansLevel = 0;
    this.sBadgeName = "";
    this.lBadgeId = 0;
    this.iBadgeType = 0;
    this.iSFFlag = 0
}
;
HUYA.OnTVUserInfoRsp.prototype._clone = function() {
    return new HUYA.OnTVUserInfoRsp
}
;
HUYA.OnTVUserInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVUserInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVUserInfoRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt32(1, this.iBarrageNum);
    t.writeInt32(2, this.iIsFans);
    t.writeInt32(3, this.iFansLevel);
    t.writeString(4, this.sBadgeName);
    t.writeInt64(5, this.lBadgeId);
    t.writeInt32(6, this.iBadgeType);
    t.writeInt32(7, this.iSFFlag)
}
;
HUYA.OnTVUserInfoRsp.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.iBarrageNum = t.readInt32(1, false, this.iBarrageNum);
    this.iIsFans = t.readInt32(2, false, this.iIsFans);
    this.iFansLevel = t.readInt32(3, false, this.iFansLevel);
    this.sBadgeName = t.readString(4, false, this.sBadgeName);
    this.lBadgeId = t.readInt64(5, false, this.lBadgeId);
    this.iBadgeType = t.readInt32(6, false, this.iBadgeType);
    this.iSFFlag = t.readInt32(7, false, this.iSFFlag)
}
;
HUYA.SendOnTVBarrageReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0;
    this.lOnTVId = 0;
    this.tBarrage = new HUYA.OnTVBarrage;
    this.lPrice = 0
}
;
HUYA.SendOnTVBarrageReq.prototype._clone = function() {
    return new HUYA.SendOnTVBarrageReq
}
;
HUYA.SendOnTVBarrageReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SendOnTVBarrageReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SendOnTVBarrageReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeInt64(3, this.lPid);
    t.writeInt64(4, this.lOnTVId);
    t.writeStruct(5, this.tBarrage);
    t.writeInt64(6, this.lPrice)
}
;
HUYA.SendOnTVBarrageReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.lPid = t.readInt64(3, false, this.lPid);
    this.lOnTVId = t.readInt64(4, false, this.lOnTVId);
    this.tBarrage = t.readStruct(5, false, this.tBarrage);
    this.lPrice = t.readInt64(6, false, this.lPrice)
}
;
HUYA.SendOnTVBarrageRsp = function() {
    this.iRet = 0;
    this.tInfo = new HUYA.OnTVUserInfoRsp
}
;
HUYA.SendOnTVBarrageRsp.prototype._clone = function() {
    return new HUYA.SendOnTVBarrageRsp
}
;
HUYA.SendOnTVBarrageRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SendOnTVBarrageRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SendOnTVBarrageRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRet);
    t.writeStruct(1, this.tInfo)
}
;
HUYA.SendOnTVBarrageRsp.prototype.readFrom = function(t) {
    this.iRet = t.readInt32(0, false, this.iRet);
    this.tInfo = t.readStruct(1, false, this.tInfo)
}
;
HUYA.OnTVAwardInfo = function() {
    this.lOnTVId = 0;
    this.vInfo = new Taf.Vector(new HUYA.OnTVUserAwardInfo);
    this.iBarrageNum = 0;
    this.iUserNum = 0;
    this.iNewFansNum = 0;
    this.vItemBarrageCount = new Taf.Vector(new HUYA.OnTVItemBarrageCount);
    this.iNewSubNum = 0
}
;
HUYA.OnTVAwardInfo.prototype._clone = function() {
    return new HUYA.OnTVAwardInfo
}
;
HUYA.OnTVAwardInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVAwardInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVAwardInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lOnTVId);
    t.writeVector(1, this.vInfo);
    t.writeInt32(2, this.iBarrageNum);
    t.writeInt32(3, this.iUserNum);
    t.writeInt32(4, this.iNewFansNum);
    t.writeVector(5, this.vItemBarrageCount);
    t.writeInt32(7, this.iNewSubNum)
}
;
HUYA.OnTVAwardInfo.prototype.readFrom = function(t) {
    this.lOnTVId = t.readInt64(0, false, this.lOnTVId);
    this.vInfo = t.readVector(1, false, this.vInfo);
    this.iBarrageNum = t.readInt32(2, false, this.iBarrageNum);
    this.iUserNum = t.readInt32(3, false, this.iUserNum);
    this.iNewFansNum = t.readInt32(4, false, this.iNewFansNum);
    this.vItemBarrageCount = t.readVector(5, false, this.vItemBarrageCount);
    this.iNewSubNum = t.readInt32(7, false, this.iNewSubNum)
}
;
HUYA.OnTVUserAwardInfo = function() {
    this.lUid = 0;
    this.lYYid = 0;
    this.sNickName = "";
    this.sLogo = "";
    this.sAwardName = "";
    this.tBarrage = new HUYA.OnTVBarrage
}
;
HUYA.OnTVUserAwardInfo.prototype._clone = function() {
    return new HUYA.OnTVUserAwardInfo
}
;
HUYA.OnTVUserAwardInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVUserAwardInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVUserAwardInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lYYid);
    t.writeString(2, this.sNickName);
    t.writeString(3, this.sLogo);
    t.writeString(4, this.sAwardName);
    t.writeStruct(5, this.tBarrage)
}
;
HUYA.OnTVUserAwardInfo.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lYYid = t.readInt64(1, false, this.lYYid);
    this.sNickName = t.readString(2, false, this.sNickName);
    this.sLogo = t.readString(3, false, this.sLogo);
    this.sAwardName = t.readString(4, false, this.sAwardName);
    this.tBarrage = t.readStruct(5, false, this.tBarrage)
}
;
HUYA.OnTVBarrage = function() {
    this.lUid = 0;
    this.sContent = "";
    this.iTVType = 0;
    this.iTVColor = 0
}
;
HUYA.OnTVBarrage.prototype._clone = function() {
    return new HUYA.OnTVBarrage
}
;
HUYA.OnTVBarrage.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVBarrage.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVBarrage.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeString(1, this.sContent);
    t.writeInt32(2, this.iTVType);
    t.writeInt32(3, this.iTVColor)
}
;
HUYA.OnTVBarrage.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.sContent = t.readString(1, false, this.sContent);
    this.iTVType = t.readInt32(2, false, this.iTVType);
    this.iTVColor = t.readInt32(3, false, this.iTVColor)
}
;
HUYA.OnTVGameInfo = function() {
    this.lOnTVId = 0;
    this.tSettingInfo = new HUYA.OnTVSettingInfo;
    this.tData = new HUYA.OnTVData
}
;
HUYA.OnTVGameInfo.prototype._clone = function() {
    return new HUYA.OnTVGameInfo
}
;
HUYA.OnTVGameInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVGameInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVGameInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lOnTVId);
    t.writeStruct(1, this.tSettingInfo);
    t.writeStruct(2, this.tData)
}
;
HUYA.OnTVGameInfo.prototype.readFrom = function(t) {
    this.lOnTVId = t.readInt64(0, false, this.lOnTVId);
    this.tSettingInfo = t.readStruct(1, false, this.tSettingInfo);
    this.tData = t.readStruct(2, false, this.tData)
}
;
HUYA.OnTVSettingInfo = function() {
    this.sTitle = "";
    this.tAward = new HUYA.OnTVAwardItem;
    this.vTVPrice = new Taf.Vector(new HUYA.TVPrice);
    this.lPid = 0;
    this.sLogo = "";
    this.iAwardMode = 0;
    this.vPack = new Taf.Vector(new HUYA.OnTVItemPackage);
    this.iPartic = 0;
    this.iPartic2 = 0
}
;
HUYA.OnTVSettingInfo.prototype._clone = function() {
    return new HUYA.OnTVSettingInfo
}
;
HUYA.OnTVSettingInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVSettingInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVSettingInfo.prototype.writeTo = function(t) {
    t.writeString(0, this.sTitle);
    t.writeStruct(1, this.tAward);
    t.writeVector(2, this.vTVPrice);
    t.writeInt64(3, this.lPid);
    t.writeString(4, this.sLogo);
    t.writeInt32(5, this.iAwardMode);
    t.writeVector(6, this.vPack);
    t.writeInt32(7, this.iPartic);
    t.writeInt32(8, this.iPartic2)
}
;
HUYA.OnTVSettingInfo.prototype.readFrom = function(t) {
    this.sTitle = t.readString(0, false, this.sTitle);
    this.tAward = t.readStruct(1, false, this.tAward);
    this.vTVPrice = t.readVector(2, false, this.vTVPrice);
    this.lPid = t.readInt64(3, false, this.lPid);
    this.sLogo = t.readString(4, false, this.sLogo);
    this.iAwardMode = t.readInt32(5, false, this.iAwardMode);
    this.vPack = t.readVector(6, false, this.vPack);
    this.iPartic = t.readInt32(7, false, this.iPartic);
    this.iPartic2 = t.readInt32(8, false, this.iPartic2)
}
;
HUYA.OnTVData = function() {
    this.lOnTVId = 0;
    this.iBarrageNum = 0;
    this.lStartTS = 0;
    this.iLeftTime = 0;
    this.iUserNum = 0;
    this.lEndTS = 0;
    this.vItemBarrageCount = new Taf.Vector(new HUYA.OnTVItemBarrageCount)
}
;
HUYA.OnTVData.prototype._clone = function() {
    return new HUYA.OnTVData
}
;
HUYA.OnTVData.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVData.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVData.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lOnTVId);
    t.writeInt32(1, this.iBarrageNum);
    t.writeInt64(2, this.lStartTS);
    t.writeInt32(3, this.iLeftTime);
    t.writeInt32(4, this.iUserNum);
    t.writeInt32(5, this.lEndTS);
    t.writeVector(6, this.vItemBarrageCount)
}
;
HUYA.OnTVData.prototype.readFrom = function(t) {
    this.lOnTVId = t.readInt64(0, false, this.lOnTVId);
    this.iBarrageNum = t.readInt32(1, false, this.iBarrageNum);
    this.lStartTS = t.readInt64(2, false, this.lStartTS);
    this.iLeftTime = t.readInt32(3, false, this.iLeftTime);
    this.iUserNum = t.readInt32(4, false, this.iUserNum);
    this.lEndTS = t.readInt32(5, false, this.lEndTS);
    this.vItemBarrageCount = t.readVector(6, false, this.vItemBarrageCount)
}
;
HUYA.OnTVAwardItem = function() {
    this.sAwardName = "";
    this.iAwardNum = 0;
    this.iAwardType = 0;
    this.sAwardArgs = ""
}
;
HUYA.OnTVAwardItem.prototype._clone = function() {
    return new HUYA.OnTVAwardItem
}
;
HUYA.OnTVAwardItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVAwardItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVAwardItem.prototype.writeTo = function(t) {
    t.writeString(0, this.sAwardName);
    t.writeInt32(1, this.iAwardNum);
    t.writeInt32(2, this.iAwardType);
    t.writeString(3, this.sAwardArgs)
}
;
HUYA.OnTVAwardItem.prototype.readFrom = function(t) {
    this.sAwardName = t.readString(0, false, this.sAwardName);
    this.iAwardNum = t.readInt32(1, false, this.iAwardNum);
    this.iAwardType = t.readInt32(2, false, this.iAwardType);
    this.sAwardArgs = t.readString(3, false, this.sAwardArgs)
}
;
HUYA.TVPrice = function() {
    this.iTVType = 0;
    this.iPrice = 0;
    this.iFreeFansLevel = 0
}
;
HUYA.TVPrice.prototype._clone = function() {
    return new HUYA.TVPrice
}
;
HUYA.TVPrice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.TVPrice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.TVPrice.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iTVType);
    t.writeInt32(1, this.iPrice);
    t.writeInt32(2, this.iFreeFansLevel)
}
;
HUYA.TVPrice.prototype.readFrom = function(t) {
    this.iTVType = t.readInt32(0, false, this.iTVType);
    this.iPrice = t.readInt32(1, false, this.iPrice);
    this.iFreeFansLevel = t.readInt32(2, false, this.iFreeFansLevel)
}
;
HUYA.OnTVBarrageNotice = function() {
    this.lUid = 0;
    this.tBarrage = new HUYA.OnTVBarrage;
    this.sNickName = "";
    this.iNobleLevel = 0;
    this.lBadgeId = 0;
    this.sBadgeName = "";
    this.iBadgeLevel = 0;
    this.lNobleValidDate = 0;
    this.iAwardMode = 0;
    this.lPid = 0;
    this.sDiyIcon = "";
    this.iBadgeType = 0;
    this.sAvatarUrl = "";
    this.tNobleLv = new HUYA.NobleLevelInfo;
    this.iSFFlag = 0
}
;
HUYA.OnTVBarrageNotice.prototype._clone = function() {
    return new HUYA.OnTVBarrageNotice
}
;
HUYA.OnTVBarrageNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVBarrageNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVBarrageNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeStruct(1, this.tBarrage);
    t.writeString(2, this.sNickName);
    t.writeInt32(3, this.iNobleLevel);
    t.writeInt64(4, this.lBadgeId);
    t.writeString(5, this.sBadgeName);
    t.writeInt32(6, this.iBadgeLevel);
    t.writeInt32(7, this.lNobleValidDate);
    t.writeInt32(8, this.iAwardMode);
    t.writeInt64(9, this.lPid);
    t.writeString(10, this.sDiyIcon);
    t.writeInt32(11, this.iBadgeType);
    t.writeString(12, this.sAvatarUrl);
    t.writeStruct(13, this.tNobleLv);
    t.writeInt32(14, this.iSFFlag)
}
;
HUYA.OnTVBarrageNotice.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.tBarrage = t.readStruct(1, false, this.tBarrage);
    this.sNickName = t.readString(2, false, this.sNickName);
    this.iNobleLevel = t.readInt32(3, false, this.iNobleLevel);
    this.lBadgeId = t.readInt64(4, false, this.lBadgeId);
    this.sBadgeName = t.readString(5, false, this.sBadgeName);
    this.iBadgeLevel = t.readInt32(6, false, this.iBadgeLevel);
    this.lNobleValidDate = t.readInt32(7, false, this.lNobleValidDate);
    this.iAwardMode = t.readInt32(8, false, this.iAwardMode);
    this.lPid = t.readInt64(9, false, this.lPid);
    this.sDiyIcon = t.readString(10, false, this.sDiyIcon);
    this.iBadgeType = t.readInt32(11, false, this.iBadgeType);
    this.sAvatarUrl = t.readString(12, false, this.sAvatarUrl);
    this.tNobleLv = t.readStruct(13, false, this.tNobleLv);
    this.iSFFlag = t.readInt32(14, false, this.iSFFlag)
}
;
HUYA.BadgeItemReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lPid = 0
}
;
HUYA.BadgeItemReq.prototype._clone = function() {
    return new HUYA.BadgeItemReq
}
;
HUYA.BadgeItemReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BadgeItemReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BadgeItemReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lPid)
}
;
HUYA.BadgeItemReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lPid = t.readInt64(1, false, this.lPid)
}
;
HUYA.BadgeItemRsp = function() {
    this.iItemType = 0;
    this.iItemCount = 0;
    this.lPid = 0;
    this.sBadgeName = "";
    this.iBadgeType = 0;
    this.lBadgeId = 0;
    this.tFaithItem = new HUYA.FaithBadgeItem;
    this.tSuperFansConfig = new HUYA.SuperFansConfig
}
;
HUYA.BadgeItemRsp.prototype._clone = function() {
    return new HUYA.BadgeItemRsp
}
;
HUYA.BadgeItemRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BadgeItemRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BadgeItemRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iItemType);
    t.writeInt32(1, this.iItemCount);
    t.writeInt64(2, this.lPid);
    t.writeString(3, this.sBadgeName);
    t.writeInt32(4, this.iBadgeType);
    t.writeInt64(5, this.lBadgeId);
    t.writeStruct(6, this.tFaithItem);
    t.writeStruct(7, this.tSuperFansConfig)
}
;
HUYA.BadgeItemRsp.prototype.readFrom = function(t) {
    this.iItemType = t.readInt32(0, false, this.iItemType);
    this.iItemCount = t.readInt32(1, false, this.iItemCount);
    this.lPid = t.readInt64(2, false, this.lPid);
    this.sBadgeName = t.readString(3, false, this.sBadgeName);
    this.iBadgeType = t.readInt32(4, false, this.iBadgeType);
    this.lBadgeId = t.readInt64(5, false, this.lBadgeId);
    this.tFaithItem = t.readStruct(6, false, this.tFaithItem);
    this.tSuperFansConfig = t.readStruct(7, false, this.tSuperFansConfig)
}
;
HUYA.OnTVItemPackage = function() {
    this.iItemId = 0;
    this.iItemNum = 0;
    this.iTVType = 0;
    this.iTVColor = 0;
    this.sContent = ""
}
;
HUYA.OnTVItemPackage.prototype._clone = function() {
    return new HUYA.OnTVItemPackage
}
;
HUYA.OnTVItemPackage.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVItemPackage.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVItemPackage.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iItemId);
    t.writeInt32(1, this.iItemNum);
    t.writeInt32(2, this.iTVType);
    t.writeInt32(3, this.iTVColor);
    t.writeString(4, this.sContent)
}
;
HUYA.OnTVItemPackage.prototype.readFrom = function(t) {
    this.iItemId = t.readInt32(0, false, this.iItemId);
    this.iItemNum = t.readInt32(1, false, this.iItemNum);
    this.iTVType = t.readInt32(2, false, this.iTVType);
    this.iTVColor = t.readInt32(3, false, this.iTVColor);
    this.sContent = t.readString(4, false, this.sContent)
}
;
HUYA.OnTVItemBarrageCount = function() {
    this.iTVType = 0;
    this.iTVColor = 0;
    this.iNum = 0;
    this.sContent = "";
    this.iItemId = 0;
    this.iItemNum = 0
}
;
HUYA.OnTVItemBarrageCount.prototype._clone = function() {
    return new HUYA.OnTVItemBarrageCount
}
;
HUYA.OnTVItemBarrageCount.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.OnTVItemBarrageCount.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.OnTVItemBarrageCount.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iTVType);
    t.writeInt32(1, this.iTVColor);
    t.writeInt32(2, this.iNum);
    t.writeString(3, this.sContent);
    t.writeInt32(4, this.iItemId);
    t.writeInt32(5, this.iItemNum)
}
;
HUYA.OnTVItemBarrageCount.prototype.readFrom = function(t) {
    this.iTVType = t.readInt32(0, false, this.iTVType);
    this.iTVColor = t.readInt32(1, false, this.iTVColor);
    this.iNum = t.readInt32(2, false, this.iNum);
    this.sContent = t.readString(3, false, this.sContent);
    this.iItemId = t.readInt32(4, false, this.iItemId);
    this.iItemNum = t.readInt32(5, false, this.iItemNum)
}
;
HUYA.GetGameAdReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0
}
;
HUYA.GetGameAdReq.prototype._clone = function() {
    return new HUYA.GetGameAdReq
}
;
HUYA.GetGameAdReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetGameAdReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetGameAdReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeInt64(3, this.lPid)
}
;
HUYA.GetGameAdReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.lPid = t.readInt64(3, false, this.lPid)
}
;
HUYA.GetSequenceReq = function() {
    this.tId = new HUYA.UserId;
    this.iSeqNum = 0;
    this.iFromType = 0;
    this.iBusinessType = 0;
    this.sSgin = ""
}
;
HUYA.GetSequenceReq.prototype._clone = function() {
    return new HUYA.GetSequenceReq
}
;
HUYA.GetSequenceReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetSequenceReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetSequenceReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt32(1, this.iSeqNum);
    t.writeInt32(2, this.iFromType);
    t.writeInt32(3, this.iBusinessType);
    t.writeString(4, this.sSgin)
}
;
HUYA.GetSequenceReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.iSeqNum = t.readInt32(1, false, this.iSeqNum);
    this.iFromType = t.readInt32(2, false, this.iFromType);
    this.iBusinessType = t.readInt32(3, false, this.iBusinessType);
    this.sSgin = t.readString(4, false, this.sSgin)
}
;
HUYA.GetSequenceRsp = function() {
    this.iRetCode = 0;
    this.sSeq = ""
}
;
HUYA.GetSequenceRsp.prototype._clone = function() {
    return new HUYA.GetSequenceRsp
}
;
HUYA.GetSequenceRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetSequenceRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetSequenceRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRetCode);
    t.writeString(1, this.sSeq)
}
;
HUYA.GetSequenceRsp.prototype.readFrom = function(t) {
    this.iRetCode = t.readInt32(0, false, this.iRetCode);
    this.sSeq = t.readString(1, false, this.sSeq)
}
;
HUYA.BadgeConfigInfoReq = function() {
    this.tUserId = new HUYA.UserId
}
;
HUYA.BadgeConfigInfoReq.prototype._clone = function() {
    return new HUYA.BadgeConfigInfoReq
}
;
HUYA.BadgeConfigInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BadgeConfigInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BadgeConfigInfoReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId)
}
;
HUYA.BadgeConfigInfoReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
}
;
HUYA.BadgeConfigInfoRsp = function() {
    this.mPersonalBadgeLogo = new Taf.Map(new Taf.INT64,new Taf.STRING);
    this.mFaithBadgeLogo = new Taf.Map(new Taf.INT64,new Taf.STRING)
}
;
HUYA.BadgeConfigInfoRsp.prototype._clone = function() {
    return new HUYA.BadgeConfigInfoRsp
}
;
HUYA.BadgeConfigInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BadgeConfigInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BadgeConfigInfoRsp.prototype.writeTo = function(t) {
    t.writeMap(1, this.mPersonalBadgeLogo);
    t.writeMap(2, this.mFaithBadgeLogo)
}
;
HUYA.BadgeConfigInfoRsp.prototype.readFrom = function(t) {
    this.mPersonalBadgeLogo = t.readMap(1, false, this.mPersonalBadgeLogo);
    this.mFaithBadgeLogo = t.readMap(2, false, this.mFaithBadgeLogo)
}
;
HUYA.ReportMessageReq = function() {
    this.tId = new HUYA.UserId;
    this.tScene = new HUYA.RMessageScene;
    this.tMessage = new HUYA.RMessageBase
}
;
HUYA.ReportMessageReq.prototype._clone = function() {
    return new HUYA.ReportMessageReq
}
;
HUYA.ReportMessageReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ReportMessageReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ReportMessageReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeStruct(1, this.tScene);
    t.writeStruct(2, this.tMessage)
}
;
HUYA.ReportMessageReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.tScene = t.readStruct(1, false, this.tScene);
    this.tMessage = t.readStruct(2, false, this.tMessage)
}
;
HUYA.ReportMessageRsp = function() {
    this.iResult = 0
}
;
HUYA.ReportMessageRsp.prototype._clone = function() {
    return new HUYA.ReportMessageRsp
}
;
HUYA.ReportMessageRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ReportMessageRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ReportMessageRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iResult)
}
;
HUYA.ReportMessageRsp.prototype.readFrom = function(t) {
    this.iResult = t.readInt32(0, false, this.iResult)
}
;
HUYA.DecorationInfoRsp = function() {
    this.vDecorationPrefix = new Taf.Vector(new HUYA.DecorationInfo);
    this.vDecorationSuffix = new Taf.Vector(new HUYA.DecorationInfo);
    this.tFormat = new HUYA.ContentFormat;
    this.tBulletFormat = new HUYA.BulletFormat;
    this.vForwardChannels = new Taf.Vector(new HUYA.ChannelPair);
    this.iModifyMask = 0;
    this.vBulletPrefix = new Taf.Vector(new HUYA.DecorationInfo);
    this.tUserInfo = new HUYA.SenderInfo;
    this.vBulletSuffix = new Taf.Vector(new HUYA.DecorationInfo)
}
;
HUYA.DecorationInfoRsp.prototype._clone = function() {
    return new HUYA.DecorationInfoRsp
}
;
HUYA.DecorationInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.DecorationInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.DecorationInfoRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vDecorationPrefix);
    t.writeVector(1, this.vDecorationSuffix);
    t.writeStruct(2, this.tFormat);
    t.writeStruct(3, this.tBulletFormat);
    t.writeVector(4, this.vForwardChannels);
    t.writeInt32(5, this.iModifyMask);
    t.writeVector(6, this.vBulletPrefix);
    t.writeStruct(7, this.tUserInfo);
    t.writeVector(8, this.vBulletSuffix)
}
;
HUYA.DecorationInfoRsp.prototype.readFrom = function(t) {
    this.vDecorationPrefix = t.readVector(0, false, this.vDecorationPrefix);
    this.vDecorationSuffix = t.readVector(1, false, this.vDecorationSuffix);
    this.tFormat = t.readStruct(2, false, this.tFormat);
    this.tBulletFormat = t.readStruct(3, false, this.tBulletFormat);
    this.vForwardChannels = t.readVector(4, false, this.vForwardChannels);
    this.iModifyMask = t.readInt32(5, false, this.iModifyMask);
    this.vBulletPrefix = t.readVector(6, false, this.vBulletPrefix);
    this.tUserInfo = t.readStruct(7, false, this.tUserInfo);
    this.vBulletSuffix = t.readVector(8, false, this.vBulletSuffix)
}
;
HUYA.ChannelPair = function() {
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0
}
;
HUYA.ChannelPair.prototype._clone = function() {
    return new HUYA.ChannelPair
}
;
HUYA.ChannelPair.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ChannelPair.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ChannelPair.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lTid);
    t.writeInt64(1, this.lSid);
    t.writeInt64(2, this.lPid)
}
;
HUYA.ChannelPair.prototype.readFrom = function(t) {
    this.lTid = t.readInt64(0, false, this.lTid);
    this.lSid = t.readInt64(1, false, this.lSid);
    this.lPid = t.readInt64(2, false, this.lPid)
}
;
HUYA.UserIdentityInfo = function() {
    this.vDecorationPrefix = new Taf.Vector(new HUYA.DecorationInfo);
    this.vDecorationSuffix = new Taf.Vector(new HUYA.DecorationInfo)
}
;
HUYA.UserIdentityInfo.prototype._clone = function() {
    return new HUYA.UserIdentityInfo
}
;
HUYA.UserIdentityInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserIdentityInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserIdentityInfo.prototype.writeTo = function(t) {
    t.writeVector(0, this.vDecorationPrefix);
    t.writeVector(1, this.vDecorationSuffix)
}
;
HUYA.UserIdentityInfo.prototype.readFrom = function(t) {
    this.vDecorationPrefix = t.readVector(0, false, this.vDecorationPrefix);
    this.vDecorationSuffix = t.readVector(1, false, this.vDecorationSuffix)
}
;
HUYA.NobleLevelInfo = function() {
    this.iNobleLevel = 0;
    this.iAttrType = 0
}
;
HUYA.NobleLevelInfo.prototype._clone = function() {
    return new HUYA.NobleLevelInfo
}
;
HUYA.NobleLevelInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.NobleLevelInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.NobleLevelInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iNobleLevel);
    t.writeInt32(1, this.iAttrType)
}
;
HUYA.NobleLevelInfo.prototype.readFrom = function(t) {
    this.iNobleLevel = t.readInt32(0, false, this.iNobleLevel);
    this.iAttrType = t.readInt32(1, false, this.iAttrType)
}
;
HUYA.SuperFansConfig = function() {
    this.iSFFlag = 0;
    this.iSFDay = 0;
    this.iSFDayQuotaTimes = 0;
    this.iSFDayScoreTimes = 0;
    this.bIsSFDay = true;
    this.sSFGuideURL = "";
    this.iIsSFDay = 0
}
;
HUYA.SuperFansConfig.prototype._clone = function() {
    return new HUYA.SuperFansConfig
}
;
HUYA.SuperFansConfig.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SuperFansConfig.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SuperFansConfig.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iSFFlag);
    t.writeInt32(1, this.iSFDay);
    t.writeInt32(2, this.iSFDayQuotaTimes);
    t.writeInt32(3, this.iSFDayScoreTimes);
    t.writeBoolean(4, this.bIsSFDay);
    t.writeString(5, this.sSFGuideURL);
    t.writeInt32(6, this.iIsSFDay)
}
;
HUYA.SuperFansConfig.prototype.readFrom = function(t) {
    this.iSFFlag = t.readInt32(0, false, this.iSFFlag);
    this.iSFDay = t.readInt32(1, false, this.iSFDay);
    this.iSFDayQuotaTimes = t.readInt32(2, false, this.iSFDayQuotaTimes);
    this.iSFDayScoreTimes = t.readInt32(3, false, this.iSFDayScoreTimes);
    this.bIsSFDay = t.readBoolean(4, false, this.bIsSFDay);
    this.sSFGuideURL = t.readString(5, false, this.sSFGuideURL);
    this.iIsSFDay = t.readInt32(6, false, this.iIsSFDay)
}
;
HUYA.CustomBadgeLogoReq = function() {
    this.tUserId = new HUYA.UserId
}
;
HUYA.CustomBadgeLogoReq.prototype._clone = function() {
    return new HUYA.CustomBadgeLogoReq
}
;
HUYA.CustomBadgeLogoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.CustomBadgeLogoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.CustomBadgeLogoReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId)
}
;
HUYA.CustomBadgeLogoReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId)
}
;
HUYA.CustomBadgeLogoRsp = function() {
    this.vCustomBadgeItem = new Taf.Vector(new HUYA.CustomBadgeItem)
}
;
HUYA.CustomBadgeLogoRsp.prototype._clone = function() {
    return new HUYA.CustomBadgeLogoRsp
}
;
HUYA.CustomBadgeLogoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.CustomBadgeLogoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.CustomBadgeLogoRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vCustomBadgeItem)
}
;
HUYA.CustomBadgeLogoRsp.prototype.readFrom = function(t) {
    this.vCustomBadgeItem = t.readVector(0, false, this.vCustomBadgeItem)
}
;
HUYA.CustomBadgeItem = function() {
    this.vCustomBadgeItemId = new Taf.Vector(new HUYA.CustomBadgeItemId);
    this.sLogoUrl = ""
}
;
HUYA.CustomBadgeItem.prototype._clone = function() {
    return new HUYA.CustomBadgeItem
}
;
HUYA.CustomBadgeItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.CustomBadgeItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.CustomBadgeItem.prototype.writeTo = function(t) {
    t.writeVector(0, this.vCustomBadgeItemId);
    t.writeString(1, this.sLogoUrl)
}
;
HUYA.CustomBadgeItem.prototype.readFrom = function(t) {
    this.vCustomBadgeItemId = t.readVector(0, false, this.vCustomBadgeItemId);
    this.sLogoUrl = t.readString(1, false, this.sLogoUrl)
}
;
HUYA.CustomBadgeItemId = function() {
    this.iBadgeType = 0;
    this.lBadgeId = 0
}
;
HUYA.CustomBadgeItemId.prototype._clone = function() {
    return new HUYA.CustomBadgeItemId
}
;
HUYA.CustomBadgeItemId.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.CustomBadgeItemId.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.CustomBadgeItemId.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iBadgeType);
    t.writeInt64(1, this.lBadgeId)
}
;
HUYA.CustomBadgeItemId.prototype.readFrom = function(t) {
    this.iBadgeType = t.readInt32(0, false, this.iBadgeType);
    this.lBadgeId = t.readInt64(1, false, this.lBadgeId)
}
;
HUYA.GiftItemInfo = function() {
    this.iItemType = 0;
    this.iItemCount = 0;
    this.iItemValue = 0
}
;
HUYA.GiftItemInfo.prototype._clone = function() {
    return new HUYA.GiftItemInfo
}
;
HUYA.GiftItemInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GiftItemInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GiftItemInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iItemType);
    t.writeInt32(1, this.iItemCount);
    t.writeInt32(2, this.iItemValue)
}
;
HUYA.GiftItemInfo.prototype.readFrom = function(t) {
    this.iItemType = t.readInt32(0, false, this.iItemType);
    this.iItemCount = t.readInt32(1, false, this.iItemCount);
    this.iItemValue = t.readInt32(2, false, this.iItemValue)
}
;
HUYA.PrizeRecord = function() {
    this.lUid = 0;
    this.lPid = 0;
    this.iTimeStamp = 0;
    this.iSendItemType = 0;
    this.iSendItemCount = 0;
    this.iGiftBoxType = 0;
    this.iGiftBoxCount = 0;
    this.vRecvItem = new Taf.Vector(new HUYA.GiftItemInfo);
    this.sSendName = "";
    this.sRecvName = "";
    this.sPayId = "";
    this.tChipInfo = new HUYA.GiftChipInfo
}
;
HUYA.PrizeRecord.prototype._clone = function() {
    return new HUYA.PrizeRecord
}
;
HUYA.PrizeRecord.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PrizeRecord.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PrizeRecord.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lPid);
    t.writeInt32(2, this.iTimeStamp);
    t.writeInt32(3, this.iSendItemType);
    t.writeInt32(4, this.iSendItemCount);
    t.writeInt32(5, this.iGiftBoxType);
    t.writeInt32(6, this.iGiftBoxCount);
    t.writeVector(7, this.vRecvItem);
    t.writeString(8, this.sSendName);
    t.writeString(9, this.sRecvName);
    t.writeString(10, this.sPayId);
    t.writeStruct(11, this.tChipInfo)
}
;
HUYA.PrizeRecord.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.iTimeStamp = t.readInt32(2, false, this.iTimeStamp);
    this.iSendItemType = t.readInt32(3, false, this.iSendItemType);
    this.iSendItemCount = t.readInt32(4, false, this.iSendItemCount);
    this.iGiftBoxType = t.readInt32(5, false, this.iGiftBoxType);
    this.iGiftBoxCount = t.readInt32(6, false, this.iGiftBoxCount);
    this.vRecvItem = t.readVector(7, false, this.vRecvItem);
    this.sSendName = t.readString(8, false, this.sSendName);
    this.sRecvName = t.readString(9, false, this.sRecvName);
    this.sPayId = t.readString(10, false, this.sPayId);
    this.tChipInfo = t.readStruct(11, false, this.tChipInfo)
}
;
HUYA.GiftChipInfo = function() {
    this.iChipCount = 0;
    this.iChipMax = 0
}
;
HUYA.GiftChipInfo.prototype._clone = function() {
    return new HUYA.GiftChipInfo
}
;
HUYA.GiftChipInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GiftChipInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GiftChipInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iChipCount);
    t.writeInt32(1, this.iChipMax)
}
;
HUYA.GiftChipInfo.prototype.readFrom = function(t) {
    this.iChipCount = t.readInt32(0, false, this.iChipCount);
    this.iChipMax = t.readInt32(1, false, this.iChipMax)
}
;
HUYA.BoxScore = function() {
    this.lScore = 0;
    this.iNextTime = 0;
    this.lUid = 0;
    this.lLastScore = 0;
    this.iLastTime = 0;
    this.sNickName = "";
    this.sAvatar = "";
    this.sPidNickName = "";
    this.iStatus = 0;
    this.lOverScore = 0;
    this.lPid = 0;
    this.lTid = 0;
    this.lSid = 0;
    this.iSourceType = 0;
    this.iScreenType = 0;
    this.iRoomId = 0;
    this.iRemainTime = 0;
    this.iSuperCount = 0;
    this.lMinScore = 0;
    this.lMaxScore = 0;
    this.iItemType = 0;
    this.vActiveHour = new Taf.Vector(new Taf.INT32);
    this.iItemValue = 0;
    this.lNewScore = 0;
    this.lNewLastScore = 0;
    this.mNobleLevel = new Taf.Map(new Taf.INT64,new HUYA.NobleLevelInfo);
    this.sStatusMsg = "";
    this.sGiftName = "";
    this.iNextTimestamp = 0;
    this.tBigRecord = new HUYA.BigRecord
}
;
HUYA.BoxScore.prototype._clone = function() {
    return new HUYA.BoxScore
}
;
HUYA.BoxScore.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BoxScore.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BoxScore.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lScore);
    t.writeInt32(1, this.iNextTime);
    t.writeInt64(2, this.lUid);
    t.writeInt64(3, this.lLastScore);
    t.writeInt32(4, this.iLastTime);
    t.writeString(5, this.sNickName);
    t.writeString(6, this.sAvatar);
    t.writeString(7, this.sPidNickName);
    t.writeInt32(8, this.iStatus);
    t.writeInt64(9, this.lOverScore);
    t.writeInt64(10, this.lPid);
    t.writeInt64(11, this.lTid);
    t.writeInt64(12, this.lSid);
    t.writeInt32(13, this.iSourceType);
    t.writeInt32(14, this.iScreenType);
    t.writeInt32(15, this.iRoomId);
    t.writeInt32(16, this.iRemainTime);
    t.writeInt32(17, this.iSuperCount);
    t.writeInt64(18, this.lMinScore);
    t.writeInt64(19, this.lMaxScore);
    t.writeInt32(20, this.iItemType);
    t.writeVector(21, this.vActiveHour);
    t.writeInt32(22, this.iItemValue);
    t.writeInt64(23, this.lNewScore);
    t.writeInt64(24, this.lNewLastScore);
    t.writeMap(25, this.mNobleLevel);
    t.writeString(26, this.sStatusMsg);
    t.writeString(27, this.sGiftName);
    t.writeInt32(28, this.iNextTimestamp);
    t.writeStruct(29, this.tBigRecord)
}
;
HUYA.BoxScore.prototype.readFrom = function(t) {
    this.lScore = t.readInt64(0, false, this.lScore);
    this.iNextTime = t.readInt32(1, false, this.iNextTime);
    this.lUid = t.readInt64(2, false, this.lUid);
    this.lLastScore = t.readInt64(3, false, this.lLastScore);
    this.iLastTime = t.readInt32(4, false, this.iLastTime);
    this.sNickName = t.readString(5, false, this.sNickName);
    this.sAvatar = t.readString(6, false, this.sAvatar);
    this.sPidNickName = t.readString(7, false, this.sPidNickName);
    this.iStatus = t.readInt32(8, false, this.iStatus);
    this.lOverScore = t.readInt64(9, false, this.lOverScore);
    this.lPid = t.readInt64(10, false, this.lPid);
    this.lTid = t.readInt64(11, false, this.lTid);
    this.lSid = t.readInt64(12, false, this.lSid);
    this.iSourceType = t.readInt32(13, false, this.iSourceType);
    this.iScreenType = t.readInt32(14, false, this.iScreenType);
    this.iRoomId = t.readInt32(15, false, this.iRoomId);
    this.iRemainTime = t.readInt32(16, false, this.iRemainTime);
    this.iSuperCount = t.readInt32(17, false, this.iSuperCount);
    this.lMinScore = t.readInt64(18, false, this.lMinScore);
    this.lMaxScore = t.readInt64(19, false, this.lMaxScore);
    this.iItemType = t.readInt32(20, false, this.iItemType);
    this.vActiveHour = t.readVector(21, false, this.vActiveHour);
    this.iItemValue = t.readInt32(22, false, this.iItemValue);
    this.lNewScore = t.readInt64(23, false, this.lNewScore);
    this.lNewLastScore = t.readInt64(24, false, this.lNewLastScore);
    this.mNobleLevel = t.readMap(25, false, this.mNobleLevel);
    this.sStatusMsg = t.readString(26, false, this.sStatusMsg);
    this.sGiftName = t.readString(27, false, this.sGiftName);
    this.iNextTimestamp = t.readInt32(28, false, this.iNextTimestamp);
    this.tBigRecord = t.readStruct(29, false, this.tBigRecord)
}
;
HUYA.BoxScoreV2 = function() {
    this.stBoxScore1 = new HUYA.BoxScore;
    this.stBoxScore2 = new HUYA.BoxScore
}
;
HUYA.BoxScoreV2.prototype._clone = function() {
    return new HUYA.BoxScoreV2
}
;
HUYA.BoxScoreV2.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BoxScoreV2.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BoxScoreV2.prototype.writeTo = function(t) {
    t.writeStruct(0, this.stBoxScore1);
    t.writeStruct(1, this.stBoxScore2)
}
;
HUYA.BoxScoreV2.prototype.readFrom = function(t) {
    this.stBoxScore1 = t.readStruct(0, false, this.stBoxScore1);
    this.stBoxScore2 = t.readStruct(1, false, this.stBoxScore2)
}
;
HUYA.BigRecord = function() {
    this.iFlag = 0;
    this.iVersion = 0;
    this.iCountDown = 0;
    this.lUid = 0;
    this.sUidNickName = "";
    this.sUidAvatar = "";
    this.tPresenterInfo = new HUYA.PresenterChannelInfo;
    this.sPidNickName = "";
    this.sPidAvatar = "";
    this.mNobleLevel = new Taf.Map(new Taf.INT64,new HUYA.NobleLevelInfo);
    this.iItemType = 0
}
;
HUYA.BigRecord.prototype._clone = function() {
    return new HUYA.BigRecord
}
;
HUYA.BigRecord.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.BigRecord.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.BigRecord.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iFlag);
    t.writeInt32(1, this.iVersion);
    t.writeInt32(2, this.iCountDown);
    t.writeInt64(3, this.lUid);
    t.writeString(4, this.sUidNickName);
    t.writeString(5, this.sUidAvatar);
    t.writeStruct(6, this.tPresenterInfo);
    t.writeString(7, this.sPidNickName);
    t.writeString(8, this.sPidAvatar);
    t.writeMap(9, this.mNobleLevel);
    t.writeInt32(10, this.iItemType)
}
;
HUYA.BigRecord.prototype.readFrom = function(t) {
    this.iFlag = t.readInt32(0, false, this.iFlag);
    this.iVersion = t.readInt32(1, false, this.iVersion);
    this.iCountDown = t.readInt32(2, false, this.iCountDown);
    this.lUid = t.readInt64(3, false, this.lUid);
    this.sUidNickName = t.readString(4, false, this.sUidNickName);
    this.sUidAvatar = t.readString(5, false, this.sUidAvatar);
    this.tPresenterInfo = t.readStruct(6, false, this.tPresenterInfo);
    this.sPidNickName = t.readString(7, false, this.sPidNickName);
    this.sPidAvatar = t.readString(8, false, this.sPidAvatar);
    this.mNobleLevel = t.readMap(9, false, this.mNobleLevel);
    this.iItemType = t.readInt32(10, false, this.iItemType)
}
;
HUYA.GetBoxPanelInfoReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lPid = 0
}
;
HUYA.GetBoxPanelInfoReq.prototype._clone = function() {
    return new HUYA.GetBoxPanelInfoReq
}
;
HUYA.GetBoxPanelInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetBoxPanelInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetBoxPanelInfoReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lPid)
}
;
HUYA.GetBoxPanelInfoReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lPid = t.readInt64(1, false, this.lPid)
}
;
HUYA.GetBoxPanelInfoRsp = function() {
    this.tScoreInfo = new HUYA.BoxScore;
    this.tChipInfo = new HUYA.GiftChipInfo;
    this.vLowGiftList = new Taf.Vector(new HUYA.GiftItemInfo);
    this.vHighGiftList = new Taf.Vector(new HUYA.GiftItemInfo);
    this.vRecordList = new Taf.Vector(new HUYA.PrizeRecord);
    this.sSuperGiftUrl = "";
    this.lPid = 0;
    this.iRetCode = 0;
    this.iBoxFlag = 0;
    this.tScoreInfo2 = new HUYA.BoxScore
}
;
HUYA.GetBoxPanelInfoRsp.prototype._clone = function() {
    return new HUYA.GetBoxPanelInfoRsp
}
;
HUYA.GetBoxPanelInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetBoxPanelInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetBoxPanelInfoRsp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tScoreInfo);
    t.writeStruct(1, this.tChipInfo);
    t.writeVector(2, this.vLowGiftList);
    t.writeVector(3, this.vHighGiftList);
    t.writeVector(4, this.vRecordList);
    t.writeString(5, this.sSuperGiftUrl);
    t.writeInt64(6, this.lPid);
    t.writeInt32(7, this.iRetCode);
    t.writeInt32(9, this.iBoxFlag);
    t.writeStruct(10, this.tScoreInfo2)
}
;
HUYA.GetBoxPanelInfoRsp.prototype.readFrom = function(t) {
    this.tScoreInfo = t.readStruct(0, false, this.tScoreInfo);
    this.tChipInfo = t.readStruct(1, false, this.tChipInfo);
    this.vLowGiftList = t.readVector(2, false, this.vLowGiftList);
    this.vHighGiftList = t.readVector(3, false, this.vHighGiftList);
    this.vRecordList = t.readVector(4, false, this.vRecordList);
    this.sSuperGiftUrl = t.readString(5, false, this.sSuperGiftUrl);
    this.lPid = t.readInt64(6, false, this.lPid);
    this.iRetCode = t.readInt32(7, false, this.iRetCode);
    this.iBoxFlag = t.readInt32(9, false, this.iBoxFlag);
    this.tScoreInfo2 = t.readStruct(10, false, this.tScoreInfo2)
}
;
HUYA.UserPrizeRecordListReq = function() {
    this.tUserId = new HUYA.UserId;
    this.iStart = 0;
    this.iCount = 0
}
;
HUYA.UserPrizeRecordListReq.prototype._clone = function() {
    return new HUYA.UserPrizeRecordListReq
}
;
HUYA.UserPrizeRecordListReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserPrizeRecordListReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserPrizeRecordListReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt32(1, this.iStart);
    t.writeInt32(2, this.iCount)
}
;
HUYA.UserPrizeRecordListReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.iStart = t.readInt32(1, false, this.iStart);
    this.iCount = t.readInt32(2, false, this.iCount)
}
;
HUYA.UserPrizeRecordListRsp = function() {
    this.vRecordList = new Taf.Vector(new HUYA.PrizeRecord)
}
;
HUYA.UserPrizeRecordListRsp.prototype._clone = function() {
    return new HUYA.UserPrizeRecordListRsp
}
;
HUYA.UserPrizeRecordListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserPrizeRecordListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserPrizeRecordListRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vRecordList)
}
;
HUYA.UserPrizeRecordListRsp.prototype.readFrom = function(t) {
    this.vRecordList = t.readVector(0, false, this.vRecordList)
}
;
HUYA.WSRedirect = function() {
    this.vRemoveIps = new Taf.Vector(new Taf.STRING);
    this.sRedirectIp = ""
}
;
HUYA.WSRedirect.prototype._clone = function() {
    return new HUYA.WSRedirect
}
;
HUYA.WSRedirect.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSRedirect.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSRedirect.prototype.writeTo = function(t) {
    t.writeVector(0, this.vRemoveIps);
    t.writeString(1, this.sRedirectIp)
}
;
HUYA.WSRedirect.prototype.readFrom = function(t) {
    this.vRemoveIps = t.readVector(0, false, this.vRemoveIps);
    this.sRedirectIp = t.readString(1, false, this.sRedirectIp)
}
;
HUYA.WSPushMessage_V2 = function() {
    this.sGroupId = "";
    this.vMsgItem = new Taf.Vector(new HUYA.WSMsgItem)
}
;
HUYA.WSPushMessage_V2.prototype._clone = function() {
    return new HUYA.WSPushMessage_V2
}
;
HUYA.WSPushMessage_V2.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSPushMessage_V2.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSPushMessage_V2.prototype.writeTo = function(t) {
    t.writeString(0, this.sGroupId);
    t.writeVector(1, this.vMsgItem)
}
;
HUYA.WSPushMessage_V2.prototype.readFrom = function(t) {
    this.sGroupId = t.readString(0, false, this.sGroupId);
    this.vMsgItem = t.readVector(1, false, this.vMsgItem)
}
;
HUYA.WSMsgItem = function() {
    this.iUri = 0;
    this.sMsg = new Taf.BinBuffer;
    this.lMsgId = 0
}
;
HUYA.WSMsgItem.prototype._clone = function() {
    return new HUYA.WSMsgItem
}
;
HUYA.WSMsgItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSMsgItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSMsgItem.prototype.writeTo = function(t) {
    t.writeInt64(0, this.iUri);
    t.writeBytes(1, this.sMsg);
    t.writeInt64(2, this.lMsgId)
}
;
HUYA.WSMsgItem.prototype.readFrom = function(t) {
    this.iUri = t.readInt64(0, false, this.iUri);
    this.sMsg = t.readBytes(1, false, this.sMsg);
    this.lMsgId = t.readInt64(2, false, this.lMsgId)
}
;
HUYA.WSRegisterGroupReq = function() {
    this.vGroupId = new Taf.Vector(new Taf.STRING);
    this.sToken = ""
}
;
HUYA.WSRegisterGroupReq.prototype._clone = function() {
    return new HUYA.WSRegisterGroupReq
}
;
HUYA.WSRegisterGroupReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSRegisterGroupReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSRegisterGroupReq.prototype.writeTo = function(t) {
    t.writeVector(0, this.vGroupId);
    t.writeString(1, this.sToken)
}
;
HUYA.WSRegisterGroupReq.prototype.readFrom = function(t) {
    this.vGroupId = t.readVector(0, false, this.vGroupId);
    this.sToken = t.readString(1, false, this.sToken)
}
;
HUYA.WSRegisterGroupRsp = function() {
    this.iResCode = 0;
    this.vSupportP2PGroupId = new Taf.Vector(new Taf.STRING)
}
;
HUYA.WSRegisterGroupRsp.prototype._clone = function() {
    return new HUYA.WSRegisterGroupRsp
}
;
HUYA.WSRegisterGroupRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSRegisterGroupRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSRegisterGroupRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iResCode);
    t.writeVector(1, this.vSupportP2PGroupId)
}
;
HUYA.WSRegisterGroupRsp.prototype.readFrom = function(t) {
    this.iResCode = t.readInt32(0, false, this.iResCode);
    this.vSupportP2PGroupId = t.readVector(1, false, this.vSupportP2PGroupId)
}
;
HUYA.WSUnRegisterGroupReq = function() {
    this.vGroupId = new Taf.Vector(new Taf.STRING)
}
;
HUYA.WSUnRegisterGroupReq.prototype._clone = function() {
    return new HUYA.WSUnRegisterGroupReq
}
;
HUYA.WSUnRegisterGroupReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSUnRegisterGroupReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSUnRegisterGroupReq.prototype.writeTo = function(t) {
    t.writeVector(0, this.vGroupId)
}
;
HUYA.WSUnRegisterGroupReq.prototype.readFrom = function(t) {
    this.vGroupId = t.readVector(0, false, this.vGroupId)
}
;
HUYA.WSUnRegisterGroupRsp = function() {
    this.iResCode = 0
}
;
HUYA.WSUnRegisterGroupRsp.prototype._clone = function() {
    return new HUYA.WSUnRegisterGroupRsp
}
;
HUYA.WSUnRegisterGroupRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.WSUnRegisterGroupRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.WSUnRegisterGroupRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iResCode)
}
;
HUYA.WSUnRegisterGroupRsp.prototype.readFrom = function(t) {
    this.iResCode = t.readInt32(0, false, this.iResCode)
}
;
HUYA.GetTreasureBoxInfoReq = function() {
    this.tId = new HUYA.UserId;
    this.sChannel = "";
    this.sIp = "";
    this.lPid = 0
}
;
HUYA.GetTreasureBoxInfoReq.prototype._clone = function() {
    return new HUYA.GetTreasureBoxInfoReq
}
;
HUYA.GetTreasureBoxInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetTreasureBoxInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetTreasureBoxInfoReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeString(1, this.sChannel);
    t.writeString(2, this.sIp);
    t.writeInt64(3, this.lPid)
}
;
HUYA.GetTreasureBoxInfoReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.sChannel = t.readString(1, false, this.sChannel);
    this.sIp = t.readString(2, false, this.sIp);
    this.lPid = t.readInt64(3, false, this.lPid)
}
;
HUYA.GetTreasureBoxInfoRsp = function() {
    this.lUid = 0;
    this.vBoxTaskInfo = new Taf.Vector(new HUYA.BoxTaskInfo);
    this.iBoxLevel = 0;
    this.vADBoxInfo = new Taf.Vector(new HUYA.ADBoxTaskInfo);
    this.sBackGroundURL = "";
    this.iTipsCount = 0;
    this.sTipsPic = "";
    this.sBBGPic = ""
}
;
HUYA.GetTreasureBoxInfoRsp.prototype._clone = function() {
    return new HUYA.GetTreasureBoxInfoRsp
}
;
HUYA.GetTreasureBoxInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetTreasureBoxInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetTreasureBoxInfoRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeVector(1, this.vBoxTaskInfo);
    t.writeInt32(2, this.iBoxLevel);
    t.writeVector(3, this.vADBoxInfo);
    t.writeString(4, this.sBackGroundURL);
    t.writeInt32(5, this.iTipsCount);
    t.writeString(6, this.sTipsPic);
    t.writeString(7, this.sBBGPic)
}
;
HUYA.GetTreasureBoxInfoRsp.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.vBoxTaskInfo = t.readVector(1, false, this.vBoxTaskInfo);
    this.iBoxLevel = t.readInt32(2, false, this.iBoxLevel);
    this.vADBoxInfo = t.readVector(3, false, this.vADBoxInfo);
    this.sBackGroundURL = t.readString(4, false, this.sBackGroundURL);
    this.iTipsCount = t.readInt32(5, false, this.iTipsCount);
    this.sTipsPic = t.readString(6, false, this.sTipsPic);
    this.sBBGPic = t.readString(7, false, this.sBBGPic)
}
;
HUYA.ADBoxTaskInfo = function() {
    this.iTaskId = 0;
    this.iStat = 0;
    this.iADType = 0;
    this.iItemCount = 0;
    this.iRewardLevel = 0;
    this.sADPic = "";
    this.sGetPic = "";
    this.sGetJmp = "";
    this.sUnGetPic = "";
    this.sUnGetJmp = "";
    this.iGiftType = 0;
    this.sTitle = ""
}
;
HUYA.ADBoxTaskInfo.prototype._clone = function() {
    return new HUYA.ADBoxTaskInfo
}
;
HUYA.ADBoxTaskInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ADBoxTaskInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ADBoxTaskInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iTaskId);
    t.writeInt32(1, this.iStat);
    t.writeInt32(2, this.iADType);
    t.writeInt32(3, this.iItemCount);
    t.writeInt32(4, this.iRewardLevel);
    t.writeString(5, this.sADPic);
    t.writeString(6, this.sGetPic);
    t.writeString(7, this.sGetJmp);
    t.writeString(8, this.sUnGetPic);
    t.writeString(9, this.sUnGetJmp);
    t.writeInt32(10, this.iGiftType);
    t.writeString(11, this.sTitle)
}
;
HUYA.ADBoxTaskInfo.prototype.readFrom = function(t) {
    this.iTaskId = t.readInt32(0, false, this.iTaskId);
    this.iStat = t.readInt32(1, false, this.iStat);
    this.iADType = t.readInt32(2, false, this.iADType);
    this.iItemCount = t.readInt32(3, false, this.iItemCount);
    this.iRewardLevel = t.readInt32(4, false, this.iRewardLevel);
    this.sADPic = t.readString(5, false, this.sADPic);
    this.sGetPic = t.readString(6, false, this.sGetPic);
    this.sGetJmp = t.readString(7, false, this.sGetJmp);
    this.sUnGetPic = t.readString(8, false, this.sUnGetPic);
    this.sUnGetJmp = t.readString(9, false, this.sUnGetJmp);
    this.iGiftType = t.readInt32(10, false, this.iGiftType);
    this.sTitle = t.readString(11, false, this.sTitle)
}
;
HUYA.GetPresenterLiveScheduleInfoReq = function() {
    this.tId = new HUYA.UserId;
    this.lPresenterId = 0
}
;
HUYA.GetPresenterLiveScheduleInfoReq.prototype._clone = function() {
    return new HUYA.GetPresenterLiveScheduleInfoReq
}
;
HUYA.GetPresenterLiveScheduleInfoReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetPresenterLiveScheduleInfoReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetPresenterLiveScheduleInfoReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lPresenterId)
}
;
HUYA.GetPresenterLiveScheduleInfoReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lPresenterId = t.readInt64(1, false, this.lPresenterId)
}
;
HUYA.GetPresenterLiveScheduleInfoRsp = function() {
    this.sMessage = "";
    this.sSchedule = "";
    this.sDescription = "";
    this.lModifyTime = 0
}
;
HUYA.GetPresenterLiveScheduleInfoRsp.prototype._clone = function() {
    return new HUYA.GetPresenterLiveScheduleInfoRsp
}
;
HUYA.GetPresenterLiveScheduleInfoRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetPresenterLiveScheduleInfoRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetPresenterLiveScheduleInfoRsp.prototype.writeTo = function(t) {
    t.writeString(0, this.sMessage);
    t.writeString(1, this.sSchedule);
    t.writeString(2, this.sDescription);
    t.writeInt64(3, this.lModifyTime)
}
;
HUYA.GetPresenterLiveScheduleInfoRsp.prototype.readFrom = function(t) {
    this.sMessage = t.readString(0, false, this.sMessage);
    this.sSchedule = t.readString(1, false, this.sSchedule);
    this.sDescription = t.readString(2, false, this.sDescription);
    this.lModifyTime = t.readInt64(3, false, this.lModifyTime)
}
;
HUYA.PresenterLevelProgressReq = function() {
    this.tId = new HUYA.UserId;
    this.lPid = 0
}
;
HUYA.PresenterLevelProgressReq.prototype._clone = function() {
    return new HUYA.PresenterLevelProgressReq
}
;
HUYA.PresenterLevelProgressReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterLevelProgressReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterLevelProgressReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lPid)
}
;
HUYA.PresenterLevelProgressReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lPid = t.readInt64(1, false, this.lPid)
}
;
HUYA.PresenterLevelProgressRsp = function() {
    this.tLevelBase = new HUYA.PresenterLevelBase;
    this.lCurrLevelExp = 0;
    this.lNextLevelExp = 0;
    this.lNext2LevelExp = 0;
    this.tGrowInfo = new HUYA.PresenterGrowInfo;
    this.iLightUp = 0;
    this.iLevelMax = 0
}
;
HUYA.PresenterLevelProgressRsp.prototype._clone = function() {
    return new HUYA.PresenterLevelProgressRsp
}
;
HUYA.PresenterLevelProgressRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterLevelProgressRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterLevelProgressRsp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tLevelBase);
    t.writeInt64(1, this.lCurrLevelExp);
    t.writeInt64(2, this.lNextLevelExp);
    t.writeInt64(3, this.lNext2LevelExp);
    t.writeStruct(4, this.tGrowInfo);
    t.writeInt32(5, this.iLightUp);
    t.writeInt32(6, this.iLevelMax)
}
;
HUYA.PresenterLevelProgressRsp.prototype.readFrom = function(t) {
    this.tLevelBase = t.readStruct(0, false, this.tLevelBase);
    this.lCurrLevelExp = t.readInt64(1, false, this.lCurrLevelExp);
    this.lNextLevelExp = t.readInt64(2, false, this.lNextLevelExp);
    this.lNext2LevelExp = t.readInt64(3, false, this.lNext2LevelExp);
    this.tGrowInfo = t.readStruct(4, false, this.tGrowInfo);
    this.iLightUp = t.readInt32(5, false, this.iLightUp);
    this.iLevelMax = t.readInt32(6, false, this.iLevelMax)
}
;
HUYA.PresenterLevelNotice = function() {
    this.tLevelBase = new HUYA.PresenterLevelBase;
    this.lCurrLevelExp = 0;
    this.lNextLevelExp = 0;
    this.lNext2LevelExp = 0;
    this.tGrowInfo = new HUYA.PresenterGrowInfo;
    this.iLightUp = 0;
    this.iLevelMax = 0
}
;
HUYA.PresenterLevelNotice.prototype._clone = function() {
    return new HUYA.PresenterLevelNotice
}
;
HUYA.PresenterLevelNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterLevelNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterLevelNotice.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tLevelBase);
    t.writeInt64(1, this.lCurrLevelExp);
    t.writeInt64(2, this.lNextLevelExp);
    t.writeInt64(3, this.lNext2LevelExp);
    t.writeStruct(4, this.tGrowInfo);
    t.writeInt32(5, this.iLightUp);
    t.writeInt32(6, this.iLevelMax)
}
;
HUYA.PresenterLevelNotice.prototype.readFrom = function(t) {
    this.tLevelBase = t.readStruct(0, false, this.tLevelBase);
    this.lCurrLevelExp = t.readInt64(1, false, this.lCurrLevelExp);
    this.lNextLevelExp = t.readInt64(2, false, this.lNextLevelExp);
    this.lNext2LevelExp = t.readInt64(3, false, this.lNext2LevelExp);
    this.tGrowInfo = t.readStruct(4, false, this.tGrowInfo);
    this.iLightUp = t.readInt32(5, false, this.iLightUp);
    this.iLevelMax = t.readInt32(6, false, this.iLevelMax)
}
;
HUYA.PresenterLevelBase = function() {
    this.lPid = 0;
    this.iLevel = 0;
    this.lExp = 0
}
;
HUYA.PresenterLevelBase.prototype._clone = function() {
    return new HUYA.PresenterLevelBase
}
;
HUYA.PresenterLevelBase.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterLevelBase.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterLevelBase.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPid);
    t.writeInt32(1, this.iLevel);
    t.writeInt64(2, this.lExp)
}
;
HUYA.PresenterLevelBase.prototype.readFrom = function(t) {
    this.lPid = t.readInt64(0, false, this.lPid);
    this.iLevel = t.readInt32(1, false, this.iLevel);
    this.lExp = t.readInt64(2, false, this.lExp)
}
;
HUYA.PresenterGrowInfo = function() {
    this.lWeeklyExp = 0;
    this.lWeeklyIncExp = 0;
    this.iRank = 0
}
;
HUYA.PresenterGrowInfo.prototype._clone = function() {
    return new HUYA.PresenterGrowInfo
}
;
HUYA.PresenterGrowInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterGrowInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterGrowInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lWeeklyExp);
    t.writeInt64(1, this.lWeeklyIncExp);
    t.writeInt32(2, this.iRank)
}
;
HUYA.PresenterGrowInfo.prototype.readFrom = function(t) {
    this.lWeeklyExp = t.readInt64(0, false, this.lWeeklyExp);
    this.lWeeklyIncExp = t.readInt64(1, false, this.lWeeklyIncExp);
    this.iRank = t.readInt32(2, false, this.iRank)
}
;
HUYA.PresenterLevelBaseReq = function() {
    this.tId = new HUYA.UserId;
    this.lPid = 0
}
;
HUYA.PresenterLevelBaseReq.prototype._clone = function() {
    return new HUYA.PresenterLevelBaseReq
}
;
HUYA.PresenterLevelBaseReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterLevelBaseReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterLevelBaseReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lPid)
}
;
HUYA.PresenterLevelBaseReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lPid = t.readInt64(1, false, this.lPid)
}
;
HUYA.PresenterLevelBaseRsp = function() {
    this.tLevelBase = new HUYA.PresenterLevelBase;
    this.iLightUp = 0
}
;
HUYA.PresenterLevelBaseRsp.prototype._clone = function() {
    return new HUYA.PresenterLevelBaseRsp
}
;
HUYA.PresenterLevelBaseRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PresenterLevelBaseRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PresenterLevelBaseRsp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tLevelBase);
    t.writeInt32(1, this.iLightUp)
}
;
HUYA.PresenterLevelBaseRsp.prototype.readFrom = function(t) {
    this.tLevelBase = t.readStruct(0, false, this.tLevelBase);
    this.iLightUp = t.readInt32(1, false, this.iLightUp)
}
;
HUYA.ItemLotterySubNotice = function() {
    this.lSenderUid = 0;
    this.lPid = 0;
    this.sSenderNick = "";
    this.sPidNick = "";
    this.lTid = 0;
    this.lSid = 0;
    this.iItemType = 0;
    this.iItemCount = 0;
    this.iLotteryItemType = 0;
    this.iLotteryItemCount = 0;
    this.sOrderId = "";
    this.sExpand = "";
    this.sSenderIcon = "";
    this.sPresenterIcon = "";
    this.lHomeOwnerUid = 0;
    this.tNobleLevel = new HUYA.NobleLevelInfo
}
;
HUYA.ItemLotterySubNotice.prototype._clone = function() {
    return new HUYA.ItemLotterySubNotice
}
;
HUYA.ItemLotterySubNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ItemLotterySubNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ItemLotterySubNotice.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lSenderUid);
    t.writeInt64(1, this.lPid);
    t.writeString(2, this.sSenderNick);
    t.writeString(3, this.sPidNick);
    t.writeInt64(4, this.lTid);
    t.writeInt64(5, this.lSid);
    t.writeInt32(6, this.iItemType);
    t.writeInt32(7, this.iItemCount);
    t.writeInt32(8, this.iLotteryItemType);
    t.writeInt32(9, this.iLotteryItemCount);
    t.writeString(10, this.sOrderId);
    t.writeString(11, this.sExpand);
    t.writeString(12, this.sSenderIcon);
    t.writeString(13, this.sPresenterIcon);
    t.writeInt64(14, this.lHomeOwnerUid);
    t.writeStruct(15, this.tNobleLevel)
}
;
HUYA.ItemLotterySubNotice.prototype.readFrom = function(t) {
    this.lSenderUid = t.readInt64(0, false, this.lSenderUid);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.sSenderNick = t.readString(2, false, this.sSenderNick);
    this.sPidNick = t.readString(3, false, this.sPidNick);
    this.lTid = t.readInt64(4, false, this.lTid);
    this.lSid = t.readInt64(5, false, this.lSid);
    this.iItemType = t.readInt32(6, false, this.iItemType);
    this.iItemCount = t.readInt32(7, false, this.iItemCount);
    this.iLotteryItemType = t.readInt32(8, false, this.iLotteryItemType);
    this.iLotteryItemCount = t.readInt32(9, false, this.iLotteryItemCount);
    this.sOrderId = t.readString(10, false, this.sOrderId);
    this.sExpand = t.readString(11, false, this.sExpand);
    this.sSenderIcon = t.readString(12, false, this.sSenderIcon);
    this.sPresenterIcon = t.readString(13, false, this.sPresenterIcon);
    this.lHomeOwnerUid = t.readInt64(14, false, this.lHomeOwnerUid);
    this.tNobleLevel = t.readStruct(15, false, this.tNobleLevel)
}
;
HUYA.ItemLotteryGameNotice = function() {
    this.sSenderNick = "";
    this.sPidNick = "";
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0;
    this.iItemType = 0;
    this.iItemCount = 0;
    this.iLotteryItemType = 0;
    this.iLotteryItemCount = 0
}
;
HUYA.ItemLotteryGameNotice.prototype._clone = function() {
    return new HUYA.ItemLotteryGameNotice
}
;
HUYA.ItemLotteryGameNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ItemLotteryGameNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ItemLotteryGameNotice.prototype.writeTo = function(t) {
    t.writeString(0, this.sSenderNick);
    t.writeString(1, this.sPidNick);
    t.writeInt64(2, this.lTid);
    t.writeInt64(3, this.lSid);
    t.writeInt64(4, this.lPid);
    t.writeInt32(5, this.iItemType);
    t.writeInt64(6, this.iItemCount);
    t.writeInt32(7, this.iLotteryItemType);
    t.writeInt32(8, this.iLotteryItemCount)
}
;
HUYA.ItemLotteryGameNotice.prototype.readFrom = function(t) {
    this.sSenderNick = t.readString(0, false, this.sSenderNick);
    this.sPidNick = t.readString(1, false, this.sPidNick);
    this.lTid = t.readInt64(2, false, this.lTid);
    this.lSid = t.readInt64(3, false, this.lSid);
    this.lPid = t.readInt64(4, false, this.lPid);
    this.iItemType = t.readInt32(5, false, this.iItemType);
    this.iItemCount = t.readInt64(6, false, this.iItemCount);
    this.iLotteryItemType = t.readInt32(7, false, this.iLotteryItemType);
    this.iLotteryItemCount = t.readInt32(8, false, this.iLotteryItemCount)
}
;
HUYA.GetRctTimedMessageReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lPid = 0;
    this.lTid = 0;
    this.lSid = 0
}
;
HUYA.GetRctTimedMessageReq.prototype._clone = function() {
    return new HUYA.GetRctTimedMessageReq
}
;
HUYA.GetRctTimedMessageReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetRctTimedMessageReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetRctTimedMessageReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lPid);
    t.writeInt64(2, this.lTid);
    t.writeInt64(3, this.lSid)
}
;
HUYA.GetRctTimedMessageReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.lTid = t.readInt64(2, false, this.lTid);
    this.lSid = t.readInt64(3, false, this.lSid)
}
;
HUYA.GetRctTimedMessageRsp = function() {
    this.vTimedMesasgeNotice = new Taf.Vector(new HUYA.TimedMessageNotice)
}
;
HUYA.GetRctTimedMessageRsp.prototype._clone = function() {
    return new HUYA.GetRctTimedMessageRsp
}
;
HUYA.GetRctTimedMessageRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetRctTimedMessageRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetRctTimedMessageRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vTimedMesasgeNotice)
}
;
HUYA.GetRctTimedMessageRsp.prototype.readFrom = function(t) {
    this.vTimedMesasgeNotice = t.readVector(0, false, this.vTimedMesasgeNotice)
}
;
HUYA.TimedMessageNotice = function() {
    this.tNotice = new HUYA.MessageNotice;
    this.lCreatedTime = 0
}
;
HUYA.TimedMessageNotice.prototype._clone = function() {
    return new HUYA.TimedMessageNotice
}
;
HUYA.TimedMessageNotice.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.TimedMessageNotice.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.TimedMessageNotice.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tNotice);
    t.writeInt64(1, this.lCreatedTime)
}
;
HUYA.TimedMessageNotice.prototype.readFrom = function(t) {
    this.tNotice = t.readStruct(0, false, this.tNotice);
    this.lCreatedTime = t.readInt64(1, false, this.lCreatedTime)
}
;
var GUESS = GUESS || {};
GUESS.GetGuessOptionReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lTid = 0;
    this.lSid = 0;
    this.lGuessId = 0;
    this.lPid = 0
}
;
GUESS.GetGuessOptionReq.prototype._clone = function() {
    return new GUESS.GetGuessOptionReq
}
;
GUESS.GetGuessOptionReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
GUESS.GetGuessOptionReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
GUESS.GetGuessOptionReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lTid);
    t.writeInt64(2, this.lSid);
    t.writeInt64(3, this.lGuessId);
    t.writeInt64(4, this.lPid)
}
;
GUESS.GetGuessOptionReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lTid = t.readInt64(1, false, this.lTid);
    this.lSid = t.readInt64(2, false, this.lSid);
    this.lGuessId = t.readInt64(3, false, this.lGuessId);
    this.lPid = t.readInt64(4, false, this.lPid)
}
;
GUESS.GetGuessOptionRsp = function() {
    this.iRet = 0;
    this.tInfo = new GUESS.GuessInfo;
    this.iMaxUserSize = 0;
    this.vOptionSize = new Taf.Vector(new Taf.INT32);
    this.iOptionIndex = -1
}
;
GUESS.GetGuessOptionRsp.prototype._clone = function() {
    return new GUESS.GetGuessOptionRsp
}
;
GUESS.GetGuessOptionRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
GUESS.GetGuessOptionRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
GUESS.GetGuessOptionRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRet);
    t.writeStruct(1, this.tInfo);
    t.writeInt32(2, this.iMaxUserSize);
    t.writeVector(3, this.vOptionSize);
    t.writeInt32(4, this.iOptionIndex)
}
;
GUESS.GetGuessOptionRsp.prototype.readFrom = function(t) {
    this.iRet = t.readInt32(0, false, this.iRet);
    this.tInfo = t.readStruct(1, false, this.tInfo);
    this.iMaxUserSize = t.readInt32(2, false, this.iMaxUserSize);
    this.vOptionSize = t.readVector(3, false, this.vOptionSize);
    this.iOptionIndex = t.readInt32(4, false, this.iOptionIndex)
}
;
GUESS.SelectItemReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lGuessId = 0;
    this.iOptionIndex = 0;
    this.lTid = 0;
    this.lSid = 0;
    this.lPid = 0;
    this.sNickName = ""
}
;
GUESS.SelectItemReq.prototype._clone = function() {
    return new GUESS.SelectItemReq
}
;
GUESS.SelectItemReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
GUESS.SelectItemReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
GUESS.SelectItemReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lGuessId);
    t.writeInt32(2, this.iOptionIndex);
    t.writeInt64(3, this.lTid);
    t.writeInt64(4, this.lSid);
    t.writeInt64(5, this.lPid);
    t.writeString(6, this.sNickName)
}
;
GUESS.SelectItemReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lGuessId = t.readInt64(1, false, this.lGuessId);
    this.iOptionIndex = t.readInt32(2, false, this.iOptionIndex);
    this.lTid = t.readInt64(3, false, this.lTid);
    this.lSid = t.readInt64(4, false, this.lSid);
    this.lPid = t.readInt64(5, false, this.lPid);
    this.sNickName = t.readString(6, false, this.sNickName)
}
;
GUESS.SelectItemRsp = function() {
    this.iRet = 0;
    this.lGuessId = 0
}
;
GUESS.SelectItemRsp.prototype._clone = function() {
    return new GUESS.SelectItemRsp
}
;
GUESS.SelectItemRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
GUESS.SelectItemRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
GUESS.SelectItemRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRet);
    t.writeInt64(1, this.lGuessId)
}
;
GUESS.SelectItemRsp.prototype.readFrom = function(t) {
    this.iRet = t.readInt32(0, false, this.iRet);
    this.lGuessId = t.readInt64(1, false, this.lGuessId)
}
;
GUESS.GetUserLotteryReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lGuessId = 0;
    this.lPid = 0
}
;
GUESS.GetUserLotteryReq.prototype._clone = function() {
    return new GUESS.GetUserLotteryReq
}
;
GUESS.GetUserLotteryReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
GUESS.GetUserLotteryReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
GUESS.GetUserLotteryReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lGuessId);
    t.writeInt64(2, this.lPid)
}
;
GUESS.GetUserLotteryReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lGuessId = t.readInt64(1, false, this.lGuessId);
    this.lPid = t.readInt64(2, false, this.lPid)
}
;
GUESS.GetUserLotteryRsp = function() {
    this.iRet = 0;
    this.vList = new Taf.Vector(new GUESS.Lottery);
    this.lGuessId = 0;
    this.lPid = 0
}
;
GUESS.GetUserLotteryRsp.prototype._clone = function() {
    return new GUESS.GetUserLotteryRsp
}
;
GUESS.GetUserLotteryRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
GUESS.GetUserLotteryRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
GUESS.GetUserLotteryRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRet);
    t.writeVector(1, this.vList);
    t.writeInt64(2, this.lGuessId);
    t.writeInt64(3, this.lPid)
}
;
GUESS.GetUserLotteryRsp.prototype.readFrom = function(t) {
    this.iRet = t.readInt32(0, false, this.iRet);
    this.vList = t.readVector(1, false, this.vList);
    this.lGuessId = t.readInt64(2, false, this.lGuessId);
    this.lPid = t.readInt64(3, false, this.lPid)
}
;
GUESS.DrawLotteryReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lGuessId = 0;
    this.iReward = 0
}
;
GUESS.DrawLotteryReq.prototype._clone = function() {
    return new GUESS.DrawLotteryReq
}
;
GUESS.DrawLotteryReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
GUESS.DrawLotteryReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
GUESS.DrawLotteryReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lGuessId);
    t.writeInt32(2, this.iReward)
}
;
GUESS.DrawLotteryReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lGuessId = t.readInt64(1, false, this.lGuessId);
    this.iReward = t.readInt32(2, false, this.iReward)
}
;
GUESS.DrawLotteryRsp = function() {
    this.iRet = 0;
    this.lGuessId = 0
}
;
GUESS.DrawLotteryRsp.prototype._clone = function() {
    return new GUESS.DrawLotteryRsp
}
;
GUESS.DrawLotteryRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
GUESS.DrawLotteryRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
GUESS.DrawLotteryRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRet);
    t.writeInt64(1, this.lGuessId)
}
;
GUESS.DrawLotteryRsp.prototype.readFrom = function(t) {
    this.iRet = t.readInt32(0, false, this.iRet);
    this.lGuessId = t.readInt64(1, false, this.lGuessId)
}
;
GUESS.GuessResult = function() {
    this.lGuessId = 0;
    this.lPid = 0;
    this.iReward = 0;
    this.iState = 0;
    this.iStartTime = 0;
    this.iOptionIndex = 0;
    this.iOptionUsers = 0;
    this.iRewardUsers = 0;
    this.iAllUsers = 0
}
;
GUESS.GuessResult.prototype._clone = function() {
    return new GUESS.GuessResult
}
;
GUESS.GuessResult.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
GUESS.GuessResult.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
GUESS.GuessResult.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lGuessId);
    t.writeInt64(1, this.lPid);
    t.writeInt32(2, this.iReward);
    t.writeInt32(3, this.iState);
    t.writeInt32(4, this.iStartTime);
    t.writeInt32(5, this.iOptionIndex);
    t.writeInt32(6, this.iOptionUsers);
    t.writeInt32(7, this.iRewardUsers);
    t.writeInt32(8, this.iAllUsers)
}
;
GUESS.GuessResult.prototype.readFrom = function(t) {
    this.lGuessId = t.readInt64(0, false, this.lGuessId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.iReward = t.readInt32(2, false, this.iReward);
    this.iState = t.readInt32(3, false, this.iState);
    this.iStartTime = t.readInt32(4, false, this.iStartTime);
    this.iOptionIndex = t.readInt32(5, false, this.iOptionIndex);
    this.iOptionUsers = t.readInt32(6, false, this.iOptionUsers);
    this.iRewardUsers = t.readInt32(7, false, this.iRewardUsers);
    this.iAllUsers = t.readInt32(8, false, this.iAllUsers)
}
;
GUESS.GuessInfo = function() {
    this.lGuessId = 0;
    this.lPid = 0;
    this.sGuessName = "";
    this.vOption = new Taf.Vector(new Taf.STRING);
    this.iPayType = 0;
    this.iReward = 0;
    this.iState = 0;
    this.iStartTime = 0
}
;
GUESS.GuessInfo.prototype._clone = function() {
    return new GUESS.GuessInfo
}
;
GUESS.GuessInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
GUESS.GuessInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
GUESS.GuessInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lGuessId);
    t.writeInt64(1, this.lPid);
    t.writeString(2, this.sGuessName);
    t.writeVector(3, this.vOption);
    t.writeInt32(4, this.iPayType);
    t.writeInt32(5, this.iReward);
    t.writeInt32(6, this.iState);
    t.writeInt32(7, this.iStartTime)
}
;
GUESS.GuessInfo.prototype.readFrom = function(t) {
    this.lGuessId = t.readInt64(0, false, this.lGuessId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.sGuessName = t.readString(2, false, this.sGuessName);
    this.vOption = t.readVector(3, false, this.vOption);
    this.iPayType = t.readInt32(4, false, this.iPayType);
    this.iReward = t.readInt32(5, false, this.iReward);
    this.iState = t.readInt32(6, false, this.iState);
    this.iStartTime = t.readInt32(7, false, this.iStartTime)
}
;
GUESS.Lottery = function() {
    this.lGuessId = 0;
    this.lUid = 0;
    this.iTime = 0;
    this.iReward = 0;
    this.iDrawedFlag = 0;
    this.iRewardType = 0;
    this.lPid = 0
}
;
GUESS.Lottery.prototype._clone = function() {
    return new GUESS.Lottery
}
;
GUESS.Lottery.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
GUESS.Lottery.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
GUESS.Lottery.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lGuessId);
    t.writeInt64(1, this.lUid);
    t.writeInt32(2, this.iTime);
    t.writeInt32(3, this.iReward);
    t.writeInt32(4, this.iDrawedFlag);
    t.writeInt32(5, this.iRewardType);
    t.writeInt64(6, this.lPid)
}
;
GUESS.Lottery.prototype.readFrom = function(t) {
    this.lGuessId = t.readInt64(0, false, this.lGuessId);
    this.lUid = t.readInt64(1, false, this.lUid);
    this.iTime = t.readInt32(2, false, this.iTime);
    this.iReward = t.readInt32(3, false, this.iReward);
    this.iDrawedFlag = t.readInt32(4, false, this.iDrawedFlag);
    this.iRewardType = t.readInt32(5, false, this.iRewardType);
    this.lPid = t.readInt64(6, false, this.lPid)
}
;
GUESS.GetDragonReq = function() {
    this.iDragonId = 0;
    this.iDragonType = 0;
    this.lPid = 0
}
;
GUESS.GetDragonReq.prototype._clone = function() {
    return new GUESS.GetDragonReq
}
;
GUESS.GetDragonReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
GUESS.GetDragonReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
GUESS.GetDragonReq.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iDragonId);
    t.writeInt32(1, this.iDragonType);
    t.writeInt64(2, this.lPid)
}
;
GUESS.GetDragonReq.prototype.readFrom = function(t) {
    this.iDragonId = t.readInt32(0, false, this.iDragonId);
    this.iDragonType = t.readInt32(1, false, this.iDragonType);
    this.lPid = t.readInt64(2, false, this.lPid)
}
;
GUESS.GetDragonRsp = function() {
    this.iRet = 0;
    this.iDragonId = 0;
    this.iDragonType = 0;
    this.iStatus = 0;
    this.iRemainTime = 0
}
;
GUESS.GetDragonRsp.prototype._clone = function() {
    return new GUESS.GetDragonRsp
}
;
GUESS.GetDragonRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
GUESS.GetDragonRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
GUESS.GetDragonRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRet);
    t.writeInt32(1, this.iDragonId);
    t.writeInt32(2, this.iDragonType);
    t.writeInt32(3, this.iStatus);
    t.writeInt32(4, this.iRemainTime)
}
;
GUESS.GetDragonRsp.prototype.readFrom = function(t) {
    this.iRet = t.readInt32(0, false, this.iRet);
    this.iDragonId = t.readInt32(1, false, this.iDragonId);
    this.iDragonType = t.readInt32(2, false, this.iDragonType);
    this.iStatus = t.readInt32(3, false, this.iStatus);
    this.iRemainTime = t.readInt32(4, false, this.iRemainTime)
}
;
var QAGuessWatchLive = QAGuessWatchLive || {};
QAGuessWatchLive.QAGuessInfoPanel = function() {
    this.lGuessId = 0;
    this.lPid = 0;
    this.iStatus = 0;
    this.iQTime = 0;
    this.iRewardCount = 0;
    this.sOtherReward = "";
    this.iOtherRewardCount = 0;
    this.sOtherRewardUrl = "";
    this.iEntryResident = 0
}
;
QAGuessWatchLive.QAGuessInfoPanel.prototype._clone = function() {
    return new QAGuessWatchLive.QAGuessInfoPanel
}
;
QAGuessWatchLive.QAGuessInfoPanel.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
QAGuessWatchLive.QAGuessInfoPanel.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
QAGuessWatchLive.QAGuessInfoPanel.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lGuessId);
    t.writeInt64(1, this.lPid);
    t.writeInt32(2, this.iStatus);
    t.writeInt32(3, this.iQTime);
    t.writeInt32(4, this.iRewardCount);
    t.writeString(5, this.sOtherReward);
    t.writeInt32(6, this.iOtherRewardCount);
    t.writeString(7, this.sOtherRewardUrl);
    t.writeInt32(8, this.iEntryResident)
}
;
QAGuessWatchLive.QAGuessInfoPanel.prototype.readFrom = function(t) {
    this.lGuessId = t.readInt64(0, false, this.lGuessId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.iStatus = t.readInt32(2, false, this.iStatus);
    this.iQTime = t.readInt32(3, false, this.iQTime);
    this.iRewardCount = t.readInt32(4, false, this.iRewardCount);
    this.sOtherReward = t.readString(5, false, this.sOtherReward);
    this.iOtherRewardCount = t.readInt32(6, false, this.iOtherRewardCount);
    this.sOtherRewardUrl = t.readString(7, false, this.sOtherRewardUrl);
    this.iEntryResident = t.readInt32(8, false, this.iEntryResident)
}
;
QAGuessWatchLive.QAGuessGetUserPanelReq = function() {
    this.lPid = 0;
    this.lUid = 0
}
;
QAGuessWatchLive.QAGuessGetUserPanelReq.prototype._clone = function() {
    return new QAGuessWatchLive.QAGuessGetUserPanelReq
}
;
QAGuessWatchLive.QAGuessGetUserPanelReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
QAGuessWatchLive.QAGuessGetUserPanelReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
QAGuessWatchLive.QAGuessGetUserPanelReq.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPid);
    t.writeInt64(1, this.lUid)
}
;
QAGuessWatchLive.QAGuessGetUserPanelReq.prototype.readFrom = function(t) {
    this.lPid = t.readInt64(0, false, this.lPid);
    this.lUid = t.readInt64(1, false, this.lUid)
}
;
QAGuessWatchLive.QAGuessGetUserPanelRsp = function() {
    this.GuessInfo = new QAGuessWatchLive.QAGuessInfoPanel;
    this.UserInfo = new QAGuessWatchLive.QAUserInfoPanel;
    this.GetRewardList = new QAGuessWatchLive.QAGetRewardListPanel
}
;
QAGuessWatchLive.QAGuessGetUserPanelRsp.prototype._clone = function() {
    return new QAGuessWatchLive.QAGuessGetUserPanelRsp
}
;
QAGuessWatchLive.QAGuessGetUserPanelRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
QAGuessWatchLive.QAGuessGetUserPanelRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
QAGuessWatchLive.QAGuessGetUserPanelRsp.prototype.writeTo = function(t) {
    t.writeStruct(0, this.GuessInfo);
    t.writeStruct(1, this.UserInfo);
    t.writeStruct(2, this.GetRewardList)
}
;
QAGuessWatchLive.QAGuessGetUserPanelRsp.prototype.readFrom = function(t) {
    this.GuessInfo = t.readStruct(0, false, this.GuessInfo);
    this.UserInfo = t.readStruct(1, false, this.UserInfo);
    this.GetRewardList = t.readStruct(2, false, this.GetRewardList)
}
;
QAGuessWatchLive.QAUserInfoPanel = function() {
    this.lPid = 0;
    this.lUid = 0;
    this.sMedalUrl = "";
    this.iExp = 0;
    this.iLifeCardCount = 0
}
;
QAGuessWatchLive.QAUserInfoPanel.prototype._clone = function() {
    return new QAGuessWatchLive.QAUserInfoPanel
}
;
QAGuessWatchLive.QAUserInfoPanel.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
QAGuessWatchLive.QAUserInfoPanel.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
QAGuessWatchLive.QAUserInfoPanel.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPid);
    t.writeInt64(1, this.lUid);
    t.writeString(2, this.sMedalUrl);
    t.writeInt32(3, this.iExp);
    t.writeInt32(4, this.iLifeCardCount)
}
;
QAGuessWatchLive.QAUserInfoPanel.prototype.readFrom = function(t) {
    this.lPid = t.readInt64(0, false, this.lPid);
    this.lUid = t.readInt64(1, false, this.lUid);
    this.sMedalUrl = t.readString(2, false, this.sMedalUrl);
    this.iExp = t.readInt32(3, false, this.iExp);
    this.iLifeCardCount = t.readInt32(4, false, this.iLifeCardCount)
}
;
QAGuessWatchLive.QAGetRewardListPanel = function() {
    this.lGuessId = 0;
    this.lPid = 0;
    this.vList = new Taf.Vector(new QAGuessWatchLive.QARankItem)
}
;
QAGuessWatchLive.QAGetRewardListPanel.prototype._clone = function() {
    return new QAGuessWatchLive.QAGetRewardListPanel
}
;
QAGuessWatchLive.QAGetRewardListPanel.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
QAGuessWatchLive.QAGetRewardListPanel.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
QAGuessWatchLive.QAGetRewardListPanel.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lGuessId);
    t.writeInt64(1, this.lPid);
    t.writeVector(2, this.vList)
}
;
QAGuessWatchLive.QAGetRewardListPanel.prototype.readFrom = function(t) {
    this.lGuessId = t.readInt64(0, false, this.lGuessId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.vList = t.readVector(2, false, this.vList)
}
;
QAGuessWatchLive.QARankItem = function() {
    this.iRank = -1;
    this.lUid = 0;
    this.sName = "";
    this.sLogoUrl = "";
    this.iReward = 0;
    this.vRewardInfo = new Taf.Vector(new QAGuessWatchLive.QAGiftInfo)
}
;
QAGuessWatchLive.QARankItem.prototype._clone = function() {
    return new QAGuessWatchLive.QARankItem
}
;
QAGuessWatchLive.QARankItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
QAGuessWatchLive.QARankItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
QAGuessWatchLive.QARankItem.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRank);
    t.writeInt64(1, this.lUid);
    t.writeString(2, this.sName);
    t.writeString(3, this.sLogoUrl);
    t.writeInt32(4, this.iReward);
    t.writeVector(5, this.vRewardInfo)
}
;
QAGuessWatchLive.QARankItem.prototype.readFrom = function(t) {
    this.iRank = t.readInt32(0, false, this.iRank);
    this.lUid = t.readInt64(1, false, this.lUid);
    this.sName = t.readString(2, false, this.sName);
    this.sLogoUrl = t.readString(3, false, this.sLogoUrl);
    this.iReward = t.readInt32(4, false, this.iReward);
    this.vRewardInfo = t.readVector(5, false, this.vRewardInfo)
}
;
QAGuessWatchLive.QAGiftInfo = function() {
    this.sGiftName = "";
    this.iGiftCount = 0
}
;
QAGuessWatchLive.QAGiftInfo.prototype._clone = function() {
    return new QAGuessWatchLive.QAGiftInfo
}
;
QAGuessWatchLive.QAGiftInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
QAGuessWatchLive.QAGiftInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
QAGuessWatchLive.QAGiftInfo.prototype.writeTo = function(t) {
    t.writeString(0, this.sGiftName);
    t.writeInt32(1, this.iGiftCount)
}
;
QAGuessWatchLive.QAGiftInfo.prototype.readFrom = function(t) {
    this.sGiftName = t.readString(0, false, this.sGiftName);
    this.iGiftCount = t.readInt32(1, false, this.iGiftCount)
}
;
QAGuessWatchLive.QAGuessPreStartNotifyPanel = function() {
    this.lGuessId = 0;
    this.iPreNotifySec = 0
}
;
QAGuessWatchLive.QAGuessPreStartNotifyPanel.prototype._clone = function() {
    return new QAGuessWatchLive.QAGuessPreStartNotifyPanel
}
;
QAGuessWatchLive.QAGuessPreStartNotifyPanel.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
QAGuessWatchLive.QAGuessPreStartNotifyPanel.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
QAGuessWatchLive.QAGuessPreStartNotifyPanel.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lGuessId);
    t.writeInt32(1, this.iPreNotifySec)
}
;
QAGuessWatchLive.QAGuessPreStartNotifyPanel.prototype.readFrom = function(t) {
    this.lGuessId = t.readInt64(0, false, this.lGuessId);
    this.iPreNotifySec = t.readInt32(1, false, this.iPreNotifySec)
}
;
QAGuessWatchLive.QAGuessSettlePanel = function() {
    this.iResult = 0
}
;
QAGuessWatchLive.QAGuessSettlePanel.prototype._clone = function() {
    return new QAGuessWatchLive.QAGuessSettlePanel
}
;
QAGuessWatchLive.QAGuessSettlePanel.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
QAGuessWatchLive.QAGuessSettlePanel.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
QAGuessWatchLive.QAGuessSettlePanel.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iResult)
}
;
QAGuessWatchLive.QAGuessSettlePanel.prototype.readFrom = function(t) {
    this.iResult = t.readInt32(0, false, this.iResult)
}
;
HUYA.GetRMessageListReq = function() {
    this.tId = new HUYA.UserId;
    this.tScene = new HUYA.RMessageScene
}
;
HUYA.GetRMessageListReq.prototype._clone = function() {
    return new HUYA.GetRMessageListReq
}
;
HUYA.GetRMessageListReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetRMessageListReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetRMessageListReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeStruct(1, this.tScene)
}
;
HUYA.GetRMessageListReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.tScene = t.readStruct(1, false, this.tScene)
}
;
HUYA.RMessageScene = function() {
    this.lLiveId = 0;
    this.lPid = 0;
    this.lTid = 0;
    this.lSid = 0
}
;
HUYA.RMessageScene.prototype._clone = function() {
    return new HUYA.RMessageScene
}
;
HUYA.RMessageScene.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.RMessageScene.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.RMessageScene.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lLiveId);
    t.writeInt64(1, this.lPid);
    t.writeInt64(2, this.lTid);
    t.writeInt64(3, this.lSid)
}
;
HUYA.RMessageScene.prototype.readFrom = function(t) {
    this.lLiveId = t.readInt64(0, false, this.lLiveId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.lTid = t.readInt64(2, false, this.lTid);
    this.lSid = t.readInt64(3, false, this.lSid)
}
;
HUYA.GetRMessageListRsp = function() {
    this.vReportedMessages = new Taf.Vector(new HUYA.RMessage)
}
;
HUYA.GetRMessageListRsp.prototype._clone = function() {
    return new HUYA.GetRMessageListRsp
}
;
HUYA.GetRMessageListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetRMessageListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetRMessageListRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vReportedMessages)
}
;
HUYA.GetRMessageListRsp.prototype.readFrom = function(t) {
    this.vReportedMessages = t.readVector(0, false, this.vReportedMessages)
}
;
HUYA.RMessage = function() {
    this.tBase = new HUYA.RMessageBase;
    this.tStat = new HUYA.RMessageStatistics
}
;
HUYA.RMessage.prototype._clone = function() {
    return new HUYA.RMessage
}
;
HUYA.RMessage.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.RMessage.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.RMessage.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tBase);
    t.writeStruct(1, this.tStat)
}
;
HUYA.RMessage.prototype.readFrom = function(t) {
    this.tBase = t.readStruct(0, false, this.tBase);
    this.tStat = t.readStruct(1, false, this.tStat)
}
;
HUYA.RMessageBase = function() {
    this.lSenderUid = 0;
    this.sSenderNick = "";
    this.sContent = "";
    this.lPid = 0
}
;
HUYA.RMessageBase.prototype._clone = function() {
    return new HUYA.RMessageBase
}
;
HUYA.RMessageBase.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.RMessageBase.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.RMessageBase.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lSenderUid);
    t.writeString(1, this.sSenderNick);
    t.writeString(2, this.sContent);
    t.writeInt64(3, this.lPid)
}
;
HUYA.RMessageBase.prototype.readFrom = function(t) {
    this.lSenderUid = t.readInt64(0, false, this.lSenderUid);
    this.sSenderNick = t.readString(1, false, this.sSenderNick);
    this.sContent = t.readString(2, false, this.sContent);
    this.lPid = t.readInt64(3, false, this.lPid)
}
;
HUYA.RMessageStatistics = function() {
    this.iRCount = 0
}
;
HUYA.RMessageStatistics.prototype._clone = function() {
    return new HUYA.RMessageStatistics
}
;
HUYA.RMessageStatistics.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.RMessageStatistics.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.RMessageStatistics.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRCount)
}
;
HUYA.RMessageStatistics.prototype.readFrom = function(t) {
    this.iRCount = t.readInt32(0, false, this.iRCount)
}
;
HUYA.RMessageNotify = function() {
    this.lLiveId = 0
}
;
HUYA.RMessageNotify.prototype._clone = function() {
    return new HUYA.RMessageNotify
}
;
HUYA.RMessageNotify.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.RMessageNotify.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.RMessageNotify.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lLiveId)
}
;
HUYA.RMessageNotify.prototype.readFrom = function(t) {
    this.lLiveId = t.readInt64(0, false, this.lLiveId)
}
;
HUYA.RMessageSceneWb = function() {
    this.sLiveId = "";
    this.lPid = 0;
    this.lTid = 0;
    this.lSid = 0
}
;
HUYA.RMessageSceneWb.prototype._clone = function() {
    return new HUYA.RMessageSceneWb
}
;
HUYA.RMessageSceneWb.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.RMessageSceneWb.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.RMessageSceneWb.prototype.writeTo = function(t) {
    t.writeString(0, this.sLiveId);
    t.writeInt64(1, this.lPid);
    t.writeInt64(2, this.lTid);
    t.writeInt64(3, this.lSid)
}
;
HUYA.RMessageSceneWb.prototype.readFrom = function(t) {
    this.sLiveId = t.readString(0, false, this.sLiveId);
    this.lPid = t.readInt64(1, false, this.lPid);
    this.lTid = t.readInt64(2, false, this.lTid);
    this.lSid = t.readInt64(3, false, this.lSid)
}
;
HUYA.GetRMessageListWbReq = function() {
    this.tId = new HUYA.UserId;
    this.tScene = new HUYA.RMessageSceneWb
}
;
HUYA.GetRMessageListWbReq.prototype._clone = function() {
    return new HUYA.GetRMessageListWbReq
}
;
HUYA.GetRMessageListWbReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetRMessageListWbReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetRMessageListWbReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeStruct(1, this.tScene)
}
;
HUYA.GetRMessageListWbReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.tScene = t.readStruct(1, false, this.tScene)
}
;
HUYA.GetDirectorProgramListReq = function() {
    this.tId = new HUYA.UserId;
    this.lLiveUid = 0
}
;
HUYA.GetDirectorProgramListReq.prototype._clone = function() {
    return new HUYA.GetDirectorProgramListReq
}
;
HUYA.GetDirectorProgramListReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetDirectorProgramListReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetDirectorProgramListReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lLiveUid)
}
;
HUYA.GetDirectorProgramListReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lLiveUid = t.readInt64(1, false, this.lLiveUid)
}
;
HUYA.GetDirectorProgramListRsp = function() {
    this.vProgramList = new Taf.Vector(new HUYA.DirectorProgram);
    this.mPid2SubscribeStatus = new Taf.Map(new Taf.INT64,new Taf.INT32);
    this.bHasProgram = false
}
;
HUYA.GetDirectorProgramListRsp.prototype._clone = function() {
    return new HUYA.GetDirectorProgramListRsp
}
;
HUYA.GetDirectorProgramListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetDirectorProgramListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetDirectorProgramListRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vProgramList);
    t.writeMap(1, this.mPid2SubscribeStatus);
    t.writeBoolean(2, this.bHasProgram)
}
;
HUYA.GetDirectorProgramListRsp.prototype.readFrom = function(t) {
    this.vProgramList = t.readVector(0, false, this.vProgramList);
    this.mPid2SubscribeStatus = t.readMap(1, false, this.mPid2SubscribeStatus);
    this.bHasProgram = t.readBoolean(2, false, this.bHasProgram)
}
;
HUYA.DirectorProgram = function() {
    this.lPid = 0;
    this.sNick = "";
    this.sAvatarUrl = "";
    this.lStartTime = 0;
    this.bLive = true;
    this.sGameName = "";
    this.lYYId = 0;
    this.iRoomId = 0
}
;
HUYA.DirectorProgram.prototype._clone = function() {
    return new HUYA.DirectorProgram
}
;
HUYA.DirectorProgram.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.DirectorProgram.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.DirectorProgram.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPid);
    t.writeString(1, this.sNick);
    t.writeString(2, this.sAvatarUrl);
    t.writeInt64(3, this.lStartTime);
    t.writeBoolean(4, this.bLive);
    t.writeString(5, this.sGameName);
    t.writeInt64(6, this.lYYId);
    t.writeInt32(7, this.iRoomId)
}
;
HUYA.DirectorProgram.prototype.readFrom = function(t) {
    this.lPid = t.readInt64(0, false, this.lPid);
    this.sNick = t.readString(1, false, this.sNick);
    this.sAvatarUrl = t.readString(2, false, this.sAvatarUrl);
    this.lStartTime = t.readInt64(3, false, this.lStartTime);
    this.bLive = t.readBoolean(4, false, this.bLive);
    this.sGameName = t.readString(5, false, this.sGameName);
    this.lYYId = t.readInt64(6, false, this.lYYId);
    this.iRoomId = t.readInt32(7, false, this.iRoomId)
}
;
HUYA.GetPugcVipListReq = function() {
    this.tId = new HUYA.UserId;
    this.lPugcUid = 0
}
;
HUYA.GetPugcVipListReq.prototype._clone = function() {
    return new HUYA.GetPugcVipListReq
}
;
HUYA.GetPugcVipListReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetPugcVipListReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetPugcVipListReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lPugcUid)
}
;
HUYA.GetPugcVipListReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lPugcUid = t.readInt64(1, false, this.lPugcUid)
}
;
HUYA.GetPugcVipListRsp = function() {
    this.lPugcUid = 0;
    this.vVipList = new Taf.Vector(new HUYA.PugcVipInfo);
    this.iCurId = 0;
    this.lCurVipUid = 0
}
;
HUYA.GetPugcVipListRsp.prototype._clone = function() {
    return new HUYA.GetPugcVipListRsp
}
;
HUYA.GetPugcVipListRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetPugcVipListRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetPugcVipListRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPugcUid);
    t.writeVector(1, this.vVipList);
    t.writeInt32(2, this.iCurId);
    t.writeInt64(3, this.lCurVipUid)
}
;
HUYA.GetPugcVipListRsp.prototype.readFrom = function(t) {
    this.lPugcUid = t.readInt64(0, false, this.lPugcUid);
    this.vVipList = t.readVector(1, false, this.vVipList);
    this.iCurId = t.readInt32(2, false, this.iCurId);
    this.lCurVipUid = t.readInt64(3, false, this.lCurVipUid)
}
;
HUYA.PugcVipInfo = function() {
    this.id = 0;
    this.iStartTime = 0;
    this.iRoomId = 0;
    this.lYYId = 0;
    this.lUid = 0;
    this.lTopSid = 0;
    this.lSubSid = 0;
    this.sAvatarUrl = "";
    this.sNick = "";
    this.sGameName = "";
    this.iRelation = 0
}
;
HUYA.PugcVipInfo.prototype._clone = function() {
    return new HUYA.PugcVipInfo
}
;
HUYA.PugcVipInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.PugcVipInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.PugcVipInfo.prototype.writeTo = function(t) {
    t.writeInt32(0, this.id);
    t.writeInt32(1, this.iStartTime);
    t.writeInt32(2, this.iRoomId);
    t.writeInt64(3, this.lYYId);
    t.writeInt64(4, this.lUid);
    t.writeInt64(5, this.lTopSid);
    t.writeInt64(6, this.lSubSid);
    t.writeString(7, this.sAvatarUrl);
    t.writeString(8, this.sNick);
    t.writeString(9, this.sGameName);
    t.writeInt32(10, this.iRelation)
}
;
HUYA.PugcVipInfo.prototype.readFrom = function(t) {
    this.id = t.readInt32(0, false, this.id);
    this.iStartTime = t.readInt32(1, false, this.iStartTime);
    this.iRoomId = t.readInt32(2, false, this.iRoomId);
    this.lYYId = t.readInt64(3, false, this.lYYId);
    this.lUid = t.readInt64(4, false, this.lUid);
    this.lTopSid = t.readInt64(5, false, this.lTopSid);
    this.lSubSid = t.readInt64(6, false, this.lSubSid);
    this.sAvatarUrl = t.readString(7, false, this.sAvatarUrl);
    this.sNick = t.readString(8, false, this.sNick);
    this.sGameName = t.readString(9, false, this.sGameName);
    this.iRelation = t.readInt32(10, false, this.iRelation)
}
;
HUYA.IsPugcRoomReq = function() {
    this.tId = new HUYA.UserId;
    this.lUid = 0
}
;
HUYA.IsPugcRoomReq.prototype._clone = function() {
    return new HUYA.IsPugcRoomReq
}
;
HUYA.IsPugcRoomReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.IsPugcRoomReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.IsPugcRoomReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeInt64(1, this.lUid)
}
;
HUYA.IsPugcRoomReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.lUid = t.readInt64(1, false, this.lUid)
}
;
HUYA.IsPugcRoomRsp = function() {
    this.lUid = 0;
    this.iStat = 0;
    this.iLiveStat = 0
}
;
HUYA.IsPugcRoomRsp.prototype._clone = function() {
    return new HUYA.IsPugcRoomRsp
}
;
HUYA.IsPugcRoomRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.IsPugcRoomRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.IsPugcRoomRsp.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt32(1, this.iStat);
    t.writeInt32(2, this.iLiveStat)
}
;
HUYA.IsPugcRoomRsp.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.iStat = t.readInt32(1, false, this.iStat);
    this.iLiveStat = t.readInt32(2, false, this.iLiveStat)
}
;
HUYA.GetCurCheckRoomStatusReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lPid = 0
}
;
HUYA.GetCurCheckRoomStatusReq.prototype._clone = function() {
    return new HUYA.GetCurCheckRoomStatusReq
}
;
HUYA.GetCurCheckRoomStatusReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.GetCurCheckRoomStatusReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.GetCurCheckRoomStatusReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lPid)
}
;
HUYA.GetCurCheckRoomStatusReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lPid = t.readInt64(1, false, this.lPid)
}
;
HUYA.CheckRoomStatus = function() {
    this.vPidList = new Taf.Vector(new HUYA.CRPresenterInfo)
}
;
HUYA.CheckRoomStatus.prototype._clone = function() {
    return new HUYA.CheckRoomStatus
}
;
HUYA.CheckRoomStatus.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.CheckRoomStatus.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.CheckRoomStatus.prototype.writeTo = function(t) {
    t.writeVector(0, this.vPidList)
}
;
HUYA.CheckRoomStatus.prototype.readFrom = function(t) {
    this.vPidList = t.readVector(0, false, this.vPidList)
}
;
HUYA.CRPresenterInfo = function() {
    this.lPid = 0;
    this.sNickName = "";
    this.sIconUrl = "";
    this.lTopCid = 0;
    this.lSubCid = 0;
    this.iType = 0;
    this.lRoomId = 0;
    this.lYYID = 0;
    this.iSourceType = 0;
    this.iScreenType = 0;
    this.bCanReceiveRP = 0
}
;
HUYA.CRPresenterInfo.prototype._clone = function() {
    return new HUYA.CRPresenterInfo
}
;
HUYA.CRPresenterInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.CRPresenterInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.CRPresenterInfo.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lPid);
    t.writeString(1, this.sNickName);
    t.writeString(2, this.sIconUrl);
    t.writeInt64(3, this.lTopCid);
    t.writeInt64(4, this.lSubCid);
    t.writeInt32(5, this.iType);
    t.writeInt64(6, this.lRoomId);
    t.writeInt64(7, this.lYYID);
    t.writeInt32(8, this.iSourceType);
    t.writeInt32(9, this.iScreenType);
    t.writeInt32(10, this.bCanReceiveRP)
}
;
HUYA.CRPresenterInfo.prototype.readFrom = function(t) {
    this.lPid = t.readInt64(0, false, this.lPid);
    this.sNickName = t.readString(1, false, this.sNickName);
    this.sIconUrl = t.readString(2, false, this.sIconUrl);
    this.lTopCid = t.readInt64(3, false, this.lTopCid);
    this.lSubCid = t.readInt64(4, false, this.lSubCid);
    this.iType = t.readInt32(5, false, this.iType);
    this.lRoomId = t.readInt64(6, false, this.lRoomId);
    this.lYYID = t.readInt64(7, false, this.lYYID);
    this.iSourceType = t.readInt32(8, false, this.iSourceType);
    this.iScreenType = t.readInt32(9, false, this.iScreenType);
    this.bCanReceiveRP = t.readInt32(10, false, this.bCanReceiveRP)
}
;
HUYA.CKRoomUserEnterReq = function() {
    this.tUserId = new HUYA.UserId;
    this.lFromPid = 0;
    this.lToPid = 0
}
;
HUYA.CKRoomUserEnterReq.prototype._clone = function() {
    return new HUYA.CKRoomUserEnterReq
}
;
HUYA.CKRoomUserEnterReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.CKRoomUserEnterReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.CKRoomUserEnterReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt64(1, this.lFromPid);
    t.writeInt64(2, this.lToPid)
}
;
HUYA.CKRoomUserEnterReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.lFromPid = t.readInt64(1, false, this.lFromPid);
    this.lToPid = t.readInt64(2, false, this.lToPid)
}
;
HUYA.CheckRoomRsp = function() {
    this.iRet = 0;
    this.sDes = ""
}
;
HUYA.CheckRoomRsp.prototype._clone = function() {
    return new HUYA.CheckRoomRsp
}
;
HUYA.CheckRoomRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.CheckRoomRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.CheckRoomRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iRet);
    t.writeString(1, this.sDes)
}
;
HUYA.CheckRoomRsp.prototype.readFrom = function(t) {
    this.iRet = t.readInt32(0, false, this.iRet);
    this.sDes = t.readString(1, false, this.sDes)
}
;
HUYA.MatchRecLiveProfile = function() {
    this.lUid = 0;
    this.lYYId = 0;
    this.iRoomId = 0;
    this.sNick = "";
    this.sLiveDesc = "";
    this.sVideoCaptureUrl = ""
}
;
HUYA.MatchRecLiveProfile.prototype._clone = function() {
    return new HUYA.MatchRecLiveProfile
}
;
HUYA.MatchRecLiveProfile.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MatchRecLiveProfile.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MatchRecLiveProfile.prototype.writeTo = function(t) {
    t.writeInt64(0, this.lUid);
    t.writeInt64(1, this.lYYId);
    t.writeInt64(2, this.iRoomId);
    t.writeString(3, this.sNick);
    t.writeString(4, this.sLiveDesc);
    t.writeString(5, this.sVideoCaptureUrl)
}
;
HUYA.MatchRecLiveProfile.prototype.readFrom = function(t) {
    this.lUid = t.readInt64(0, false, this.lUid);
    this.lYYId = t.readInt64(1, false, this.lYYId);
    this.iRoomId = t.readInt64(2, false, this.iRoomId);
    this.sNick = t.readString(3, false, this.sNick);
    this.sLiveDesc = t.readString(4, false, this.sLiveDesc);
    this.sVideoCaptureUrl = t.readString(5, false, this.sVideoCaptureUrl)
}
;
HUYA.MatchRecLiveList = function() {
    this.iListId = 0;
    this.sTitle = "";
    this.vProfiles = new Taf.Vector(new HUYA.MatchRecLiveProfile);
    this.iShowTime = 0
}
;
HUYA.MatchRecLiveList.prototype._clone = function() {
    return new HUYA.MatchRecLiveList
}
;
HUYA.MatchRecLiveList.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MatchRecLiveList.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MatchRecLiveList.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iListId);
    t.writeString(1, this.sTitle);
    t.writeVector(2, this.vProfiles);
    t.writeInt32(3, this.iShowTime)
}
;
HUYA.MatchRecLiveList.prototype.readFrom = function(t) {
    this.iListId = t.readInt32(0, false, this.iListId);
    this.sTitle = t.readString(1, false, this.sTitle);
    this.vProfiles = t.readVector(2, false, this.vProfiles);
    this.iShowTime = t.readInt32(3, false, this.iShowTime)
}
;
HUYA.MatchRecLiveInfo = function() {
    this.vRecList = new Taf.Vector(new HUYA.MatchRecLiveList)
}
;
HUYA.MatchRecLiveInfo.prototype._clone = function() {
    return new HUYA.MatchRecLiveInfo
}
;
HUYA.MatchRecLiveInfo.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MatchRecLiveInfo.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MatchRecLiveInfo.prototype.writeTo = function(t) {
    t.writeVector(0, this.vRecList)
}
;
HUYA.MatchRecLiveInfo.prototype.readFrom = function(t) {
    this.vRecList = t.readVector(0, false, this.vRecList)
}
;
HUYA.MatchWebPushLiveRsp = function() {
    this.iUri = 0;
    this.vBuff = new Taf.BinBuffer
}
;
HUYA.MatchWebPushLiveRsp.prototype._clone = function() {
    return new HUYA.MatchWebPushLiveRsp
}
;
HUYA.MatchWebPushLiveRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.MatchWebPushLiveRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.MatchWebPushLiveRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iUri);
    t.writeBytes(1, this.vBuff)
}
;
HUYA.MatchWebPushLiveRsp.prototype.readFrom = function(t) {
    this.iUri = t.readInt32(0, false, this.iUri);
    this.vBuff = t.readBytes(1, false, this.vBuff)
}
;
HUYA.SettingSetupReq = function() {
    this.tId = new HUYA.UserId;
    this.vItems = new Taf.Vector(new HUYA.UserSettingItem)
}
;
HUYA.SettingSetupReq.prototype._clone = function() {
    return new HUYA.SettingSetupReq
}
;
HUYA.SettingSetupReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SettingSetupReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SettingSetupReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeVector(1, this.vItems)
}
;
HUYA.SettingSetupReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.vItems = t.readVector(1, false, this.vItems)
}
;
HUYA.SettingSetupRsp = function() {
    this.iLevel = 0;
    this.sMessage = ""
}
;
HUYA.SettingSetupRsp.prototype._clone = function() {
    return new HUYA.SettingSetupRsp
}
;
HUYA.SettingSetupRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SettingSetupRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SettingSetupRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iLevel);
    t.writeString(1, this.sMessage)
}
;
HUYA.SettingSetupRsp.prototype.readFrom = function(t) {
    this.iLevel = t.readInt32(0, false, this.iLevel);
    this.sMessage = t.readString(1, false, this.sMessage)
}
;
HUYA.SettingFetchReq = function() {
    this.tId = new HUYA.UserId;
    this.vKeys = new Taf.Vector(new Taf.STRING);
    this.bEnableCached = true
}
;
HUYA.SettingFetchReq.prototype._clone = function() {
    return new HUYA.SettingFetchReq
}
;
HUYA.SettingFetchReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SettingFetchReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SettingFetchReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tId);
    t.writeVector(1, this.vKeys);
    t.writeBoolean(2, this.bEnableCached)
}
;
HUYA.SettingFetchReq.prototype.readFrom = function(t) {
    this.tId = t.readStruct(0, false, this.tId);
    this.vKeys = t.readVector(1, false, this.vKeys);
    this.bEnableCached = t.readBoolean(2, false, this.bEnableCached)
}
;
HUYA.SettingFetchRsp = function() {
    this.vItems = new Taf.Vector(new HUYA.UserSettingItem)
}
;
HUYA.SettingFetchRsp.prototype._clone = function() {
    return new HUYA.SettingFetchRsp
}
;
HUYA.SettingFetchRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.SettingFetchRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.SettingFetchRsp.prototype.writeTo = function(t) {
    t.writeVector(0, this.vItems)
}
;
HUYA.SettingFetchRsp.prototype.readFrom = function(t) {
    this.vItems = t.readVector(0, false, this.vItems)
}
;
HUYA.UserSettingItem = function() {
    this.sKey = "";
    this.sValue = ""
}
;
HUYA.UserSettingItem.prototype._clone = function() {
    return new HUYA.UserSettingItem
}
;
HUYA.UserSettingItem.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserSettingItem.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserSettingItem.prototype.writeTo = function(t) {
    t.writeString(0, this.sKey);
    t.writeString(1, this.sValue)
}
;
HUYA.UserSettingItem.prototype.readFrom = function(t) {
    this.sKey = t.readString(0, false, this.sKey);
    this.sValue = t.readString(1, false, this.sValue)
}
;
HUYA.UserSupportEffectRsp = function() {
    this.iEffectType = 0;
    this.sEffectWord = ""
}
;
HUYA.UserSupportEffectRsp.prototype._clone = function() {
    return new HUYA.UserSupportEffectRsp
}
;
HUYA.UserSupportEffectRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.UserSupportEffectRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.UserSupportEffectRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iEffectType);
    t.writeString(1, this.sEffectWord)
}
;
HUYA.UserSupportEffectRsp.prototype.readFrom = function(t) {
    this.iEffectType = t.readInt32(0, false, this.iEffectType);
    this.sEffectWord = t.readString(1, false, this.sEffectWord)
}
;
HUYA.ActivityTorMsgReq = function() {
    this.tUserId = new HUYA.UserId;
    this.iActivityId = 0;
    this.lPid = 0;
    this.lTid = 0;
    this.lSid = 0;
    this.iChannelType = 0;
    this.iSubUri = 0
}
;
HUYA.ActivityTorMsgReq.prototype._clone = function() {
    return new HUYA.ActivityTorMsgReq
}
;
HUYA.ActivityTorMsgReq.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ActivityTorMsgReq.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ActivityTorMsgReq.prototype.writeTo = function(t) {
    t.writeStruct(0, this.tUserId);
    t.writeInt32(1, this.iActivityId);
    t.writeInt64(2, this.lPid);
    t.writeInt64(3, this.lTid);
    t.writeInt64(4, this.lSid);
    t.writeInt32(5, this.iChannelType);
    t.writeInt32(6, this.iSubUri)
}
;
HUYA.ActivityTorMsgReq.prototype.readFrom = function(t) {
    this.tUserId = t.readStruct(0, false, this.tUserId);
    this.iActivityId = t.readInt32(1, false, this.iActivityId);
    this.lPid = t.readInt64(2, false, this.lPid);
    this.lTid = t.readInt64(3, false, this.lTid);
    this.lSid = t.readInt64(4, false, this.lSid);
    this.iChannelType = t.readInt32(5, false, this.iChannelType);
    this.iSubUri = t.readInt32(6, false, this.iSubUri)
}
;
HUYA.ActivityTorMsgRsp = function() {
    this.iEnable = 0;
    this.vSerializedMsg = new Taf.Vector(new HUYA.ActivitySerializedMsg);
    this.iTimeStamp = 0
}
;
HUYA.ActivityTorMsgRsp.prototype._clone = function() {
    return new HUYA.ActivityTorMsgRsp
}
;
HUYA.ActivityTorMsgRsp.prototype._write = function(t, e, i) {
    t.writeStruct(e, i)
}
;
HUYA.ActivityTorMsgRsp.prototype._read = function(t, e, i) {
    return t.readStruct(e, true, i)
}
;
HUYA.ActivityTorMsgRsp.prototype.writeTo = function(t) {
    t.writeInt32(0, this.iEnable);
    t.writeVector(1, this.vSerializedMsg);
    t.writeInt32(2, this.iTimeStamp)
}

HUYA.ActivityTorMsgRsp.prototype.readFrom = function(t) {
    this.iEnable = t.readInt32(0, false, this.iEnable);
    this.vSerializedMsg = t.readVector(1, false, this.vSerializedMsg);
    this.iTimeStamp = t.readInt32(2, false, this.iTimeStamp)
}

module.exports =  HUYA;
