import React from "react";
import './DashboardCard.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCoins, faFileLines, faUserFriends, faUsers } from "@fortawesome/free-solid-svg-icons";





const DashboardCards: React.FC =() =>{

 
  
  return (
    <>
      <div className="dashboard-container">
        <div className="user">
       
          Users
          </div>
        <div className="users-flexed-box">
         <div className="box-a">
         <div className="box-1">
            <div className="profile-circle">
                <FontAwesomeIcon icon={faUserFriends} className="icon-users"/>
            </div>
            <p className="box-text">Users</p>
            <p className="number">2,453</p>
          </div>
          <div className="box-2">
            <div className="profile-circle">
              <FontAwesomeIcon icon={faUsers} className="icon-fauser"/>
              </div>
              <p className="box-text">Active Users</p>
              <p className="number">2,453</p>
            </div>
         </div>
         <div className="box-b">
         <div className="box-3">
            <div className="profile-circle">
              <FontAwesomeIcon icon={faFileLines} className="icon-file"/>
              </div>
              <p className="box-text">Users with Loans</p>
              <p className="number">12,453</p>
            </div>
          <div className="box-4">
            <div className="profile-circle">
              <FontAwesomeIcon icon={faCoins} className="icon-coins"/>
              </div>
              <p className="box-text">Users with Savings</p>
              <p className="number">102,453</p>
            </div>
         </div>
        </div>
      </div>
    </>
  );

}

export default DashboardCards;
