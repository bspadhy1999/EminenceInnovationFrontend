import React from 'react'
import Tags from './Tags'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function CyberspaceSafety() {
    const navigate=useNavigate();
  return (
    <>
    <section className='mt-5 pt-3 d-flex justify-content-center'><span><small><Link to="/">Home</Link> : <Link to="/cognizance">Cognizance</Link> : Cyberspace Safety: Initiatives By India</small></span></section>
        <div className="container mt-4">
            <div className="row ps-5 pe-5 d-flex justify-content-evenly">
                <div className="col-md-8 shadow border border-2 p-0" style={{overflow:"scroll", overflowX:"hidden", height:"100vh"}}>
                    <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675402420/Blog/20230116102934-3195_lzmecn.jpg" alt="" width={"100%"} style={{height:"400px"}}/>
                    <div className="p-4 d-grid gap-2">
                    <h2><b>Cyberspace Safety: Initiatives By India</b></h2>
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center ms-4 mt-2">
                            <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676010911/20230102150720-3068_mhmn7i.jpg" alt="" style={{width:"50px", borderRadius:"50%"}}/>
                            <p className='mt-2 ms-3'> Shubhra Sharma | 2 Jan 2023</p>
                        </div>
                    </div>
                    <i>“Data is the pollution problem of the information age, and protecting privacy is the environmental challenge.” ~Bruce Schneier</i>
                    <small>Data is the incognito diamond for every business or corporation these days. Every company is looking for valuable user data on which they can base their marketing efforts, develop new products, and target the appropriate audiences. In light of this, it has become more crucial than ever to protect and prevent the misuse of confidential data in the digital era of innovation.</small>
                    <small>The year may be coming to an end, but cyber-attacks are not. Recently in November 2022, cryptocurrency exchanges got attacked, high-profile data breaches occurred, and government agencies' data got leaked. The cyber crisis serves as a reminder of how necessary it is for companies and organizations to strengthen their security measures.</small>
                    <small>According to a report, India ranks third around the globe in terms of cyber-attacks, with 86.63 million data breaches in 2021. A recent major incident was recorded in December 2022, when 5 servers of the All India Insitute of Medical Sciences (AIIMS) got hacked and a total of 1.3 terabytes of personal data were encrypted.</small>
                    <div className="row">
                        <div className="col-md-7">
                            <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676440526/Safe_Cyber_blog_image_2_hihegp.jpg" alt="" width={"100%"}/>
                        </div>
                    </div>
                    <h4><b>What is Confidential Data?</b></h4>
                    <small>Confidential data serves as your identifier. That data is unique and can be used to locate an individual directly or indirectly. The fact that sensitive information can be used by criminals online still doesn't bother tons of people. Although, identity theft is risky and can compromise one’s confidential information. </small>
                    <small>There has been a widespread leak of citizen information in some countries due to inadequate data protection. Cybercrime cases are increasing, including hacking and cracking (piracy) social media, resulting in extortion, illegal access to restricted information, and online fraud.</small>
                    <h4><b>Why is Cybersecurity Important?</b></h4>
                    <small>Cybersecurity and data protection are extremely relevant today, as they protect your personal and business data.</small>
                    <small>Data security protects your devices, networks, and vital resources from getting hacked. If someone can break into your network, they might be able to steal confidential data or even crash the entire system. This would result in severe security issues and potential financial loss.</small>
                    <h5><b>What Are Some Types of Data Breach?</b></h5>
                    <small>Data breaches that are particularly frequent include:</small>
                    <ol>
                        <li><small>Loss or theft of personal data: This includes identity theft, stolen Social Security numbers, and credit card fraud.</small></li>
                        <li><small>Unauthorized Access: This occurs when someone obtains unauthorized access to your data and then uses or leaks it.</small></li>
                        <li><small>Attacks on web applications: These include SQL injection, malicious redirects, and cross-site scripting (XSS).</small></li>
                    </ol>
                    <h5><b>How does India plan to deal with the cyber crisis?</b></h5>
                    <p className='text-secondary'><b>Cyber Surakshit Bharat</b></p>
                    <div className="row">
                        <div className="col-md-7">
                            <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676440525/Safe_Cyber_blog_image_jmxozx.jpg" alt="" width={"100%"}/>
                        </div>
                    </div>
                    <small>The Ministry of Electronics and Information Technology suggested building a robust cybersecurity ecosystem in India and initiated the Cyber Surakshit Bharat mission. The initiative aligns with the government's 'Digital India' vision, and the program was sponsored by; the National E-Government Division (NeGD).</small>
                    <small>Through this initiative, all government departments' CISOs and front-line IT staff would be encouraged to educate themselves on cybercrime and strengthen their self-defense skills. </small>
                    <small>This program is the first public-private partnership, and it comprises a series of workshops to teach officials about cybersecurity and provide them with toolkits for combating cyber threats.</small>
                    <p className='text-secondary'><b>CERT-In</b></p>
                    <small>Indian Computer Emergency Response Team (CERT-In) is the national agency for cybersecurity. The agency has enhanced the nation's cybersecurity, which has resulted in a reduction in cyberattacks on government networks. Government employees in India are sufficiently prepared to fight cybercrime by being oriented to cybersecurity awareness and anti-phishing techniques.</small>
                    <p className='text-secondary'><b>Crisis Management Strategy</b></p>
                    <small>The Indian Government's Cybersecurity Initiatives are intended to establish a strategy in order to prepare employees for such a scenario. In addition, the government ensures that essential tasks won't be hindered by cybersecurity risks. Organizations can deal with cybersecurity crises more skillfully and accurately identify roles and responsibilities at the individual level by putting strategies into place behind the desk.</small>
                    <h5><b>Cyber Security: Challenge for 2023</b></h5>
                    <small>As businesses go agile and extend hybrid working, security threats have escalated dramatically, requiring businesses to restructure their data security systems. While rapid growth creates plenty of possibilities, it also introduces the risk of conducting business in a globalized economy.</small>
                    <p className='text-secondary'><b>Golden Rules For Cyber Security: </b></p>
                   <ol>
                    <li className='border border-1 p-1' style={{backgroundColor:"rgba(128, 128, 128, 0.412)"}}><small>Identification, protection, detection, response, and recovery have been the five pillars of data protection.</small></li>
                    <li className='border border-1 p-1' style={{backgroundColor:"rgba(128, 128, 128, 0.412)"}}><small>The tension of a cyberattack is currently appearing as the sixth pillar.</small></li>
                    <li className='border border-1 p-1' style={{backgroundColor:"rgba(128, 128, 128, 0.412)"}}><small>Pursuing local rules is a challenge.</small></li>
                    <li className='border border-1 p-1' style={{backgroundColor:"rgba(128, 128, 128, 0.412)"}}><small>Nations and regions are coming up with new rules.</small></li>
                    <li className='border border-1 p-1' style={{backgroundColor:"rgba(128, 128, 128, 0.412)"}}><small>Provide different layers of security to protect companies' data.</small></li>
                    <li className='border border-1 p-1' style={{backgroundColor:"rgba(128, 128, 128, 0.412)"}}><small>To minimize the damage from cyber-attacks, it is important to act within the first 24 to 48 hours.</small></li>
                    <li className='border border-1 p-1' style={{backgroundColor:"rgba(128, 128, 128, 0.412)"}}><small>Recovery costs are higher than prevention costs.</small></li>
                   </ol>
                    <small>Advances in technology will lead to a significant boost in IT investments across all industries in the coming years. The digitalization budget for the year 2022-23 increased by 67.13 percent. The total allocation for the program was approximately 10,676.18 crores, up from 6,388 crores in the year 2021. </small>
                    <small>Cybercriminals are utilizing cutting-edge strategies to damage organizations' reputations significantly, which has the potential to result in consequential financial losses. Investing in security dimensions and taking suitable precautions is merely another aspect of running a business. </small>
                    <small>We can help you protect yourself from cyber-criminals. Contact us today.</small>
                    <div className="mt-2">
                        <span className='me-2'><b>Tags:</b></span>
                        <span className='border border-1 border-primary p-1 me-2'>cyber safety</span>
                        <span className='border border-1 border-primary p-1 me-2'>data protection</span>
                        <span className='border border-1 border-primary p-1 me-2'>cyber curakshit bharat</span>
                        <span className='border border-1 border-primary p-1 me-2'>cyber crisis</span>
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
        <div className="container mt-5 pt-5">
        <div className="row">
            <h2 className='text-center'><b>Related Blog</b></h2>
                <div className="col-md-4 p-5 servicehoverdiv zoom">
                    <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767617/Blog/20221028145543-5259_osgbnr.jpg" alt="" width={"100%"}/>
                    <div className='text-center pt-3 pb-3 ps-5 pe-5 info rounded'>
                    <h4><b>Custom Software Development to expand your bisiness</b></h4>
                    <Link to="/cognizance">Details 👉</Link>
                    </div>
                </div>
                <div className="col-md-4 p-5 servicehoverdiv zoom">
                    <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767617/Blog/20221028145543-5259_osgbnr.jpg" alt="" width={"100%"}/>
                    <div className='text-center pt-3 pb-3 ps-5 pe-5 info rounded'>
                    <h4><b>Custom Software Development to expand your bisiness</b></h4>
                    <Link to="/cognizance">Details 👉</Link>
                    </div>
                </div>
                <div className="col-md-4 p-5 servicehoverdiv zoom">
                    <img className="shadow rounded-2 zoom img" src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675767617/Blog/20221028145543-5259_osgbnr.jpg" alt="" width={"100%"}/>
                    <div className='text-center pt-3 pb-3 ps-5 pe-5 info rounded'>
                    <h4><b>Custom Software Development to expand your bisiness</b></h4>
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
