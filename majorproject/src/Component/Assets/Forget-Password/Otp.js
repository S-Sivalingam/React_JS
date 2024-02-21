import React, { useState, useEffect } from 'react';
import './Otp.css'
import { Typography, Button } from '@mui/material';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { styled } from '@mui/system';



const MyMuiOtpInput = styled(MuiOtpInput)(({ theme }) => ({
  '& .MuiInputBase-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#27374d', // Focused border color
    },
    '&.Mui-focused .MuiInputLabel-root': {
      color: '#27374d', // Focused label color
    },
  },
}));





const Otp = () => {
  const [otp, setOtp] = useState('');
  const [resendTime, setResendTime] = useState(60); 

  const handleChange = (newValue) => {
    // Check if newValue is numeric before updating the state
    if (!isNaN(newValue) && Number.isInteger(Number(newValue))) {
      setOtp(newValue);
    }
  };

  const handleResend = () => {
    // You can place logic here to resend the OTP via email or any other method
    // For now, let's just reset the timer
    setResendTime(60);
  };

  useEffect(() => {
    const timer =
      resendTime > 0 &&
      setInterval(() => setResendTime((prevTime) => prevTime - 1), 1000);

    // If resendTime reaches 0, clear the interval
    if (resendTime === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [resendTime]);

  return (
    <div id='otp-body'>
      <div id='otp'>
        <p className='otp-head' variant='h4'>Verify</p>

        <Typography className='otp-content'  variant='h5'>
          Your code was sent to your via email
        </Typography>

        <MyMuiOtpInput
          id='otp-input'
          value={otp}
          length={4}
          numInputs={4}
          onChange={handleChange}



        />

        <Button
        className='otp-verify'
          variant='contained'
          type='submit'
        //  onClick={handleSignUp} 
        >
          Verify
        </Button>

        {resendTime === 0 && (
          <Button
            variant='outlined'
            className='otp-resend'
            onClick={handleResend}
          >
            Resend OTP
          </Button>
        )}

        {resendTime !== 0 && (
          <Typography className='otp-resendtime' variant='body2'>
            Resend OTP in {resendTime} seconds
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Otp;
