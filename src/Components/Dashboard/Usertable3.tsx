import React, { useEffect, useState } from 'react';
import './Usertable3.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort, faChevronLeft, faChevronRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Dropdown2 from './Dropdown2';
import Filterdrop from './Filterdrop';


interface User {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

interface UserTable3 {
  input?: string | null; 
}



const UserTable3: React.FC<UserTable3> = ({ input }) => {
 

  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dropdownVisibility, setDropdownVisibility] = useState<{ [key: number]: boolean }>({});
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [dropdownPositions, setDropdownPositions] = useState<{ [key: number]: { top: number; left: number } }>({});
  const [usersPerPage] = useState<number>(1);

  
  const url = 'https://run.mocky.io/v3/51d17e68-ada5-48aa-8911-37f566069553';
  const fetchUsers = async () => {
    try {
      const response = await axios.get(url);
      if (response.data && Array.isArray(response.data)) {
        const flattenedUsers = response.data.flat();
        setAllUsers(flattenedUsers);
     
        localStorage.setItem("allUsers", JSON.stringify(flattenedUsers));
      } else {
        const localUsers = localStorage.getItem("allUsers");
        if (localUsers) {
          try {
           
            const parsedUsers: User[] = JSON.parse(localUsers);
            setAllUsers(parsedUsers);
          } catch (error) {
            console.error("Error parsing local users from localStorage:", error);
          }
        } else {
          console.error("No users found in localStorage.");
        }
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    
      const localUsers = localStorage.getItem("allUsers");
      if (localUsers) {
        try {
          const parsedUsers: User[] = JSON.parse(localUsers);
          setAllUsers(parsedUsers);


        } catch (error) {
          console.error("Error parsing local users from localStorage:", error);
        }
      } else {
        console.error("No users found in localStorage.");
      }
    }
  };

  useEffect(() => {
    if (input) {
      const normalizedInput = input.toLowerCase();
      const search = allUsers.filter((user) => {
        return (
          String(user.dateJoined).toLowerCase().includes(normalizedInput) ||
          String(user.email).toLowerCase().includes(normalizedInput) ||
          String(user.organization).toLowerCase().includes(normalizedInput) ||
          String(user.phoneNumber).toLowerCase().includes(normalizedInput) ||
          String(user.status).toLowerCase().includes(normalizedInput) ||
          String(user.username).toLowerCase().includes(normalizedInput)
        );
      });
  
      if (search.length > 0) {
        console.log(search);
        setAllUsers(search);
      }
    }
  }, [input]);
  
  
  

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (allUsers.length > 0) {
     
    }
  }, [allUsers]);
  

  useEffect(() => {
    
  }, [allUsers]);

  const toggleDropdown = (index: number) => {
    setDropdownVisibility((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };


  const handleDropdownClick = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
      calculateDropdownPosition(index);
    }
  };
  const calculateDropdownPosition = (index: number) => {
    const iconElement = document.querySelectorAll('.dropdown-icons')[index];
    if (iconElement) {
      const rect = iconElement.getBoundingClientRect();
      setDropdownPositions((prev) => ({
        ...prev,
        [index]: { top: rect.bottom + window.scrollY, left: rect.left + window.scrollX },
      }));
    }
  };


  const totalPages = Math.ceil(allUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = allUsers.slice(indexOfFirstUser, indexOfLastUser);
// console.log("curr", currentUsers)
// console.log("all", allUsers)
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Inactive':
        return 'status-inactive';
      case 'Pending':
        return 'status-pending';
      case 'Blacklisted':
        return 'status-blacklisted';
      case 'Active':
        return 'status-active';
      default:
        return '';
    }
  };

  return (
 <div className="table-content">
<table>  
  <tr>
   {['ORGANIZATION'].map((header, index) => (
   <th className="table-head" key={index}>
    {header}
    <FontAwesomeIcon
      icon={faArrowDownWideShort}
      onClick={() => handleDropdownClick(index)}
      className="dropdown-icons"
    />
    {activeDropdown === index && (
      <div
        className="dropdown-con"
        ref={(el) => {
          if (el) {
            const rect = el.getBoundingClientRect();
            const overflowRight = rect.right > window.innerWidth;
        

            if (overflowRight) el.style.left = `${window.innerWidth - rect.width - 62}px`;
      
          }
        }}
        style={{
          top: dropdownPositions[index]?.top || 'auto',
          left: dropdownPositions[index]?.left || 'auto',
        }}
      >
        <Filterdrop />
      </div>
    )}
   
  </th>
))}
 
 {currentUsers.map((user, index) => (
    <tr key={index}>
      <td>{user.organization}</td> 
      

  </tr>
  ))}
 
  </tr>

   <tr>
   {[ 'USERNAME'].map((header, index) => (
   <th className="table-head" key={index}>
    {header}
    <FontAwesomeIcon
      icon={faArrowDownWideShort}
      onClick={() => handleDropdownClick(index)}
      className="dropdown-icons"
    />
    {activeDropdown === index && (
      <div
        className="dropdown-con"
        ref={(el) => {
          if (el) {
            const rect = el.getBoundingClientRect();
            const overflowRight = rect.right > window.innerWidth;
        

            if (overflowRight) el.style.left = `${window.innerWidth - rect.width - 62}px`;
      
          }
        }}
        style={{
          top: dropdownPositions[index]?.top || 'auto',
          left: dropdownPositions[index]?.left || 'auto',
        }}
      >
        <Filterdrop />
      </div>
    )}
  </th>
))}
  {currentUsers.map((user, index) => (
    <tr key={index}>
     <td className="username">{user.username}</td>
     <td className=''>
            <div className="dropdown-container">
                <FontAwesomeIcon
                icon={faEllipsisVertical}
                className="ellipsis-icons"
                onClick={() => toggleDropdown(index)}
                />
                {dropdownVisibility[index] && (
                <div className="dropdown-l">
                    <Dropdown2 />
                </div>
                )}
            </div>
       </td>

    </tr>
  ))}
   </tr>

  <tr>
  {[ 'EMAIL'].map((header, index) => (
   <th className="table-head" key={index}>
    {header}
    <FontAwesomeIcon
      icon={faArrowDownWideShort}
      onClick={() => handleDropdownClick(index)}
      className="dropdown-icons"
    />
    {activeDropdown === index && (
      <div
        className="dropdown-con"
        ref={(el) => {
          if (el) {
            const rect = el.getBoundingClientRect();
            const overflowRight = rect.right > window.innerWidth;
        

            if (overflowRight) el.style.left = `${window.innerWidth - rect.width - 62}px`;
      
          }
        }}
        style={{
          top: dropdownPositions[index]?.top || 'auto',
          left: dropdownPositions[index]?.left || 'auto',
        }}
      >
        <Filterdrop />
      </div>
    )}
  </th>
))}
  {currentUsers.map((user, index) => (
    <tr key={index}> 
     <td>{user.email}</td>
    </tr>
  ))}
  </tr>
 <tr>
 {[ 'PHONE NUMBER'].map((header, index) => (
   <th className="table-head" key={index}>
    {header}
    <FontAwesomeIcon
      icon={faArrowDownWideShort}
      onClick={() => handleDropdownClick(index)}
      className="dropdown-icons"
    />
    {activeDropdown === index && (
      <div
        className="dropdown-con"
        ref={(el) => {
          if (el) {
            const rect = el.getBoundingClientRect();
            const overflowRight = rect.right > window.innerWidth;
        

            if (overflowRight) el.style.left = `${window.innerWidth - rect.width - 62}px`;
      
          }
        }}
        style={{
          top: dropdownPositions[index]?.top || 'auto',
          left: dropdownPositions[index]?.left || 'auto',
        }}
      >
        <Filterdrop />
      </div>
    )}
  </th>
))}
  {currentUsers.map((user, index) => (
    <tr key={index}>
     <td>{user.phoneNumber}</td>
    </tr>
  ))}
 </tr>
  
  <tr>
  {[  'DATE JOINED'].map((header, index) => (
   <th className="table-head" key={index}>
    {header}
    <FontAwesomeIcon
      icon={faArrowDownWideShort}
      onClick={() => handleDropdownClick(index)}
      className="dropdown-icons"
    />
    {activeDropdown === index && (
      <div
        className="dropdown-con"
        ref={(el) => {
          if (el) {
            const rect = el.getBoundingClientRect();
            const overflowRight = rect.right > window.innerWidth;
        

            if (overflowRight) el.style.left = `${window.innerWidth - rect.width - 62}px`;
      
          }
        }}
        style={{
          top: dropdownPositions[index]?.top || 'auto',
          left: dropdownPositions[index]?.left || 'auto',
        }}
      >
        <Filterdrop />
      </div>
    )}
  </th>
))}
  {currentUsers.map((user, index) => (
    <tr key={index}>
     <td>{user.dateJoined}</td>
    </tr>
  ))}
  </tr>

  <tr>
  {['STATUS'].map((header, index) => (
   <th className="table-head" key={index}>
    {header}
    <FontAwesomeIcon
      icon={faArrowDownWideShort}
      onClick={() => handleDropdownClick(index)}
      className="dropdown-icons"
    />
    {activeDropdown === index && (
      <div
        className="dropdown-con"
        ref={(el) => {
          if (el) {
            const rect = el.getBoundingClientRect();
            const overflowRight = rect.right > window.innerWidth;
        

            if (overflowRight) el.style.left = `${window.innerWidth - rect.width - 62}px`;
      
          }
        }}
        style={{
          top: dropdownPositions[index]?.top || 'auto',
          left: dropdownPositions[index]?.left || 'auto',
        }}
      >
        <Filterdrop />
      </div>
    )}
  </th>
))}
  {currentUsers.map((user, index) => (
    <tr key={index}>
     
     <td>
        <span className={`status-badge ${getStatusClass(user.status)}`}>
          {user.status === "active" ? ( 
            <div className='acive-div'>
              <u className='act'>
              {user.status}
              </u>
            </div>
          )
          :  user.status === "inactive" ? (
            <div className='inactive-div'>
              <u className='act'>
              {user.status}
              </u>
            </div>
          ) : user.status === "blacklisted" ? (
            <div className='blacklist-div'>
              <u className='act'>
              {user.status}
              </u>
            </div>
          ) : user.status === "pending" ? (
            <div className='pending-div'>
              <u className='act'>
              {user.status}
              </u>
            </div>
          ):
          null  
        }
        </span>
      </td>

    </tr>
  ))}

  </tr>

</table>

<div className="table-footer">
  <span>
    Showing 
   
    <select
  name="number"
  className="hundred"
  onChange={(e) => goToPage(Number(e.target.value))}
  value={currentPage}
>
  {Array.from({ length: totalPages }, (_, index) => (
    <option key={index + 1} value={index + 1}>
     <p> {index + 1}</p> 
    </option> 
  ))}
</select>

<span >
{/* {currentUsers.length}{allUsers.length} */}
   <u className='userlist'> of</u> {totalPages}
 
</span>
  </span>
  <div className="pagination">
  <button
    className={`button-active ${currentPage === 1 ? 'disabled' : ''}`}
    onClick={handlePrevPage}
    disabled={currentPage === 1}
  >
    <FontAwesomeIcon icon={faChevronLeft} />
  </button>

 
  {[1, 2, 3].map((page) => (
    <button
      key={page}
      className={`button-active ${currentPage === page ? 'active' : ''}`}
      onClick={() => goToPage(page)}
    >
      {page}
    </button>
  ))}

  {totalPages > 6 && <span className="ellipsis">...</span>}


  {[totalPages - 1, totalPages].map((page) => (
    <button
      key={page}
      className={`button-active ${currentPage === page ? 'active' : ''}`}
      onClick={() => goToPage(page)}
    >
      {page}
    </button>
  ))}

 
  <button
    className={`button-active ${currentPage === totalPages ? 'disabled' : ''}`}
    onClick={handleNextPage}
    disabled={currentPage === totalPages}
  >
    <FontAwesomeIcon icon={faChevronRight} />
  </button>
</div>


</div>

    </div>
  );
};

export default UserTable3;
