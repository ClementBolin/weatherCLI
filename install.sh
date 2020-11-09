#!/usr/bin/env bash

if [[ $EUID -ne 0 ]]; then
    echo "You must run this with superuser priviliges.  Try \"sudo ./install.sh\"" 2>&1
    exit 1
else
    echo "Installing btop..."
fi

pwd = $PWD

function install() {
    if [[ ! -d /usr/local/lib/node_modules ]]
    then
        mkdir /usr/local/lib/node_modules
    fi
    npm i --save
    npm run build
    cp -r ../weatherCLI /usr/local/lib/node_modules
    cd /usr/local/lib/node_modules/weatherCLI/
    cd /usr/local/bin
    ln -s /usr/local/lib/node_modules/weatherCLI/bin/weatherCLI weatherCLI
    cd $pwd
    echo "weatherCLI install on your system"
}

install
