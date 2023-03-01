import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useState } from 'react';

export default function Cognizance() {
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();
  return (
    <>
        <section className='mt-5 pt-1'>
            <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675769606/Blog/7.1_kyjfb5.png" alt="" style={{width:"100%"}} />
            <figcaption className='ms-5 ps-5 pt-3 pb-3 mb-3'><Link to="/"><small>Home</small></Link> : <small>Cognizance</small></figcaption>
        </section>
        <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-md-4 mb-4">
                <div className="card pt-3 pb-3">
                <div className="card-body" style={{cursor:"pointer"}} onClick={()=>{navigate("/cognizance/grow-your-business-with-custom-mobile-apps")}}>
                    <h4><b>Grow Your Business With Custom Mobile Apps</b></h4>
                    <img className='mt-5 mb-4' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675402442/Blog/20221205131958-2255_eteofy.png" alt="" width={"100%"} />
                    <span className='d-flex justify-content-center'><PersonIcon/>Shubra Sharma <CalendarMonthIcon className='ms-3'/> 2022-12-05</span>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card pt-3 pb-3">
                <div className="card-body" style={{cursor:"pointer"}} onClick={()=>{navigate("/cognizance/benefits-of-PHP-in-web-development")}}>
                    <h4><b>5 Benifits of PHP in Web Development</b></h4>
                    <img className='mt-5 mb-4' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675402428/Blog/20221104170119-5395_k2p39a.jpg" alt="" width={"100%"} />
                    <span className='d-flex justify-content-center'><PersonIcon/> Shubra Sharma <CalendarMonthIcon className='ms-3'/> 2022-11-04</span>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card pt-3 pb-3">
                <div className="card-body" style={{cursor:"pointer"}} onClick={()=>{navigate("/cognizance/cyberspace-safety-initiatives-by-india")}}>
                    <h4><b>Cyberspace Safety : Initiatives in India</b></h4>
                    <img className='mt-5 mb-4' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675402420/Blog/20230116102934-3195_lzmecn.jpg" alt="" width={"100%"} />
                    <span className='d-flex justify-content-center'><PersonIcon/> Shubra Sharma <CalendarMonthIcon className='ms-3'/> 2023-01-02</span>
                </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card pt-3 pb-3">
                <div className="card-body" style={{cursor:"pointer"}} onClick={()=>{navigate("/cognizance/custom-software-development-to-expand-your-business")}}>
                    <h4><b>Custom Software Development to Expand Your Business</b></h4>
                    <img className='mt-5 mb-4' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767617/Blog/20221028145543-5259_osgbnr.jpg" alt="" width={"100%"} />
                    <span className='d-flex justify-content-center'><PersonIcon/> Shubra Sharma <CalendarMonthIcon className='ms-3'/> 31 Oct 2022</span>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card pt-3 pb-3">
                <div className="card-body" style={{cursor:"pointer"}} onClick={()=>{navigate("/cognizance/choose-right-php-development-company")}}>
                    <h4><b>Choose the right PHP development Company</b></h4>
                    <img className='mt-5 mb-4' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767617/Blog/20221104145525-3127_gm8n5w.jpg" alt="" width={"100%"} />
                    <span className='d-flex justify-content-center'><PersonIcon/> Shubra Sharma <CalendarMonthIcon className='ms-3'/> 3 Oct 2022</span>
                </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card pt-3 pb-3">
                <div className="card-body" style={{cursor:"pointer"}} onClick={()=>{navigate("/cognizance/saas-application-development")}}>
                    <h4><b>SaaS application development and benifits</b></h4>
                    <img className='mt-5 mb-4' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767616/Blog/20221104145501-1447_iahghh.jpg" alt="" width={"100%"} />
                    <span className='d-flex justify-content-center'><PersonIcon/> Shubra Sharma <CalendarMonthIcon className='ms-3'/> 6 Oct 2022</span>
                </div>
                </div>
            </div>
            {
                loading &&
                <>
                    <div className="col-md-4 mb-4">
                        <div className="card pt-3 pb-3">
                        <div className="card-body" style={{cursor:"pointer"}} onClick={()=>{navigate("/cognizance/build-dedicates-software-development-team")}}>
                            <h4><b>Build a Strong team of dedicated software developers</b></h4>
                            <img className='mt-5 mb-4' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767617/Blog/20221104145547-4616_udpk7j.jpg" alt="" width={"100%"} />
                            <span className='d-flex justify-content-center'><PersonIcon/> Shubra Sharma <CalendarMonthIcon className='ms-3'/> 2022-10-06</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card pt-3 pb-3">
                        <div className="card-body" style={{cursor:"pointer"}} onClick={()=>{navigate("/cognizance/find-best-web-development-company")}}>
                            <h4><b>Find best web development company</b></h4>
                            <img className='mt-5 mb-4' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767617/Blog/20221104164649-5984_tcr4ar.jpg" alt="" width={"100%"} />
                            <span className='d-flex justify-content-center'><PersonIcon/> Shubra Sharma <CalendarMonthIcon className='ms-3'/> 2022-10-06</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card pt-3 pb-3">
                        <div className="card-body" style={{cursor:"pointer"}} onClick={()=>{navigate("/cognizance/find-best-android-app-development-company")}}>
                            <h4><b>Find best android APP Development company</b></h4>
                            <img className='mt-5 mb-4' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767615/Blog/20221104160932-3607_lsb8qv.jpg" alt="" width={"100%"} />
                            <span className='d-flex justify-content-center'><PersonIcon/> Shubra Sharma <CalendarMonthIcon className='ms-3'/> 2022-10-06</span>
                        </div>
                        </div>
                    </div>
                </>
            }
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                <button className='p-2 ps-4 pe-4 rounded text-center' style={{border:"none",backgroundColor:"#1976d2",color:"white",width:"150px"}} onClick={()=>{setLoading(!loading)}}>{loading ? "Hide" : "Load more"}</button>
                </div>
            </div>
        </div>
        <section className='mt-5' style={{backgroundColor:"#1976d2"}}>
            <div className="container" style={{padding:"10rem"}}>
                <div className="row">
                    <div className="col-md-6 pe-5">
                        <h1 className='text-white'><b>+91-7982-611-413</b></h1>
                        <p className='text-white'>Without the hassles of hiring, our expert team delivers dream-team results.</p>
                        <button className='p-3 contact rounded' style={{border:"none"}} onClick={()=>{navigate("/contact")}}>Contact now 👉</button>
                    </div>
                    <div className="col-md-6">
                        <button className='p-3 mb-4 contact rounded' style={{border:"none", backgroundColor:"#ffa200", color:"white"}} onClick={()=>{navigate("/contact")}}>CALL FOR ADVICE NOW</button>
                        <h1 className='text-white'><b>To make requests for further information, contact us via our social channels.</b></h1>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}
