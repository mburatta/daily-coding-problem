import {search} from "./search";

describe('Binary Search', () => {

    it('Input: nums = [-1,0,3,5,9,12], target = 9; Output: 4', () => {

        const nums = [-1,0,3,5,9,12];
        const target = 9;

        expect(search(nums,target)).toBe(4)
    })

    it('Input: nums = [-1,0,3,5,9,12], target = 2; Output: -1', () => {

        const nums = [-1,0,3,5,9,12];
        const target = 2;

        expect(search(nums,target)).toBe(-1)
    })

    it('Input: nums = [-1,0,3,5,9,12], target = 0; Output: 1', () => {

        const nums = [-1,0,3,5,9,12];
        const target = 0;

        expect(search(nums,target)).toBe(1)
    })

    it('Input: nums = [5], target = 5; Output: 0', () => {

        const nums = [5];
        const target = 5;

        expect(search(nums,target)).toBe(0)
    })
})
