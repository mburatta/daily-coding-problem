export function twoSum(nums: number[], target: number): number[] {

    const seen = new Map<number,number>();

    for (let i = 0; i < nums.length; i++) {

        const keys = [...seen.keys()];
        const current = nums[i];
        const need = target - current;

        if (keys.includes(need)) {
            return [seen.get(need) as number, i]
        }
        seen.set(current, i);
    }

    return [-1, -1];
}
