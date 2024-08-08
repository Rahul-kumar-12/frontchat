import React, { useEffect, useState } from "react";
import "./chat.css";
import { user } from "../Join/Join.js";
import socketIO from "socket.io-client";
import Message from "../../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";

const ENDPOINT = "http://localhost:4500/";
let socket;

const Chat = () => {
  const [id, setId] = useState("");
  const [comon, setComon] = useState([]);

  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };


  useEffect(() => {
    socket = socketIO(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      //   alert("conneted");
      setId(socket.id);
    });

    socket.emit("joined", { user });

    socket.on("welcome", (data) => {
      setComon([...comon, data]);

    });
    socket.on("userjoined", (data) => {
      setComon([...comon, data]);

    });
    socket.on("leave", (data) => {
      setComon([...comon, data]);

    });

    return () => {
      socket.emit("desconnect");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setComon([...comon, data]);

    });
    return () => {
      socket.off();
    }
  }, [comon]);

  return (
    <div className="chatPage">
      <div className="chatContainer">
        <div className="header">
          <img src="./Images/Robot.png" alt="" />
          <span style={{ color: "white", fontWeight: "600" }}>Chat Application</span>
          <a href="/" target="_blank" className="join-new"><button className="add-btn" style={{ width: "max-content" }}>
            Add user
          </button> </a>
        </div>
        <ReactScrollToBottom className="chatBox">
          {
            comon.map((item, i) => <Message message={item.message} user={item.id === id ? '' : item.user} classs={item.id === id ? ' right' : 'left'}
              classes={item.id === id ? 'message-sect' : "message-sectt"}
            />)}
        </ReactScrollToBottom>
        <div className="inputBox">
          <input onKeyPress={(e) => e.key === 'Enter' ? send() : null} type="text" id="chatInput" placeholder="typing here" />
          <button onClick={send} className="sendBtn">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
