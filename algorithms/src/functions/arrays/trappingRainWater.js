//Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped.

const testArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2] // Answer should be 8

//calculate water = min(maxL, maxRight) - currentHeight;


// Complexity
// Time O(n^2)
// Space O(1)
const getTrappedRainWaterSlow = (heights) => {
    let totalWater = 0;
    
    for (let p=0; p < heights.length; p++) {
        let leftP = p;
        let rightP = p;
        let maxLeft = 0;
        let maxRight = 0;

        while ( leftP >= 0 ) {
            maxLeft = Math.max(maxLeft, heights[leftP]);
            leftP--;
        };

        while ( rightP < heights.length ) {
            maxRight = Math.max(maxRight, heights[rightP]);
            rightP++;
        };

        const currentWater = Math.min(maxLeft, maxRight) - heights[p];

        if ( currentWater >= 0 ) {
            totalWater += currentWater;
        };


    }

    return totalWater;
};


// Complexity
// Time O(n)
// Space O(1)
const getTrappedRainWaterFast = (heights) => {
    let total = 0;
    let left = 0;
    let right = heights.length - 1;
    let maxLeft = 0;
    let maxRight =0;

    while (left < right) {
        if (heights[left] <= heights[right]) {
            if (heights[left] >= maxLeft) {
                maxLeft = heights[left];
            } else {
                total += maxLeft - heights[left];
            }
            left++;
        } else {
            if (heights[right] >= maxRight) {
                maxRight = heights[right];
            } else {
                total += maxRight - heights[right];
            }
            right--;
        }
    }

    return total;
};