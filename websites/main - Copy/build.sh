#!/bin/bash
export NODE_ENV="production"
set -e
rm -f ./pages
rm -rf ./.next/
ln -s ./pages-all/landings/diplom/ ./pages
yarn run build
