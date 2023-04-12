import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import Header from '../../Components/HeaderHomePage/headerhomepage.jsx'

function Home() {
    return (
      <main>
        <Header />
        <div className='mainContainerProfileChoice'>
          <div className='containerTextProfile'>
            <p className='textProfile'>Veuillez sélectionner un profil</p>
          </div>
          <div className='containerPresentationProfiles'>
            <div className='containerPresentationFirstProfile'>
              <Link to='/Profile/12'>
                <ul className='containerFirstProfile'>
                  <li>Karl</li>
                  <li>Dovineau</li>
                  <li>31 ans</li>
                </ul>
              </Link>
            </div>
            <div className='containerPresentationSecondProfile'>
              <Link to='/Profile/18'>
                <ul className='containerSecondProfile'>
                  <li>Cecilia</li>
                  <li>Ratorez</li>
                  <li>34 ans</li>
                </ul>
              </Link>
            </div>
          </div>  
        </div>
      </main>
    )
}
  
export default Home