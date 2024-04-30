export class ToolsFunctions {
    static SliceBetween(text: string, sliceStart: string, sliceEnd: string) {
        const startSlice = text.indexOf(sliceStart);
        const endSlice = text.indexOf(sliceEnd);
        let sliceResult: string = '';
        if (startSlice !== -1 && endSlice !== -1 && startSlice < endSlice) {
            sliceResult = text.substring(startSlice + 1, endSlice);
        };
        return sliceResult
    }
}