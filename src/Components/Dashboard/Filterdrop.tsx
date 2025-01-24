import React from 'react'
import './Filterdrop.scss'

const Filterdrop: React.FC=()=>{
  return (
    <>
       
      <div className="filter-section">
        <br />
        <form>
          <label>
            Organization
            <select className="select-div">
              <option value="">Select</option>
              <option value="lendsqr">Lendsqr</option>
              <option value="irorun">Irorun</option>
            </select>
          </label>
          <label>
            Username
            <input type="text" placeholder="User" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Email" />
          </label>
          <label>
            Date
            <input type="date" />
          </label>
          <label>
            Phone Number
            <input type="tel" placeholder="Phone Number" />
          </label>
          <label>
            Status
            <select className="select-div">
              <option value="">Select</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="blacklisted">Blacklisted</option>
            </select>
          </label>
          <div className="filter-buttons">
            <button type="reset" className="reset-btn">
              Reset
            </button>
            <button type="submit" className="filter-btn">
              Filter
            </button>
          </div>
        </form>
      </div>
  
      
    
    </>
  )
}

export default Filterdrop