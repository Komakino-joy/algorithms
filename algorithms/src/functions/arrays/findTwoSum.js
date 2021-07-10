// Given a target and an array of numbers,
// Find the first two numbers whose sum is equal to the target

// const numArray = [1,3,4,7,9,2];
// const target = 11;

// Space complexity = O(1)
// Time complexity = O(n^2)
export const findTwoSumSlow = (numArray, target) => {
    for (let p1 = 0 ; p1 < numArray.length() ; p1++) {
        const numberToFind = target - numArray[p1];

        for (let p2 = p1 + 1 ; p2 < numArray.length ; p2++) {
            if (numberToFind === numArray[p2]) {
                return[p1, p2];
            }
        }
    }
    return null;
};

// Space complexity = O(n)
// Time complexity = O(n)
export const findTwoSumFast = (numArray, target) => {
    const numsHash = {};

    for (let p = 0 ; p < numArray.length() ; p++) {
        // returns undefined until we find a match in our numsHash
        const currentHashVal = numsHash[numArray[p]];

        if (currentHashVal >= 0) {
            return [currentHashVal, p]
        } else {
            const numberToFind = target - numArray[p];
            numsHash[numberToFind] = p;
        }
    } 

    return null;
};