#!/bin/bash
DIR="$( cd "$( dirname "${0}" )" >/dev/null && pwd )"
BASENAME=`basename "${DIR}"`
TARGET="${DIR}/pages"
LINK=`realpath "${DIR}/../../pages"`
DOTNEXT=`realpath "${DIR}/../../.next"`
echo removing "${LINK}"
rm -rf "${LINK}"
echo removing "${DOTNEXT}"
rm -rf "${DOTNEXT}"
echo creating a link to "${TARGET}" at "${LINK}"
ln -s "${TARGET}" "${LINK}"
echo Switched to ${BASENAME}