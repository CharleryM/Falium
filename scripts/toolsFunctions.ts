export class ToolsFunctions {
    
    // Fonction utilitaire pour échapper les caractères spéciaux dans les délimiteurs de l'expression régulière
    static escapeRegExp(string: string): string {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    static SliceString(text: string, sliceStart: string, sliceEnd: string) {
        const startSlice = text.indexOf(sliceStart);
        const endSlice = text.indexOf(sliceEnd);
        let sliceResult: string = '';
        if (startSlice !== -1 && endSlice !== -1 && startSlice < endSlice) {
            sliceResult = text.substring(startSlice + 1, endSlice);
        };
        return sliceResult
    }

    static SliceArray(text: string, sliceStart: string, sliceEnd: string): string[] {
    const memory: string[] = []; // const au lieu de let

    // Expression régulière pour capturer les textes entre les délimiteurs
    const sliceSave = new RegExp(`${this.escapeRegExp(sliceStart)}([\\s\\S]*?)${this.escapeRegExp(sliceEnd)}`, 'g');

    let match: RegExpExecArray | null;
    while ((match = sliceSave.exec(text)) !== null) {
        memory.push(match[1]); // Ajouter le texte capturé (groupe 1) au tableau
    }

    return memory;
}


    static removeTextBetween(text: string, startChar: string, endChar: string): string {
        const regex = new RegExp(`\\${startChar}.*?\\${endChar}`, 'g');
        return text.replace(regex, '');
    }
}