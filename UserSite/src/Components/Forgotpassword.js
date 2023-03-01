import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import toast, { Toaster } from 'react-hot-toast';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const notify = () => toast('Otp is sent to your mail successfully.');

export default function Forgotpassword() {
    const navigate=useNavigate();
    const [email, setEmail] = useState("");

    const handleOTP=()=>{
      if(email===""){
        setOpen(true);
        return;
      }
      else{
      const sendRequest=()=>{
        const userData=axios.post(`http://localhost:8080/send-otp`,{email:email}).then((response)=>{
          notify();
          navigate("/verifyotp");
        }).catch((err)=>{
          console.log(err);
          setOpen(true);
        });
      } 
      sendRequest();
    }
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
     <Toaster position='top-center'/>
      <div className='container mt-5 pt-5'>
        <div className='row'>
            <div className='col-md-4 offset-md-4 border shadow rounded p-4'>
            <div className='text-center mb-4'>
            <img className='mb-3' alt="logo-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOlduzGuxZkbjroQiuujxbEqk8Okx3pXCnfFb1q5rKJEqrPuVANpAbOTPQHVyLgsh5A&usqp=CAU' style={{width:"180px"}}/>
            <h4><strong>Forgot Password</strong></h4>
            </div>
            <TextField id="outlined-basic" label="Registered Email" type="email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} style={{width:"100%"}} />
            <Button className='mt-4' variant="contained" size="medium" style={{width:"100%"}} onClick={handleOTP}>Send OTP</Button>
            </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Email id is required!
        </Alert>
      </Snackbar>
    </>
  )
}
