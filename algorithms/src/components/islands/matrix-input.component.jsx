import React, {useState} from 'react'

import './matrix-input.styles.css'

const MatrixInput = () => {

    const [numRows, setNumRows] = useState(5)
    const [numCols, setNumCols] = useState(5)

    const [grid, setGrid] = useState(Array(numRows).fill(Array(numCols).fill(0)))


    const updateGrid = (e) => {
        e.preventDefault();

        const newGrid = Array(numRows).fill(Array(numCols).fill(0));
        console.log(newGrid)
        setGrid(newGrid)
    }
    return (
        <div className='matrix-input'>
            <div className='grid-options'>
                <label>Number of rows:</label>
                <input type="number" onChange={(e) => setNumRows(e.target.value)}/>
                <label>Number of colums:</label>
                <input type="number" onChange={(e) => setNumCols(e.target.value)} />
                <button onClick={(e) => updateGrid(e)} >Submit</button>
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
