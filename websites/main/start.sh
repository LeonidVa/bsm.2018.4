#!/bin/bash
DIR="$( dirname $( realpath "${0}" ) )"
BASENAME=`basename "${DIR}"`
if ! pm2 restart ${BASENAME} --update-env
then
    set -e
    pm2 start "${DIR}/pm2.config.js"
fi
