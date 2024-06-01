export const sanitizeImageUrl = (url:string): string => {

    // console.log("sanitizeImageUrl", url)

    if(checkIfRedditImage(url)){
        url = sanitizeRedditImage(url)
    }
    // console.log(url)

    return url
}

const checkIfRedditImage = (url:string): boolean => {
    const redditDomain = url.indexOf("redd.it") >-1 || url.indexOf("reddit") > -1
    const isJpeg = url.indexOf("jpeg") >-1

    return redditDomain && isJpeg
}

const sanitizeRedditImage = (url:string): string => {

    const regex = /https?:\/\/[^\/]+\/([a-zA-Z0-9]+)\.jpeg/;
    const match = url.match(regex);

    const code = match ?  match[1] : undefined
    // console.log(code); 

    return "https://i.redd.it/" + code + ".jpeg"
}