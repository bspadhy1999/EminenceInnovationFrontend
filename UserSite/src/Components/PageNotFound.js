import React from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {
  const navigate=useNavigate();
  return (
    <>
    <div className="container mt-5 pt-5">
        <div className="row d-flex justify-content-center p-4">
            <div className="col-md-6 text-center">
                <h1>SORRY</h1>
                <h2><b>Page Not Found</b></h2>
                <small>The webpage you were trying to reach could not be found on the server, or that you typed in the URL incorrectly.</small> <br />
                <button type='submit' className='p-2 mt-3 rounded' onClick={()=>{navigate("/contact")}} style={{border:"none",backgroundColor:"#1976d2",color:"white"}}>Contact Now</button>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
