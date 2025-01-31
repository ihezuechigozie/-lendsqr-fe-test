import React from 'react'
import { Link } from 'react-router-dom';


const Display: React.FC =()=>{
  return (
    <>
      <Link style={{ textDecoration: "none" }} to="/Login">
        <button className="login-btn">Login</button>
      </Link>
      <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/dashboard">
        <button className="login-btn">DashBoard</button>
      </Link>
      <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/Usersfilter">
        <button className="login-btn">Users Filter</button>
      </Link>
      <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/Userdetails">
        <button className="login-btn">Userdetails</button>
      </Link>
     
    </>
  )

}
export default Display