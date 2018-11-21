#!/bin/bash
export NODE_ENV="production"
set -e
echo adin
echo $1
echo "${1}"
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
sh "${DIR}/pages.sh"
yarn run build
