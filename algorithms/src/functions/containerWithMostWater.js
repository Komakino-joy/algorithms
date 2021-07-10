// You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.

//TODO Devlop graph using react-charts that will calculate this visually.

// Complexity:
// Time = O(n^2)
// Space = O(1)
export const getMaxWaterContainerSlow = (heights) => {
    let maxArea = 0;

    for (let p1 = 0; p1 < heights.length; p1++) {
        for (let p2 = p1 + 1; p2 < heights.length; p2++) {

            const length = Math.min(heights[p1], heights[p2]);
            const width = p2 - p1;
            const area = length * width;

            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
};

// Complexity:
// Time = O(n)
// Space = O(n)
//^ The Two Shifting Pointers Technique
export const getMaxWaterContainerFast = (heights) => {
    let p1 = 0;
    let p2 = heights.length - 1;
    let maxArea = 0;

    while (p1 < p2) {
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        const area = height * width;
        maxArea = Math.max(maxArea, area);

        if (heights[p1] <= heights[p2]) {
            p1++;
        } else {
            p2--;
        }
    }

    return maxArea;
};