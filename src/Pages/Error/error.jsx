import React from 'react'
import Header from '../../Components/HeaderHomePage/headerhomepage.jsx'
import {Link} from 'react-router-dom'
import './error.css'

function Error() {
    return (
      <main>
        <Header />
        <div className='containerTextErrorAndLink'>
          <div className='containerTextError404'>
            <p className='textError404'>Erreur 404</p>
            <p className='textError404Continuation'>Ressource non trouvée</p>
          </div>
          <div className='containerLinkError404'>
            <Link to='/Home'><p className='textLinkError404'>Retourner sur la page d'accueil</p></Link>
          </div>
        </div>
      </main>
    )
}
  
export default Error