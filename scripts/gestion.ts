import {ToolsFunctions} from "./toolsFunctions";

export class Gestion {
    static Compiler(text: string, codeSave:string[]) {
        let compiled:string = this.HorizontalBreck(text);
        compiled = this.anchoring(compiled);
        compiled = this.Tabulation(compiled);
        compiled = this.highlight(compiled);
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

        return finalText.join('');

    }

    static highlight(text: string): string {               //surligné
        return text.replace(/(?<!`)`([^`]+)`(?!`)/g, `<code class='highlight'>$1</code>`);
    }

    static SaveCodeParts(text: string): string {
        let textSlice: string[] = ToolsFunctions.SliceArray(text, '\t>>', '<<');

        if (textSlice.length > 0) {
            console.log('il y a du texte');

            // Échapper chaque bloc de texte pour RegExp
            const escapedSlice = textSlice.map(s => ToolsFunctions.escapeRegExp(s));
            const generateCheckpoint = new RegExp(`(${escapedSlice.join('|')})`, 'gis');

            let checkpoint: string = text.replace(generateCheckpoint, '£point');
            console.log(checkpoint)

            return checkpoint.replace(/\t>>([\s\S]*?)<</gs, `
            <div><br><pre> <code>$1</code> </pre><br></div>`);
        } else {
            return text;
        }
    }

    static PastCode(data: string, text: string): (string[] | string)[] {
        const saveText: string[] = ToolsFunctions.SliceArray(data, '\t>>', '<<');
        let newText: string = text;

        let pointIndex = 0;

        while (newText.includes('£point') && pointIndex < saveText.length) {
            newText = newText.replace('£point', saveText[pointIndex]);
            pointIndex++;
        }

        return [saveText, newText];
    }

    static Tabulation(text: string) {
        return text.replace(/\t/g, '&nbsp;&nbsp;')
    }
    static newLine(text: string) {
        return text.replace(/>>(.*?)/g, '<br>')
    }
}
