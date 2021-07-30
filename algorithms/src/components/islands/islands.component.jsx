import React, { useState } from 'react';

import './islands.styles.css';

const Islands = () => {


    const [matrix, setMatrix] = useState(
        [[1, 1, 1, 1, 0],
        [1, 1, 0, 1, 0],
        [1, 1, 0, 0, 1],
        [0, 0, 0, 1, 1]]
    )        

    let [totalIslands, setTotalIslands] = useState(0);

    const directions = {
        0:{
            coordinates:[-1, 0],
            direction: 'left',
        },
        1:{
            coordinates:[0,  1],
            direction: 'up',
        },
        2:{
            coordinates:[1,  0],
            direction: 'right',
        },
        3:{
            coordinates:[0, -1],
            direction: 'down',
        },
    }
    

    const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    const updateMatrix = async(matrix, row, col) => {
        const copyOfMatrix = [...matrix];
        await sleep(100);
        copyOfMatrix[row][col] = 0;
        // console.log(matrix[0])
        // console.log(matrix[1])
        // console.log(matrix[2])
        // console.log(matrix[3])
        setMatrix(copyOfMatrix)
    }

    const numOfIslands = async () => {
        let islands = 0;
      
        if (matrix.length === 0) {
          return 0;
        }
      
        for (let row = 0; row < matrix.length; row++) {
      
          for (let col=0; col < matrix[0].length; col++) {
      
            if (matrix[row][col] === 1) {
              islands++;
              
              await updateMatrix(matrix, row, col);
              
              const queue = [];
              queue.push([row,col]);
      
              while (queue.length) {
                const currentPos = queue.shift();
                const currentRow = currentPos[0]
                const currentCol = currentPos[1]
   
      
                for (let i = 0; i < Object.keys(directions).length; i++) {
                  const currentDir = directions[i].coordinates;
                  console.log(directions[i].direction)
                  const nextRow = currentRow + currentDir[0];
                  const nextCol = currentCol + currentDir[1];
      
                  if (nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
                    continue
                  }
      
                  if (matrix[nextRow][nextCol] === 1) {
                    queue.push([nextRow, nextCol]);
                    await updateMatrix(matrix, nextRow, nextCol);
                  }
                }
              }
            }
          }
        }
        setTotalIslands(islands);
      }
      
    return (
        <div className='islands-container'>
            <div className='matrix-container'>
                {matrix &&
                    matrix.map((row, idx) => (
                        row.map((col, idx) => (
                            <div key={idx} className={`${col === 0 ? 'water' : 'land'} matrix-square`}>{col}</div>
                        ))
                    ))
                }
            </div>
            <button onClick={() => numOfIslands(matrix)} >Find Islands</button>
            <button onClick={() => console.log(matrix)} >My Matrix</button>
            <p>There are {totalIslands} islands on this map.</p>
                
            </div>
    )
}

export default Islands
