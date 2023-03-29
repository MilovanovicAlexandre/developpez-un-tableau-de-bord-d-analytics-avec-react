import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './header.css'
import logoSportSee from '../../Assets/logoSportSee.png'

function Header() {
    return (
      <header className='pageHeader'>
        <div className='containerLogoSportSee'>
            <Link to='/'><img src={logoSportSee}  className='logoSportSee' alt='Le logo de SportSee' /></Link>
        </div>
        <nav className='pageNavigation'>
            <ul className='containerNavigationList'>
                <li><NavLink to='/'>Accueil</NavLink></li>
                <li><NavLink to='#'>Profil</NavLink></li>
                <li><NavLink to='#'>Réglage</NavLink></li>
                <li><NavLink to='#'>Communauté</NavLink></li>
            </ul>
        </nav>
      </header>
    )
}
  
export default Header