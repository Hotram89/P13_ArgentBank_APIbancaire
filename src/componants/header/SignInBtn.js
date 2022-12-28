import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../../img/circle-user-solid.svg";


const SignInBtn = () => {
    return ( 
        <div>
        <Link className="main-nav-item" to="/sign-in">
          <img className="userIcon" src={userIcon} alt="User icon" />
          Sign In
        </Link>
      </div>
     );
}
 
export default SignInBtn;
