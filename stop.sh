#!/usr/bin/env bash
set -e
if pm2 stop besmarter
then
    echo -e "\e[1;32mServer successful stop!\e[0m"
else
    echo -e "\e[1;31mFailed stop!\e[0m"
fi

