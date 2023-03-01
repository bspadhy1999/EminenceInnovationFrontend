import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer';
import CareerItemDiv from './CareerItemDiv';

export default function Careers() {
    const navigate=useNavigate();
    const [career, setCareer] = useState([]);
    useEffect(() => {
        const fetchData=async ()=>{
            const req=await axios.get("http://localhost:8080/allcareers");
            console.log(req.data);
            setCareer(req.data);
        };
        fetchData();
    }, []);
    
  return (
    <>
    <section className='careerbanner mb-5 mt-5 pt-1'>
           <div className="container p-5">
            <div className="row d-flex justify-content-end">
                <div className="col-md-5">
                    <h1 className='text-white mt-5 mb-5'><b>Discover your new you</b></h1>
                    <h5 className='text-white mb-5'>Explore opportunities</h5>
                    <div className='d-flex mb-5'>
                    <button className='p-3 rounded me-5' style={{border:"none",backgroundColor:"#1976d2",color:"white"}} onClick={()=>{navigate("/jobs-search")}}>Search Jobs 👉</button>
                    <button className='p-3 rounded' style={{border:"none",backgroundColor:"#1976d2",color:"white"}}>Recently View Jobs 👉</button>
                    </div>
                </div>
            </div>
           </div>
    </section>
    <div className="container">
        <div className="row ps-5">
            <div className="col-md-6 me-auto">
                <h1><b>Job's that suit you</b></h1>
                <p>Building a career that suits your pursuit of happiness whilst building your growth as a skilled professional in the industry is a dream for many. The growth of our company relies on the growth scale of our employees, and our organization never fails in doing so for you.</p>
            </div>
        </div>
        <div className="row d-flex justify-content-evenly">
        {
                career.map((item,index)=>{
                    if(index < 3){
                        return <CareerItemDiv key={index} value={item}/>
                    }
                })
            }
        </div>
    </div>
    <section className='shadow pt-5 pb-5'>
    <div className="container">
        <div className="row ps-5 pe-5">
            <div className="col-md-7">
                <h1><b>Grab Multiple Opportunities</b></h1>
                <p>We have the treasure of multiple career opportunities for you. With a team of over 50 skilled professionals, Eminence Innovation has managed to create a bundle of opportunities for skilled, semi-skilled, and freshers in the IT industry.We believe in the growth of our employees which ultimately results in the success of our company, and for that, we wholeheartedly welcome all suggestions, ideas, and plans.</p>
                <p>From Software Development to Server Hosting, Cloud computing & Digital Marketing. Round-the-clock assistance for clients with our team of professionals who has their hands on almost every latest technology in the industry. Come and become part of our team at Eminence Innovation careers. Let's solve some of the world's toughest challenges together, using your ideas, ingenuity, and determination.</p>
                <p>Join us to create innovation with your success-filled hands.</p>
            </div>
            <div className="col-md-5">
            <iframe width="100%" height="270" src="https://player.vimeo.com/video/788641400?h=e5282a5c8f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <h2><b>Evolving as a Trusted Entity</b></h2>
            <small>Providing round-the-clock assistance along with trust among customers. We excel in assisting our clients with quality products and service delivery at a rapid timeframe.</small> <br />
            <Link to="/jobs-search"><b>CONSULTING CAREERS</b></Link>
            </div>
        </div>
    </div>
    </section>
    <div className="container">
        <div className="row ms-5 mt-5 ps-2 pe-5">
            <div className="col-md-12">
            <Link className='float-end mt-3' to="/jobs-search"><b>EXPLORE MORE JOBS</b></Link>
            <h1><b>Jobs in Asia</b></h1>
            <p>Here are the latest technology jobs in India. Combining first-hand creativity and innovative technologies can help us build a more equal and inclusive society.</p>
            </div>
        </div>
        <div className="row">
            {
                career.map((item,index)=>{
                    return <CareerItemDiv key={index} value={item}/>
                })
            }
        </div>
    </div>
    <div className="container">
        <div className="row p-5">
            <div className="col-md-6">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675836569/for-future_c8782r.jpg" alt="" width={"100%"}/>
            </div>
            <div className="col-md-6 mt-5">
                <h1><b>Create a Change for a Better Future</b></h1>
                <p className='mt-4'>Our mission is to combine the most effective aspects of traditional models with the latest technological advancements to shape the future of our customers. Become a part of our team to create a significant change with your expertise.</p>
                <Link className='mt-4' to="/404">Details 👉</Link>
            </div>
        </div>
        <div className="row p-5">
        <div className="col-md-6 mt-5">
                <h1><b>Begin your Journey with Eminence Innovation</b></h1>
                <p className='mt-4'>Eminence Innovation is looking for individuals who are eager to expand their careers and have a problem solving attitude. Are you the one we are looking for?</p>
                <Link className='mt-4' to="/jobs-search">Join us now 👉</Link>
            </div>
            <div className="col-md-6">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675836568/journey_jcqi3j.jpg" alt=""  width={"100%"}/>
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
                <Link to="/jobs-search">SEARCH EMINENCE JOBS 👉</Link>
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
                <Link to="/jobs-search">REGISTER FOR JOB ALERTS 👉</Link>
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
