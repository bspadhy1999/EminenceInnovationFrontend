import * as React from "react";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import { useNavigate, useSearchParams } from "react-router-dom";
export default function EditUser() {

  const navigate=useNavigate();
  const [URLSearchParams] = useSearchParams();
  const query = URLSearchParams.get("query");
  let paramData = useParams();
  let id = paramData.id;
  
  axios.interceptors.request.use(
    config => {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
          return config;
      },
      error => {
          return Promise.reject(error);
      }
  );

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(`http://localhost:8080/user/${query}`);
      setUser(req.data);
    };
    fetchData();
  }, []);
  
  const [user, setUser] = useState({});
 
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUser(prevState =>({
      ...prevState,
      [name]:value
    }));
  };

  const handleUpdate = () => {
    const fetchData = async () => {
      const req = await axios.put(`http://localhost:8080/user/updateUser`,user);
      console.log(req.data);
    };
    fetchData();
    navigate("/allusers");
  };

  return (
    <>
    {user !== undefined ? (
        <div className="container mb-3 mt-5 pt-4">
        <div className="row">
          <div className="col-md-5 mx-auto border border-2 shadow rounded p-5">
            <div className="text-center">
              <img
                className="mb-3"
                alt="logo-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHOlduzGuxZkbjroQiuujxbEqk8Okx3pXCnfFb1q5rKJEqrPuVANpAbOTPQHVyLgsh5A&usqp=CAU"
                style={{ width: "180px" }}
              />
              <h4>
                <strong>Update your Profile</strong>
              </h4>
            </div>
            {/* <pre>{JSON.stringify(user)}</pre> */}
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1},
              }}
              noValidate
              autoComplete="off"
            >
                <TextField
                  label="First Name"
                  variant="standard"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  style={{width:"100%"}}
                />
                <TextField
                  label="Last Name"
                  variant="standard"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  style={{width:"100%", marginTop:"15px"}}
                />
                <TextField
                  label="Email"
                  variant="standard"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  style={{width:"100%", marginTop:"15px"}}
                />
                <TextField
                  label="Mobile"
                  variant="standard"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  style={{width:"100%", marginTop:"15px"}}
                />
                <TextField
                  label="Username"
                  variant="standard"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  style={{width:"100%", marginTop:"15px"}}
                />
            </Box>
            <Button
              className="mt-5"
              variant="contained"
              size="medium"
              style={{ width: "100%" }}
              onClick={handleUpdate}
            >
              Update
            </Button>
          </div>
        </div>
      </div>
    ) : (
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-3 mx-auto p-5 border border-2 rounded-2 shadow">
            <h1>Loading...</h1>
          </div>
        </div>
      </div>
    )}
      
    </>
  );
}
