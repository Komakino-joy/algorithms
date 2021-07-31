import React, { useState } from 'react';

import './islands.styles.css';

const Islands = () => {

    const originalMatrix =         
    [[1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1]]

    const [totalIslands, setTotalIslands] = useState(0);
    const [matrix, setMatrix] = useState(originalMatrix);   
    const [searchCompleted, setSearchCompleted] = useState(false);   

    const [numRows, setNumRows] = useState(0)
    const [numCols, setNumCols] = useState(0)
    const [grid, setGrid] = useState(null)


    const createGrid = (rows, cols) => {
        setGrid(Array.from({length: +rows}, e => Array(+cols).fill(0)))
    }

    const updateGrid = (e, grid, row, col) => {
        e.preventDefault();
        console.log(grid)
        console.log(row)
        console.log(col)
        console.log(e.target.value)
        const copyOfGrid = [...grid];
        console.log(copyOfGrid)
        copyOfGrid[row][col] = Number(e.target.value);
        setGrid(copyOfGrid);
    }

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
        await sleep(200);

        copyOfMatrix[row][col] = 0;

        setMatrix(copyOfMatrix)
    }


    const resetMatrix = async() => {
        setMatrix(originalMatrix);
        setSearchCompleted(false);
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
                console.log(`island found at: ${row},${col}`)
              
                const queue = [];
                queue.push([row,col]);

                while (queue.length) {
                    const currentPos = queue.shift();
                    const currentRow = currentPos[0]
                    const currentCol = currentPos[1]
                        
                    for (let i = 0; i < Object.keys(directions).length; i++) {

                    const currentDir = directions[i].coordinates;
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
        setSearchCompleted(true);
    }
      
    return (
        <div className='islands-page'>

        <div className='matrix-input-container'>
            <div className='matrix-input'>
                <div className='grid-options'>
                    <label>Number of rows:</label>
                    <input type="number" onChange={(e) => setNumRows(e.target.value)}/>
                    <label>Number of colums:</label>
                    <input type="number" onChange={(e) => setNumCols(e.target.value)} />
                    <button className="dims-btn" onClick={(e) => createGrid(numRows, numCols)} >Submit Dims</button>
                </div>

                { grid &&
                    grid.map((row, rowIdx) => (
                        <div key={rowIdx} className='row'> 
                            { row.map((col, colIdx) => (
                                <input 
                                    key={colIdx} 
                                    type="number" 
                                    min='0' max='1' 
                                    placeholder={col}
                                    className='grid-input'
                                    onInput={ (e) => updateGrid(e, grid, rowIdx, colIdx)} 
                                />
                            ))}
                        </div>
                    ))
                }

                <button onClick={() => setMatrix(grid)} >Create Grid</button>
                <button onClick={() => console.log(grid)} >log grid</button>
  
            </div>
        </div>

        <div className='islands-container'>
            <div className='island-btn-container'>
                <button className='island-btn' onClick={() => numOfIslands(matrix)} >Find Islands</button>
                <button className='island-btn' onClick={resetMatrix} >Reset</button>
            </div>
            <div className='matrix-container'>
                {matrix &&
                    matrix.map((row, rowIdx) => (
                        row.map((col, colIdx) => (
                            <div 
                                key={colIdx} 
                                className={`${col === 0 ? 'water' : 'land'} matrix-square`}
                                style={{width:`${500 / matrix[0].length}px`, height:`${500 / matrix.length}px` }}>
                                {col}
                            </div>
                        ))
                    ))
                }
            </div>
            {searchCompleted &&
                <p className='island-results' >{totalIslands === 1 ? 'There was 1 island' : `There were ${totalIslands} islands`} on this map.</p>
            }
        </div>
        </div>
    )
}

export default Islands











