import {Cookie} from "./cookie";
import {ENV} from "./env";
import { v4 as uuidv4 } from 'uuid';

let storage = window.localStorage;
const User = {
    //查看本机标示
    getUniqueKey(){
        if (!Cookie.check(ENV.AppKey)) {
            this.setUniqueKey()
        }
        return Cookie.get(ENV.AppKey)
    },
    //生成本季标示
    setUniqueKey(){
        let key = uuidv4()
        Cookie.set(ENV.AppKey,key,90)
    },
    //是否登录
    isLogin () {
        let user = storage.getItem(this.getUniqueKey())
        if (user == null || user == '' || typeof user == "undefined") {
            return false
        }
        return true
    },
    //登录
    afterLogin(userInfo){
        // 将用户信息存入localStorage
        storage.setItem(this.getUniqueKey(),JSON.stringify(userInfo))
    },
    //获取用户信息
    getUserInfo(){
        let userInfo = storage.getItem(this.getUniqueKey())
        return JSON.parse(userInfo)
    }
}

export default {
    User
}