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
set -e
ts=`date "+%Y%m%d-%H%M%S"`
path=/var/www/besmarter
testpath=${path}/test
buildpath=${path}/build
if [ -d ${testpath} ]; then
	echo "ERROR: Testing path already exists. It will be removed after tests are complete or you have to remove it manually."
	exit 1
fi
if mkdir ${testpath} ; then
	echo "Created folder for test"
else
	echo "ERROR: Can't create folder for test"
	exit 2
fi
if git clone git@gitlab.com:igordata/bsm.2018.4.git ${testpath} ; then
	echo "Project cloned"
else
	echo "ERROR: Can't clone project"
	exit 3
fi
cd ${testpath}
if npm install ; then
	echo "Dependencies installed"
else
	echo "ERROR: Dependencies install failed"
	exit 4
fi
rm -rf ${testpath}/.next/
if sh ./build.sh ; then
	echo "Build successful"
else
	echo "ERROR: Build failed"
	exit 5
fi
chmod -R u=rwX,go=rX ${testpath}
chown -R rs:www-data ${testpath}
cd ${testpath}
sh ./stop.sh
if mv "${buildpath}" "${buildpath}.before.${ts}" ; then
	echo "Old build moved to ${buildpath}.before.${ts}"
else
	echo "ERROR: Can't rename current build folder."
fi
mv "${testpath}" "${buildpath}"
cd ${buildpath}
sh ./start.sh








