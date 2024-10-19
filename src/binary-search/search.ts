export function search(nums: number[], target: number): number {

    if(!nums.length) {
        return -1
    }

    if(nums.length === 1 && target === nums[0]){
        return 0;
    }

    let firstChildArrayIndex = 0;

    let splitIndex: number = nums.length -1;
    let globalIndex: number = 0;

    while(splitIndex > 0) {

        splitIndex = Math.floor(splitIndex/2);
        globalIndex = firstChildArrayIndex !== 0 ? globalIndex + splitIndex : splitIndex;
        const firstElementOfSecondArray = nums[globalIndex];

        if(target === firstElementOfSecondArray){
            return globalIndex;
        } else if(target > firstElementOfSecondArray) {
            firstChildArrayIndex = globalIndex + 1;
            splitIndex++;
            globalIndex++;
        } else {
            firstChildArrayIndex = 0;
        }
    }

    return -1;
}
