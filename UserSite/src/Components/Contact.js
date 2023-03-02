import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import Footer from './Footer';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('', '', form.current, '')
          .then((result) => {
              console.log(result.text);
              swal("Your Message has been sent!", "Our team will contact you shortly.", "success");
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
   <>
    <section>
        <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675769606/Blog/contact-us_mu9ewi.jpg" alt="" style={{width:"100%"}} />
        <figcaption className='ms-5 ps-5 pt-3 pb-3 mb-3'><Link to="/"><small>Home</small></Link> : <small>Contact</small></figcaption>
    </section>
    <div className="container">
        <div className="row">
            <div className="col-md-6 p-5">
                <div className='card rounded p-5 zoom zoomBox'>
                    <p><b>info@eminenceinnovation.com</b></p>
                </div>
                <div className='card rounded p-5 zoom zoomBox'>
                    <p><b>+91-7982-611-413</b></p>
                </div>
                <div className='card rounded p-5 zoom zoomBox'>
                    <p><b>Office no 402, 4th floor Northex Gditl tower, Plot no A-09 Netaji Subhash Place,Pitampura, Delhi-110034, India</b></p>
                </div>
            </div>
            <div className="col-md-6 p-5">
                <div className='border border-2 rounded-2 p-5 shadow'>
                    <div className='text-center mb-4'>
                        <p style={{color:"#1976d2"}}>GET IN TOUCH</p>
                        <h3><b>Need a better quote for our service?</b></h3>
                    </div>
                   <form ref={form} onSubmit={sendEmail}>
                   <div className="mb-3">
                    <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder="Enter name" required/>
                    </div>
                    <div className="mb-3">
                    <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="Email here" required/>
                    </div>
                    <div className="mb-3">
                    <input type="number" name='mobile' className="form-control" id="exampleFormControlInput1" placeholder="Enter Mobile Number" required/>
                    </div>
                    <div className="mb-3">
                    <input type="text" name='company' className="form-control" id="exampleFormControlInput1" placeholder="Company/Organization" required/>
                    </div>
                    <select name='service' className="form-control mb-3" required>
                    <option selected disabled>--- Select Service --</option>
                    <option value="Managed IT Services">Managed IT Services</option>
                    <option value="IT Projects Management">IT Projects Management</option>
                    <option value="Business Software">Business Software</option>
                    <option value="Cloud Servers">Cloud Servers</option>
                    <option value="Website Design">Website Design</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="IT Consulting">IT Consulting</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Increase Quality Traffic">Increase Quality Traffic</option>
                    </select>
                    <div className="mb-5">
                    <textarea className="form-control p-4" name='message' id="exampleFormControlTextarea1" rows="2" placeholder='Message...' required></textarea>
                    </div>
                    <div className="mb-3">
                        <button type='submit' className='p-2 rounded' style={{border:"none",backgroundColor:"#1976d2",color:"white"}}>Submit Now 👉</button>
                    </div>
                   </form>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
   </>
  )
}
