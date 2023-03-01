import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SingleUser() {
    const currentUser=localStorage?.getItem("user");
    const userData=JSON.parse(currentUser);
    const name=userData.firstName+ " "+userData.lastName;
    const email=userData.email;
    const phone=userData.phone;
    const username=userData.username;
    const navigate=useNavigate();
    const handleUpdate=()=>{
        navigate(`/updateuser?query=${username}`);
    }
  return (
    <div>
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h3 className='text-center mb-3'><b><i>Your Profile</i></b></h3>
                <div className="card shadow">
                    <div className="card-body">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-6">
                                <img src="https://img.freepik.com/free-icon/user_318-749758.jpg?w=2000" alt="" width={"100%"} />
                            </div>
                            <div className="col-md-6">
                            <h5 className="card-title mb-3"><b>{name}</b></h5>
                            <p className="card-subtitle mb-3">Email : {email}</p>
                            <p className="card-subtitle mb-3">Mobile : {phone}</p>
                            <p className="card-subtitle mb-3">Username : {username}</p>
                            <p style={{cursor:"pointer", color:"blue"}} onClick={handleUpdate}>Update</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
