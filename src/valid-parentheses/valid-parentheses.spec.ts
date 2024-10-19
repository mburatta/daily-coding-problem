import {isParenthesesValid} from "./valid-parentheses";

describe('Valid Parentheses', () => {

    it('Input: s = "()" Output: true', () => {
        expect(isParenthesesValid('()')).toBe(true);
    });

    it('Input: s = "()[]{}" Output: true', () => {
        expect(isParenthesesValid("()[]{}")).toBe(true);
    });

    it('Input: s = "([])" Output: true', () => {
        expect(isParenthesesValid("([])")).toBe(true);
    });

    it('Input: s = "(]" Output: false', () => {
        expect(isParenthesesValid("(]")).toBe(false);
    });

    it('Input: s = "((]]" Output: false', () => {
        expect(isParenthesesValid("((]]")).toBe(false);
    });

    it('Input: s = "([)]" Output: false', () => {
        expect(isParenthesesValid("([)]")).toBe(false);
    });

    it('Input: s = "(])" Output: false', () => {
        expect(isParenthesesValid("(])")).toBe(false);
    });
});
