#!/bin/bash
export NODE_ENV="production"
set -e
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
chmod +x "${DIR}/dev.sh"
chmod +x "${DIR}/pages.sh"
chmod +x "${DIR}/start.sh"
chmod +x "${DIR}/stop.sh"
"${DIR}/pages.sh"
yarn run build
