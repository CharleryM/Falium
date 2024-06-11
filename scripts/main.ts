import { Polices } from './polices';
import { Gestion } from './gestion';
import * as fs from 'fs';
import path, { ParsedPath } from 'path';

export class ToFalium {
    // Déclaration de la méthode principale
    static main() {
        interface toJison{
            Text:string
        }
        
        // Chemin vers le fichier Falium à interpréter
        const filePath = process.argv[2] as string; // Le premier argument (process.argv[0]) est le chemin vers Node.js et le deuxième argument (process.argv[1]) est le chemin vers votre script
        const fileName:string = (path.parse(filePath)).name
        
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

            let text: string = data;
            let newText: string = '';
            newText = Polices.comiler(text);
            newText = Gestion.Compiler(newText);
            fs.writeFileSync(fileName + '.html', `<html> <body> ${newText} </body> </html>\n    `)
            console.clear()
            console.log(newText);
        });
    }
}

// Appel de la méthode principale
ToFalium.main();
