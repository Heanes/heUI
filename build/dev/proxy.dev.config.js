module.exports = {
    '/public/static/vendor/': {
        target: 'https://cdn.dev.heanes.com',
        pathRewrite: {'^/public/static/vendor/' : ''},
        changeOrigin: true, //可否跨域
    },
};
