import React from "react";
import "./Home.css";
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";

function Home() {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <div>hello</div>
        <div>hello2</div>
        {/* <Feed /> */}
        {/* <RightBar /> */}
      </div>
    </>
  );
}

export default Home;
