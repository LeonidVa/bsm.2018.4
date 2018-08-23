#!/bin/bash
export NODE_ENV="production"
set -e
rm -rf ./.next/
npm run build
