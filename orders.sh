#!/bin/bash
export NODE_ENV="production"
export MAIL_SMTP=""
export MAIL_LOGIN=""
export MAIL_PASSWORD=""
export EMAIL_1=""
export EMAIL_2=""

pm2 start server.js