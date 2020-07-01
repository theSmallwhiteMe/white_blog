export const GLOBAL_VIEW = {
    props:[
        'scrollHeight'
    ],
    watch:{
        scrollHeight(val) {
            console.log(val)
        }
    }
}