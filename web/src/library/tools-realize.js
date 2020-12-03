export const getOsInfo = function () {
    var userAgent = navigator.userAgent.toLowerCase();
    var name = 'Unknown';
    var version = 'Unknown';
    if (userAgent.indexOf('win') > -1) {
        name = 'Windows';
        if (userAgent.indexOf('windows nt 5.0') > -1) {
            version = 'Windows 2000';
        } else if (userAgent.indexOf('windows nt 5.1') > -1 || userAgent.indexOf('windows nt 5.2') > -1) {
            version = 'Windows XP';
        } else if (userAgent.indexOf('windows nt 6.0') > -1) {
            version = 'Windows Vista';
        } else if (userAgent.indexOf('windows nt 6.1') > -1 || userAgent.indexOf('windows 7') > -1) {
            version = 'Windows 7';
        } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows 8') > -1) {
            version = 'Windows 8';
        } else if (userAgent.indexOf('windows nt 6.3') > -1) {
            version = 'Windows 8.1';
        } else if (userAgent.indexOf('windows nt 6.2') > -1 || userAgent.indexOf('windows nt 10.0') > -1) {
            version = 'Windows 10';
        } else {
            version = 'Unknown';
        }
    } else if (userAgent.indexOf('iphone') > -1) {
        name = 'Iphone';
    } else if (userAgent.indexOf('mac') > -1) {
        name = 'Mac OS';
    } else if (userAgent.indexOf('x11') > -1 || userAgent.indexOf('unix') > -1 || userAgent.indexOf('sunname') > -1 || userAgent.indexOf('bsd') > -1) {
        name = 'Unix';
    } else if (userAgent.indexOf('linux') > -1) {
        if (userAgent.indexOf('android') > -1) {
            name = 'Android';
        } else {
            name = 'Linux';
        }
    } else {
        name = 'Unknown';
    }
    return { name, version };
}

export const getBrowserName = function (){
    var userAgent = navigator.userAgent;
    if(userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1){
        return 'Opera';
    }
    else if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1){
        return 'IE';
    }
    else if(userAgent.indexOf("Edge") > -1){
        return 'Edge';
    }
    else if(userAgent.indexOf("Firefox") > -1){
        return 'Firefox';
    }
    else if(userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1){
        return 'Safari';
    }
    else if(userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1){
        return 'Chrome';
    }
    else if(!!window.ActiveXObject || "ActiveXObject" in window){
        return 'IE>=11';
    }
    else{
        return 'Unknown';
    }
}

export const isEmail = function(str){
    let mailExp = /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/
    return !mailExp.test(str)
}

export const isPhone = function(str){
    let phoneExp = /^1\d{10}$/
    return !phoneExp.test(str)
}

export const isUndefined = function (obj) {
    return typeof obj == "undefined"
}

export const notSpace = function(val){
    return val.replace(/\s+/g,'')
}

export const copyObj = function (obj) {
    return JSON.parse(JSON.stringify(obj))
}

export const uniqArray = function (arr) {
    return [...new Set(arr)]
}

export const getClientHeight = function () {
    let clientHeight = 0;
    if(document.body.clientHeight&&document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
    } else {
        clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
    }
    return clientHeight - 200;
}
