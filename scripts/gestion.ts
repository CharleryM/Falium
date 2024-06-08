import { ToolsFunctions } from "./toolsFunctions";

export class Gestion {
    static Compiler(text: string) {
        let compiled = ''
        compiled = this.HorizontalBreck(text);
        compiled = this.Summary(compiled);
        return compiled;
    }
    static HorizontalBreck(text: string): string {    //barre horisontal de séparation
        return text.replace(/§/g, '<hr>');
    }
    static Summary(text: string): string {
        let remove:string[]=[]
        let finalText: string[] = [];
        let lines: string[] = text.split('\n');

        lines.forEach((line) => {
            if (/\[.*?\]/.test(line)) {
                // Remplace le texte entre crochets par un lien
                const summary: string = ToolsFunctions.SliceBetween(line, '[', ']');
                const ink: string = ToolsFunctions.SliceBetween(line, '(', ')');
                line = ToolsFunctions.removeTextBetween(line,'(',')')
                const textLink: string = `<a href="${ink}">${summary}</a>`;

                // Remplacer le texte original par le lien dans la ligne
                const updatedLine = line.replace(/\[.*?\]/, textLink);
                finalText.push(`${updatedLine}\n`);
            } else {
                finalText.push(`${line}\n`);
            }
        });

        const file: string = finalText.join('');
        return file;

    }
}