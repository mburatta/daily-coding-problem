import {isPalindrome} from "./is-palindrome.fn";

describe('Validate Palindrome string', () => {

    it('"A man, a plan, a canal: Panama" is a palindrome', () => {

        const input = "A man, a plan, a canal: Panama";
        expect(isPalindrome(input)).toBe(true)
    })

    it('"race a car" is not a palindrome', () => {

        const input = "race a car";
        expect(isPalindrome(input)).toBe(false)
    })

    it('" " is not a palindrome', () => {

        const input = " ";
        expect(isPalindrome(input)).toBe(true)
    })
})
