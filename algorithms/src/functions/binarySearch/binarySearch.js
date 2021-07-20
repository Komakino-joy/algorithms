//* Binary search is used for arrays that are sorted in ascending order.

//* [1, 2, 3, 4, 5, 6, 7, 8, 9]
//^  L=left      M=mid       R=right 

// Complexity:
// Time: O(log n)
// Space: O(1)
export const binarySearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;

    while(left <= right) {
        const mid = Math.floor((left + right) / (2));
        const foundVal = array[mid];

        if (foundVal === target) {
            return mid;
        } else if (foundVal < target) {
            left = mid + 1;
            // exampleTarget = 8;
            //* [1, 2, 3, 4, 5, 6, 7, 8, 9]
            //^              M  L        R 
        } else if (foundVal > target) {
            right = mid - 1;
            // exampleTarget = 3;
            //* [1, 2, 3, 4, 5, 6, 7, 8, 9]
            //^  L        R  M          
        }
    }

    return -1;
}