import * as police from './polices';

function main() {
    const args = process.argv.slice(2); // Exclut les deux premiers arguments (node et nom du script)
    if (args.length === 0) {
        console.log("rien à convertir");
        return;
    }
    const TextInput: string | null = args.join(" ");
    let Text: string = police.Strong(TextInput);
    Text = police.Italic(Text)
    Text = police.Mocked(Text)
    Text = police.Code(Text)

    console.log(Text);
}

main();