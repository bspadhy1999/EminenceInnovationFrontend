import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Top() {
    const navigate=useNavigate();

    const handleLogout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/signin");
        document.location.reload();
      }

    const [login, setLogin] = useState(false);
  const [auth, setAuth] = useState(0);

  useEffect(() => {
   if(localStorage.getItem("token")){
    setLogin(true);
   }
   const userData=localStorage?.getItem("user");
   const originalData=JSON.parse(userData);
   const authData=originalData?.authorities[0]?.authority;
   if(authData==="ADMIN"){
    console.log(authData)
      setAuth(1);
   }
   else if(authData==="NORMAL"){
    setAuth(2);
   }
  }, [])
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
            <Link to="/"><img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767616/Blog/eminencelogo_bl21a4.jpg" alt="" width={"150px"} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active eilist" aria-current="page" to="/cognizance">Cognizance</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active eilist" aria-current="page" to="/services">Services</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active eilist" aria-current="page" to="/careers">Careers</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active eilist" aria-current="page" to="/about">About Eminence</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active eilist" aria-current="page" to="/contact">Contact</Link>
                </li>
            </ul>
            <form className="d-flex" role="search">
            {
                !login && (
                <>
                <Link className="nav-link active eilist" aria-current="page" to="/signin">SignIn</Link>
                <Link className="nav-link active eilist" aria-current="page" to="/signup">SignUp</Link>
                </>
                )
                }
                {
                    auth===1 && (
                    <>
                    <Link className="nav-link active eilist" aria-current="page" to="/user">My Profile</Link>
                    <Link className="nav-link active eilist" aria-current="page" to="/allusers">All Users</Link>
                    </>
                    )
                }
                {
                    auth===2 && (
                    <>
                    <Link className="nav-link active eilist" aria-current="page" to="/user">My Profile</Link>
                    </>
                    )
                }
                {
                    login && (
                    <>
                    <span className="nav-link active eilist ms-4" aria-current="page" onClick={handleLogout} style={{cursor:"pointer"}}>Log out</span>
                    </>
                    )
                }
                <Link to="/search"><img className='ms-4 me-2 mt-1' src="https://img.freepik.com/free-icon/search_318-931787.jpg?size=338&ext=jpg&ga=GA1.2.737960241.1675845662&semt=sph" alt="" width={"30px"} height={"30px"}/></Link>
                <span className='border-start border-primary ps-2'><img src="https://img.freepik.com/free-icon/india_318-303940.jpg?size=338&ext=jpg&ga=GA1.1.737960241.1675845662&semt=sph" alt="" width={"40px"} /></span>
            </form>
            </div>
        </div>
        </nav>
    </>
  )
}
