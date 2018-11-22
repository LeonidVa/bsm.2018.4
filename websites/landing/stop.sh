#!/usr/bin/env bash
DIR="$( cd "$( dirname "${0}" )" >/dev/null && pwd )"
BASENAME=`basename "${DIR}"`
set -e
if pm2 stop ${BASENAME}
then
    echo -e "\e[1;32mStop ${BASENAME} done\e[0m"
else
    echo -e "\e[1;31mFailed to stop ${BASENAME}!\e[0m"
fi

