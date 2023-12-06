import React from 'react'
import './LoginSignup.css'


import email_icon from '../Assets/email.png'



export default function RecoverPassword() {
  return (
    <div className='container'>
    <div className="header">
        <div className="text">Recover Password</div>
        <div className="underline"></div>
    </div>
    <div className="inputs">
        
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" name="" id="" placeholder='Enter Your Email'/>
        </div>
    </div>
        
    
    <div className="submit-container">
        <div className='submit'>Submit</div>
    </div>
</div>
  )
}
