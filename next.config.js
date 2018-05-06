const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const nextConfig = {
    //assetPrefix: 'https://static.besmarter.ru',
    webpack: (config, {dev}) => {
        config.resolve.alias.img = __dirname + '/img/';
        config.resolve.alias.components = __dirname + '/components/';
        //console.log(config)
        config.plugins = config.plugins.filter(
            (plugin) => (plugin.constructor.name !== 'UglifyJsPlugin')
        );
        return config
    },
};


module.exports = withPlugins([
    withSass,
    withImages,
], nextConfig);