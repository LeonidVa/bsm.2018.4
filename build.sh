#!/bin/bash
export NODE_ENV="production"
rm -rf ./.next/
if npm run build
then
    exit 0
else
    exit 1
fi
