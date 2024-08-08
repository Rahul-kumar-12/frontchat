import React from 'react'
import "./Navbar.css";
import { NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user')
  const LogoutHandler = () => {
    if (auth) {
      localStorage.clear('user')
      navigate('/');
    }

  }
  return (
    <>
      <nav style={{position:"sticky", top:"0", zIndex:"99999"}}>
        <div style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft:"2rem", paddingRight:"2rem"}}>
          <div>
          <img src="/Images/Robot.png" alt=""  className='robot-img' style={{ }}/></div>
          <div>
          {
          auth ? <NavLink to="/" onClick={LogoutHandler} style={{textDecoration:"none", fontSize:"1rem", color:"black", fontWeight:"600"}}>Logout</NavLink>:""
         } </div>
        </div>
        <div>
        
 

        </div>
      

      </nav>

    </>
  )
}

export default Navbar