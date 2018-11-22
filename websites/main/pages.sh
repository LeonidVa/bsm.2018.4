#!/bin/bash
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
echo creating a link to "${TARGET}" at "${LINK}"
cd "${DIR}/../../"
ln -s "./websites/${BASENAME}/pages" "./pages"
cd "${CURRENTDIR}"
echo Switched to ${BASENAME}