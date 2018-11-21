#!/bin/bash
export NODE_ENV="development"
set -e
rm -f ./pages
rm -rf ./.next/
ln -s ./pages-all/main/diplom/ ./pages
yarn run dev
