#!/bin/bash

sudo apt update
sudo apt upgrate
sudo apt install npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install 18.17.1
nvm use 18.17.1
sudo apt install -y build-essential python3 g++ make
nexe ./build/main.js --build -t --verbose linux-x64-18.17.1 -o falium
sudo ln -s /usr/bin/python3 /usr/bin/python