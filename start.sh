#!/bin/bash

if ! pm2 restart website --update-env
then
    set -e
    pm2 start ./ecosystem.config.js
fi
