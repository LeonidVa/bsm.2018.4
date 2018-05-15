#!/bin/bash
rm -f /var/www/updates/besmarter

path=/var/www/besmarter


cd ${path}
sh ./stop.sh
rm -rf ${path}/.next/
git reset --hard HEAD
git pull origin master
chown -R www-data:www-data ${path}
chmod -R 644 ${path}
chmod -R  +X ${path}
chmod 775 ${path}/uploads
sh ./start.sh

