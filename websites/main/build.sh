#!/bin/bash
export NODE_ENV="production"
chmod +x "${DIR}/*.sh"
set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
"${DIR}/pages.sh"
yarn run build
