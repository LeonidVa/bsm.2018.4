#!/bin/bash
pm2 stop besmarter
set -e
pm2 start npm --name "besmarter" --kill-timeout 30000 -- run start