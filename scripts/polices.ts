export class Polices {
    static Compiler(text: string): string {                    
        let compiled: string = this.Strong(text);
        compiled = this.Italic(compiled);
        compiled = this.Underline(compiled);
        compiled = this.Mocked(compiled);
        compiled = this.Title(compiled);
        return compiled;
    }
   
    //gras
    static Strong(text: string): string {             
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    //italique
    static Italic(text: string): string {             
        return text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    }

    //barré
    static Mocked(text: string): string {             
        return text.replace(/\~\~(.*?)\~\~/g, '<s>$1</s>');
    }

    //souligné
    static Underline(text: string): string {          
        return text.replace(/\_(.*?)\_/g, '<u>$1</u>');
    }
   
    //gestion des titre limiter à une talle de h6
    static Title(text: string): string {
    return text.split('\n').map(line => {
        if (!line.startsWith('#')) {
            return `${line}\n`;
        }

        const hashMatch = line.match(/^(#+)\s+(.+)$/);
        if (!hashMatch) {
            return `${line}\n`;
        }

        const [, hashes, titleText] = hashMatch;
        const titleLevel = hashes.length;

        if (titleLevel > 6) {
            return `${line}\n`;
        }

        const idTitle = titleText.replace(/ /g, '_');
        return `<h${titleLevel} id='${idTitle}'>${titleText}</h${titleLevel}>\n`;
    }).join('');
}
    
}