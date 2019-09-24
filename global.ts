import huya from './core/huya';
import taf from './core/taf';
declare global {
    var HUYA: any
    var Taf: any
}

Object.assign(global, { HUYA: huya }, { Taf: taf });