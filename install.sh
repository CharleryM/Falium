#!/bin/bash

# installation des dépendances
npm install

#compilation des scripts
tsc

#donner les drooits d'exécution
chmod +x build/main.js

# Chemin vers votre interpréteur Falium
FALIUM_PATH="node "$(dirname "$BASH_SOURCE")"/build/main.js"
echo "Chemin vers l'interpréteur Falium : $FALIUM_PATH"

# Vérifier si l'alias falium est déjà défini dans ~/.bash_aliases
if ! grep -q "alias falium='$FALIUM_PATH'" ~/.bash_aliases; then
    # Créer un alias pour exécuter votre interpréteur Falium
    echo "alias falium='$FALIUM_PATH'" >> ~/.bash_aliases
    echo "Alias 'falium' créé."
else
    echo "L'alias 'falium' est déjà défini dans ~/.bash_aliases."
fi

# Recharger le fichier de configuration bash
source ~/.bashrc
source ~/.bash_aliases

# Installation supplémentaire de votre projet si nécessaire
# (par exemple, installation de dépendances, compilation, etc.)
# Ajoutez le code d'installation supplémentaire ici

# Message de fin d'installation
echo "Installation terminée. Vous pouvez maintenant utiliser 'falium' pour exécuter votre interpréteur Falium sans spécifier le chemin complet."
