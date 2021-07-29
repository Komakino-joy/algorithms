import React, { useState } from 'react';

import './islands.styles.css';

const Islands = () => {

    const [myMatrix, setMyMatrix] = useState(
        [[1, 1, 1, 1, 0],
        [1, 1, 0, 1, 0],
        [1, 1, 0, 0, 1],
        [0, 0, 0, 1, 1]]);

    const [islands, setIslands] = useState(0);

    const directions = [
        [-1, 0],
        [0,  1],
        [1,  0],
        [0, -1]
    ]
    
    
    const numOfIslands = () => {      

        const newMatrix = Array.from(myMatrix)

        if (newMatrix.length === 0) return 0;
    
        let islandCount = 0;
    
        for (let row=0; row<newMatrix.length; row++) {
            for (let col=0; col<newMatrix[0].length; col++) {
                
                if (newMatrix[row][col] === 1) {
                    setIslands(islandCount++);
                    // newMatrix[row][col]=0

                    newMatrix[row][col] = 0
                    setMyMatrix(newMatrix)

         
                    const queue = [];
                    queue.push([row],[col]);
    
                    while (queue.length) {
                        const currentPos = queue.shift();
                        const currentRow = currentPos[0];
                        const currentCol = currentPos[1];
    
                        for (let i=0; i<directions.length; i++) {
                            const currentDir = directions[i];
                            const nextRow = currentRow + currentDir[0];
                            const nextCol = currentCol + currentDir[1];
    
                            if(nextRow < 0 || nextRow >= newMatrix.length || nextCol < 0 || nextCol >= newMatrix[0].length) {
                                continue;
                            }
    
                            if (newMatrix[nextRow][nextCol] === 1) {
                                console.log(newMatrix[0])
                                queue.push([nextRow, nextCol]);
                                newMatrix[nextRow][nextCol] = 0;
                    
                            }
                        }
                    }
                }
            }
        }

    }

    return (
        <div className='islands-container'>
            <div className='matrix-container'>

                {
                    myMatrix.map((row, idx) => (
                        row.map((col, idx) => (
                            <div key={idx} className={`${col === 0 ? 'water' : 'land'} matrix-square`}>{col}</div>
                        ))
                    ))
                }
            </div>
            <button onClick={numOfIslands} >Find Islands</button>
            <button onClick={() => console.log(myMatrix)} >My Matrix</button>
            <p>There are {islands} islands on this map.</p>
            <p>{myMatrix}</p>
        </div>
    )
}

export default Islands
