import React from 'react';
import { useNavigate } from "react-router-dom";
import userIcon from '../../img/circle-user-solid.svg'


const UserBtn = ({user}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/user")
    }

    return (  <div>
  
        <button className="user-btn" onClick={handleClick}>
          <img className="black-icon fa-user-circle" src={userIcon} alt="user logo"/>
          {user.firstName}
        </button>
      </div> );
}
 
export default UserBtn;
