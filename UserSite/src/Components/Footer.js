import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate=useNavigate();
  return (
    <div>
        <div className="container">
        <div className="row mt-5 pt-5">
            <div className="col-md-12 d-flex justify-content-between align-items-center p-5 rounded shadow border border-2" style={{backgroundColor:"#1976d2", color:"white"}}>
              <div>
              <h1><b>Have any project in your mind?</b></h1>
              <p>Looking for the perfect team, We have everything to make your business successful.</p>
              </div>
              <div>
                <button className='p-3 contact' style={{border:"none"}} onClick={()=>{navigate("/contact")}}>Contact now 👉</button>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center-5 pt-5 mt-5">
            <div className="col-md-3 d-grid gap-3">
              <h4>Company</h4>
              <span className='fotterlink'><Link to="/" style={{color:"black"}}>Home</Link></span>
              <span className='fotterlink'><Link to="/about" style={{color:"black"}}>About Us</Link></span>
              <span className='fotterlink'><Link to="/services" style={{color:"black"}}>Services</Link></span>
              <span className='fotterlink'><Link to="/cognizance" style={{color:"black"}}>Cognizance</Link></span>
              <span className='fotterlink'><Link to="/contact" style={{color:"black"}}>Contact Us</Link></span>
            </div>
            <div className="col-md-3 d-grid gap-3">
            <h4>Company Solutions</h4>
              <span className='fotterlink'><Link to="/services/cloud-solutions" style={{color:"black"}}>Cloud</Link></span>
              <span className='fotterlink'><Link to="/services/ui-ux-design" style={{color:"black"}}>UI/UX Design</Link></span>
              <span className='fotterlink'><Link to="/services/saas-development" style={{color:"black"}}>SaaS Development</Link></span>
              <span className='fotterlink'><Link to="/services/devops-service" style={{color:"black"}}>DevOps Service</Link></span>
              <span className='fotterlink'><Link to="/services/php-web-development" style={{color:"black"}}>PHP Web Development</Link></span>
            </div>
            <div className="col-md-3 d-grid gap-3">
            <h4>Company</h4>
              <span className='fotterlink'><Link to="/services/mobile-app-development" style={{color:"black"}}>Mobile App Development</Link></span>
              <span className='fotterlink'><Link to="/services/ios-app-development" style={{color:"black"}}>iOS App Development</Link></span>
              <span className='fotterlink'><Link to="/services/android-app-development" style={{color:"black"}}>Android App Development</Link></span>
              <span className='fotterlink'><Link to="/services/web-design" style={{color:"black"}}>Web Design</Link></span>
              <span className='fotterlink'><Link to="/services/content-writing" style={{color:"black"}}>Content Writing</Link></span>
            </div>
            <div className="col-md-3 d-grid gap-3">
            <h4>Company</h4>
              <span className='fotterlink'><a href='mailto:bhabani.eminenceinnovation@gmail.com' style={{color:"black"}}>Email Us</a></span>
              <span className='fotterlink'><Link to="/clients" style={{color:"black"}}>Clients</Link></span>
              <span className='fotterlink'><Link to="/contact" style={{color:"black"}}>Message Us</Link></span>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 d-flex justify-content-between align-items-center">
              <p className='mt-1'><b>Copyright © 2017 Eminence Innovation. All Rights Reserved</b></p>
              <div>
                <a href="https://www.facebook.com/eminence_innovation" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="" style={{width:"40px",margin:"10px"}} /></a>
                <a href="https://www.instagram.com/eminence_innovation/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="" style={{width:"40px",margin:"10px"}} /></a>
                <a href="https://www.linkedin.com/company/eminence-innovation/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="" style={{width:"40px",margin:"10px"}} /></a>
                <a href="https://twitter.com/innovation_ei" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="" style={{width:"40px",margin:"10px"}} /></a>
                <a href="https://in.pinterest.com/eminence_innovation/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/220/220214.png" alt="" style={{width:"40px",margin:"10px"}} /></a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
