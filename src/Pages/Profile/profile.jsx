import React from 'react'
import Header from '../../Components/Header/header.jsx'
import VerticalNavigation from '../../Components/VerticalNavigation/verticalnavigation.jsx'
import './profile.css'

function Profile() {
    return (
      <main className='containerMainProfile'>
        <Header />
        <div className='containerEntireProfile'>
          <div className='containerVerticalNav'>
            <VerticalNavigation />
          </div>
          <div>

          </div>
        </div>  
      </main>
    )
}
  
export default Profile