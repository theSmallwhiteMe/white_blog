function set(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}
function get(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}
function check(key){
    let val = get(key);
    if (val != null && val != "") {
        return true
    } else {
        return false
    }
}

function del(key) {
    set(key, "", -1);
}

export const Cookie = {
    get:get,
    set:set(),
    check:check(),
    del:del()
}