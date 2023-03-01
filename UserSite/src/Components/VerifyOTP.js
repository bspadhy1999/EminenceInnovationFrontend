import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function VerifyOTP() {
    const navigate=useNavigate();
    const [otp, setOtp] = useState("");

    const verifyOTP=()=>{
      const sendRequest=()=>{
        const userData=axios.post(`http://localhost:8080/verify-otp`,{otp:otp}).then((response)=>{
          navigate("/resetpassword");
        }).catch((err)=>{
          console.log(err);
          setOpen(true);
        });
      } 
      sendRequest();
    }

    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };  
  return (
    <>
      <div className='container mt-5 pt-5'>
        <div className='row'>
            <div className='col-md-4 offset-md-4 border shadow rounded p-4'>
            <div className='text-center mb-4'>
            <img className='mb-3' alt="logo-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOlduzGuxZkbjroQiuujxbEqk8Okx3pXCnfFb1q5rKJEqrPuVANpAbOTPQHVyLgsh5A&usqp=CAU' style={{width:"180px"}}/>
            <h4><strong>Verify Your OTP</strong></h4>
            </div>
            <TextField id="outlined-basic" label="OTP" variant="outlined"  value={otp} onChange={(e)=>setOtp(e.target.value)} style={{width:"100%"}} />
            <Button className='mt-4' variant="contained" size="medium" style={{width:"100%"}} onClick={verifyOTP}>Verify</Button>
            </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Invalid OTP. Please enter the correct one.
        </Alert>
      </Snackbar>
    </>
  )
}
