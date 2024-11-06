import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import "./Messanger.css";
import TopBar from "../topbar/TopBar";
import Conversation from "../conversation/Conversation";
import Chat from "../chat/Chat";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL, GET_CONV, GET_MSG, POST_MSG } from "../../utils/Strings";
import { useLocation } from "react-router-dom";

function Messanger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const socket = useRef();
  const scrollRef = useRef();

  const { user } = useContext(AuthContext);
  let url = BASE_URL + GET_CONV;
  // console.log("user", user);

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", user?.data?._id);
    socket.current.on("getUsers", (users) => {
      console.log("users", users);
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(url + user?.data?._id);
        setConversations(res?.data?.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    getConversations();
  }, [user?.data?._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(BASE_URL + GET_MSG + currentChat?._id);
        setMessages(res?.data?.data);
      } catch (err) {
        console.log("err", err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user?.data?._id,
      text: newMessage,
      conversationId: currentChat._id,
    };
    try {
      const res = await axios.post(BASE_URL + POST_MSG, message);
      setMessages([...messages, res?.data?.data]);
      setNewMessage("");
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  // const loc = useLocation();
  // console.log(loc, "loc");
  return (
    <>
      <TopBar />
      <div className="messangerContainer">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for freinds" className="chatMenuInput" />
            {conversations?.length > 0 &&
              conversations.map((item) => (
                <div onClick={() => setCurrentChat(item)}>
                  <Conversation conversation={item} currentUser={user} />
                </div>
              ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages?.length > 0 &&
                    messages.map((item) => (
                      <div ref={scrollRef}>
                        <Chat
                          message={item}
                          own={item.sender === user?.data?._id}
                        />
                      </div>
                    ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMesaageInput"
                    placeholder="Write Something"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConvTxt">
                Open a conversation to start a chat
              </span>
            )}
          </div>
        </div>
        {/* <div className="chatOnline">
          <div className="chatOnlineWrapper">Online</div>
        </div> */}
      </div>
    </>
  );
}

export default Messanger;
