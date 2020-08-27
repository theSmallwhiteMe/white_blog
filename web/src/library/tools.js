import {
    getOsInfo,
    getBrowserName,

    isEmail,
    isPhone,
    isUndefined,
    notSpace,

    copyObj,

    uniqArray,
} from './tools-realize'

import { Cookie } from "./cookie";

export const Tools = {
    Cookie:Cookie,
    // 获取操作系统信息
    getClientOS:getOsInfo(),
    // 获取浏览器名称
    getClientBrowser:getBrowserName(),
    // 是否邮箱
    isEmail:isEmail,
    // 是否11位手机号码
    isPhone:isPhone,
    // 是否为 undefined
    isUndefined:isUndefined,
    // 移除空格
    notSpace:notSpace,
    // 复制对象
    copyObj:copyObj,
    //数组去重
    uniqArray:uniqArray,
}