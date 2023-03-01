import React from 'react'
import Footer from './Footer';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <>
    <div className='mt-5 pt-5'></div>
    <div className="container mt-5 pt-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className='d-flex'>
                    <input className='p-2' type="text" placeholder='Type to search...' style={{width:"100%"}}/>
                    <button className='p-2 ps-3 pe-3' style={{backgroundColor:"black", color:"white"}}><div className='d-flex'><SearchIcon/>Search</div></button>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 pt-5">
        <div className="row">
            <div className="col-md-12 rounded shadow p-5">
                <h1><b>Popular Searches</b></h1>
                <ul>
                    <li>Cloud Solutions</li>
                    <li>UI/UX Design</li>
                    <li>SaaS Development</li>
                    <li>DevOps Service</li>
                    <li>PHP Web Development</li>
                </ul>
            </div>
        </div>
    </div>
        <Footer/>
    </>
  )
}
