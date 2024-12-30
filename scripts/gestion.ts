import { BADNAME } from "dns";
import { ToolsFunctions } from "./toolsFunctions";

export class Gestion {
    static Compiler(text: string) {
        let compiled: string = ''
        compiled = this.HorizontalBreck(text);
        compiled = this.anchoring(compiled);
        compiled = this.Highlighte(compiled);
        compiled = this.newLine(compiled);
        return compiled;
    }

    static HorizontalBreck(text: string): string {    //barre horisontal de séparation
        return text.replace(/§/g, '<hr>');
    }

    static anchoring(text: string): string {          // ancrage et sommaire
        let finalText: string[] = [];
        let lines: string[] = text.split('\n');

        lines.forEach((line) => {
            if (/\[.*?\]/.test(line)) {
                // Remplace le texte entre crochets par un lien
                const summary: string = ToolsFunctions.SliceString(line, '[', ']');
                const anchor: string = ToolsFunctions.SliceString(line, '(', ')');
                line = ToolsFunctions.removeTextBetween(line, '(', ')')
                const textLink: string = `<a href="${anchor}">${summary}</a>`;

                // Remplacer le texte original par le lien dans la ligne
                const updatedLine = line.replace(/\[.*?\]/, textLink);
                finalText.push(`${updatedLine}<br>\n`);
            } else {
                finalText.push(`${line}<br>\n`);
            }
        });

        const file: string = finalText.join('');
        return file;

    }

    static Highlighte(text: string): string {               //surligné
        return text.replace(/(?<!`)`([^`]+)`(?!`)/g, `<code class='highlighte'>$1</code>`);
    }

    static SaveCodeParts(text: string): string {           //code
        let textSlice: string[] = ToolsFunctions.SliceArray(text, '``', '``');

        if (textSlice.length > 0) {
            console.log('il y a du texte')

            textSlice.forEach((text, index: Number) => {
                if (text === null ) {
                }
            })

            const generateCheckpoint: RegExp = new RegExp(`\b(${textSlice.join('|')})\b`, 'gis'); // Ajout du flag 's'
            let checkpoint: string = text.replace(generateCheckpoint, '£point');

            let newText: string = checkpoint.replace(/``([\s\S]*?)``/gs, `
    <div><br><pre> <code>$1</code> </pre><br></div>`);

            return newText;

        } else {
            // Si textSlice est vide, retourner le texte original ou une valeur par défaut
            return text;
        }
    }

    static PastCode(data: string, text: string): string {
        let textSlice: string[] = ToolsFunctions.SliceArray(data, '``', '``');
        let newText: string = text;

        // Si textSlice est vide, on peut éviter la création de RegExp inutile
        if (textSlice.length > 0) {
            textSlice.forEach((index) => {
                if (index !== undefined) { // Assurez-vous que index n'est pas undefined
                    newText = newText.replace('£point', index);
                }
            });
            this.Tabulation
        }

        return newText;
    }

    static Tabulation(text: string) {
        return text.replace(/\t(.*?)/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
    }
    static newLine(text: string) {
        return text.replace(/>>(.*?)/g, '<br>')
    }
}
