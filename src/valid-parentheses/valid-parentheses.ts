export function isParenthesesValid(s: string): boolean {

    let chars = new Array<string>();

    const bracketsMap: { [key: string]: string} = {
        ')': '(',
        ']': '[',
        '}': '{',
    }

    for (const char of s) {
        if (chars.length) {
            if(char in bracketsMap) {
                const tail = chars.pop();
                if(bracketsMap[char] !== tail) {
                    return false
                }
            } else {
                chars.push(char)
            }
        } else {
            chars.push(char)
        }
    }

    return chars.length === 0
}
