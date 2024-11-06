import React from "react";
import "./Post.css";
import profPic from "../../assets/profile.png";
function Post() {
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="" alt="" className="postProfileImg" />
            <span className="postUsername">Charlie</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight"></div>
        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  );
}

export default Post;
