#!/bin/bash
export NODE_ENV="production"
set -e
set -x
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
/bin/bash "${DIR}/pages.sh"
yarn run build
