export const GLOBAL_VIEW = {
    data:{
        LoginShowFlag:false
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
        loginShowOrHide() {
           this.LoginShowFlag = !this.LoginShowFlag
        },
    }
}