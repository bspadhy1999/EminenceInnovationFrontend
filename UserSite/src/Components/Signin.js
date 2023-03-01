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
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Signin() {

    const [open, setOpen] = React.useState(false);

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
  
    const loginUser=(token)=>{
      localStorage.setItem('token',token);
      return true;
    }
  
    const isLoggedIn=()=>{
      const tokenStr=localStorage.getItem("token");
      if(tokenStr===undefined || tokenStr==='' || tokenStr===null){
        return false;
      }
      else{
        return true;
      }
    }
  
    const logout=()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return true;
    }
  
    const getToken=()=>{
      return localStorage.getItem('token');
    }
  
    const storeUser=(currentUser)=>{
    localStorage.setItem('user',JSON.stringify(currentUser));
    }
  
    const getUser=()=>{
      const userStr=localStorage.getItem('user');
      if(userStr!==null){
        return JSON.parse(userStr);
      }
      else{
        logout();
        return null;
      }
    }
  
    const getUserRole=()=>{
      const userData=getUser();
      return userData.authorities[0].authority;
    }
  
    axios.interceptors.request.use(
      config => {
        config.headers['Authorization'] = `Bearer ${getToken()}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
  
    const getCurrentUser= async ()=>{
      const req=await axios.get('http://localhost:8080/current-user');
      console.log("req issss",req.data)
      return req.data;
    }
  
    const navigate=useNavigate();
  
    const handleRegister=async ()=>{
      if(user.username==='' && user.password===''){
        setOpen(true);
        return;
      }
      else{
           const sendRequest =async () => {
            const userData =await  axios.post(`http://localhost:8080/generate-token`,user) .then(async function (response) {
              loginUser(response.data.token);
              const currentUser=await getCurrentUser();
              storeUser(currentUser);
              if(getUserRole()==="ADMIN"){
                navigate("/allusers");
                document.location.reload();
              }
              else if(getUserRole()==="NORMAL"){
                navigate("/user");
                document.location.reload();
              }
              else{
                console.log('inside else')
                
              }
            })
            .catch(function (error) {
              console.log(error);
              alert("Invalid username and password !! Try again...")
              logout();
            });
           };
           sendRequest();
      }
    }
  
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
            <h4><strong>Sign in</strong></h4>
            <span>New Here? <Link to="/signup" style={{textDecoration:"none"}}><b>Create an Account</b></Link></span>
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
        <div className="float-end mt-2">
        <Link to="/forgotpassword" style={{textDecoration:"none"}}><b>Forgot Password?</b></Link>
        </div>
        <Button className='mt-4' variant="contained" size="medium" style={{width:"100%"}} onClick={handleRegister}>
          Continue
        </Button>
            </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Username and Password must be required!
        </Alert>
      </Snackbar>
    </>
  )
}
