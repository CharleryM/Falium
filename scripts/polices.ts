export class Polices {

    static Strong(input: string): string {             //gras
        return input.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    static Italic(input: string): string {             //italique
        return input.replace(/\*(.*?)\*/g, '<em>$1</em>');
    }

    static Mocked(input: string): string {             //barré
        return input.replace(/\~\~(.*?)\~\~/g, '<s>$1</s>');
    }

    static Underline(input: string): string {          //souligné
        return input.replace(/\_(.*?)\_/g, '<u>$1</u>');
    }

    static Code(input: string): string {               //bloque de code
        return input.replace(/\`(.*?)\`/g, '<code>$1</code>');
    }
    static Title(input: string): string {              //gestion des titre limiter à unetalle de h6
        let taille_title: number = 0;
        let lines: string[] = input.split('\n')
        let hashtag: string[] = []
        let title: string[] = []
        lines.forEach((line) => {
            if (line.startsWith("#")) {
                hashtag = line.split(' ');
                taille_title = (hashtag[0].length);
                if (taille_title > 6) {
                    title.push(`${line}`)
                } else {
                    title.push(`<h${taille_title}>${hashtag[1]}</h${taille_title}>\n`)
                }
            } else {
                title.push(`${line}\n`)
            }
        })
        let file: string = title.join('')
        return file
    };
    static polices(text: string) {

        let Text: string = Polices.Strong(text);
        Text = Polices.Italic(Text);
        Text = Polices.Mocked(Text);
        Text = Polices.Code(Text);
        Text = Polices.Title(Text);
        return Text;
    }
    
}


export class Gestion {
    static horizontalBreck(input: string): string {    //barre horisontal de séparation
        return input.replace(/§/g, '<hr>')
    }
}

