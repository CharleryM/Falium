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
                    title.push(`<h${taille_title} id='${idTitle}'>${titleText}</h${taille_title}>\n`)
                }
            } else {
                title.push(`${line}\n`)
            }
        })
        let file: string = title.join('')
        return file
    };
    
}