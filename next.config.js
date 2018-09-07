const dotenv = require('dotenv');
dotenv.config();

const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const nextConfig = {
    //assetPrefix: 'https://2018.besmarter.ru',
    webpack: (config, options) => {
        /* Aliases to use same path in imports everywhere, i.e. import DatePicker from "components/common/DatePicker"; */
        config.resolve.alias.static = __dirname + '/static/';
        config.resolve.alias.components = __dirname + '/components/';
        config.resolve.alias.utils = __dirname + '/utils/';

        /* compression-webpack-plugin creates precompressed *.gz files for nginx gzip_static */
        const CompressionPlugin = require('compression-webpack-plugin');
        config.plugins.push(
            new CompressionPlugin()
        );

        /* done */
        return config
    },
};


module.exports = withPlugins([
    withSass,
    withImages,
], nextConfig);
