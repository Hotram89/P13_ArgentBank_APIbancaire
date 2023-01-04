import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {tokenSlice} from 'store/slices/tokenSlice'
import {userSlice} from 'store/slices/userSlice'
import Arrow from 'img/right-from-bracket-solid.svg'


const SignOutBtn = () => {
     const navigate = useNavigate();
     const dispatch = useDispatch()
    const handleLogOut = () => {
        dispatch(tokenSlice.actions.deleteToken())
        dispatch(userSlice.actions.deleteUser())
        localStorage.clear("HelloSecurityTeam")

        navigate("/")
    }
    return (  <div>
  
        <button className="signout-btn main-nav-item" onClick={() => handleLogOut()}>
          <img className="signout-icon fa-sign-out" src={Arrow} alt="signout icon" />
          Sign Out
        </button>
      </div> );
}
 
export default SignOutBtn;
