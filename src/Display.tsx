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
      <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/UserCard">
        <button className="login-btn">UserCard</button>
      </Link>
      <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/Userdetails">
        <button className="login-btn">Userdetails</button>
      </Link>
      <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/DetailsTable">
        <button className="login-btn">DetailsTable</button>
      </Link>
      <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/UserTable">
        <button className="login-btn">UserTable</button>
      </Link>
      <br />
      <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/Sidebardrop">
        <button className="login-btn">Sidebar DropDown</button>
      </Link>
      <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/TopBar">
        <button className="login-btn">Top Bar</button>
      </Link>
      <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/SideBar">
        <button className="login-btn">Side Bar</button>
      </Link>
      <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/Smallscreen1">
        <button className="login-btn">Small Screen</button>
      </Link>
      <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/Usertable3">
        <button className="login-btn">User Table 3</button>
      </Link>
      <Link style={{ textDecoration: "none", marginLeft: "40px" }} to="/Filterdrop">
        <button className="login-btn">Filter drop</button>
      </Link>

    </>
  )

}
export default Display