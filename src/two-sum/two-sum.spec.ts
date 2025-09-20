import {RunLengthEncoding} from "../run-length-encoding/run-length-encoding";
import {twoSum} from "./two-sum";

describe('TwoSum', () => {

    it('Input: nums = [2,7,11,15], target = 9, Output: [0,1]', () => {
        expect(twoSum([2,7,11,15], 9)).toStrictEqual([0,1]);
    });

    it('Input: nums = [1,2,3], target = 100, Output: [-1,-1]', () => {
        expect(twoSum([1,2,3], 100)).toStrictEqual([-1,-1]);
    })
});
