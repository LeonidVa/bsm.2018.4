const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');


const nextConfig = {
    //assetPrefix: 'https://static.besmarter.ru',
    webpack: (config, options) => {
        /* Aliases */
        config.resolve.alias.static = __dirname + '/static/';
        config.resolve.alias.components = __dirname + '/components/';
        return config
    },
};


module.exports = withPlugins([
    withSass,
    withImages,
], nextConfig);
