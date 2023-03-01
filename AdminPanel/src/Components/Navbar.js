import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import toast, { Toaster } from 'react-hot-toast';

export default function Navbar() {
    const navigate=useNavigate();
    const handleLogout=()=>{
        navigate("/");
        setTimeout(() => {
            toast.success("You have been logged out!")
        }, 200);
    }
  return (
    <>
         <Toaster  position='top-center' reverseOrder="false"/>
        <nav className="navbar navbar-expand-lg bg-light fixed-top navclass">
        <div className="container-fluid">
            <Link to="/"><img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767616/Blog/eminencelogo_bl21a4.jpg" alt="" width={"150px"} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form className="d-flex align-items-center" role="search">
                <LogoutIcon fontSize='large' onClick={handleLogout} className='me-2' style={{color:"#1976d2", cursor:"pointer"}}/>
                <span className='border-start border-primary ps-2'><img src="https://img.freepik.com/free-icon/india_318-303940.jpg?size=338&ext=jpg&ga=GA1.1.737960241.1675845662&semt=sph" alt="" width={"40px"} /></span>
            </form>
            </div>
        </div>
        </nav>
    </>
  )
}
