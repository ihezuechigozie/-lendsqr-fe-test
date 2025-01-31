import React, { useState } from "react";
import Image from '../assets/Group.jpg';
import Avatar from '../assets/avatar.png';
import './TopBar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faCaretDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { userSearch } from "./redux/userPage";
import Sidebar from "./SideBar";

const Topbar: React.FC = () => {

  const [input, setInput] = useState(""); 

const dispatch = useDispatch()

 
  const handleSearch = () => {
    if (input.trim() !== "") {
     
      console.log("User input:", input);
      dispatch(userSearch(input))
   
      setInput("");
    } else {
      alert("Please enter a search term.");
    }
  };
   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
      const showDropDown = () => {
        setIsDropdownVisible((prevState) => !prevState); 
      };

  return (
    <>
      <nav className="nav-bar">
        <div className="logo-div">
          <img className="lendsqr-logo" src={Image} alt="logo" />
          <div className="input-search">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="inputdiv"
        type="text"
        placeholder="Search for anything"
      />
      <button className="button-btn" onClick={handleSearch}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="icon-1" />
      </button>
    </div>
        </div> 

        <div className="docs">
        <p><FontAwesomeIcon icon={faBars}
         onClick={showDropDown}
         className={`arrowdown-iconbars ${isDropdownVisible ? 'active' : ''}`} /></p>
          {isDropdownVisible && (
        <div className="organization-drop">
          <Sidebar />
        </div>
       )}
          <p style={{ textDecoration: "underline" }}>Docs</p>
          <p>
            <FontAwesomeIcon icon={faBell} className="icon-2" />
          </p>
          <div>
            <img className="avatar" src={Avatar} alt="avatar" />
          </div>
          <p className="username-div">
            <b>Adedeji</b>
            <FontAwesomeIcon icon={faCaretDown} className="icon" />
            
          </p>
        </div>
      
      </nav>
    </>
  );
};

export default Topbar;
