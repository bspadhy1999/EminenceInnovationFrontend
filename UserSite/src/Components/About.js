import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';

export default function About() {
    const [counterOn, setCounterOn] = useState(false)
    const navigate=useNavigate();
  return (
    <>
    <section className='mt-5 pt-1'>
        <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675769607/Blog/about-us_pnzr0c.jpg" alt="" style={{width:"100%"}} />
        <figcaption className='ms-5 ps-5 pt-3 pb-3 mb-3'><Link to="/"><small>Home</small></Link> : <small>About</small></figcaption>
    </section>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 p-5">
                <h1><b>Preparing for your success, we provide truly prominent IT services.</b></h1>
                <p className='mt-3'>Eminence Innovations is total IT solution Company catering to the business and development demands of global as well as the domestic clients. Eminence Innovations thrives to achieve total customer satisfaction by following the footstep with the dynamics of fast changing IT world. Eminence Innovations ensures the international quality standard through the process of continuous evolutions, feedback, suggestions from its client, where work ethics, commitment and integrity of our key personnel are the prime key element for success of the organization.</p>
            </div>
            <div className="col-md-6 aboutImage">
                <a href=""><PlayCircleIcon className='aboutImage5'/></a>
                <img className='aboutImage1' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675832555/about-5_kl3rw0.jpg" alt=""/>
                <img className='aboutImage2' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675832720/about-6_a0bkiq.jpg" alt=""/>
                <img className='aboutImage3' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675832719/about-8_enlnok.jpg" alt=""/>
                <img className='aboutImage4' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675832719/about-7_n7vdao.jpg" alt=""/>
            </div>
        </div>
    </div>
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-12 ps-5 pe-5 pt-4 pb-4 rounded" style={{backgroundColor:"#1976d214"}}>
                <div className="row d-flex justify-content-evenly">
                    <div className="col-md-5 border border-1 border-primary rounded p-5">
                        <h2><b>Our core values</b></h2>
                        <h5>We work every day to uphold our founder's core values. Integrity, quality, commitment, and innovation are more than ideals we work toward. They are values we live and breathe – values found in every product, service, and opportunity we offer.</h5>
                    </div>
                    <div className="col-md-5  border border-1 border-primary rounded p-5">
                        <h2><b>Our mission & vission</b></h2>
                        <h5>To build a long-lasting relationship with our clients by providing them innovative and effective Information Technology services snd solutions which help our clients grow their businesses.</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-5 pt-5">
        <div className="row">
            <ScrollTrigger className="d-flex justify-content-evenly" onEnter={()=>{setCounterOn(true)}} onExit={()=>{setCounterOn(false)}}>
            <div className="col-md-2 border border-2 border-primary rounded-circle aboutCount1 p-5">
                <div className='text-center'>
                <h1 className="counter"><b>{counterOn && <CountUp start={0} end={5} duration={2} delay={0}/>}+</b></h1>
                <p>Years of experience</p>
                </div>
            </div>
            <div className="col-md-2 border border-2 border-primary rounded-circle aboutCount2 p-5">
               <div className="text-center">
               <h1 className="counter"><b>{counterOn && <CountUp start={0} end={50} duration={2} delay={0}/>}+</b></h1>
                <p>Total project</p>
               </div>
            </div>
            <div className="col-md-2 border border-2 border-primary rounded-circle aboutCount3 p-5">
                <div className="text-center">
                <h1 className="counter"><b>{counterOn && <CountUp start={0} end={5} duration={2} delay={0}/>}+</b></h1>
                <p>Winning awards</p>
                </div>
            </div>
            <div className="col-md-2 border border-2 border-primary rounded-circle aboutCount4 p-5">
                <div className="text-center">
                <h1 className="counter"><b>{counterOn && <CountUp start={0} end={107} duration={2} delay={0}/>}+</b></h1>
                <p>Happy clients</p>
                </div>
            </div>
            </ScrollTrigger>
        </div>
    </div>
    <div className="container">
    <div className="row mt-5 pt-5">
            <div className="col-md-6">
              <img className='support' src="https://images.unsplash.com/photo-1593621443450-e6f6578fd7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="" width={"100%"}/>
            </div>
            <div className="col-md-6 ps-5">
              <h1><b>Your Trusted Partner in IT Solutions!</b></h1>
              <h5>Without the hassles of hiring, our expert team delivers dream-team results.</h5>
              <h1><b>+91-7982-611-413</b></h1>
              <button className='p-3 rounded' style={{border:"none",backgroundColor:"#1976d2", color:"white"}} onClick={()=>{navigate("/contact")}}>Contact now 👉</button>
              <div className='float-end mt-5 pt-5' style={{width:"60%",textAlign:"justify"}}>
                <h5>UI/UX Design is at the core of all solutions developed by Innovation. Our design is more than just a collection of words and images. We focus on delighting the user.</h5>
              </div>
            </div>
          </div>
    </div>
    <Footer/>
    </>
  )
}
