import {
    getOsInfo,
    getBrowserName,
} from './tools-realize'

export const Tools = {
    // 获取操作系统信息
    getClientOS:getOsInfo(),
    // 获取浏览器名称
    getClientBrowser:getBrowserName(),
}