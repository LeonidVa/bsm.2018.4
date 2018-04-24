
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const optimizedImages = require('next-optimized-images');


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
])