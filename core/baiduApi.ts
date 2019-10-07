let AipOcrClient = require("baidu-aip-sdk").ocr;

// 设置APPID/AK/SK
let APP_ID = "17446880";
let API_KEY = "az3PCqKwGVd2B4ZbLFbvstrD";
let SECRET_KEY = "RsbdisksiLFwj0OLhzHrHLxs6ajscQh1";

// 新建一个对象，建议只保存一个对象调用服务接口
let baiduClient = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);

export default baiduClient;