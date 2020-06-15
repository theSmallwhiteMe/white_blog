module.exports = {
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost",
        port: '8888',
        https: false,
        hotOnly: false,
        proxy: 'http://localhost:8080'
    }
}