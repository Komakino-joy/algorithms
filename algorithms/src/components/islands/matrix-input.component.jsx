import React, {useState} from 'react'

import './matrix-input.styles.css'

const MatrixInput = () => {

    const [numRows, setNumRows] = useState(0)
    const [numCols, setNumCols] = useState(0)

    const [grid, setGrid] = useState(null)


    const updateGrid = (rows, cols) => {
        setGrid(Array(+rows).fill(Array(+cols).fill(0)))
    }
    return (
        <div className='matrix-input'>
            <div className='grid-options'>
                <label>Number of rows:</label>
                <input type="number" onChange={(e) => setNumRows(e.target.value)}/>
                <label>Number of colums:</label>
                <input type="number" onChange={(e) => setNumCols(e.target.value)} />
                <button className="dims-btn" onClick={(e) => updateGrid(numRows, numCols)} >Submit Dims</button>
            </div>

            { grid &&
                grid.map((row, idx) => (
                    <div key={idx} className='row'> 
                        { row.map((col, idx) => (
                            <input key={idx} type="number" className='grid-input' min='0' max='1' placeholder={col}></input>
                        ))}
                    </div>
                ))
            }

            <button onClick={() => console.log(grid)} >log grid</button>
            <button onClick={() => console.log(numRows)} >log rows</button>
            <button onClick={() => console.log(numCols)} >log cols</button>
        </div>
    )
}

export default MatrixInput
