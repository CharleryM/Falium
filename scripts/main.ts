import { Polices } from './polices';
import { Gestion } from './gestion';
import * as fs from 'fs';
import path, { ParsedPath } from 'path';
import { ToolsFunctions } from './toolsFunctions';
import { log } from 'console';

export class ToFalium {
    // Déclaration de la méthode principale
    static main() {
        interface toJison{
            Text:string
        }
        
        // Chemin vers le fichier Falium à interpréter
        const filePath = process.argv[2] as string; // Le premier argument (process.argv[0]) est le chemin vers Node.js et le deuxième argument (process.argv[1]) est le chemin vers votre script
        const fileName: string = (path.parse(filePath)).name
      
        if (!filePath) {
            console.error("Veuillez spécifier le nom du fichier à interpréter.");
            process.exit(1); // Quitter le script avec un code d'erreur
        }

        // Lire le contenu du fichier Falium
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error("Erreur lors de la lecture du fichier :", err);
                return;
            }
            let [textCompiled, codeSave] = Gestion.SaveCodeParts(data);
            textCompiled = Polices.Compiler(textCompiled);
            textCompiled = Gestion.Compiler(textCompiled);
            textCompiled = Gestion.PastCode(textCompiled, codeSave)

            
            const template: string = `
            <!DOCTYPE html>
            <html lang="en">
            <head>  
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="style/polices.css">
                <title>Document</title>
            </head>
            <body>
                ${textCompiled}
            </body>
            </html>`

            fs.writeFileSync(fileName + '.html', template)
        });
    }
}

// Appel de la méthode principale
ToFalium.main();
