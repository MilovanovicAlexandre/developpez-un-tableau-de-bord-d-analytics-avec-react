import React from 'react'
import PropTypes from 'prop-types'
import './tooltipaveragesessions.css'

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