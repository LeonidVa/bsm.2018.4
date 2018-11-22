#!/bin/bash
export NODE_ENV="development"
set -e
DIR="$( dirname $( realpath "${0}" ) )"
sh ${DIR}/pages.sh
yarn run dev
