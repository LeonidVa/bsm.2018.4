#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
BASENAME=`basename "${DIR}"`
if ! pm2 restart ${BASENAME} --update-env
then
    set -e
    pm2 start "${DIR}/pm2.config.js"
fi
