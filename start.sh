#!/bin/bash

if ! pm2 restart besmarter
then
    set -e
    pm2 start npm --name "besmarter" --kill-timeout 30000 -- run start
fi
