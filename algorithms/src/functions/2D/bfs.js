const myMatrix = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20]
]

const directions = [
    [-1,0], // up
    [0,1], // right
    [1,0], // down
    [0,-1] //left
]


// Complexity
// Space: O(n)
// Time: O(n)
const traversalBFS = function(matrix) {
    const seen = new Array(matrix.length).fill(0)
                .map(() => new Array(matrix[0].length).fill(false));

    const values = [];
    const queue = [[0,0]];

    while (queue.length) {
        const currentPosition = queue.shift();
        const row = currentPosition[0];
        const col = currentPosition[1];

        if (row<0 || row>=matrix.length || col<0 || col>=matrix[0].length || seen[row][col]) {
            continue;
        }

        seen[row][col] = true;
        values.push(matrix[row][col]);

        for (let i=0; i<directions.length; i++) {
            const currentDir = directions[i];
            queue.push([row + currentDir[0], col + currentDir[1]]);
        }
    }

    return values;
}