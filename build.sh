#!/bin/bash
export NODE_ENV="production"
set -e
rm -rf ./.next/
npm run build
BDIR=$(cat ./.next/BUILD_ID)
mkdir ./.next/${BDIR}/
PAGESDIR=$(realpath ./.next/pages)
PDIR=$(realpath ./.next/${BDIR}/page)
ln -s PAGESDIR PDIR
