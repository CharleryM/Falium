import { ToolsFunctions } from "./toolsFunctions";

export class Gestion {
    static Compiler(text: string): string {
        let compiled: string = this.HorizontalBreck(text);
        compiled = this.anchoring(compiled);
        compiled = this.Tabulation(compiled);
        compiled = this.highlight(compiled);
        compiled = this.newLine(compiled);
        return compiled;
    }

    //barre horisontal de séparation
    static HorizontalBreck(text: string): string {
        return text.replace(/§/g, '<hr>');
    }

    // ancrage et sommaire
    static anchoring(text: string): string {
        let finalText: string[] = [];
        let lines: string[] = text.split('\n');

        lines.forEach((line) => {
            const processedLine = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
            finalText.push(`${processedLine}\n`);
        });

        return finalText.join('');
    }

    //surligné
    static highlight(text: string): string {
        return text.replace(/`([^`]+)`/g, `<code class='highlight'>$1</code> \n`);
    }

    // mettre de coté les textes à ne pas modiffier
    static SaveCodeParts(data: string): [string, string[]] {
        const textsSlice: string[] = ToolsFunctions.SliceArray(data, '^^', '^^');
        let textWithCheckpoints: string = data; // Correction: "Checkpoints"

        if (textsSlice.length > 0) {
            const escapedSlice = textsSlice.map(s => ToolsFunctions.escapeRegExp(s));
            const generateCheckpoint = new RegExp(`(${escapedSlice.join('|')})`, 'gi'); // Suppression du 's'

            let pointIndex = 0;
            textWithCheckpoints = textWithCheckpoints.replace(generateCheckpoint, () => `£point${pointIndex++}`);

            return [textWithCheckpoints.replace(/\^\^([\s\S]*?)\^\^/g, (match, code) => {
                return `<div><pre><code>${code.trim()}</code></pre></div>`;
            }), textsSlice];
        } else {
            return [textWithCheckpoints, []];
        }
    }


    // remettre en place les textes mit de coté
    static PastCode(text: string, codeSave: string[]): string {
        let finalText = text;

        codeSave.forEach((code, index) => {
            const checkpoint = `£point${index}`;
            finalText = finalText.replace(checkpoint, code);
        });

        return finalText;
    }

    // créer des tabulations
    static Tabulation(text: string) {
        return text.replace(/\t/g, '&nbsp;&nbsp;')
    }

    // faire des retour à la ligne
    static newLine(text: string) {
        return text.replace(/$/gm, '<br>') // Ajoute <br> à chaque fin de ligne
    }
}
