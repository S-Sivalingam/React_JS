import React from "react";
import "../Signup/Signup.css";
import { Button, TextField, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import {  useState } from "react";
import axios from "axios";
import swal from 'sweetalert2';

const Signup = () => {
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [confirmPassword,setConfirmPassword]=useState(null);

  const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

  const createUser = ()=>{
    if(email && password && confirmPassword){
      if(!validateEmail(email)) return swal("Email Not Valid")
    
      if(password!=confirmPassword) return swal("Passwords did't match")
      if(password.length < 6) return swal("Password length atleast 6 character")
      swal("Success")
      axios.post('https:/localhost:7000/api/v1/user/new', {
        email,
        password
      })
      .then( (response)=> {
        console.log(response);
      })
      .catch( (error) => {
        console.log(error);
      });

    }
    else{
      swal("Enter all fields");
    }
  }



  return (
    <>
      <div id="body">
        <Typography>
          <h2 id="h2-sign">Signup</h2>
          <div id="underline"></div>
        </Typography>
        <TextField
          id="mail-log"
          label="Email"
          type="email"
         
          onChange={(e)=>setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <EmailOutlinedIcon style={{ marginRight: "8px" }} id="lock" />
            ),
          }}
        />


        <TextField
          id="pass-log"
          label="Password"
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <LockOutlinedIcon style={{ marginRight: "8px" }} id="lock" />
            ),
          }}
        />

        <TextField
          id="conpass-log"
          label="Confirm Password"
          type="password"
          onChange={(e)=>setConfirmPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <LockOutlinedIcon style={{ marginRight: "8px" }} id="lock" />
            ),
          }}
        />
        <Button id="btn-signin" onClick={createUser} variant="contained">
          Signup
        </Button>
        <div id="aup-log">
          <label id="al-sign">Already have an account?</label>
          <Link id="sign-log" to="/">
            &nbsp; Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
