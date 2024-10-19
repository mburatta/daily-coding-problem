export function isPalindrome(s: string): boolean {

    const purgedPalindrome = s.replace(/[\W_]/g, '').toLowerCase()

    if(purgedPalindrome.length === 0) {
        return true;
    }

    const purgePalindromeChars = [...purgedPalindrome];
    const isPurgedPalindromeOdd = !(purgePalindromeChars.length%2);

    const leftToken: string[] = [];
    const rightReverseToken: string[] = [];

    // Calculate values if purgePalindrome is Odd
    let lastLeftTokenIndex = purgedPalindrome.length/2 -1;
    let firstLeftTokenIndex = (lastLeftTokenIndex + 1)
    if(!isPurgedPalindromeOdd) {
        lastLeftTokenIndex = (purgedPalindrome.length-1)/2 -1;
        firstLeftTokenIndex = (lastLeftTokenIndex + 2)
    }

    for(let c = 0; c <= lastLeftTokenIndex; c++) {
        leftToken.push(purgePalindromeChars[c]);
    }

    for(let c = purgedPalindrome.length -1; c >= firstLeftTokenIndex; c--) {
        rightReverseToken.push(purgePalindromeChars[c]);
    }

    return leftToken.join('') === rightReverseToken.join('')
}
