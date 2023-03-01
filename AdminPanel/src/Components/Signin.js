import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


export default function Signin() {

    const navigate=useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    }

    const [user, setUser] = useState({
      username:"",
      password:"",
    })
  
    const handleOnchange=(e)=>{
      const {name,value}=e.target;
      setUser(prevState =>({
        ...prevState,
        [name]:value
      }));
    };

    const handleRegister=()=>{
        if(user.username===""){
            toast.error("Username is required!");
            return;
        }
        else if(user.password===""){
            toast.error("Password is required!");
            return;
        }
        else if(user.username !== "bspadhy1999"){
            toast.error("Username is invalid!");
            return;
        }
        else if(user.password !== "123456"){
            toast.error("Password is invalid!");
            return;
        }
        else{
            navigate("/home");
        }
    }

  return (
    <>
     <Toaster  position='top-center' reverseOrder="false"/>
    <div className='container mt-5 pt-5'>
    <div className='row'>
        <div className='col-md-4 offset-md-4 border shadow rounded p-4'>
        <div className='text-center mb-4'>
        <img className='mb-3' alt="logo-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOlduzGuxZkbjroQiuujxbEqk8Okx3pXCnfFb1q5rKJEqrPuVANpAbOTPQHVyLgsh5A&usqp=CAU' style={{width:"180px"}}/>
        <h4><strong>Welcome to Admin Panel</strong></h4>
        </div>
        <TextField id="outlined-basic" onChange={handleOnchange} value={user.username} name="username" label="User name" variant="outlined" style={{width:"100%"}}/>
        <FormControl variant="outlined" style={{width:"100%"}} className="mt-4">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        name="password"
        value={user.password}
        onChange={handleOnchange}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
    <Button className='mt-4' variant="contained" size="medium" style={{width:"100%"}} onClick={handleRegister}>
      Continue
    </Button>
        </div>
    </div>
  </div>
</>
  )
}
