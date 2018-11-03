module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
        {
            name: 'website',
            script: 'server.js',
            args: "start",
            env: {
                NODE_ENV: "production",
            },
        },
    ],
};
