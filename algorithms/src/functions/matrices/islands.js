//^ Given a 2D array containing only 1's (land) and 0's (water), count the number of islands.
//^ An island is land connected horizontally or vertically. 

//* TEST CASES 
//* [[1, 1, 1, 1, 0]
//*  [1, 1, 0, 1, 0]   TWO ISLANDS
//*  [1, 1, 0, 0, 1]
//*  [0, 0, 0, 1, 1]]

//* [[0, 1, 0, 1, 0]
//*  [1, 0, 1, 0, 1]   SEVEN ISLANDS
//*  [0, 1, 1, 1, 0]
//*  [1, 0, 1, 0, 1]]


const myMatrix = [[0, 1, 0, 1, 0],[1, 0, 1, 0, 1],[0, 1, 1, 1, 0],[1, 0, 1, 0, 1]]

const directions = [
    [-1, 0],
    [0,  1],
    [1,  0],
    [0, -1]
]

const numberOfIslands = function(matrix) {
    if (matrix.length === 0) return 0;

    let islandCount = 0;

    for (let row=0; row<matrix.length; row++) {
        for (let col=0; col<matrix[0].length; col++) {
            if (matrix[row][col] === 1) {
                islandCount++;
                matrix[row][col]=0
     
                const queue = [];
                queue.push([row],[col]);

                console.log(matrix);

                while (queue.length) {
                    const currentPos = queue.shift();
                    const currentRow = currentPos[0];
                    const currentCol = currentPos[1];

                    for (let i=0; i<directions.length; i++) {
                        const currentDir = directions[i];
                        const nextRow = currentRow + currentDir[0];
                        const nextCol = currentCol + currentDir[1];

                        if(nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix.length) {
                            continue;
                        }

                        if (matrix[nextRow][nextCol] === 1) {
                            queue.push([nextRow, nextCol]);
                            matrix[nextRow][nextCol] = 0;
                        }
                    }
                }
            }
        }
    }

    return islandCount;
}