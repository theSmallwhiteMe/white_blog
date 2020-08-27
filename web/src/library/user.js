import {Cookie} from "./cookie";
import {ENV} from "./env";
import { v4 as uuidv4 } from 'uuid';

let storage = window.localStorage;
export const User = {
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

}