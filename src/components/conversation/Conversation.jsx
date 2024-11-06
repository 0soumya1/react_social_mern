import React, { useEffect, useState } from "react";
import "./Conversation.css";
import profPic from "../../assets/profile.png";
import noAvtarPic from "../../assets/no_avatar.png";
import axios from "axios";
import { BASE_URL } from "../../utils/Strings";

function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation?.members?.find(
      (m) => m != currentUser?.data?._id
    );
    const getUser = async () => {
      try {
        const res = await axios(BASE_URL + "users?userId=" + friendId);
        setUser(res?.data?.data);
      } catch (err) {
        console.log(err, "err");
      }
    };
    getUser();
  }, [conversation, currentUser]);

  return (
    <div className="conversationContainer">
      <img
        src={user?.profilePic ? user?.profilePic : noAvtarPic}
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">{user?.name}</span>
    </div>
  );
}

export default Conversation;
