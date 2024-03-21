export class Polices {

    static Strong(input: string): string {
        return input.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    }

    static Italic(input: string): string {
        return input.replace(/\*(.*?)\*/g, '<em>$1</em>');
    }

    static Mocked(input: string): string {
        return input.replace(/\~\~(.*?)\~\~/g, '<s>$1</s>');
    }

    static Underline(input: string): string {
        return input.replace(/\_(.*?)\_/g, '<u>$1</u>');
    }

    static Code(input: string): string {
        return input.replace(/\`(.*?)\`/g, '<code>$1</code>');
    }
    static Title(input: string): string[]{
        let taille_title: number = 0;
        let lines: string[] = input.split('\n')
        let hashtag: string[] = []
        let title: string[] =[]
        lines.forEach((line) => {
            if (line.startsWith("#")) {
                hashtag = line.split(' ');
                taille_title = (hashtag[0].length);
                title.push(`<h${taille_title}>${hashtag[1]}</h${taille_title}>\n`)
            } else {
                title.push(`${line}\n`)
            }
        })
        return title
    };
}

export class Gestion {
    static horizontalBreck(input: string): string {
        return input.replace(/§/g, '<hr>')
    }
}

