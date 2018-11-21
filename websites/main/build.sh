#!/bin/bash
export NODE_ENV="production"
set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
echo i think im in ${DIR}
sh "${DIR}/pages.sh"
yarn run build
