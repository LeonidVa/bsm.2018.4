#!/bin/bash
export NODE_ENV="development"
set -e
DIR="$( cd "$( dirname "${0}" )" >/dev/null && pwd )"
sh ${DIR}/pages.sh
yarn run dev
