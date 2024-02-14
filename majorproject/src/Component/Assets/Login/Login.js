import React from 'react';
import '../Login/Login.css'
import {Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography} from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
export const Login = () => {
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
const loginUser = ()=>{
  if(email && password){
    if(!validateEmail(email)) return alert("Email Not Valid")
    alert("Success")
    axios.post('https:/localhost:7000/api/v1/user/login', {
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
    alert("Enter all fields");
  }
}


  return (

   <>
   <body id='body'>
    
    <Typography 
    >
      <h2 id='h2-log'>Login </h2>
      <div id='underline'></div>
    </Typography>
      <TextField
        id='mail-log'
        label='Email' 
        type='email '
        onChange={(e)=>setEmail(e.target.value)}
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
        onChange={(e)=>setPassword(e.target.value)}
        InputProps={{
          startAdornment: (
            <LockOutlinedIcon style={{ marginRight: '8px' }} id='lock' />
          ),
        }}
     
      />
     <div id='log-rc-flex'> 
      <FormGroup>
        <FormControlLabel id='chk-log'  control={<Checkbox  size='xxl-small'/>} />
        <label id='rem-log'> Remember me</label>
      </FormGroup>
      <Link href='#' id='fgt'>
      Forget Password?
      </Link>
      </div>
      <Button id='btn' onClick={loginUser} variant='contained'>
        Login
      </Button>
      <div id='aup-log'>
       <label id='dont-log'>
        Don't have an account?  
       </label> 
       <Link id='log-signup' to='/Signup' >
         &nbsp; Signup
       </Link>
       </div>

  </body>
    </>
  
  );
}


export default Login

