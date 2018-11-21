#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
BASENAME=`basename "${DIR}"`
#TARGET="${DIR}/pages"
#LINK=`realpath "${DIR}/../../pages"`
DOTNEXT=`realpath "${DIR}/../../.next"`

set -x
cd ../../
TARGET="./websites/${BASENAME}/pages"
LINK="./pages"
echo removing "${LINK}"
rm -rf "${LINK}"
echo removing "${DOTNEXT}"
rm -rf "${DOTNEXT}"
echo creating a link to "${TARGET}" at "${LINK}"
ln -s "${TARGET}" "${LINK}"
ls -al
cd ./pages
ls -al
echo Switched to ${BASENAME}