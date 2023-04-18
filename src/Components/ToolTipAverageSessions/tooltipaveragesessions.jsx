import React from 'react'
import PropTypes from 'prop-types'
import './tooltipaveragesessions.css'

/**
 * Component which is a tooltip. It indicates the duration of the session in minutes when the cursor
 * points somewhere on the chart 
 * @namespace
 * @property { Array } payload It indicates the value of the data on the Y axis, the value is in minutes
 * @property { boolean } active A boolean that indicates is the tooltip is active or not
 * @returns {JSX.Element} A JSX element containing the tooltip component
 * 
 */

function ToolTipAverageSessions({payload, active}) {
    if(active === true){
        return (
            <div className='containerToolTipAverageSessions'>
                <p>{payload[0].value} min</p>
            </div>
        )
    }
}

ToolTipAverageSessions.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
}
  
export default ToolTipAverageSessions