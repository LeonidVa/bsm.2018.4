#!/bin/bash
export NODE_ENV="production"
rm -rf ./.next/
set -e
npm run build
