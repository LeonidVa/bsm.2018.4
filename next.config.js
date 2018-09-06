const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

const nextConfig = {
    //assetPrefix: 'https://2018.besmarter.ru',
    webpack: (config, options) => {
        /* Aliases */
        config.resolve.alias.static = __dirname + '/static/';
        config.resolve.alias.components = __dirname + '/components/';
        config.resolve.alias.utils = __dirname + '/utils/';

        /* Fix for missing styles */
        const {dev} = options;
        if (!dev) {
            const MergeFilesPlugin = require('merge-files-webpack-plugin');
            // Override next-css configuration
            options.extractCSSPlugin.filename = 'static/[name].css';
            // Merge all CSS in one file
            config.plugins.push(
                new MergeFilesPlugin({
                    filename: 'static/style.css',
                    test: /\.css/,
                    deleteSourceFiles: true,
                })
            );
        }

        const CompressionPlugin = require('compression-webpack-plugin');
        config.plugins.push(
            new CompressionPlugin()
        );
        return config
    },
};


module.exports = withPlugins([
    withSass,
    withImages,
], nextConfig);
