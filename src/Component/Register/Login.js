import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./sign.css"
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState()
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate("/join")
    }
  })

  const HandleButton = async (e) => {
    e.preventDefault();
     if (email === "") {
      toast.error("please enter your email");
    } else if (!email.includes("@")) {
      toast.error("please enter special character like, @")
    } else if (password === "") {
      toast.error("please enter your password");

    } else if (password.length < 8) {
      toast.error('minimum character required eight')

    }
    else if (!password.includes('@')) {
      toast.error('please enter spacial character in your password')
    }
    else {
      let result = await fetch("http://localhost:4500/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-type": "application/json",
        }
      })
      result = await result.json();
      if (result.email) {
        alert("user login successfully")
        localStorage.setItem("user", JSON.stringify(result))
        navigate('/join')

      } else {
        toast.error("user invalid")
      }
    }

  }
return (
    <>
      <div className="wraper-class"></div>
       <div className="signup">
        <div className="sign-up-page">
          <div className="input-type-box">
            <img src="./Images/user.jpg" alt="logo" />
          </div>
          <div className="right-side-form" style={{overflow:"hidden"}}>
            <div className="img-logo">
              <img src="./Images/man.png" alt='logo' />
            </div>
            <h3 className="text">Please login to access your account</h3>
            <input type="email" placeholder="enter your email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
            <br />
            <input type={!toggle ? 'password' : "text"} placeholder="enter your password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <span className="hide-show" onClick={() => setToggle(!toggle)}>
              {
                toggle ? <i class="fas fa-eye" ></i> : <i class="fas fa-eye-slash" ></i>
              }
            </span>
            <div className="input-btn"><button className="btnBtn" onClick={HandleButton}>Login</button></div>
            
            <span className="linking">Don't have an Account? &nbsp;<NavLink to="/signup">Sign Up</NavLink> </span>




          </div>

        </div>
        <ToastContainer />
      </div>

    </>
  );
};

export default Login;
