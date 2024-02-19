import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import { Profile } from "./Profile/Profile";
import './Dashboard.css'

const Dashboard =() =>{
  return(
    <>
    <div className="dashboard">
      <Sidebar />
      
    <div className="dashboard--content">
      <Content />
      <Profile />
    </div>
    </div>
    </>
  )
}

export default Dashboard