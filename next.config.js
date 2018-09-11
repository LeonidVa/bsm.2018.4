const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const nextConfig = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        runtime: {
            isServer: true,
            isClient: false,
            mode: process.env.NODE_ENV,
            production: process.env.NODE_ENV === "production",
            development: process.env.NODE_ENV === "development",
        },
        telega: {
            dialogID: "-277088332",
            APIKey: "529302293:AAF8ldx4bS1iK7XIPncirnK2dYFxgSgnK0M",
        }
    },
    publicRuntimeConfig: {
        // Available on client
        runtime: {
            isServer: false,
            isClient: true,
            mode: process.env.NODE_ENV,
            production: process.env.NODE_ENV === "production",
            development: process.env.NODE_ENV === "development",
        },
    },
    ///assetPrefix: process.env.NODE_ENV === "production" ? 'https://cdn.cloudflare.com' : null,
    webpack: (config, options) => {
        /* Aliases to use same path in imports everywhere, i.e. import DatePicker from "components/common/DatePicker"; */
        config.resolve.alias.static = __dirname + '/static/';
        config.resolve.alias.components = __dirname + '/components/';
        config.resolve.alias.utils = __dirname + '/utils/';

        /* compression-webpack-plugin creates precompressed *.gz files for nginx gzip_static */
        //const CompressionPlugin = require('compression-webpack-plugin');
        //config.plugins.push(new CompressionPlugin());

        /* done */
        return config
    },
};


module.exports = withPlugins([
    withSass,
    withImages,
], nextConfig);
