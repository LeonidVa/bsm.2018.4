#!/usr/bin/env bash
# Just remove this 3 lines after you copy that file outside project folder.
echo "Do not use this file directly in project folder."
echo "Make a copy of this file and put it somewhere outside project folder."
exit 1

#########################################
#  Setup env variables here
#


#########################################
#  Rebuilding and starting application
#
path=/var/www/besmarter
cd ${path}
sh ./stop.sh
rm -rf ${path}/.next/
cd ${path}
git reset --hard HEAD
git pull origin master
chown -R rs:www-data ${path}
chmod -R 644 ${path}
chmod -R  +X ${path}
chmod 775 ${path}/uploads
cd ${path}
sh ./build.sh
echo $?
cd ${path}
sh ./start.sh

