import React, { useEffect, useState } from 'react';
import './Usertable2.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownWideShort, faChevronLeft, faChevronRight, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Dropdown2 from './Dropdown2';
import Dropdown from './Dropdown';


interface User {
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

interface UserTableProps {
  input?: string | null; 
}



const Usertable2: React.FC<UserTableProps> = ({ input }) => {
 

  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dropdownVisibility, setDropdownVisibility] = useState<{ [key: number]: boolean }>({});
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
const [dropdownPositions, setDropdownPositions] = useState<{ [key: number]: { top: number; left: number } }>({});
  const [usersPerPage] = useState<number>(10);

  
  const url = 'https://run.mocky.io/v3/e599e93a-18e6-49bc-83e4-ac0ad74df1c3';
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
    const iconElement = document.querySelectorAll('.dropdown-icon')[index];
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
  <div className="table-container2">
    <table>
    <thead>
    <tr>
   {['ORGANIZATION', 'USERNAME', 'EMAIL', 'CONTACT', 'JOINED', 'STATUS'].map((header, index) => (
   <th className="table-h" key={index}>
    {header}
    <FontAwesomeIcon
      icon={faArrowDownWideShort}
      onClick={() => handleDropdownClick(index)}
      className="dropdown-icon"
    />
    {activeDropdown === index && (
      <div
        className="dropdown-r"
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
        <Dropdown />
      </div>
    )}
  </th>
))}
  <th></th>
  </tr>
</thead>

  <tbody>
  {currentUsers.map((user, index) => (
    <tr key={index}>
      <td>{user.organization}</td>
      <td className="username">{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{user.dateJoined}</td>
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
      <td>
  <div className="dropdown-container">
    <FontAwesomeIcon
      icon={faEllipsisVertical}
      className="ellipsis-icon"
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
</tbody>
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

export default Usertable2;
