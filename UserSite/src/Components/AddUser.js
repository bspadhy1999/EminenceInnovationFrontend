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
import axios from 'axios';
import swal from 'sweetalert';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AddUser() {

    const navigate=useNavigate();

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    }

    const [user, setUser] = React.useState({
      firstName:"",
      lastName:"",
      email:"",
      phone:"",
      username:"",
      password:"",
    })
 
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setUser(prevState =>({
        ...prevState,
        [name]:value
      }));
    };

    axios.interceptors.request.use(
      config => {
        config.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    const handleRegister=()=>{
      if(user.username==="" && user.password===""){
        setOpen(true);
        return;
      }
      else{
        const sendRequest=()=>{
          const userData=axios.post(`http://localhost:8080/user/`,user).then(function(response){
            console.log(userData.data);
            swal("Thank You!", "For Creating account in Eminence Innovation.", "success");
            setUser({
              firstName:"",
              lastName:"",
              email:"",
              phone:"",
              username:"",
              password:"",
            });
            navigate("/allusers")
          })
          .catch(function(err){
            swal("Some thing went wrong!", "Please Contact to owner of this page", "error");
          })
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
      <div className='container mt-5 pt-1'>
        <div className='row'>
            <div className='col-md-4 offset-md-4 border shadow rounded p-4'>
            <div className='text-center mb-3'>
            <img className='mb-3' alt="logo-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOlduzGuxZkbjroQiuujxbEqk8Okx3pXCnfFb1q5rKJEqrPuVANpAbOTPQHVyLgsh5A&usqp=CAU' style={{width:"180px"}}/>
            <h4><strong>Add a User</strong></h4>
            </div>
            {/* <pre>{JSON.stringify(user)}</pre> */}
            <form>
            <TextField className='mt-3' onChange={handleChange} value={user.firstName} name="firstName" id="firstname" label="First Name" variant="outlined" style={{width:"100%"}}/>
            <TextField className='mt-3' onChange={handleChange} value={user.lastName} name='lastName' id="lastname" label="Last Name" variant="outlined" style={{width:"100%"}}/>
            <TextField className='mt-3' onChange={handleChange} value={user.email} name='email' id="email" label="Email" variant="outlined" style={{width:"100%"}}/>
            <TextField className='mt-3' onChange={handleChange} value={user.mobile} name='phone' id="mobile" label="Mobile" variant="outlined" style={{width:"100%"}}/>
            <TextField className='mt-3' onChange={handleChange} value={user.username} name='username' id="username" label="User name" variant="outlined" style={{width:"100%"}}/>
            <FormControl className='mt-3' variant="outlined" style={{width:"100%"}}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name='password'
            onChange={handleChange}
            value={user.password}
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
          <small>Please Use Strong Password with min of Size 8</small>
        </FormControl>
            </form>
        <Button className='mt-4' variant="contained" size="medium" style={{width:"100%"}} onClick={handleRegister}>
          Continue
        </Button>
            </div>
        </div>
      </div>

      
    </>
  )
}
