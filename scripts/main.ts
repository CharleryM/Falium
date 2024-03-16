import { Gestion, Polices } from "./polices";
import * as fs from 'fs';

// Chemin vers le fichier Falium à interpréter
const filePath: string = "fichier_test.fal";

// Lire le contenu du fichier Falium
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Erreur lors de la lecture du fichier :", err);
        return;
    }

    let text: string = data;
    let Text: string = Polices.Strong(text);
    Text = Polices.Italic(Text);
    Text = Polices.Mocked(Text);
    Text = Polices.Code(Text);
    Text = Gestion.horizontalBreck(Text);

    console.log(Text);
});