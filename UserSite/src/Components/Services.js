import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer';

export default function Services() {
    const navigate=useNavigate();
    const [loading, setLoading] = useState(false);
  return (
    <>
        <section className='mt-5 pt-1'>
            <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675769605/Blog/services_lmlcat.jpg" alt="" style={{width:"100%"}} />
            <figcaption className='ms-5 ps-5 pt-3 pb-3 mb-3'><Link to="/"><small>Home</small></Link> : <small>Services</small></figcaption>
        </section>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675770720/Blog/service-7_tden9w.jpg" alt="" width={"100%"} />
                </div>
                <div className="col-md-6 ps-5 pe-3">
                    <h1><b>We run all kinds of IT services that vow your success</b></h1>
                    <h5 className='mt-4'>We help transform the world most important businesses into that anticipate the agile unpredtable adapt rapidly disruption with high potential and high ambition.</h5>
                </div>
            </div>
        </div>
        <div className="container mt-5 pt-2">
            <div className="row mt-5 mb-5 d-flex justify-content-center">
                <div className="col-md-11 text-center">
                    <h1><b>What we promise to the highest quality services</b></h1>
                    <h5>Our skilled project managers provide continuous quality control; globally based teams deliver a superior product in terms of design, functionality and usability.</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 p-5 servicehoverdiv zoom">
                    <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675771471/Blog/20221003125333-3947_rjj04o.jpg" alt="" width={"100%"}/>
                    <div className='text-center p-2 info rounded'>
                    <h4><b>Android App Development</b></h4>
                    <p>You can rely on our team of highly professional Android app designers, testers, and developers for all your Android needs.</p>
                    <Link to="/services/android-app-development">Details 👉</Link>
                    </div>
                </div>
                <div className="col-md-4 p-5 servicehoverdiv zoom">
                    <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675771471/Blog/20220927104912-3956_imkdwu.jpg" alt="" width={"100%"}/>
                    <div className='text-center p-2 info rounded'>
                    <h4><b>Cloud Solutions</b></h4>
                    <p>Through our expertise, we have designed, developed, transformed, and launched successful cloud-based applications for numerous businesses around the world.</p>
                    <Link to="/services/cloud-solutions">Details 👉</Link>
                    </div>
                </div>
                <div className="col-md-4 p-5 servicehoverdiv zoom">
                    <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675771471/Blog/20220927105350-3946_dn7rft.jpg" alt="" width={"100%"}/>
                    <div className='text-center p-2 info rounded'>
                    <h4><b>Content Writing</b></h4>
                    <p>A team of highly experienced and skilled writers can help with any writing project. Our services include editing, proofreading, writing website content, and more.</p>
                    <Link to="/services/content-writing">Details 👉</Link>
                    </div>
                </div>
                <div className="col-md-4 p-5 servicehoverdiv zoom">
                    <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675771471/Blog/20220927105023-6460_cbsiwz.jpg" alt="" width={"100%"}/>
                    <div className='text-center p-2 info rounded'>
                    <h4><b>DevOps Service</b></h4>
                    <p>Our company is a reputed DevOps service provider with proven success in developing and executing DevOps strategies that meet our client's needs.</p>
                    <Link to="/services/devops-service">Details 👉</Link>
                    </div>
                </div>
                <div className="col-md-4 p-5 servicehoverdiv zoom">
                    <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675771471/Blog/20220927105126-3164_qz5qfb.jpg" alt="" width={"100%"}/>
                    <div className='text-center p-2 info rounded'>
                    <h4><b>iOS App Development</b></h4>
                    <p>Our iOS developers can help you develop products across devices and run the iOS operating system using technologies, automation, and creating functionalities.</p>
                    <Link to="/services/ios-app-development">Details 👉</Link>
                    </div>
                </div>
                <div className="col-md-4 p-5 servicehoverdiv zoom">
                    <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675771470/Blog/20220927105517-7229_eczn91.jpg" alt="" width={"100%"}/>
                    <div className='text-center p-2 info rounded'>
                    <h4><b>Mobile App Development</b></h4>
                    <p>To help you grow your business, we have a team of experts who can deliver creative and innovative mobile application development.</p>
                    <Link to="/services/mobile-app-development">Details 👉</Link>
                    </div>
                </div>
                {
                    loading && <>
                    <div className="col-md-4 p-5 servicehoverdiv zoom">
                        <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675771470/Blog/20221003110718-2771_bs7yei.jpg" alt="" width={"100%"}/>
                        <div className='text-center p-2 info rounded'>
                        <h4><b>PHP Web Development</b></h4>
                        <p>You will gain access to the industry's leading talents who are devoted to delivering solid PHP systems based on the finest strategies.</p>
                        <Link to="/services/php-web-development">Details 👉</Link>
                        </div>
                    </div>
                    <div className="col-md-4 p-5 servicehoverdiv zoom">
                        <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675771470/Blog/20220926113656-6308_nlefnx.jpg" alt="" width={"100%"}/>
                        <div className='text-center p-2 info rounded'>
                        <h4><b>SaaS Development</b></h4>
                        <p>Knowing how to create a SaaS App is one thing, but finding a team that can do it at a fair price is another. We are definitely the ones you are looking for.</p>
                        <Link to="/services/saas-development">Details 👉</Link>
                        </div>
                    </div>
                    <div className="col-md-4 p-5 servicehoverdiv zoom">
                        <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675771470/Blog/20221006142818-6238_jnaw0x.jpg" alt="" width={"100%"}/>
                        <div className='text-center p-2 info rounded'>
                        <h4><b>UI/UX Design</b></h4>
                        <p>In order to make your app stand out in the marketplace, we provide beautiful User Experience Design (UI/UX) design services.</p>
                        <Link to="/services/ui-ux-design">Details 👉</Link>
                        </div>
                    </div>
                    <div className="col-md-4 p-5 servicehoverdiv zoom">
                        <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675771470/Blog/20220927130401-1286_ozslev.jpg" alt="" width={"100%"}/>
                        <div className='text-center p-2 info rounded'>
                        <h4><b>Web Design</b></h4>
                        <p>Our ultimate aim is to create a website for our clients that is extremely handy, packed with incredible features, and has a clear-cut visual layout.</p>
                        <Link to="/services/web-design">Details 👉</Link>
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
        <div className="container mt-5 pb-5">
            <div className="row mt-5 mb-5 d-flex justify-content-center">
                <div className="col-md-5 text-center">
                    <h1><b>How we work and provide services!</b></h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <span>1</span>
                    <h3>Meeting with the customer</h3>
                    <p>Collecting event old above shy bed favour income has stuff.</p>
                </div>
                <div className="col-md-3">
                    <span>2</span>
                    <h3>Work hard on the project</h3>
                    <p>Collecting event old above shy bed favour income has stuff.</p>
                </div>
                <div className="col-md-3">
                    <span>3</span>
                    <h3>We finish the project</h3>
                    <p>Collecting event old above shy bed favour income has stuff.</p>
                </div>
                <div className="col-md-3">
                    <span>4</span>
                    <h3>Successfully launch project</h3>
                    <p>Collecting event old above shy bed favour income has stuff.</p>
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
