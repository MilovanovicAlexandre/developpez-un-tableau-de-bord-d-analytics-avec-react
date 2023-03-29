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
          <Route path='/' element={<Navigate to='Home' />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/Profile/:UserId' element={<Profile />}/>
          <Route path='*' element={<Error />}/>        
        </Routes>  
      </Router>
    </div>
  )
}

export default App
