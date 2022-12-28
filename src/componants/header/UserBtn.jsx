import React from 'react';
import { useNavigate } from "react-router-dom";


const UserBtn = ({user}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/user")
    }

    return (  <div>
  
        <button className="main-nav-item" onClick={handleClick}>
          <i className="fa fa-user-circle"></i>
          {user.firstName}
        </button>
      </div> );
}
 
export default UserBtn;
