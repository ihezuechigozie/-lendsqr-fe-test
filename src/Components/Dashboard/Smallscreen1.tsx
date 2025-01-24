import React, {useState} from "react";
import './Smallscreen1.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowLeft, faArrowRight, faBank, faBriefcase, faChartBar, faChevronDown, faClipboardList, faCoins, faHandHolding, faHandshake, faHome,faIdBadge,faMobileScreenButton, faPiggyBank, faSackDollar, faScroll, faSignOut, faSlidersH, faTools, faUser, faUserCheck, faUserCog, faUserFriends, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import Sidedrop from "./Sidedrop";




const Smallsreen: React.FC = () =>{
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const showDropDown = () => {
      setIsDropdownVisible((prevState) => !prevState); 
    };
  return (    
    <>
      <div className="small-screen-container">
        <div className="texts">
         <p><FontAwesomeIcon icon={faBriefcase} className="briefcases" /></p>
         <p className="normal-text-1">Switch Organization</p>
         <p><FontAwesomeIcon icon={faChevronDown}
         onClick={showDropDown}
         className={`arrowdowns ${isDropdownVisible ? 'active' : ''}`} /></p>
          {isDropdownVisible && (
        <div className="organizations">
          <Sidedrop />
        </div>
       )}
        </div>
         
        <div className="bases">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faHome} className="homes" /></p>
            <p className="normal-text-2">Dashboard</p>
          </div>
        </div>
        <p className="customer-a">CUSTOMERS</p>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faUserFriends} className="homes" /></p>
            <p className="normal-text-2">Users</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faUser} className="users" /> </p>
            <p className="normal-text-2"> Guarantors</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faSackDollar} className="loans" /></p>
            <p className="normal-text-2">Loans</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faHandshake} className="homes" /></p>
            <p className="normal-text-2">Decision Models</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faPiggyBank} className="homes" /></p>
            <p className="normal-text-2">Savings</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="normal-text-3">
           <p className="icon-div-3">
             <p> <FontAwesomeIcon icon={faSackDollar} className="sacks" /></p>
             <p> <FontAwesomeIcon icon={faHandHolding} className="hands" /></p>
           </p>
            <p className="normal-text-2">Loan Requests</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faUserCheck} className="homes" /></p>
            <p className="normal-text-2">Whitelist</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faUserTimes} className="homes" /></p>
            <p className="normal-text-2">Karma</p>
          </div>
        </div>
        <p className="customer-a">BUSINESSES</p>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faBriefcase} className="organizations" /></p>
            <p className="normal-text-2">Organization</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="normal-text-3">
           <p className="icon-div-3">
             <p> <FontAwesomeIcon icon={faSackDollar} className="sacks" /></p>
             <p> <FontAwesomeIcon icon={faHandHolding} className="hands" /></p>
           </p>
            <p className="normal-text-2">Loan Products</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faBank} className="homes" /></p>
            <p className="normal-text-2">Savings Products</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faCoins} className="homes" /></p>
            <p className="normal-text-2">Fees and Charges</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="normal-text-4">
           <div className="icon-4-div">
              <p className="arrow-icon-div">
                  <FontAwesomeIcon icon={faArrowLeft} className="arrowlefts" />
                  <FontAwesomeIcon icon={faArrowRight} className="arrowrights" />
                </p>
              <p><FontAwesomeIcon icon={faMobileScreenButton} className="mobiles" /></p>
           </div>
            <p className="normal-text-2">Transactions</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faTools} className="homes" /></p>
            <p className="normal-text-2">Services</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faUserCog} className="homes" /></p>
            <p className="normal-text-2">Service Account</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faScroll} className="homes" /></p>
            <p className="normal-text-2">Settlements</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faChartBar} className="homes" /></p>
            <p className="normal-text-2">Reports</p>
          </div>
        </div>
       
        <p className="customer-a">SETTINGS</p>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faSlidersH} className="homes" /></p>
            <p className="normal-text-2">Preferences</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faIdBadge} className="homes" /></p>
            <p className="normal-text-2">Fees and Pricing</p>
          </div>
        </div>
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faClipboardList} className="homes" /></p>
            <p className="normal-text-2">Audit Logs</p>
          </div>
        </div>
        <div className="linee"></div>
        <br />
        <div className="bases2">
          <div className="stripses"></div>
          <div className="texts2">
            <p><FontAwesomeIcon icon={faSignOut} className="logouts-a" /></p>
            <p className="normal-text-2">Logout</p>
          </div>
        </div>
        <p className="versions">
          v1.2.0
        </p>
        
      </div>
    </>
  );

}

export default Smallsreen;
