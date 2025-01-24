import React from 'react'
import './Dropdown2.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faUserCheck, faUserXmark } from "@fortawesome/free-solid-svg-icons";

const Dropdown2: React.FC =()=> {
  return (
    <>
    <div className="dropdown-2">
        <div className="sub-cont">
        <div className="base-div-2">
            <div className="stripe"></div>
            <div className="text-2-div">
                <FontAwesomeIcon icon={faEye} className="eye-icon" />
                View Details
            </div>
            </div>
        <div className="base-div-2">
            <div className="stripe"></div>
            <div className="text-2-div">
                <FontAwesomeIcon icon={faUserXmark} className="eye-icon" />
            Blacklist User
            </div>
            </div>
        <div className="base-div-2">
            <div className="stripe"></div>
            <div className="text-2-div">
                <FontAwesomeIcon icon={faUserCheck} className="eye-icon" />
                Activate User
            </div>
            </div>
        
        
        </div>
        
    </div>
    </>
  )
}

export default Dropdown2