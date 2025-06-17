#!/bin/bash

# Mettre à jour les paquets
sudo apt update
sudo apt upgrade -y

# Installer npm si nécessaire
sudo apt install -y npm curl

# Installer NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

# Installer et utiliser la version Node 18.17.1
nvm install 18.17.1
nvm use 18.17.1

# Installer les outils nécessaires à la compilation
sudo apt install -y build-essential python3 g++ make

# Lien symbolique python (certaines build tools attendent "python" et non "python3")
if ! command -v python &> /dev/null; then
    sudo ln -s /usr/bin/python3 /usr/bin/python
fi

# Compiler pour différentes plateformes avec nexe
nexe ./build/main.js --build --verbose -t linux-x64-18.17.1 -o falium-linux-x64
nexe ./build/main.js --build --verbose -t linux-x86-18.17.1 -o falium-linux-x86
nexe ./build/main.js --build --verbose -t windows-x64-18.17.1 -o falium-windows-x64.exe
nexe ./build/main.js --build --verbose -t windows-x86-18.17.1 -o falium-windows-x86.exe
nexe ./build/main.js --build --verbose -t mac-x64-18.17.1 -o falium-mac-x64
nexe ./build/main.js --build --verbose -t mac-arm64-18.17.1 -o falium-mac-arm64
