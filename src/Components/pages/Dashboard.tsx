import React from "react";
import Sidebar from "../Dashboard/SideBar";
import Topbar from "../Dashboard/TopBar";
import DashboardCards from "../Dashboard/DashboardCards";
import  './Dashboard.scss'
import UserTable from "../Dashboard/UserTable";
import { useSelector } from "react-redux";
import { RootState } from "../../main";
import Usertable2 from "../Dashboard/Usertable2";


const Dashboard: React.FC =()=>{
  const createQuery = useSelector((state: RootState) => state.userPage);
console.log("Redux:", createQuery)
let component;
let subComponent;
if(createQuery){ 
 component = <UserTable input={createQuery.searchQuerry} />
}
else{
  component = <UserTable />
}
if(createQuery){ 
 subComponent = <Usertable2 input={createQuery.searchQuerry} />
}
else{
  subComponent = <Usertable2 />
}

  return (
    <>  
     <Topbar />
      <div className="flex-dashboard">
        <Sidebar />
        <div className="dasboard-cont">
         <DashboardCards />
         {component}
        </div>
      </div>

      <div className="flex-dashboard-2">  
 
        <div className="dasboard-cont-2">
        <div className="dashboard-card">
        <DashboardCards />
        </div>
         {subComponent}
        </div>
      </div>

    
    </>
  );

}

export default Dashboard;
