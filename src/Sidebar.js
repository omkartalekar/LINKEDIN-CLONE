import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css"
import { useSelector } from "react-redux";
import {selectUser} from "./features/userSlice"

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img 
          src="./images/gradienta-LeG68PrXA6Y-unsplash.jpg"
          alt="cover pics" 
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="stat_number">2,432</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="stat_number">1,232</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems('JavaScript')}
        {recentItems('Ruby')}
        {recentItems('Ruby on Rails')}
      </div>
    </div>
  )
}

export default Sidebar
