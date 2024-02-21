import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import './Reset.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { styled } from '@mui/system';

const MyTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#27374d', // Focused border color
    },
    '&.Mui-focused .MuiInputLabel-root': {
      color: '#27374d', // Focused label color
    },
  },
}));



function Reset() {
  const [password, setPassword] = useState()
  const [resetpassword, setResetpassword] = useState()
  const reset = async () => {

    if (!password || !resetpassword) {
      Swal.fire('Error', 'Please enter all the fields', 'error')
      return
    }

    if(password.length < 6){
      Swal.fire('Error','Password must in 6 Characters','error')
      return
    }

    if(password !== resetpassword){
      Swal.fire('Error','Password does not match','error')
      return
    }

  }
  return (
    <div id='reset-body'>
      <div id='reset'>
        <p className='reset-head'>Reset your Password</p>
        <MyTextField
          id='new-pass'
          label='New-Password'
          variant='outlined'
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <MyTextField
          id='con-pass'
          label='Reset-Password'
          variant='outlined'
          type='password'
          value={resetpassword}
          onChange={(e) => setResetpassword(e.target.value)}
        />
        <Button className='btn-reset' variant='contained' onClick={reset} >Change Password</Button>
      </div>
    </div>
  )
}
export default Reset