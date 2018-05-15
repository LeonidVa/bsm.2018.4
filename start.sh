#!/bin/bash
pm2 stop besmarter
pm2 start yarn --name "besmarter" -- run start