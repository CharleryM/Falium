# Falium
Un langage de prise de note et d'écriture de formules facile et rapide. Ce langage dédié aux étudiant et professeurs aussi bien litéraire que scientifique. Ce langage prendra en charge différantes polices d'écriture et un maximum de syntaxe mathématique. Il sera inspiré du Markdown et d'autre tel que le LaTeX.

## installation
### prérequis
- node doit être installer

installez les packages

    npm i

installer TypeScript

    sudo apt install node-typescript


## Commandes pour compiler et lancer le script
Compiler et créer le dossier build : 
La commandes pour linux:

    tsc

Les commandes pour mac : 

    tsc --init
    tsc

Pour avoir le résultat en html : 

    node ./build/main.js <nom_du_fichier.fal>

## Manuel et liste des outils mit en place
- entourer le texte de `*` pour mettre en *italique*
- entourer le texte de `**` pour mettre en **gras**
- entourer le texte de `_` pour mettre en souligné
- entourer le texte de ` pour mettre en code
- entourer le texte de `~~` pour mettre en railler
- commencer la ligne par `#` pour le titre plus vous en ajouter à la suite plus le titre sera petit avec une limite de taille 6
- `§` permet de faire une ligne de séparation.
<!-- - entourer le texte de \` pour mettre en `surligné` -->
- pour écrire dans un bloc de code  commancez votre texte par `>>` et finissez par `<<`