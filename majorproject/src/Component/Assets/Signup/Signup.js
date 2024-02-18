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

  const createUser = async(e) => {
    e.preventDefault()
    if(email && password && confirmPassword){
      if(!validateEmail(email)) return swal.fire({
        title: "Error",
        text: "Email not Valid",
        icon: "error",
      });
      if(password !== confirmPassword) return  swal.fire({
        title: "Error",
        text: "Passwords did't match",
        icon: "error",
      });
      if(password.length < 6) return  swal.fire({
        title: "Error",
        text: "Password length must be at least 6 characters",
        icon: "error",
      });
      try {
        const response = await axios.post(
          "http://localhost:7000/api/v1/user/signup",
          {
            email,
            password,
          }
        );
        if (response.status !== 200)
          return swal.fire({
            title: response.statusText,
            text: response.data,
            icon: "error",
          });
        swal.fire({
          title: "Success",
          text: response.data.message,
          icon: "success",
          timer: 3000,
        });
        localStorage.setItem("bulkmailusertoken", response.data.token);
      } catch (error) {
        if (error.response.status) {
          swal.fire({
            title: error.response.statusText,
            text: error.response.data,
            icon: "error",
          });
        } else {
          swal.fire({ title: "Error", text: error.message, icon: "error" });
        }
      }

    }
    else{
      swal.fire({
        title: "Error",
        text: "Enter all Fields",
        icon: "error",
      });
    }
  }



  return (
    <>
      <form id="body" onSubmit={createUser}>
        <Typography>
          <h2 id="h2-sign">Signup</h2>
          <div id="underline"></div>
        </Typography>
        <TextField
          id="mail-log"
          label="Email"
          type="email"
          required
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
          required
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
          required
          onChange={(e)=>setConfirmPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <LockOutlinedIcon style={{ marginRight: "8px" }} id="lock" />
            ),
          }}
        />
        <Button id="btn-signin" type="submit" variant="contained">
          Signup
        </Button>
        <div id="aup-log">
          <label id="al-sign">Already have an account?</label>
          <Link id="sign-log" to="/">
            &nbsp; Login
          </Link>
        </div>
      </form>
    </>
  );
};

export default Signup;
