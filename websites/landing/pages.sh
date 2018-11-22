#!/bin/bash
set -x
CURRENTDIR="$( pwd )"
DIR="$( dirname $( realpath "${0}" ) )"
BASENAME=`basename "${DIR}"`
TARGET="${DIR}/pages"
LINK=`realpath "${DIR}/../../pages"`
DOTNEXT=`realpath "${DIR}/../../.next"`
echo removing "${LINK}"
rm -rf "${LINK}"
echo removing "${DOTNEXT}"
rm -rf "${DOTNEXT}"
echo current dir
pwd
cd "${DIR}"
pwd
cd ../..
pwd
ln -s "./websites/${BASENAME}/pages" "./pages"
cd "${CURRENTDIR}"
pwd
echo Switched to ${BASENAME}