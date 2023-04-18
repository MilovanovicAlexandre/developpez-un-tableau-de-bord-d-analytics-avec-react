import React from 'react'
import './tooltipuseractivity.css'
import PropTypes from 'prop-types'

/**
 * Component which is a tooltip. it indicates the weight in kg and Kcal per day.
 * @namespace 
 * @property { boolean } active A boolean that indicates is the tooltip is active or not
 * @property { Array } payload It indicates the value of the data on the Y axis. There is two Y axis,
 * one for the weight in kg and the other for the weight in Kcal.
 * @returns {JSX.Element} A JSX element containing the tooltip component
 */

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