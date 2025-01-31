import { useState } from 'react'
import './App.scss'
import Login from './Components/Login'
import Dashboard from './Components/pages/Dashboard'
import { Route, BrowserRouter , Routes,} from 'react-router-dom'
import Display from './Display'
import UsersFilter from './Components/pages/Usersfilter'
import Userdetails from './Components/pages/Userdetails'


function App() {
  const [] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/' element={<Display/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/Usersfilter' element={<UsersFilter/>}/>
        <Route path='/Userdetails' element={<Userdetails/>}/>
      </Routes>
    </BrowserRouter> 

    <div>
   
    
     
    </div>  
    </>
    
  )
}

export default App






