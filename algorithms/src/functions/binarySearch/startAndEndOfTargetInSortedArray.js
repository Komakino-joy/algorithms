//* Given an array of integers sorted in ascending order, return the starting and ending index of a given target value in an array, i.e. [x,y]. Your solution should run in O(lognN) time.

//* Example 1
//* array: [1, 3, 3, 5, 5, 5, 8, 9]
//* target: 5
//* [x,y] = [3,5]

//* Example 2
//* array: [1, 2, 3, 4, 5, 6]
//* target: 4
//* [x,y] = [3,3]

//* Example 3
//* array: [1, 2, 3, 4, 5, 6]
//* target: 9
//* [x,y] = [-1,-1]

//* Example 4
//* array: []
//* target: 4
//* [x,y] = [-1,-1]

const binarySearch = (array, left, right, target) => {
    while(left <= right) {
        const mid = Math.floor((left + right) / (2));
        const foundVal = array[mid];

        if (foundVal === target) {
            return mid;
        } else if (foundVal < target) {
            left = mid + 1;
        } else if (foundVal > target) {
            right = mid - 1;       
        }
    }

    return -1;
}

const searchRange = (nums, target) => {
    
    if (nums.length === 0) return [-1,-1];

    const firstPos = binarySearch(nums, 0, nums.length -1, target);

    if(firstPos === -1) return [-1,-1];

    let startPos = firstPos;
    let endPos = firstPos;

    let temp1;
    let temp2;

    while (startPos !== -1) {
        temp1 = startPos;
        startPos = binarySearch(nums, 0, startPos - 1, target);
    }
    startPos = temp1;

    while (endPos !== -1) {
        temp2 = endPos;
        endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
    }
    endPos = temp2;

    return [startPos, endPos];
}