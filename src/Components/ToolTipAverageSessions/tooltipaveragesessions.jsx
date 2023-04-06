import React from 'react'
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
  
export default ToolTipAverageSessions