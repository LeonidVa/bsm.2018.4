const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
    webpack: (config, {dev}) => {
        config.resolve.alias.img = __dirname + '/img/';
        config.resolve.alias.components = __dirname + '/components/';
        return config
    },
    assetPrefix: 'https://cdn.mydomain.com',
};


module.exports = withPlugins([
    withSass,
    [optimizedImages, {
        optimizeImagesInDev: true,
        mozjpeg: {
            quality: 40,
        },
        optipng: {
            optimizationLevel: 3,
        },
    }]
], nextConfig);