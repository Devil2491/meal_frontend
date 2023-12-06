import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

// import React from 'react'

const LoginSignup = () => {
  const [action, setAction] = useState("SignUp");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "LogIn" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" name="" placeholder="Enter Your Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" name="" placeholder="Enter Your Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" name="" placeholder="Enter Your Password" />
        </div>
      </div>
      {action === "LogIn" ? (
        <div className="recover-password">
          <Link to="/RecoverPassword">Recover Password</Link>
        </div>
      ) : (
        <div></div>
      )}

      <div className="submit-container">
        <div
          className={action === "LogIn" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("SignUp");
          }}
        >
          SignUp
        </div>
        <div
          className={action === "SignUp" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("LogIn");
          }}
        >
          LogIn
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
