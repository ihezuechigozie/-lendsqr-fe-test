import React, { useState } from "react";
import Image from '../assets/Group.jpg';
import Avatar from '../assets/avatar.png';
import './TopBar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCaretDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { userSearch } from "./redux/userPage";

const Topbar: React.FC = () => {
  const [input, setInput] = useState(""); // State to store input value

const dispatch = useDispatch()

  // Function to handle search button click
  const handleSearch = () => {
    if (input.trim() !== "") {
      // Save the input value
      console.log("User input:", input);
      dispatch(userSearch(input))
      // Optionally clear the input field after saving
      setInput("");
    } else {
      alert("Please enter a search term.");
    }
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
