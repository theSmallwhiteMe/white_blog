module.exports = {
    lintOnSave:false,
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '8888',
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: "http://localhost:8060", //这个是新的，本地的地址
                changeOrigin: true,
                logLevel: "debug"
            }
        }
        // overlay:{
        //     warning:false,
        //     errors:false
        // },
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    modifyVars: {
                        'primary-color': '#ff5b5b',
                        'link-color': '#ff5b5b',
                        'border-radius-base': '2px',
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
}