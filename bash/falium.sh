#!/bin/bash

# Vérifier si un fichier Falium est spécifié en argument
if [ -z "$1" ]; then
    echo "Usage: open-fal.sh [chemin_vers_fichier_falium]"
    exit 1
fi

# Vérifier si le fichier Falium existe
if [ ! -f "$1" ]; then
    echo "Le fichier Falium spécifié n'existe pas."
    exit 1
fi

# Exécuter votre programme avec Node.js en utilisant le fichier Falium spécifié
node ./build/main.js "$1"
