import { getRoomHtml } from './../api/service';
import CONFIG from './../const/CONFIG';
import ENV from './../const/ENV';

export function initConfig(roomId, func) {
  getRoomHtml(CONFIG.host + roomId).then(html => {
    
    let TT_ROOM_DATA = getJsonByKey(html, 'TT_ROOM_DATA');
    let TT_PLAYER_CFG = getJsonByKey(html, 'TT_PLAYER_CFG');
    let TT_PROFILE_INFO = getJsonByKey(html, 'TT_PROFILE_INFO');
    let hyPlayerConfig = getJsonByKey(html, 'hyPlayerConfig');
    
    let stream = hyPlayerConfig.stream;
    ENV.appid = hyPlayerConfig.vappid;
    if (stream && stream.data && stream.data.length) {
      let a = stream.data[0].gameLiveInfo;
      let b = stream.data[0].gameStreamInfoList[0];
      ENV.liveId = a.liveId;
      ENV.SrcBitRate = a.bitRate;
      ENV.sStreamName = b.sStreamName;
      ENV.videoLine = b.iLineIndex;
      ENV.flv =  b.sFlvUrl.replace('http', 'https') + '/' + b.sStreamName + '.flv?' + b.sFlvAntiCode.replace(/&amp;/g, "&");
      console.log(ENV)
    }

    ENV.playerVer = TT_PLAYER_CFG.h5PlayerIncludeSDK
    ENV.roomState = TT_ROOM_DATA.state;
    ENV.presenterUid = TT_PROFILE_INFO.lp;
    ENV.pyyid = TT_PROFILE_INFO.yyid;
    ENV.topsid = TT_PROFILE_INFO.lp;
    ENV.subsid = TT_PROFILE_INFO.lp;
    ENV.id = TT_ROOM_DATA.id;
    ENV.sid = TT_ROOM_DATA.sid;
    func()
  });
}

function getJsonByKey(html, key) {
    let script = html.split('<script').find(item => item.indexOf(key) > -1);
    let startNum = script.indexOf(key) + 1;
    script = script.substring(startNum);
    startNum = script.indexOf('{');
    script = script.substring(startNum);
    let endNum = script.indexOf('var');
    if (endNum == -1) {
      endNum = script.indexOf('window');
    }
    script = script.substring(0, endNum);
    script = script.trim();
    if (script.endsWith(';')) {
      script = script.substring(0, script.length - 1)
    }

    return JSON.parse(script);
}