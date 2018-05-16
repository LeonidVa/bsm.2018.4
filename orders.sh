#!/bin/bash
export NODE_ENV="production"
export MAIL_SMTP="mail.besmarter.ru"
export MAIL_LOGIN=""
export MAIL_PASSWORD=""
export EMAIL_1="zakaz@besmarter.ru"
export EMAIL_2="bs_7724090@mail.ru"

cd /var/www/besmarter
pm2 start orders.js
