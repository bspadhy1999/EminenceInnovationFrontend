import React from 'react'
import Tags from './Tags'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function GrowYourBusiness() {
    const navigate=useNavigate();
  return (
    <>
    <section className='mt-5 pt-3 d-flex justify-content-center'><span><small><Link to="/">Home</Link> : <Link to="/cognizance">Cognizance</Link> : Cyberspace Safety: Initiatives By India</small></span></section>
        <div className="container mt-4">
            <div className="row ps-5 pe-5 d-flex justify-content-evenly">
                <div className="col-md-8 shadow border border-2 rounded-3 p-0" style={{overflow:"scroll", overflowX:"hidden", height:"100vh"}}>
                    <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675402442/Blog/20221205131958-2255_eteofy.png" alt="" width={"100%"} style={{height:"400px"}}/>
                    <div className="p-4 d-grid gap-2">
                    <h2><b>Grow Your Business With Custom Mobile Apps</b></h2>
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center ms-4 mt-2">
                            <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676010911/20230102150720-3068_mhmn7i.jpg" alt="" style={{width:"50px", borderRadius:"50%"}}/>
                            <p className='mt-2 ms-3'> Shubhra Sharma | 5 Dec 2023</p>
                        </div>
                    </div>
                    <h5 className='text-secondary'><b>Introduction</b></h5>
                    <small>It's 2022, and software has become a stepping stone for a successful business in every industry now. It is so prominent nowadays for each business to have a custom mobile or web app. To provide fast solutions, companies tend to rely on ready-to-go platforms to develop their apps. </small>
                    <small>It is so vital for companies to adopt the latest technology to ace their business in the market. From sending money to friends or family to purchasing goods and services, mobile apps have become a basic necessity for people worldwide.</small>
                    <div className="row">
                        <div className="col-md-7">
                            <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676438068/dominating_app_1_r9sdnz.jpg" alt="" width={"100%"}/>
                        </div>
                    </div>
                    <h5 className='text-secondary'><b>Want your company to have its personalized app? </b></h5>
                    <small>It will not be an easy journey!</small>
                    <small>Let's say you operate a small, medium, or big company. For a robust mobile app development process, it makes no difference. The only thing you need to concentrate on right now is selecting a technology for your app.</small>
                    <small>A mobile application that fits best for your business and your customers will depend on several specific factors. You will have the opportunity to thoroughly and adversely explain your concept to your app developers.</small>
                    <h5 className='text-secondary'><b>Why should you develop a custom mobile app?</b></h5>
                    <small>Mobile app development system creates a product or service that keeps your vision alive and rapidly binds you to your consumers while trying to solve your business problems.</small>
                    <small>All you need to do is find a cutting-edge, proactive mobile app development company that can create a reliable, engaging, and robust mobile app to deal with the issues you believe are significant to you.</small>
                    <small>Custom app development is the process of creating specifically designed apps to meet the requirements of your company. A fully or partially customized app is in demand as it meets the needs of a specific audience rather than a large group of people.</small>
                    <div className="row">
                        <div className="col-md-7">
                            <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676438068/high-end_sercurity_1_g1nonq.jpg" alt="" width={"100%"}/>
                        </div>
                    </div>
                    <small>Apps customized to fit a specific need offer features and functionality that standard off-the-shelf solutions do not.</small>
                    <small>You can find custom-based apps almost everywhere on the market. </small>
                    <small>In many cases, third parties have integrated off-the-shelf features into them.  A typical example of such an integration would be that of chat, administrative boards, CRMs, and various other functions.</small>
                    <h5 className='text-secondary'><b>Mobile Apps Can Expand Your Business. Learn How?</b></h5>
                    <small>More than 6.3 billion people on the globe use smartphones for several purposes, and it's no big surprise to know how rapidly the mobile app industry is growing in the market. Every other person is carrying a robust smartphone that contains dozens of applications, catering to the needs of their end-consumers. </small>
                    <small>Wherever we go, we can easily find people using various types of apps, irrespective of age or gender. People love to spend quality time while playing video games, chatting or video-calling friends, getting the latest news updates, or purchasing products or services of choice; for all of this, we need a perfect app.</small>
                    <small>Well, 88% of mobile time is solely spent on applications.</small>
                    <small>This is encouraging data for app developers, software designers, or anyone planning to develop an app for several reasons. But, before ruling the space of mobile app development; there are two main things to be kept in mind.</small>
                    <ol>
                        <li><small>Users must download your application.</small></li>
                        <li><small>Users must utilize your app.</small></li>
                    </ol>
                    <small>Since the introduction of smartphones, mobile apps have grown in popularity. They are among the most desired smartphone features that greatly benefit individuals. These apps can be a help for a variety of purposes, such as communication to banking. </small>
                    <small>Mobile application development is a broad field. So, we've assembled a list of 5 enticing facts you should know before creating an app.</small>
                    <small>1. There are 3 sorts of mobile apps; in the technological category.</small>
                    <small>Native Apps</small>
                    <small>Web Apps</small>
                    <small>Web Apps</small>
                    <small>2. According to global research, over 42% of app developers choose iOS as a mobile app development platform, whereas 31% choose Android.</small>
                    <small>3. To make purchases, 63% of millennials make use of mobile apps; is due to the ease of use and convenience of using mobile apps. </small>
                    <small>4. Apple App Store offers 1.96 million apps, while the Google Play Store offers 2.87 million.</small>
                    <small>5. With almost 7 billion downloads in Q2 2020, India was the biggest market for third-party app downloads outside of China, followed by the US with 3.75 billion and Brazil with 3 billion.</small>
                    <small>Application development can be done easily, but finding professionals who can turn your dream into reality can be a challenge.  It's not a coincidence that you found this blog! Contact us today to serve you with the best of our services.</small>
                    <div className="mt-2">
                        <span className='me-2'><b>Tags:</b></span>
                        <span className='border border-1 border-primary p-1 me-2'>apps</span>
                        <span className='border border-1 border-primary p-1 me-2'>app development</span>
                        <span className='border border-1 border-primary p-1 me-2'>iOS</span>
                        <span className='border border-1 border-primary p-1 me-2'>anroid</span>
                        <span className='border border-1 border-primary p-1 me-2'>software development</span>
                    </div>
                    <div className='d-flex mt-2'>
                        <a href="https://www.facebook.com/eminence_innovation" target="_blank"><FacebookIcon className='me-1' fontSize='large'/></a>
                        <a href="https://www.instagram.com/eminence_innovation/" target="_blank"><InstagramIcon className='me-1' fontSize='large'/></a>
                        <a href="https://www.linkedin.com/company/eminence-innovation/" target="_blank"><LinkedInIcon className='me-1' fontSize='large'/></a>
                        <a href="https://twitter.com/innovation_ei" target="_blank"><TwitterIcon className='me-1' fontSize='large'/></a>
                        <a href="https://in.pinterest.com/eminence_innovation/" target="_blank"><PinterestIcon className='me-1' fontSize='large'/></a>
                    </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <h2 className='mb-4'><b>Tags</b></h2>
                    <Tags/>
                </div>
            </div>
        </div>
        <div className="container mt-5 pt-5">
        <div className="row">
            <h2 className='text-center'><b>Related Blog</b></h2>
                <div className="col-md-4 p-5 servicehoverdiv zoom">
                    <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767615/Blog/20221104160932-3607_lsb8qv.jpg" alt="" width={"100%"}/>
                    <div className='text-center p-5 info rounded'>
                    <h4><b>Find Bset anroid APP development company </b></h4>
                    <Link to="/cognizance">Details 👉</Link>
                    </div>
                </div>
                <div className="col-md-4 p-5 servicehoverdiv zoom">
                    <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767615/Blog/20221104160932-3607_lsb8qv.jpg" alt="" width={"100%"}/>
                    <div className='text-center p-5 info rounded'>
                    <h4><b>Find Bset anroid APP development company </b></h4>
                    <Link to="/cognizance">Details 👉</Link>
                    </div>
                </div>
                <div className="col-md-4 p-5 servicehoverdiv zoom">
                    <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767615/Blog/20221104160932-3607_lsb8qv.jpg" alt="" width={"100%"}/>
                    <div className='text-center p-5 info rounded'>
                    <h4><b>Find Bset anroid APP development company </b></h4>
                    <Link to="/cognizance">Details 👉</Link>
                    </div>
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
