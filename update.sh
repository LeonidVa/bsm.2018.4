#!/usr/bin/env bash

#########################################
# Constants
#########################################

set -e

readonly WEBSITE="landing" # this file is designed to be used outside project and that variable defines which website to run

readonly TS=`date "+%Y%m%d-%H%M%S"`
readonly SLEEP_INTERVAL=3
readonly START_TIME=`date +%s`
readonly START_DIRECTORY=$(pwd)
readonly REPOSITORY="git@gitlab.com:igordata/bsm.2018.4.git"


# Directories
readonly D_ROOT=/var/www/besmarter/${WEBSITE}
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
    echo -n "${C_ERROR}ERROR: ${1}${C_RESET}\n"
}

success () {
    echo -n "${C_SUCCESS}${1}${C_RESET}\n"
}

info () {
    echo -n "${C_INFO}${1}${C_RESET}\n"
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

create_root_directory () {
  mkdir -p ${D_ROOT}
}

create_test_directory () {
    if mkdir -p ${D_TEST}
    then
        success "Created folder to test the build"
    else
        error "Can't create folder to test the build"
        finish ${E_CANT_CREATE_FOLDER}
    fi
}

clone_project () {
    if git clone --depth 1 ${REPOSITORY} ${D_TEST}
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
    chmod +x "${D_TEST}/websites/${WEBSITE}/build.sh"
    if "${D_TEST}/websites/${WEBSITE}/build.sh"
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
    # stopping the old one using the old stop.sh file from current build dir
    if [ -d "${D_BUILD}" ]; then
      cd ${D_BUILD}
      if [ -f "${D_BUILD}/websites/${WEBSITE}/stop.sh" ]; then
        chmod +x "${D_BUILD}/websites/${WEBSITE}/stop.sh"
        "${D_BUILD}/websites/${WEBSITE}/stop.sh"
      fi
      rm -rf "${D_BUILD}.old.3" 2>/dev/null
      mv "${D_BUILD}.old.2" "${D_BUILD}.old.3" 2>/dev/null
      mv "${D_BUILD}.old.1" "${D_BUILD}.old.2" 2>/dev/null
      if mv "${D_BUILD}" "${D_BUILD}.before.1"
      then
          success "Old build moved to ${D_BUILD}.before.1"
      else
          error "Can't rename current build folder."
      fi
    fi
    if mv "${D_TEST}" "${D_BUILD}"; then
      success "Current build updated, restarting"
    fi
    # after renaming test dir to build dir we use new start.sh version
    cd ${D_BUILD}
    chmod +x "${D_BUILD}/websites/${WEBSITE}/start.sh"
    "${D_BUILD}/websites/${WEBSITE}/start.sh"
}

#########################################
# Update project
#########################################
create_root_directory
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
