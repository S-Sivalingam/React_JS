import React from 'react'
import './Dashboard.css'
import {BiExport,BiMailSend } from 'react-icons/bi'
import {FaHistory, FaTasks} from "react-icons/fa"
import { MdOutlineCreate, MdOutlineTranslate, MdOutlineDashboard, MdOutlineLogout } from "react-icons/md";
import { RiAdvertisementLine } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className='body'>
      <div className='menu'>
        <div className='logo'>
         <MdOutlineDashboard className='logo-icon' />
          <h2>Dashboard</h2>
        </div>


{/*  ---------------- SlideBar-Left Start----------------- */}

        <div className='menu--list'>
          <a href='#' className='item'>
            <FaTasks  className='icon'/>
            Task-Group
          </a>
          <a href='#' className='item'>
            <BiMailSend className='icon'/>
            Mail-Sender
          </a>
          <a href='#' className='item'>
           <MdOutlineTranslate  className='icon'/>
            Translate
          </a>
          <a href='#' className='item'>
          <RiAdvertisementLine className='icon'/>
            Advertisement
          </a>
          <a href='#' className='item'>
            <MdOutlineCreate className='icon'/>
            AI-Creater
          </a>
           <a href='#' className='item'>
            <FaHistory className='icon'/>
            History
          </a>
          <a href='#' className='item'>
            <BiExport className='icon'/>
            Export
          </a>
          <a href='#' className='item'>
            <MdOutlineLogout className='icon'/>
            Logout
          </a>
        </div>    

{/*  ---------------- SlideBar-Left End----------------- */}


      </div>
    </div>
  )
}
export default Dashboard
