import React, { useState } from 'react'
import './LoginSignup.css'
import email_icon from '../Assets/email.png'
import logout_icon from '../Assets/locked-computer.png'
import ui_icon from '../Assets/user-interface.png'

const LoginSignup = () => {

    const [action, setAction] = useState("Login");
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action === "Login"?<div></div>:<div className="input">
                <img src={ui_icon} alt="" />
                <input type="text" placeholder='Name'/>
            </div>}
          
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email' />
            </div>

            <div className="input">
                <img src={logout_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>: <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>}
        <div className="submit-container">
            <div className={action==="Login"?"submit gray": "submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
            <div className={action==="Sign Up"?"submit gray": "submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup
