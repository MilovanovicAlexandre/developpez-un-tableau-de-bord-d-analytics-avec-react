import React from 'react'
import {Link} from 'react-router-dom'
import './headerhomepage.css'
import logoSportSee from '../../Assets/logoSportSee.png'

/**
 * Component which describes the header for the home page
 * @namespace
 * @returns {JSX.Element} A JSX element containing the component of the header home page 
 */

function HeaderHomePage() {
    return (
      <header className='pageHomeHeader'>
        <div className='containerOfLogoSportSee'>
            <Link to='/'><img src={logoSportSee}  className='pictureLogoSportSee' alt='Le logo de SportSee' /></Link>
        </div>
      </header>
    )
}
  
export default HeaderHomePage