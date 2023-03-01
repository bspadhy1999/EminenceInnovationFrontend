import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchJob() {
  return (
    <>
    <section className='mt-5 pt-5'>
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col-md-12">
                <p style={{fontSize:"70px", fontWeight:"800"}}>Search Jobs at Eminence</p>
                <div className="d-flex ps-5 pe-5">
                    <input className='p-2' type="text" placeholder='Search Jobs?' style={{width:"80%"}}/>
                    <button  className='p-2 ps-3 pe-3' style={{backgroundColor:"black", color:"white"}}><div className='d-flex'><SearchIcon/>Search</div></button>
                </div>
                <div className="d-flex align-items-center mt-2">
                <p className='me-2'>Featured skills search:</p>
                <p className='border border-primary rounded-pill p-1 me-2'>Information Technology Operations</p>
                <p className='border border-primary rounded-pill p-1 me-2'>Sales</p>
                <p className='border border-primary rounded-pill p-1 me-2'>Software Engineer</p>
                <p className='border border-primary rounded-pill p-1 me-2'>Business Technology Integration</p>
                </div>
                </div>
            </div>
        </div>
    </section>
    <div className="container">
        <div className="row ps-5">
            <div className="col-md-12 p-5">
                <h1><b>A Great Opportunity Awaits</b></h1>
                <p>The following job roles and positions are open for you. Apply today to experience the taste of success. For your pursuit, we have opened up a quality amount of job positions in our company. Applying to the role as per your interest and skills; will be your foremost task with us.</p>
            </div>
        </div>
        <div className="row d-flex justify-content-evenly">
            <div className="col-md-3 shadow p-4 careerborder">
                <small><b>IND | New Delhi</b></small> <br />
                <Link style={{color:"black", fontSize:"30px", fontWeight:"600"}}>Sr. Node Developer</Link>
                <p><b>Software Engineer</b></p>
                <small>Posted On 4 weeks ago</small>
            </div>
            <div className="col-md-3 shadow p-4 careerborder">
                <small><b>IND | New Delhi</b></small> <br />
                <Link style={{color:"black", fontSize:"30px", fontWeight:"600"}}>Jr. Java Developer</Link>
                <p><b>Software Engineer</b></p>
                <small>Posted On 4 weeks ago</small>
            </div>
            <div className="col-md-3 shadow p-4 careerborder">
                <small><b>IND | New Delhi</b></small> <br />
                <Link style={{color:"black", fontSize:"30px", fontWeight:"600"}}>Sr. Java Developer</Link>
                <p><b>Software Engineer</b></p>
                <small>Posted On 4 weeks ago</small>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row ms-5 mt-5 ps-2 pe-5">
            <div className="col-md-12">
            <h1><b>Jobs in Asia</b></h1>
            <div className="row mt-4 mb-4 d-flex justify-content-evenly align-items-center">
                <div className="col-md-5 d-flex">
                    <p>SORT BY:</p>
                    <p className='text-secondary ms-2 me-2'>MOST RECENT</p>
                    <p className='text-primary'><b>MOST RELEVANT</b></p>
                </div>
                <div className="col-md-2 border border-dark border-2 d-flex justify-content-center">
                    <p className='mt-2'><b>NEW JOB SEARCH</b></p>
                </div>
                <div className="col-md-2 border border-dark border-2 d-flex justify-content-center">
                    <p className='mt-2'><b>LIST VIEW</b></p>
                </div>
                <div className="col-md-2 border border-dark border-2 d-flex justify-content-center">
                    <p className='mt-2'><b>FILTER RESULT</b></p>
                </div>
            </div>
            </div>
        </div>
        <div className="row d-flex justify-content-evenly">
            <div className="col-md-3 shadow p-4 careerborder">
                <small><b>IND | New Delhi</b></small> <br />
                <Link style={{color:"black", fontSize:"30px", fontWeight:"600"}}>Jr. Node Developer</Link>
                <p><b>Software Engineer</b></p>
                <small>Posted On 4 weeks ago</small>
            </div>
            <div className="col-md-3 shadow p-4 careerborder">
                <small><b>IND | New Delhi</b></small> <br />
                <Link style={{color:"black", fontSize:"30px", fontWeight:"600"}}>Sr. Node Developer</Link>
                <p><b>Software Engineer</b></p>
                <small>Posted On 4 weeks ago</small>
            </div>
            <div className="col-md-3 shadow p-4 careerborder">
                <small><b>IND | New Delhi</b></small> <br />
                <Link style={{color:"black", fontSize:"30px", fontWeight:"600"}}>Jr. Java Developer</Link>
                <p><b>Software Engineer</b></p>
                <small>Posted On 4 weeks ago</small>
            </div>
        </div>
        <div className="row mt-5 ms-5 ps-3" style={{width:"360px"}}>
            <div className="col m-1 shadow p-4 careerborder">
                <small><b>IND | New Delhi</b></small> <br />
                <Link style={{color:"black", fontSize:"30px", fontWeight:"600"}}>Sr. Java Developer</Link>
                <p><b>Software Engineer</b></p>
                <small>Posted On 4 weeks ago</small>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-11 ms-5 pt-3 ps-4">
                <p>We are looking for people who are problem solvers and want to advance in their careers. There is a bundle of opportunities that await you. Search for your dream job and apply for it now to become an essential part of our organization. Your creativity and innovation will be the stepping stone for your success and career growth with us. Join our team now.</p>
            </div>
        </div>
    </div>
    <div className="container pt-5 pb-5">
        <h1 className='ms-5 ps-4 mb-5 pb-5'><b>Stay Connected</b></h1>
        <div className="row d-flex justify-content-evenly">
            <div className="col-md-3 border border-2 p-3 pt-5 careerbox">
                <img className='careerimg' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675835049/job-for-me-icon_1_uycotp.svg" alt="" width={"150px"} />
                <h2><b>Join Our Team</b></h2>
                <p>Search for open positions that match your skills and interest. We are looking for candidates with a problem-solving attitude, along with a pinch of creativity among team players.</p>
                <Link>SEARCH EMINENCE JOBS 👉</Link>
            </div>
            <div className="col-md-3 border border-2 p-3 pt-5 careerbox">
                <img className='careerimg' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675835049/icon_1_vlpkck.svg" alt="" width={"150px"}/>
                <h2><b>Keep Up to Date</b></h2>
                <p>Stay ahead with the latest career guides and tips, management’s valuable career updates, and employee work perspectives that will take you along and flourish your career.</p>
                <Link to="/cognizance">READ CAREERS BLOG 👉</Link>
            </div>
            <div className="col-md-3 border border-2 p-3 pt-5 careerbox">
                <img className='careerimg' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675835049/job-alert-icon_1_goaqfm.svg" alt="" width={"150px"}/>
                <h2><b>Job Alert Emails</b></h2>
                <p>Customize your subscription to receive job alerts, latest news, and useful info based on your preferences. Discover what exciting and rewarding opportunities await. opport await.</p>
                <Link>REGISTER FOR JOB ALERTS 👉</Link>
            </div>
        </div>
    </div>
        <section className='mt-5' style={{backgroundColor:"#1976d2"}}>
            <div className="container" style={{padding:"10rem"}}>
                <div className="row">
                    <div className="col-md-6 pe-5">
                        <h1 className='text-white'><b>+91-7982-611-413</b></h1>
                        <p className='text-white'>Without the hassles of hiring, our expert team delivers dream-team results.</p>
                        <button className='p-3 contact rounded' style={{border:"none"}}>Contact now 👉</button>
                    </div>
                    <div className="col-md-6">
                        <button className='p-3 mb-4 contact rounded' style={{border:"none", backgroundColor:"#ffa200", color:"white"}}>CALL FOR ADVICE NOW</button>
                        <h1 className='text-white'><b>To make requests for further information, contact us via our social channels.</b></h1>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </>
  )
}
