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
}

export class Gestion {
    static horizontalBreck(input: string): string {
        return input.replace(/§/g, '<hr>')
    }
}