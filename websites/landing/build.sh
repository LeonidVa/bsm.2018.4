#!/bin/bash
export NODE_ENV="production"
set -e
./pages.sh
yarn run build
