import React from 'react'
import Tags from './Tags'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function BenefitsOfPhp() {
    const navigate=useNavigate();
  return (
    <>
    <section className='mt-5 pt-3 d-flex justify-content-center'><span><small><Link to="/">Home</Link> : <Link to="/cognizance">Cognizance</Link> : Cyberspace Safety: Initiatives By India</small></span></section>
        <div className="container mt-4">
            <div className="row ps-5 pe-5 d-flex justify-content-evenly">
                <div className="col-md-8 shadow border border-2 p-0" style={{overflow:"scroll", overflowX:"hidden", height:"100vh"}}>
                    <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675402428/Blog/20221104170119-5395_k2p39a.jpg" alt="" width={"100%"} style={{height:"400px"}}/>
                    <div className="p-4 d-grid gap-2">
                    <h2><b>5 Benefits of PHP in Web Development</b></h2>
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center ms-4 mt-2">
                            <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676010911/20230102150720-3068_mhmn7i.jpg" alt="" style={{width:"50px", borderRadius:"50%"}}/>
                            <p className='mt-2 ms-3'> Shubhra Sharma | 2 Jan 2023</p>
                        </div>
                    </div>
                    <small>PHP has been used for over two decades and has established itself as a powerful and competent solution, attaining an army of users and admirers. </small>
                    <small>However, we must acknowledge the presence of an elePHPant inside the room: the use of this coding language is steadily declining in favor of more modern and effective alternatives.</small>
                    <small>Do you know that in 2021 #php had a 45.41% market share? </small>
                    <small>It is the reigning master of programming languages, ranking first. The infographic below illustrates the importance of PHP in the programming world and provides evidence for these claims. </small>
                    <small className='text-secondary'>What is the use of PHP?</small>
                    <small>Originally, PHP was used for web development, at which it frankly shines. Although it was also being used to create dynamic web pages, programmers prefer to employ this scripting language to build the server side of web applications. </small>
                    <small>However, PHP was developed as a general-purpose language, so it may be available if additional implementations are required. For instance, PHP can be used to create desktop applications. A whole set of new capabilities are also available with PHP starting with version 5, which supports object-oriented programming.</small>
                    <small>This scripting language's flexibility comes from its superb ability to work with other programming languages. For instance, developers can add more functionality to PHP by writing extensions in the C programming language. </small>
                    <small>A sizable number of libraries and frameworks are also readily available for PHP, further enhancing its functionality. </small>
                    <small>Symfony, Laravel, Phalcon, Zend Framework, and Yii are a few of the frameworks that are most widely used. Along with that, Facebook and WordPress are two of the most well-known examples of PHP-written software.</small>
                    <h5><b>Let’s learn 5 benefits of using PHP in Web Development</b></h5>
                    <small>1. Open Source</small>
                    <small>PHP is open-source and cost-free, making it easy for developers to install and use. There are several PHP frameworks available, and developers are free to use any of them. </small>
                    <small>The programmer of that framework will have easy access to all the features and tools. Being open source, it rapidly turns the system PHP-ready and speeds up web development by making tools and many other features more accessible.</small>
                    <small>2. Platform Independence</small>
                    <small>All major operating systems, including Windows, Linux, Unix, etc., support PHP. Web applications; created using PHP can easily be used on any platform. </small>
                    <small>There is no need for the re-development because it is easily integrated with other databases and programming languages. It assists in reducing costs and effort.</small>
                    <small>3. Database</small>
                    <small>PHP makes a secure connection with databases and connects to them with ease. It has an integrated module that can be used to connect to the database quickly. Numerous web applications call for a robust database management system and programming language. </small>
                    <small>PHP and its database connection satisfy the need to build web applications. Additionally, allowing access to a database management system is ramped up by it. Multiple databases can be integrated using PHP.</small>
                    <small>4. Easy and Simple</small>
                    <small>The simplicity and ease of learning and coding in PHP are a benefit. It is primarily clean and organized code, which benefits new developers as well. </small>
                    <small>It's simple to understand and learn how to use PHP's command functions. Anyone familiar with a programming language can use PHP with ease. Due to its steep learning curve, it is easy to learn. The syntax is straightforward and adaptable.</small>
                    <small>5. Fast</small>
                    <small>When compared to other programming languages, PHP is known for being the fastest. Despite slow Internet and data speeds, PHP applications can be loaded without difficulty. </small>
                    <small>Many applications take a long time to connect to the database and retrieve the data after running specific database queries. </small>
                    <small>PHP doesn't have this issue and loads the website quickly and easily. PHP's fast speed gives the developer an advantage when developing web applications in the PHP programming language.</small>
                    <small>Consider us, for your next venture. We are skilled in taking businesses to great heights with our innovation and technology services.</small>
                    <div className="mt-2">
                        <span className='me-2'><b>Tags:</b></span>
                        <span className='border border-1 border-primary p-1 me-2'>php</span>
                        <span className='border border-1 border-primary p-1 me-2'>development</span>
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
                    <h2><b>Tags</b></h2>
                    <Tags/>
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
