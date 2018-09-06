#!/bin/bash
export NODE_ENV="production"
set -e
rm -rf ./.next/
npm run build
BDIR=$(cat ./.next/BUILD_ID)
mkdir ./.next/${BDIR}/
ln -s ./.next/pages ./.next/${BDIR}/page
