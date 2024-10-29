import React from "react";
import "./Share.css";
import profPic from "../../assets/profile.png";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function Share() {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src={profPic} alt="" className="shareProfileImg" />
          <input placeholder="What's in your mind" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionTxt">Photo or Video</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionTxt">Tag</span>
            </div>
            <div className="shareOption">
              <LocationOnIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionTxt">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionTxt">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
