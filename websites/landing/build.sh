#!/bin/bash
export NODE_ENV="production"
set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
chmod +x "${DIR}/*.sh"
"${DIR}/pages.sh"
yarn run build
