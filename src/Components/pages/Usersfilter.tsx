import React from "react";
import Sidebar from "../Dashboard/SideBar";
import Topbar from "../Dashboard/TopBar";
import "./Usersfilter.scss";
import DashboardCards from "../Dashboard/DashboardCards";
// import Dropdown2 from "../Dashboard/Dropdown2";
import Dropdown from "../Dashboard/Dropdown";
import UserTable from "../Dashboard/UserTable";


const UsersFilter: React.FC =()=>{
  return (
    <>
      <Topbar />
      <div className="flex-dashboard">
        <Sidebar />
       
       <div className="usertable-div">
       <DashboardCards />
        <UserTable />
       </div>
        <div className="dropdown-display">
          <Dropdown />
        </div>
       
      </div>
      
    </>
  );

}

export default UsersFilter;
