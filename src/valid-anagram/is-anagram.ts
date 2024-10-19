export function isAnagram(s: string, t: string): boolean {

    if(t.length === 0) {
        return false;
    }

    const sChars = new Map<string, number>();
    const tChars = new Map<string, number>();

    for(let char of s){

        const value = sChars.get(char)

        if(!value) {
            sChars.set(char, 1);
        } else {
            sChars.set(char, value + 1)
        }
    }

    for(let char of t){

        const value = tChars.get(char)

        if(!value) {
            tChars.set(char, 1);
        } else {
            tChars.set(char, value + 1)
        }
    }

    const sCharsKey = [...sChars.keys()]
    const tCharsKey = [...tChars.keys()]

    if(sCharsKey.length !== tCharsKey.length) {
        return false;
    }

    for(let sCharKey of sCharsKey){

        const tCharCount = tChars.get(sCharKey);
        if(!tCharCount || tCharCount !== sChars.get(sCharKey)) {
            return false;
        }
    }

    return true;
}
