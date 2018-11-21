#!/usr/bin/env bash

#########################################
# Constants
#########################################

set -e

readonly SH_BUILD="./build-main.sh"
readonly SH_STOP="./stop-main.sh"
readonly SH_START="./start-main.sh"


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
readonly E_CANT_CREATE_FOLDER=2
readonly E_CANT_CLONE=3
readonly E_DEPENDENCIES_INSTALL_FAILED=4
readonly E_BUILD_FAILED=5
readonly E_ALREADY_WAITING=6

#########################################
# Color functions
#########################################

error () {
    echo -en "${C_ERROR}ERROR: ${1}${C_RESET}\n"
}

success () {
    echo -en "${C_SUCCESS}${1}${C_RESET}\n"
}

info () {
    echo -en "${C_INFO}${1}${C_RESET}\n"
}

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
        error "The script is already waiting";
        finish ${E_ALREADY_WAITING}
    fi
}

wait_update () {
    if test -f ${I_UPDATE}
    then
        info "Wating for the end of another update"
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
        error "Can't create folder for test"
        finish ${E_CANT_CREATE_FOLDER}
    fi
}

clone_project () {
    if git clone ${REPOSITORY} ${D_TEST}
    then
        success "Project cloned"
    else
        error "Can't clone project"
        finish ${E_CANT_CLONE}
    fi
}

install_dependencies () {
    cd ${D_TEST}
    if yarn install
    then
        success "Dependencies installed"
    else
        error "Dependencies install failed"
        finish ${E_DEPENDENCIES_INSTALL_FAILED}
    fi
}

build_project () {
    rm -rf ${D_TEST}/.next/
    if sh "${SH_BUILD}"
    then
        success "Build successful"
    else
        error "Build failed"
        finish ${E_BUILD_FAILED}
    fi
}

set_rights () {
    chmod -R u=rwX,go=rX ${D_TEST}
    chown -R rs:www-data ${D_TEST}
}

restart_server () {
    cd ${D_TEST}
    sh "${SH_STOP}"
    if mv "${D_BUILD}" "${D_BUILD}.before.${TS}"
    then
        success "Old build moved to ${D_BUILD}.before.${TS}"
    else
        error "Can't rename current build folder."
    fi
    mv "${D_TEST}" "${D_BUILD}"
    cd ${D_BUILD}
    sh "${SH_START}"
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
