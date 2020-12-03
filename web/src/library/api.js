import {POST,GetUserToken} from "./request";
import {Tools} from "./tools";

export const Auth = function () {
    if (!GetUserToken()) {
        POST('/ping',{
            client:Tools.getClientOS.name,
            version:Tools.getClientOS.version,
            browse:Tools.getClientBrowser
        }).then( res => {
            console.log(res)
        })
    }
}