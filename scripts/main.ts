import { Gestion, Polices } from "./polices";
import fs from 'fs';

// Chemin vers le fichier texte
const file = './fichier_test.txt';

function main() {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier :", err);
            return;
        }

        let text: string = data;
        let Text: string = Polices.Strong(text);
        Text = Polices.Italic(Text)
        Text = Polices.Mocked(Text)
        Text = Polices.Code(Text)
        Text = Gestion.horizontalBreck(Text)

        console.log(Text);
    });
}

main();