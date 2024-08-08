
import React, { useState } from "react";
import "./join.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let user;
const Join = () => {
  const [name, setName] = useState("");

  const SendUser = () => {
    if (name === "") {
      toast.error("please enter your name");
    } else {
      alert("Add new user")
      user = document.getElementById("joinInput").value;
      document.getElementById("joinInput").value = "";

    }
  };

  return (
    <div className="joinpage">
      <div className="joincontainer">
        <img src="/Images/Robot.png" alt="logo" className="robot" />
        <h3>welcome to  chat application </h3>
        <input
          type="text"
          id="joinInput"
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <Link to="/chat" onClick={(e) => (!name ? e.preventDefault() : null)}>
          <button onClick={SendUser} className="buttonType">
            Add User
          </button>

        </Link>



      </div>
      <ToastContainer />
    </div>
  );
};

export default Join;
export { user };
