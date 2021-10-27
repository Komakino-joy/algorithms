import React, { useState } from 'react'

import './matrix-input.styles.css'

const MatrixInput = ({ grid, updateGrid, setGrid, setMatrix}) => {

    const [numRows, setNumRows] = useState(0)
    const [numCols, setNumCols] = useState(0)

    const createGrid = (rows, cols) => {
        setGrid(Array.from({length: +rows}, e => Array(+cols).fill(0)))
    }

    return (
        <div className='matrix-input'>
            <div className='grid-options'>
                <section>
                    <label>Rows:</label>
                    <input 
                        type="number" 
                        onChange={(e) => setNumRows(e.target.value)} 
                        min='0' 
                        max='10'
                    />
                </section>
                <section>
                    <label>Columns:</label>
                    <input 
                        type="number" 
                        onChange={(e) => setNumCols(e.target.value)} 
                        min='0' 
                        max='10'
                    />
                </section>
                <button 
                    className="dims-btn" 
                    onClick={(e) => createGrid(numRows, numCols)}
                >
                    Submit
                </button>

                { grid &&
                <button className='create-btn' onClick={() => setMatrix(grid)} >Generate Grid</button>
                }
            </div>
            <div className='grid-input-container'>
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

        </div>
        </div>
    )
}

export default MatrixInput
