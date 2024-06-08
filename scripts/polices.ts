export class Polices {
    static comiler(text: string) {                    //exécute toutes les polices
        let compiled: string = ''
        compiled = this.Strong(text);
        compiled = this.Italic(compiled);
        compiled = this.Mocked(compiled);
        compiled = this.Code(compiled);
        compiled = this.Title(compiled);
        return compiled;
    }
    static polices(text: string): string {
        throw new Error("Method not implemented.");
    }
    static Strong(text: string): string {             //gras
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }
    static Italic(text: string): string {             //italique
        return text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    }
    static Mocked(text: string): string {             //barré
        return text.replace(/\~\~(.*?)\~\~/g, '<s>$1</s>');
    }
    static Underline(text: string): string {          //souligné
        return text.replace(/\_(.*?)\_/g, '<u>$1</u>');
    }
    static Code(text: string): string {               //bloque de code
        return text.replace(/\`(.*?)\`/g, '<code>$1</code>');
    }
    static Title(text: string): string {              //gestion des titre limiter à unetalle de h6
        let taille_title: number = 0;
        let lines: string[] = text.split('\n')
        let hashtag: string[] = []
        let title: string[] = []
        lines.forEach((line) => {
            if (line.startsWith("#")) {
                hashtag = line.split(' ', 2);
                taille_title = (hashtag[0].length);
                const titleText = line.substring(hashtag[0].length + 1);
                const idTitle: string = titleText.replace(/ /g, '_')
                if (taille_title > 6) {
                    title.push(`${line}`)
                } else {
                    title.push(`<h${taille_title} id=>'${idTitle}'>${titleText}</h${taille_title}>\n`)
                }
            } else {
                title.push(`${line}\n`)
            }
        })
        let file: string = title.join('')
        return file
    };
    
}