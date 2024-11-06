import React from "react";
import "./Chat.css";
import profPic from "../../assets/profile.png";
import { format } from "timeago.js";

function Chat({ message, own }) {
  // console.log("message", message);
  return (
    <div className={own ? "chatContainer own" : "chatContainer"}>
      <div className="chatTop">
        <img src={profPic} alt="" className="chatTopImg" />
        <p className="chatTxt">{message?.text}</p>
      </div>
      <div className="chatBottom">{format(message?.createdAt)}</div>
    </div>
  );
}

export default Chat;
