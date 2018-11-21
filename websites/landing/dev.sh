#!/bin/bash
export NODE_ENV="development"
set -e
./pages.sh
yarn run dev
