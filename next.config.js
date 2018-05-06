const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');

const nextConfig = {
    assetPrefix: 'https://cdn.mydomain.com',
    webpack: (config, {dev}) => {
        config.resolve.alias.img = __dirname + '/img/';
        config.resolve.alias.components = __dirname + '/components/';
        config.module.rules.push({
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }, {
                test: /\.svg/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        stripdeclarations: false,
                        iesafe: false,
                        noquotes: true,
                        encoding: "base64",
                    }
                }
            }
        );
        return config
    },
};


module.exports = withPlugins([
    withSass,
], nextConfig);