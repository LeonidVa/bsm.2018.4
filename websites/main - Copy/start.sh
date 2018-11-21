#!/bin/bash

if ! pm2 restart main --update-env
then
    set -e
    pm2 start ./pm2.main.js
fi
