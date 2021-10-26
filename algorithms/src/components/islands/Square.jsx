import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronUp, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './square.styles.css'

const Square = ({colIdx, col, rowIdx, currentRow, currentCol, matrix, children, arrowDir}) => {

    return (
            <div 
                className={`${col === 0 ? 'water' : 'land'} matrix-square`}
                style={{
                    width:`${500 / matrix[0].length}px`, 
                    height:`${500 / matrix.length}px`, 
                    backgroundColor: (currentCol === colIdx) && (currentRow === rowIdx ) ? '#929ea1' : '',
                }}
            >
            {children}
            {
                (currentCol === colIdx) && (currentRow === rowIdx ) && arrowDir === 'left' ? <FontAwesomeIcon className='left-chevron' icon={faChevronLeft} />
                :(currentCol === colIdx) && (currentRow === rowIdx ) && arrowDir === 'up' ? <FontAwesomeIcon className='up-chevron' icon={faChevronUp} />
                :(currentCol === colIdx) && (currentRow === rowIdx ) && arrowDir === 'right' ? <FontAwesomeIcon  className='right-chevron' icon={faChevronRight} />
                :(currentCol === colIdx) && (currentRow === rowIdx ) && arrowDir === 'down' ? <FontAwesomeIcon className='down-chevron' icon={faChevronDown} />
                : null
            }
        </div>
    )
}

export default Square
