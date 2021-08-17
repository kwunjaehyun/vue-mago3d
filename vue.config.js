module.exports = {
    publicPath : '/',
    chainWebpack: config => {
        let imgRule = config.module.rule('images');
        imgRule.store.set('test', /\.(png|PNG|jpe?g|JPE?G|gif|webp)(\?.*)?$/);
    }
}