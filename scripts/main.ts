import { Gestion, Polices } from "./polices";
import * as fs from 'fs';

// Chemin vers le fichier Falium à interpréter
const filePath: string = process.argv[2]; // Le premier argument (process.argv[0]) est le chemin vers Node.js et le deuxième argument (process.argv[1]) est le chemin vers votre script

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
    // let Text: string = Polices.Strong(text);
    // Text = Polices.Italic(Text);
    // Text = Polices.Mocked(Text);
    // Text = Polices.Code(Text);
    // Text = Polices.Title(Text);
    // Text = Gestion.horizontalBreck(Text);

    console.log(Polices.Title(text));
});