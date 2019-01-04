const path = require('path');
const bn = path.basename(__dirname);
const wdir = path.resolve(__dirname + '/../../');
console.log(wdir, bn);
module.exports = {
  apps: [
    {
      name: bn,
      script: wdir+'/server.js',
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 3003,
        SOURCE: "besmarter landing 20181122"
      },
    },
  ],
};
