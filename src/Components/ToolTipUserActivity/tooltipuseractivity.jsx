import React from 'react'
import './tooltipuseractivity.css'
import PropTypes from 'prop-types'

function ToolTipUserActivity({active, payload}) {
    if (active === true){
        return (
            <div className='containerToolTipUserActivity'>
                <p>{payload[0].value}kg</p>
                <p>{payload[1].value}Kcal</p>
            </div>
        )
    }
}

ToolTipUserActivity.propTypes = {
    active: PropTypes.bool,
    payload:PropTypes.array,
}
  
export default ToolTipUserActivity