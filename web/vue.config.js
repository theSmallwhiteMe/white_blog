module.exports = {
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '8888',
        https: false,
        hotOnly: false,
        proxy: 'http://localhost:8080'
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