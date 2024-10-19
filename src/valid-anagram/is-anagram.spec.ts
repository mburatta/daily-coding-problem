import {isAnagram} from "./is-anagram";

describe('Valid anagram of a string', () => {

    it('Input: s = "anagram", t = "nagaram", Output: true', () => {

        const s = "anagram";
        const t = "nagaram";

        expect(isAnagram(s,t)).toBe(true)
    })

    it('Input: s = "rat", t = "car", Output: true', () => {

        const s = "rat";
        const t = "car";

        expect(isAnagram(s,t)).toBe(false)
    })
})
