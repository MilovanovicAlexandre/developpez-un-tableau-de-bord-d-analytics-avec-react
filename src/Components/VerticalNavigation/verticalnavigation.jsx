import React from 'react'
import {Link} from 'react-router-dom'
import iconCyclisme from '../../Assets/iconCyclisme.png'
import iconMeditation from '../../Assets/iconMeditation.png'
import iconMusculation from '../../Assets/iconMusculation.png'
import iconNatation from '../../Assets/iconNatation.png'
import './verticalnavigation.css'

function VerticalNavigation() {
    return (
      <div className='containerVerticalNavigation'>
        <div className='containerIconsVerticalNav'>
          <div><Link to='#'><img src={iconMeditation} className='iconVerticalNavigation' alt='Lien vers méditation'/></Link></div>
          <div><Link to='#'><img src={iconNatation} className='iconVerticalNavigation' alt='Lien vers natation'/></Link></div>
          <div><Link to='#'><img src={iconCyclisme} className='iconVerticalNavigation' alt='Lien vers cyclisme'/></Link></div>
          <div><Link to='#'><img src={iconMusculation} className='iconVerticalNavigation' alt='Lien vers musculation'/></Link></div>  
        </div>
        <div className='containerCopyrightVerticalNav'>
          <p className='copyrightVerticalNavigation'>Copyright, SportSee 2020</p>
        </div>  
      </div>
    )
}
  
export default VerticalNavigation