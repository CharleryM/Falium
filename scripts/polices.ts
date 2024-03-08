export function Strong(input: string): string {
    return input.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export function Italic(input: string): string {
    return input.replace(/\*(.*?)\*/g, '<em>$1</em>');
}

export function Mocked(input: string): string {
    return input.replace(/\~\~(.*?)\~\~/g, '<s>$1</s>');
}

export function Code(input: string): string{
    return input.replace(/\`(.*?)\`/g, '<code>$1</code>');
}

export function horizontalBreck(input: string): string{
    return input.replace(/§/g, '<hr>')
}