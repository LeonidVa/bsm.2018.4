#!/bin/bash
TARGET=`realpath ./pages`
LINK=`realpath ../../pages`
DOTNEXT=`realpath ../../.next`
echo removing "${LINK}"
unlink "${LINK}"
echo removing "${DOTNEXT}"
rm -rf "${DOTNEXT}"
echo creating a link to "${TARGET}" at "${LINK}"
ln -s "${TARGET}" "${LINK}"
echo done