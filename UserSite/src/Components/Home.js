import React, { useContext } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

export default function Home() {
  const navigate=useNavigate();
  return (
    <>
      <div className='container mt-md-5'>
        <div className='row pt-md-5'>
            <div className='col-md-6 mt-5 p-5'>
                <h1><strong>Your Trusted</strong></h1>
                <h2 style={{color:"#1976d2"}}><strong>It Partner</strong></h2>
                <h3>Quality Services since 2017</h3>
                <p>Join us to experience a highly skilled approach that offers you innovative and efficient IT Services!</p>
                <button className='p-3 rounded' style={{border:"none",backgroundColor:"#1976d2",color:"white"}} onClick={()=>{navigate("/services")}}>Explore More 👉</button>
            </div>
            <div className='col-md-6 mt-2'>
                <img className='shadow' src="https://images.pexels.com/photos/6893995/pexels-photo-6893995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="banner-img" style={{width:"100%", borderRadius:"50%"}}/>
            </div>
        </div>
      </div>
      <div className="container mt-5 pt-5">
      <div className="row border border-2 rounded shadow">
      <Tabs className="d-flex align-items-center">
        <TabList style={{width:"60vw"}} className="ps-5">
          <Tab>
            <p className='fotterlink'><RadioButtonCheckedIcon className='me-2'/>Database Management</p>
          </Tab>
          <Tab>
            <p className='fotterlink'><RadioButtonCheckedIcon className='me-2'/>Grow Your Business</p>
          </Tab>
          <Tab>
            <p className='fotterlink'><RadioButtonCheckedIcon className='me-2'/>On Demand IT Support</p>
          </Tab>
          <Tab>
            <p className='fotterlink'><RadioButtonCheckedIcon className='me-2'/>Cloud Computing</p>
          </Tab>
          <Tab>
            <p className='fotterlink'><RadioButtonCheckedIcon className='me-2'/>Software Development</p>
          </Tab>
        </TabList>
        <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360141/line3_ww1xd2.png" alt="" height={"350px"}/>

        <TabPanel className="p-3">
          <div className="panel-content">
            <div className="row">
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360558/oracle_c5m7ov.png" alt="" width={"70px"}/>
                <div className='d-grid ms-4'>
                  <span>Oracle</span>
                  <small>Our Oracle Practice intends to offer market-leading solutions across a wide range of industry verticals.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360558/sap_dhd1no.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>SAP</span>
                  <small>Grow with SAP! Serving you with end-to-end business, service, & cloud transformation.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360557/microsoft_bj3nlm.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>Microsoft</span>
                  <small>Get tangible business value from our Microsoft solutions and technology services.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360557/google-cloud_hvkivt.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>Google Cloud</span>
                  <small>Improving procurement and leveraging Google Cloud financial commitments to cover Atlas costs.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360558/mysql_jrnsqr.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>MySQL</span>
                  <small>Eliminate separate analytics databases, faster performance with lower total cost-ownership.</small>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <div className="row">
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360557/uiux35_cicrpp.png" alt="" width={"70px"}/>
                <div className='d-grid ms-4'>
                  <span>UI/UX Design</span>
                  <small>Designs that integrate modern technologies.Affordable, adaptive & responsive.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360557/contentw3_wpleos.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>Content Marketing</span>
                  <small>The Present and future of marketing is CONTENT! It’s a profit center that saves costs and increases sales.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360557/ppc23_y1vgpb.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>PPC Marketing</span>
                  <small>Grab more leads and increase brand awareness.PPC benefits companies 79% of the time.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360557/seo36_f0o65a.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>SEO Marketing</span>
                  <small>60,000+ Searches are Conducted Every Second! Attract qualified traffic that boosts your revenue.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360557/digital-marketing45_icqyxn.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>Digital Marketing</span>
                  <small>Build Brand Recognition as a Company Leader, & Engage Your Target Customers at the Right Time.</small>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <div className="row">
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360557/infrastructure-planning2_j1c4yz.png" alt="" width={"70px"}/>
                <div className='d-grid ms-4'>
                  <span>Infrastructure Planning</span>
                  <small>We aim to allot resources that will expand the company's financial and competitive position.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360557/it-service-22_vcqyxw.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>Managed IT Services</span>
                  <small>Remote Hybrid IT responsibilities, from on-demand responses to 24/7 special support.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360557/contentw3_wpleos.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>Web Design & Development</span>
                  <small>A customer-centric approach to website development, delivering tangible results for businesses.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360556/mobile-app3_v46101.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>Mobile Application Development</span>
                  <small>Providing complete mobile app development & assistance throughout distinctive development stages.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360556/ios-app2_fbagkk.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>iOS App Development</span>
                  <small>To build active iOS applications, we use the most notable innovations, like the Xcode cloud.</small>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <div className="row">
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360556/businessa-3_eyeebg.png" alt="" width={"70px"}/>
                <div className='d-grid ms-4'>
                  <span>Business Analaysis</span>
                  <small>We aid businesses by improving their processes, products, services, & software by analyzing data.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360556/cloud-solution4_oe4dg6.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>Cloud Solution</span>
                  <small>Get optimized security, protection of data resources, and a higher level of productivity for your company.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360556/devops3_ovxv9a.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>DevOps Service</span>
                  <small>Harboring development and operationsjointly to extend quality and delivery.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360556/saas36_waqeei.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>SaaS Development</span>
                  <small>Simplifying SaaS for you that will expand your business with its techno mobility & simple interface.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360556/paas45_tjclhx.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>PaaS Development</span>
                  <small>Our software & infrastructure solutions let you reduce operating costs and focus on more important tasks.</small>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
          <div className="row">
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360556/system-software39_e0ax3r.png" alt="" width={"70px"}/>
                <div className='d-grid ms-4'>
                  <span>System Software</span>
                  <small>Develop a system that is High Speed, Hard to Manipulate, and Versatile.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360555/software-engineer36_lruvhb.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>Software Engineers</span>
                  <small>Team of engineers that are dedicated, strategically minded, and have a problem-solving attitude.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360556/software-dev23_mby3yw.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>Software Developers</span>
                  <small>Team with extensive programming knowledge, and dedication to fixing errors in a fast-paced environment.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360556/programming56_wmap2q.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>Programming Software</span>
                  <small>Assisting software developers with the development,testing, and maintenance of other programs and applications.</small>
                </div>
              </div>
              <div className="col-md-6 d-flex p-3">
                <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1676360556/application-dev-2_rrkxlk.png" alt="" width={"70px"}/>
                <div className="d-grid ms-4">
                  <span>Application Software</span>
                  <small>Software services for back-office operations, ERP, SCM, as well as group and individual work.</small>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
      <div className="row mt-5 pt-5">
          <h1 className='text-center mb-4'><b>Trusted by your favorite brands</b></h1>
          <div className="col-md-12">
            <div className="row d-flex justify-content-evenly text-center">
            <div className="col-md-2">
              <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675411362/Blog/Projects/Brands/NIIT_peh6qb.png" alt="" width={"80%"}/>
            </div>
            <div className="col-md-2">
              <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675411362/Blog/Projects/Brands/worldsindia_ss0jk9.png" alt="" width={"80%"}/>
            </div>
            <div className="col-md-2">
              <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675411362/Blog/Projects/Brands/Skull_xswvke.png" alt="" width={"80%"}/>
            </div>
            <div className="col-md-2">
              <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675411390/Blog/Projects/Brands/Cybex_nzmnmy.png" alt="" width={"80%"}/>
            </div>
            <div className="col-md-2">
              <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675411390/Blog/Projects/Brands/CSA_qj7ysf.png" alt="" width={"80%"}/>
            </div>
            </div>
          </div>
          <div className="col-md-12 mt-4">
            <div className="row d-flex justify-content-evenly text-center">
            <div className="col-md-2">
              <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675411388/Blog/Projects/Brands/daily-pity_jioe3x.png" alt="" width={"80%"}/>
            </div>
            <div className="col-md-2">
              <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675411388/Blog/Projects/Brands/10x_sbjw4v.png" alt="" width={"80%"}/>
            </div>
            <div className="col-md-2">
              <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675411389/Blog/Projects/Brands/TTV_hv0m8h.png" alt="" width={"80%"}/>
            </div>
            <div className="col-md-2">
              <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675411412/Blog/Projects/Brands/the-express_ai1r6t.png" alt="" width={"80%"}/>
            </div>
            <div className="col-md-2">
              <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675411412/Blog/Projects/Brands/taxwale_opq96r.png" alt="" width={"80%"}/>
            </div>
            </div>
          </div> 
          </div>
          <div className="row d-flex align-items-center mt-5 pt-5">
            <div className="col-md-6 p-5">
              <h1>Rewards and Recognition</h1>
              <h5>Eminence Innovation is a renowned and leading IT company with over five years of experience. We have a 99.9% success rate, which has gained us 5+ awards and lots of happy clients. Our team of innovative professionals and thinkers has led our company from the forefront and assisted us in becoming a solid success. We aim to deliver quality products with a quick delivery rate while making sure to serve you with the highest quality of products and services.</h5>
            </div>
            <div className="col-md-3">
                <div className="card m-3 shadow" style={{width: "18rem", height:"10rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">5+</h5>
                    <h6 className="card-subtitle mb-2">Years Of Experience</h6>
                    <div className='float-end'><img src="https://eminenceinnovation.com/assets/img/svg/experience.svg" alt="" style={{width:"50px"}} /></div>
                  </div>
                </div>
                <div className="card m-3 shadow" style={{width: "18rem", height:"10rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">5+</h5>
                    <h6 className="card-subtitle mb-2">Years Of Experience</h6>
                    <div className='float-end'><img src="https://eminenceinnovation.com/assets/img/svg/project.svg" alt="" style={{width:"50px"}} /></div>
                  </div>
                </div>
                <div className="card m-3 shadow" style={{width: "18rem", height:"10rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">5+</h5>
                    <h6 className="card-subtitle mb-2">Years Of Experience</h6>
                    <div className='float-end'><img src="https://eminenceinnovation.com/assets/img/svg/award.svg" alt="" style={{width:"50px"}} /></div>
                  </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card m-3 shadow" style={{width: "18rem", height:"10rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">5+</h5>
                    <h6 className="card-subtitle mb-2">Years Of Experience</h6>
                    <div className='float-end'><img src="https://eminenceinnovation.com/assets/img/svg/happy-client.svg" alt="" style={{width:"50px"}} /></div>
                  </div>
                </div>
                <div className="card m-3 shadow" style={{width: "18rem", height:"10rem"}}>
                  <div className="card-body">
                    <h5 className="card-title">5+</h5>
                    <h6 className="card-subtitle mb-2">Years Of Experience</h6>
                    <div className='float-end'><img src="https://eminenceinnovation.com/assets/img/svg/employees.svg" alt="" style={{width:"50px"}} /></div>
                  </div>
                </div>
            </div>
          </div>
          <div className="row mt-5 pt-3">
            <div className="col-md-12 text-center">
              <h1><b>We have over 5 years experience</b></h1>
              <h5>Get The Best Of Everything With Eminence Innovation! We Are A Leading IT Company, Providing Quality Solutions That Will Take Your Business To The Next Level.</h5>
            </div>
          </div>
          <div className="row mt-3 d-flex align-items-center">
            <div className="col-md-4">
              <h2><b>We cater to your needs</b></h2>
              <h5>Eminence Innovation aims to put customer satisfaction as the top priority. We engage with our clients regularly to learn more about their plans and requirements. With our top-level quality service and fast pace product delivery. We have gained the trust of our 99% happy customers, who look forward to joining hands in their next venture.</h5>
              <h5><b><i>“Who do not know to pursue that are extremely painful again is there anyone”.</i></b></h5>
            </div>
            <div className="col-md-4">
              <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675412493/Blog/about-img_fmawqk.png" alt="" width={"100%"} style={{borderRadius:"50%"}}/>
            </div>
            <div className="col-md-4">
              <h2><b>Mission & Vision</b></h2>
              <h5>We dedicate ourselves to providing error-free, top-quality products or services to businesses that will enhance their reputation in the market. Our B2B products or problem-solving services are inclined to gain trust in the market. We vision expanding on a broader scale to provide expert assistance to our potential customers.</h5>
              <h5>On time, delivery proven track record. We are here for your success.</h5>
              <button className='p-3 rounded mt-4' style={{border:"none",backgroundColor:"#1976d2",color:"white"}} onClick={()=>{navigate("/contact")}}>Contact Now 👉</button>
            </div>
          </div>
          <div className="row d-flex justify-content-evenly mt-5 pt-5">
            <div className="col-md-2 m-3 shadow border border-1 rounded p-2 pt-3 zoom">
              <p><b>Client Satisfaction</b></p>
              <p>Our services and products are designed following each client's goals and requirements. From software development & solutions to digital marketing, we cater to our client’s every need.</p>
            </div>
            <div className="col-md-2 m-3 shadow border border-1 rounded p-2 pt-3 zoom">
              <p><b>Timely Delivery</b></p>
              <p>We have appointed separate teams to work on different operations that mostly save our time and enhance the speed of deploying robust products or services to our customers.</p>
            </div>
            <div className="col-md-2 m-3 shadow border border-1 rounded p-2 pt-3 zoom">
              <p><b>Broad Range Of Services</b></p>
              <p>From robust software development, design, and solutions to extensive digital marketing. We dedicate ourselves to serving a wide range of industries and various businesses.</p>
            </div>
            <div className="col-md-2 m-3 shadow border border-1 rounded p-2 pt-3 zoom">
              <p><b>Quality Assurance</b></p>
              <p>We are honored by the International Trade Council for our superior business quality standards. We are also awarded by our clients with their valuable trust in us; each time we serve them.</p>
            </div>
          </div>
          <div className="row mt-5 pt-3 border border-1 rounded-4 shadow">
            <h2 className='text-center mb-4'><b>Our Glory</b></h2>
            <div className="col-md-6 text-center">
              <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675413948/Blog/Glory/quality_xbl8zv.png" alt="" width={"40%"} />
              <p><b>Eminence Innovation Member of:</b></p>
              <div className="row mt-5 ms-5 owl-carousel" style={{width:"100%"}}>
                <div className="col-md-4">
                  <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675413985/Blog/Glory/international_zmdlvz.png" alt="" width={"100%"} />
                </div>
                <div className="col-md-4">
                  <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675414013/Blog/Glory/google_cy4yuz.jpg" alt="" width={"100%"}/>
                </div>
                <div className="col-md-4">
                  <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675413973/Blog/Glory/jetro_jaxdzw.png" alt="" width={"100%"}/>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row owl-carousel">
                <div className="col-md-6" style={{width:"100%"}}>
                  <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675413961/Blog/Glory/certificate1_usimhc.png" alt="" width={"100%"}/>
                </div>
                <div className="col-md-6" style={{width:"100%"}}>
                  <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675413961/Blog/Glory/certificate1_usimhc.png" alt="" width={"100%"}/>
                </div>
              </div>
              <div className='row'>
                  <div className="col-md-12 d-flex justify-content-center">
                      <div className="d-flex m-3">
                      <span className='p-3 m-2 rounded shadow border border-1' style={{color:"white",backgroundColor:"#1976d2", cursor:"pointer"}}><ArrowBackIosNewIcon/></span>
                      <span className='p-3 m-2 rounded shadow border border-1' style={{color:"white",backgroundColor:"#1976d2", cursor:"pointer"}}><ArrowForwardIosIcon/></span>
                      </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="row d-flex justify-content-evenly mt-5 pt-5">
            <div className="col-md-3 m-2">
              <div className="card shadow p-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Mobile App Development</h5>
                  <h6 className="card-subtitle mb-4">To help you grow your business, we have a team of experts who can deliver creative and innovative mobile application development.</h6>
                  <Link to="/services/mobile-app-development" className="card-link">details 👉</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 m-2">
            <div className="card shadow p-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">iOS App Development</h5>
                  <h6 className="card-subtitle mb-4">Our iOS developers can help you develop products across devices and run the iOS operating system using technologies, automation, a</h6>
                  <Link to="/services/ios-app-development" className="card-link">details 👉</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 m-2">
            <div className="card shadow p-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Android App Development</h5>
                  <h6 className="card-subtitle mb-4">You can rely on our team of highly professional Android app designers, testers, and developers for all your Android needs.</h6>
                  <Link to="/services/android-app-development" className="card-link">details 👉</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 d-flex justify-content-evenly">
            <div className="col-md-3">
              <div className="card shadow p-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Web Design</h5>
                  <h6 className="card-subtitle mb-4">Our ultimate aim is to create a website for our clients that is extremely handy, packed with incredible features, and has a clear-</h6>
                  <Link to="/services/web-design" className="card-link">details 👉</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            <div className="card shadow p-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Content Writing</h5>
                  <h6 className="card-subtitle mb-4">A team of highly experienced and skilled writers can help with any writing project. Our services include editing, proofreading, wr</h6>
                  <Link to="/services/content-writing" className="card-link">details 👉</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
            <div className="card shadow p-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">PHP Web Development</h5>
                  <h6 className="card-subtitle mb-4">You will gain access to the industry's leading talents who are devoted to delivering solid PHP systems based on the finest strateg</h6>
                  <Link to="/services/php-web-development" className="card-link">details 👉</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-5 p-4 border border-1 shadow rounded-4">
              <div className="col-md-8">
                <div className="row owl-carousel">
                  <div className="col-md-12 d-flex">
                    <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675405413/Blog/Projects/project-1_bdado2.png" alt="" style={{height:"500px"}}/>
                  </div>
                  <div className="col-md-12 d-flex">
                    <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675405424/Blog/Projects/project-2_mgac29.png" alt="" style={{height:"500px"}}/>
                  </div>
                  <div className="col-md-12 d-flex">
                    <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675405436/Blog/Projects/project-3_qtfhgh.png" alt="" style={{height:"500px"}}/>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                  <h1><b>There are more latest project done yet.</b></h1>
                  <h5 className='mt-4'>Software Application Development with deep dives into a client's business requirements to build custom applications and solutions for their business.</h5>
                  <h5 className='mt-4'>We help companies in their digital transformation journey focusing on customer touchpoints and employees equally.</h5>
                  <h5 className='mt-4'>Whether its a high-demand customer-facing solution or a business appplication — we have always help our clients to achieve huge success in their mobility intiatives.</h5>
                  <div className='row'>
                  <div className="col-md-12 d-flex justify-content-center">
                      <div className="d-flex m-3">
                      <span className='p-3 m-2 rounded shadow border border-1' style={{color:"white",backgroundColor:"#1976d2", cursor:"pointer"}}><ArrowBackIosNewIcon/></span>
                      <span className='p-3 m-2 rounded shadow border border-1' style={{color:"white",backgroundColor:"#1976d2", cursor:"pointer"}}><ArrowForwardIosIcon/></span>
                      </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="row mt-5 pt-5">
            <div className="col-md-6">
              <img className='support' src="https://images.unsplash.com/photo-1593621443450-e6f6578fd7a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80" alt="" width={"100%"}/>
            </div>
            <div className="col-md-6 ps-5">
              <h1><b>Your Trusted Partner in IT Solutions!</b></h1>
              <h5>Without the hassles of hiring, our expert team delivers dream-team results.</h5>
              <h1><b>+91-7982-611-413</b></h1>
              <button className='p-3 contact rounded' onClick={()=>{navigate("/contact")}} style={{border:"none",backgroundColor:"#1976d2",color:"white"}}>Contact now 👉</button>
              <div className='float-end mt-5 pt-5' style={{width:"60%",textAlign:"justify"}}>
                <h5>UI/UX Design is at the core of all solutions developed by Innovation. Our design is more than just a collection of words and images. We focus on delighting the user.</h5>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-5 d-flex align-items-center">
            <div className="col-md-4">
              <h1><b>Latest Tech Blogs</b></h1>
              <h5>Technology solution updates and all the problem-solving blogs are at your fingertips. Get all the latest news and techno-solution news on our feed.</h5>
            </div>
            <div className="col-md-8">
                  <div className="row owl-carousel">
                    <div className="col-md-6" style={{width:"100%"}}>
                      <div className="card pt-3 pb-3">
                        <div className="card-body">
                          <h4><b>Grow Your Business With Custom Mobile Apps</b></h4>
                          <img className='mt-5 mb-4' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675402442/Blog/20221205131958-2255_eteofy.png" alt="" width={"100%"} />
                          <span className='d-flex justify-content-center'><PersonIcon/>Shubra Sharma <CalendarMonthIcon className='ms-3'/> 2022-12-05</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" style={{width:"100%"}}>
                      <div className="card pt-3 pb-3">
                        <div className="card-body">
                          <h4><b>5 Benifits of PHP in Web Development</b></h4>
                          <img className='mt-5 mb-4' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675402428/Blog/20221104170119-5395_k2p39a.jpg" alt="" width={"100%"} />
                          <span className='d-flex justify-content-center'><PersonIcon/> Shubra Sharma <CalendarMonthIcon className='ms-3'/> 2022-11-04</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" style={{width:"100%"}}>
                      <div className="card pt-3 pb-3">
                        <div className="card-body">
                          <h4><b>Cyberspace Safety : Initiatives in India</b></h4>
                          <img className='mt-5 mb-4' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675402420/Blog/20230116102934-3195_lzmecn.jpg" alt="" width={"100%"} />
                          <span className='d-flex justify-content-center'><PersonIcon/> Shubra Sharma <CalendarMonthIcon className='ms-3'/> 2023-01-02</span>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}
