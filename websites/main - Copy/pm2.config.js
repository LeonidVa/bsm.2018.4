module.exports = {
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
