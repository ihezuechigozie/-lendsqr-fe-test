import { useState } from 'react'
import './App.scss'
import Login from './Components/Login'
import Dashboard from './Components/pages/Dashboard'
import { Route, BrowserRouter , Routes,} from 'react-router-dom'
import Display from './Display'
import UsersFilter from './Components/pages/Usersfilter'
import UserCard from './Components/Dashboard/UserCard'
import Userdetails from './Components/pages/Userdetails'
import DetailsTable from './Components/Dashboard/DetailsTable'
import UserTable from './Components/Dashboard/UserTable'
import Sidebardrop from './Components/Dashboard/Sidebardrop'
import Topbar from './Components/Dashboard/TopBar'
import Sidebar from './Components/Dashboard/SideBar'
import Smallsreen from './Components/Dashboard/Smallscreen1'
import Usertable2 from './Components/Dashboard/Usertable2'



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
        <Route path='/UserCard' element={<UserCard/>}/>
        <Route path='/Userdetails' element={<Userdetails/>}/>
        <Route path='/DetailsTable' element={<DetailsTable/>}/>
        <Route path='/UserTable' element={<UserTable/>}/>
        <Route path='/Sidebardrop' element={<Sidebardrop/>}/>
        <Route path='/TopBar' element={<Topbar/>}/>
        <Route path='/SideBar' element={<Sidebar/>}/>
        <Route path='/Smallscreen1' element={<Smallsreen/>}/>
        <Route path='/Usertable2' element={<Usertable2/>}/>
      </Routes>
    </BrowserRouter> 

    <div>
   
    
     
    </div>  
    </>
    
  )
}

export default App






