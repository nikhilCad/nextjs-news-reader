export const getTextEllipsis = (text: string, length:number = 500):string => {

    if (text?.length <= 100) {
        return text;
    }
    return text?.slice(0, length) + '...';
}