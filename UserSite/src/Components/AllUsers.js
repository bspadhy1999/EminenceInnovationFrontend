import React, { useEffect, useState } from "react";
import axios from "axios";
import UserRow from "./UserRow";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

export default function AllUsers() {
  const navigate=useNavigate();
  const [apidata, setApidata] = useState([]);
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
      const req = await axios.get("http://localhost:8080/user/all");
      setApidata(req.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h2 className="text-center"><b>All User List</b></h2>
            <table className="table table-hover mt-3">
              <thead>
                <tr className="table-primary">
                  <th scope="col">Id no.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile No.</th>
                  <th scope="col">Email</th>
                  <th scope="col">Username</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {apidata.map((item, index) => {
                  if(item.authorities[0].authority==="NORMAL"){
                    return <UserRow key={index} value={item}/>;
                  }
                })}
              </tbody>
            </table>
            <div className="text-center">
            <Button className='mt-4' variant="contained" size="medium" onClick={()=>{navigate("/addUser")}}>
                    Add User
            </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
