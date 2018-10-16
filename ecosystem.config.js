module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
        {
            name: 'website',
            script: './node_modules/next/dist/bin/next',
            args: "start",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
