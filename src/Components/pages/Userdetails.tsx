import React from 'react';
import './Userdetails.scss';
import Sidebar from "../Dashboard/SideBar";
import Topbar from "../Dashboard/TopBar";

import DetailsTable from '../Dashboard/DetailsTable';
import UserCard from '../Dashboard/UserCard';

const Userdetails: React.FC = () => {
  return (
    <>
      <Topbar />
      <div className="flex-Userdetails">
        <Sidebar />
        <div>
          <UserCard />
           <DetailsTable />
        </div>
      </div>
      <div className="flex-Userdetails-1">
        <div>
          <UserCard />
           <DetailsTable />
        </div>
      </div>
      <div className="flex-Userdetails-2">
        
        <div>
          <UserCard />
           <DetailsTable />
        </div>
      </div>
    </>
  );
};

export default Userdetails;
