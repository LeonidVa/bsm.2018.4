#!/usr/bin/env bash

#########################################
# Constants
#########################################
set -e

readonly TS=`date "+%Y%m%d-%H%M%S"`
readonly SLEEP_INTERVAL=3
readonly START_TIME=`date +%s`
readonly START_DIRECTORY=$(pwd)
readonly REPOSITORY="git@gitlab.com:igordata/bsm.2018.4.git"

# Directories
readonly D_ROOT=/var/www/besmarter
readonly D_TEST=${D_ROOT}/test
readonly D_BUILD=${D_ROOT}/build

# Indicators
readonly I_UPDATE=${D_ROOT}/.indicator-update
readonly I_WAITING=${D_ROOT}/.indicator-waiting

# Colors
readonly C_ERROR="\e[1;31m"
readonly C_RESET="\e[0m"
readonly C_SUCCESS="\e[1;32m"
readonly C_INFO="\e[1;34m"

# Error codes
readonly E_DO_NOT_USE=1
readonly E_CANT_CREATE_FOLDER=2
readonly E_CANT_CLONE=3
readonly E_DEPENDENCIES_INSTALL_FAILED=4
readonly E_BUILD_FAILED=5
readonly E_ALREADY_WAITING=6

#########################################
# Color functions
#########################################
error () {
    echo -en "${C_ERROR}${1}${C_RESET}\n"
}

success () {
    echo -en "${C_SUCCESS}${1}${C_RESET}\n"
}

info () {
    echo -en "${C_INFO}${1}${C_RESET}\n"
}

#########################################
# Just remove this 3 lines after you copy that file outside project folder.
#########################################

error "Do not use this file directly in project folder."
error "Make a copy of this file and put it somewhere outside project folder."
exit ${E_DO_NOT_USE}

#########################################
# Functions
#########################################

remove_update_indicator () {
    rm -f ${I_UPDATE}
}

create_update_indicator () {
    touch ${I_UPDATE}
}

reset_directory () {
    cd ${START_DIRECTORY}
}

finish () {
    remove_update_indicator
    print_execution_time
    reset_directory
    exit $1
}

print_execution_time () {
    info "Script execution time $((`date +%s`-START_TIME)) seconds"
}

exit_if_waiting () {
    if test -f ${I_WAITING}
    then
        error "ERROR: The script is already waiting";
        finish ${E_ALREADY_WAITING}
    fi
}

wait_update () {
    if test -f ${I_UPDATE}
    then
        touch ${I_WAITING}
        while test -f ${I_UPDATE}
        do
            sleep ${SLEEP_INTERVAL}
        done
        rm -f ${I_WAITING}
    fi
}

remove_test_directory_if_exists () {
    if [ -d ${D_TEST} ]
    then
        rm -dfr ${D_TEST}
    fi
}

create_test_directory () {
    if mkdir ${D_TEST}
    then
        success "Created folder for test"
    else
        error "ERROR: Can't create folder for test"
        finish ${E_CANT_CREATE_FOLDER}
    fi
}

clone_project () {
    if git clone ${REPOSITORY} ${D_TEST}
    then
        success "Project cloned"
    else
        error "ERROR: Can't clone project"
        finish ${E_CANT_CLONE}
    fi
}

install_dependencies () {
    cd ${D_TEST}
    if npm install
    then
        success "Dependencies installed"
    else
        error "ERROR: Dependencies install failed"
        finish ${E_DEPENDENCIES_INSTALL_FAILED}
    fi
}

build_project () {
    rm -rf ${D_TEST}/.next/
    if sh ./build.sh
    then
        success "Build successful"
    else
        error "ERROR: Build failed"
        finish ${E_BUILD_FAILED}
    fi
}

set_rights () {
    chmod -R u=rwX,go=rX ${D_TEST}
    chown -R rs:www-data ${D_TEST}
}

restart_server () {
    cd ${D_TEST}
    sh ./stop.sh
    if mv "${D_BUILD}" "${D_BUILD}.before.${TS}"
    then
        success "Old build moved to ${D_BUILD}.before.${TS}"
    else
        error "ERROR: Can't rename current build folder."
    fi
    mv "${D_TEST}" "${D_BUILD}"
    cd ${D_BUILD}
    sh ./start.sh
}

#########################################
# Update project
#########################################

exit_if_waiting
wait_update
create_update_indicator
remove_test_directory_if_exists
create_test_directory
clone_project
install_dependencies
build_project
set_rights
restart_server
finish 0
