import {ToolsFunctions} from "./toolsFunctions";

export class Gestion {
    static Compiler(text: string): string {
        let compiled:string = this.HorizontalBreck(text);
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

        return finalText.join('');

    }

    //surligné
    static highlight(text: string): string {               
        return text.replace(/(?<!`)`([^`]+)`(?!`)/g, `<code class='highlight'>$1</code>`);
    }

    // mettre de coté les textes à ne pas modiffier
    static SaveCodeParts(data: string): [string, string[]] {
    const textsSlice: string[] = ToolsFunctions.SliceArray(data, '>>', '<<');
    let textWithChekpoints: string = data;

    if (textsSlice.length > 0) {
        const escapedSlice = textsSlice.map(s => ToolsFunctions.escapeRegExp(s));
        const generateCheckpoint = new RegExp(`(${escapedSlice.join('|')})`, 'gis');

        let pointIndex = 0;
        textWithChekpoints = textWithChekpoints.replace(generateCheckpoint, () => `£point${pointIndex++}`);
        return [textWithChekpoints.replace(/>>([\s\S]*?)<</gs, `
        <div><pre><code>$1</code></pre></div>`), textsSlice];
    } else {
        return [textWithChekpoints, []];
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
        return text.replace(/>>(.*?)/g, '<br>')
    }
}
