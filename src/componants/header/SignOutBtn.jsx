import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {tokenSlice} from '../../store/slices/tokenSlice'
import {userSlice} from '../../store/slices/userSlice'



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
  
        <button className="main-nav-item" onClick={() => handleLogOut()}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </button>
      </div> );
}
 
export default SignOutBtn;
