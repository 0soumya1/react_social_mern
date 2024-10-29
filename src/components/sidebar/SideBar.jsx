import React from "react";
import "./SideBar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import profPic from "../../assets/profile.png";

function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemTxt">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className="sidebarIcon" />
            <span className="sidebarListItemTxt">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleIcon className="sidebarIcon" />
            <span className="sidebarListItemTxt">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupIcon className="sidebarIcon" />
            <span className="sidebarListItemTxt">Groups</span>
          </li>
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemTxt">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemTxt">Questions</span>
          </li>
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemTxt">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemTxt">Events</span>
          </li>
          <li className="sidebarListItem">
            <RssFeedIcon className="sidebarIcon" />
            <span className="sidebarListItemTxt">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img src={profPic} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Charlie</span>
          </li>
          <li className="sidebarFriend">
            <img src={profPic} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Charlie</span>
          </li>
          <li className="sidebarFriend">
            <img src={profPic} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Charlie</span>
          </li>
          <li className="sidebarFriend">
            <img src={profPic} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Charlie</span>
          </li>
          <li className="sidebarFriend">
            <img src={profPic} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">Charlie</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
