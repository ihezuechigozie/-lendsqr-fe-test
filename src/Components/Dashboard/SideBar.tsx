import React, {useState} from "react";
import './SideBar.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowLeft, faArrowRight, faBank, faBriefcase, faChartBar, faChevronDown, faClipboardList, faCoins, faHandHolding, faHandshake, faHome,faIdBadge,faMobileScreenButton, faPiggyBank, faSackDollar, faScroll, faSignOut, faSlidersH, faTools, faUser, faUserCheck, faUserCog, faUserFriends, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import Sidebardrop from "./Sidebardrop";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Sidebar: React.FC = () =>{
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const showDropDown = () => {
      setIsDropdownVisible((prevState) => !prevState); 
    };

    const navigate = useNavigate(); 

  const handleLogout = () => {
   
    localStorage.removeItem("userToken");
    sessionStorage.clear(); 
    
    navigate("/login", { replace: true });

    window.history.replaceState(null, "", "/login");
  };
  return (    
    <>
      <div className="side-bar-cont">
        <div className="text-1-div">
         <p><FontAwesomeIcon icon={faBriefcase} className="briefcase-icon" /></p>
         <p className="text-1">Switch Organization</p>
         <p><FontAwesomeIcon icon={faChevronDown}
         onClick={showDropDown}
         className={`arrowdown-icon ${isDropdownVisible ? 'active' : ''}`} /></p>
          {isDropdownVisible && (
        <div className="organization-dropdown">
          <Sidebardrop />
        </div>
       )}
        </div>
         
        <div className="base-div">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faHome} className="home-icon" /></p>
            <p className="text-2">Dashboard</p>
          </div>
        </div>
        <p className="customers">CUSTOMERS</p>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faUserFriends} className="home-icon" /></p>
            <p className="text-2">Users</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faUser} className="user-icon" /> </p>
            <p className="text-2"> Guarantors</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faSackDollar} className="loan-icon" /></p>
            <p className="text-2">Loans</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faHandshake} className="home-icon" /></p>
            <p className="text-2">Decision Models</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faPiggyBank} className="home-icon" /></p>
            <p className="text-2">Savings</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-3-div">
           <p className="icon-div-3">
             <p> <FontAwesomeIcon icon={faSackDollar} className="sack-icon" /></p>
             <p> <FontAwesomeIcon icon={faHandHolding} className="hand-2-icon" /></p>
           </p>
            <p className="text-2">Loan Requests</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faUserCheck} className="home-icon" /></p>
            <p className="text-2">Whitelist</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faUserTimes} className="home-icon" /></p>
            <p className="text-2">Karma</p>
          </div>
        </div>
        <p className="customers">BUSINESSES</p>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faBriefcase} className="organization-icon" /></p>
            <p className="text-2">Organization</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-3-div">
           <p className="icon-div-3">
             <p> <FontAwesomeIcon icon={faSackDollar} className="sack-icon" /></p>
             <p> <FontAwesomeIcon icon={faHandHolding} className="hand-2-icon" /></p>
           </p>
            <p className="text-2">Loan Products</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faBank} className="home-icon" /></p>
            <p className="text-2">Savings Products</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faCoins} className="home-icon" /></p>
            <p className="text-2">Fees and Charges</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-4-div">
           <div className="icon-4-div">
              <p className="arrow-icon-div">
                  <FontAwesomeIcon icon={faArrowLeft} className="arrowleft-icon" />
                  <FontAwesomeIcon icon={faArrowRight} className="arrowright-icon" />
                </p>
              <p><FontAwesomeIcon icon={faMobileScreenButton} className="mobile-icon" /></p>
           </div>
            <p className="text-2">Transactions</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faTools} className="home-icon" /></p>
            <p className="text-2">Services</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faUserCog} className="home-icon" /></p>
            <p className="text-2">Service Account</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faScroll} className="home-icon" /></p>
            <p className="text-2">Settlements</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faChartBar} className="home-icon" /></p>
            <p className="text-2">Reports</p>
          </div>
        </div>
       
        <p className="customers">SETTINGS</p>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faSlidersH} className="home-icon" /></p>
            <p className="text-2">Preferences</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faIdBadge} className="home-icon" /></p>
            <p className="text-2">Fees and Pricing</p>
          </div>
        </div>
        <div className="base-div-2">
          <div className="stripe"></div>
          <div className="text-2-div">
            <p><FontAwesomeIcon icon={faClipboardList} className="home-icon" /></p>
            <p className="text-2">Audit Logs</p>
          </div>
        </div>
        <div className="linee"></div>
        <br />
        <Link target="_top" preventScrollReset  className="back-tologin-link" to="/Login">
            <div className="base-div-2" onClick={handleLogout}>
              <div className="stripe"></div>
              <div className="text-2-div">
                <p><FontAwesomeIcon icon={faSignOut} className="logout" /></p>
                <p className="text-logout">Logout</p>
              </div>
            </div>
          </Link>
        <p className="version">
          v1.2.0
        </p>
        
      </div>
    </>
  );

}

export default Sidebar;
