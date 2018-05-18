#!/bin/bash

if ! /c/Users/a.schepkin.OFFICE/AppData/Roaming/npm/node_modules/pm2/bin/pm2 restart besmarter
then
    set -e
    /c/Users/a.schepkin.OFFICE/AppData/Roaming/npm/node_modules/pm2/bin/pm2 start npm --name "besmarter" --kill-timeout 30000 -- run start
fi
