import React from "react";
import './UserCard.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const UserCard: React.FC =() =>{
  return (
    <>
   <div className="usercard-container">
  
   <div className="user-card-header">
     <div>
      <Link  className="back-link" to="/Dashboard">
      <FontAwesomeIcon icon={faArrowLeftLong} className="arrow-left"/> Back to Users
      </Link>
     </div>
      <div className="action-buttons">
        <h3 className="h3-div">User Details</h3>
        <div className="button-user">
          <button className="blacklist-btn">Blacklist User</button>
          <button className="activate-btn">Activate User</button>
        </div>
      </div>
    </div>
    <div className="user-card">
      <div className="user-card-body">
        <br />
        <div className="user-info">
           <div className="avatar">
              <FontAwesomeIcon icon={faUser} className="avatar-i"/>
            </div>
          <div className="user-name-div">
            <p className="name-div">Grace Effiom</p>
            <p className="code-number">LSQFf587g90</p>
          </div>
          <div className="line-a"></div>
          <div className="user-tier">
            <p className="user-tier-text">User's Tier</p>
            <p className="icon-star">
              <FontAwesomeIcon icon={faStar} className="star"/>
              <FontAwesomeIcon icon={faStar}/>
              <FontAwesomeIcon icon={faStar}/>
            </p>
          </div>
          <div className="line-b"></div>
          <div className="account-info">
            <h4>₦200,000.00</h4>
            <p>9912345678 / Providus Bank</p>
          </div>
        </div>
        <div className="tabs">
          <div className="gen-con">
            <div className="active-tab">General Details</div>
            <div className="stripe"></div>
          </div>
          <div className="gen-con">
            <div className="active-tab">Documents</div>
            <div className="stripe"></div>
          </div>
          <div className="gen-con">
            <div className="active-tab">Bank Details</div>
            <div className="stripe"></div>
          </div>
          <div className="gen-con">
            <div className="active-tab">Loans</div>
            <div className="stripe"></div>
          </div>
          <div className="gen-con">
            <div className="active-tab">Savings</div>
            <div className="stripe"></div>
          </div>
          <div className="gen-con">
            <div className="active-tab">App and System</div>
            <div className="stripe"></div>
          </div>
         
        </div>
      </div>
    </div>

   </div>
    </>
  );

}

export default UserCard;
