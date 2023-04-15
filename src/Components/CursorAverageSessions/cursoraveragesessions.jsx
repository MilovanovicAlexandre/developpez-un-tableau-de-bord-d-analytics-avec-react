import React from 'react'
import PropTypes from 'prop-types'
import './cursoraveragesessions.css'

/**
 * Component which personnalizes the cursor and add a rectangle when the cursor is moving
 *  
 * @class
 * 
 */

function CursorAverageSessions({points}) {
    return (
        <svg>
            <rect x={points[0].x} y='0' height='100%' width='100%' fill='#000000' opacity={0.1}></rect>
        </svg>
    )
}

CursorAverageSessions.propTypes = {
    points: PropTypes.number,
}

export default CursorAverageSessions