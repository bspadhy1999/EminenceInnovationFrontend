import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Resetpassword() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    }
  return (
    <>
      <div className='container mt-5 pt-5'>
        <div className='row'>
            <div className='col-md-4 offset-md-4 border shadow rounded p-4'>
            <div className='text-center mb-4'>
            <img className='mb-3' alt="logo-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOlduzGuxZkbjroQiuujxbEqk8Okx3pXCnfFb1q5rKJEqrPuVANpAbOTPQHVyLgsh5A&usqp=CAU' style={{width:"180px"}}/>
            <h4><strong>Reset Password</strong></h4>
            </div>
            <TextField id="outlined-basic" label="Password" variant="outlined" style={{width:"100%"}} />
            <TextField className='mt-4' id="outlined-basic" label="Confirm Password" variant="outlined" style={{width:"100%"}} />
            <Link to="/signin" style={{textDecoration:"none",color:"white"}}>
                <Button className='mt-4' variant="contained" size="medium" style={{width:"100%"}}>Reset</Button>
            </Link>
            </div>
        </div>
      </div>
    </>
  )
}
