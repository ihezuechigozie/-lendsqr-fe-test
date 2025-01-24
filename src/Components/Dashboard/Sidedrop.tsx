import React from 'react'
import './Sidedrop.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";




const Sidedrop: React.FC =()=> {
  return (
    <>
    <div className='sidedrop-cont'>
      <div className="drop-cont">
        <div className="base-hover">
          <div className="stripes"></div>
          <div className="texts-1">
            <FontAwesomeIcon icon={faEye} className="eye-icon" />
            DanLtd
          </div>
          </div>
        <div className="base-hover">
          <div className="stripes"></div>
          <div className="texts-1">
            <FontAwesomeIcon icon={faEye} className="eye-icon" />
            Lendsqr
          </div>
          </div>
        <div className="base-hover">
          <div className="stripes"></div>
          <div className="texts-1">
            <FontAwesomeIcon icon={faEye} className="eye-icon" />
            JullyLtd
          </div>
        </div>
        <div className="base-hover">
          <div className="stripes"></div>
          <div className="texts-1">
            <FontAwesomeIcon icon={faEye} className="eye-icon" />
            Manitstr
          </div>
        </div>
        
      
      </div>

    </div>
    
    </>
  )
}

export default Sidedrop