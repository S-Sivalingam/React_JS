import React from 'react';
import '../Signup/Signup.css'
import {Button, TextField, Typography} from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import { useRef,useState,useEffect } from 'react';

const USER_REGEX=/^[a-zA-Z] [a-zA-Z0-9-_] {3,23}$/;
const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const Signup = () => {
 /*  const [User,Setuser]=useState(" ");
  const [ValidN,Setuser]=useState(" "); */

  return (

   <>
   <body id='body'>
    
    <Typography >
      <h2 id='h2-sign'>Signup</h2>
      <div id='underline'></div>
    </Typography>
      <TextField
        id='mail-log'
        label='Email' 
        type='email '
        InputProps={{
          startAdornment: (
            <EmailOutlinedIcon style={{ marginRight: '8px' }} id='lock' />
          ),
        }}
      />

      <TextField 
        id='pass-log'
        label='Password' 
        type='password'
        InputProps={{
          startAdornment: (
            <LockOutlinedIcon style={{ marginRight: '8px' }} id='lock' />
          ),
        }}
     
      />

      <TextField 
        id='pass-log'
        label='Confirm Password' 
        type='password'
        InputProps={{
          startAdornment: (
            <LockOutlinedIcon style={{ marginRight: '8px' }} id='lock' />
          ),
        }}
     
      />
      <Button id='btn-signin' variant='contained'>
       Signup
       
      </Button>
      <div id='aup-log'>
       <label id='al-sign'>
        Already have an account?  
       </label> 
       <Link id='sign-log' to='/'>
         &nbsp; Login
       </Link>
       </div>

  </body>
    </>
     
  );
}


export default Signup

