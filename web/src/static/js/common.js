import {Tools} from "../../library/tools";
import {Auth} from "../../library/api";

export const GLOBAL_VIEW = {
    data:{

    },
    props:[
        'scrollHeight',
        'LoginShowFlag'
    ],
    watch:{
        scrollHeight(val) {
            console.log(val)
        }
    },
    methods:{

    },
    mounted(){
        Auth()
        console.log('Tools:',Tools.getClientOS,Tools.getClientBrowser)
        console.log('User',this.User)
    }
}