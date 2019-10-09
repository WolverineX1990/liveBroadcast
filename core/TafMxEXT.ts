const TafMx = require('./../lib/TafMx');
import HUYA from './HUYAEXT';

Object.assign(TafMx.WupMapping, {
  getLivingStreamInfo: HUYA.GetLivingStreamInfoRsp
});

export default TafMx;