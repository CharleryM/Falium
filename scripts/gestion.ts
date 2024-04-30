import { link } from "fs";
import { ToolsFunctions } from "./toolsFunctions";

export class Gestion {
    static Compiler(text: string) {
        let compiled = this.HorizontalBreck(text);
        compiled = this.Link(compiled); 
        return compiled;
    }
    static HorizontalBreck(text: string): string {    //barre horisontal de séparation
        return text.replace(/§/g, '<hr>');
    }
    static Link(text: string): string {
        let textLink: string = '';
        let textSice: string = ToolsFunctions.SliceBetween(text, '[', ']')
        textLink = text.replace(textSice, '<a>' + textSice + '</a>')
        return textLink
    }
}