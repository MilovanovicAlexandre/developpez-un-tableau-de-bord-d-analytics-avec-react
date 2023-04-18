/**
 * @file
 * The component App() contains the router of the application SportSee.
 * You can see in this component all the paths you can access inside the SportSee application.
 * 
 * Paths available:
 * <ul>
 *  <li> / </li>
 *  <li> /Home</li>
 *  <li> /Profile/:userId<br />
 *  Where userId is the id of the user you want to see the profil, for example: userId = 12 or userId = 18</li>
 *  <li> * <br />
 *  All other paths you can entering are leading to the error page</li>
 * </ul>
 * @module RouterComponent
 */

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './Pages/Home/home.jsx'
import Profile from './Pages/Profile/profile.jsx'
import Error from './Pages/Error/error.jsx'
  
function App() {
  return (
    <div className='App'>
      <Router>
        {/*The Routes component is equivalent of the Switch component 
        If the 3 top path have not been find so the component Error is called
        */}
        <Routes>
          <Route path='/' element={<Navigate to='/Home' />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Profile/:userId' element={<Profile />}/>
          <Route path='*' element={<Error />}/>        
        </Routes>  
      </Router>
    </div>
  )
}

export default App
