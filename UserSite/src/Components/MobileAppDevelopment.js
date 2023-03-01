import React from 'react'
import Footer from './Footer'
import ServiceLeftTab from './ServiceLeftTab'

export default function MobileAppDevelopment() {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row d-flex justify-content-evenly">
          <div className="col-md-3">
              <ServiceLeftTab/>
          </div>
          <div className="col-md-8 pe-5 ps-5">
          <h1 className='text-center mb-3'><b>Mobile App Development</b></h1>
        <img className='text-center mb-3' src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675771470/Blog/20220927105517-7229_eczn91.jpg" alt=""style={{height:"400px", width:"100%"}}/>
        <div className="d-grid gap-2">
        <small>We create custom mobile apps for the iOS and Android platforms. Our mobile app developers can create mobile apps that use AI and ML technologies.</small>
        <small>Do you want to create your mobile application?</small>
        <small>Our team of experts, who have extensive experience working with international application framework administrations and product designing businesses, is what enables us to solve your problems.</small>
        <small>To increase a business venture's efficiency, we try to streamline the work process and combine resources into a single, consistent example.</small>
        <small>To help you grow your company, we have a chain of partners who can deliver thoroughly considered and creatively designed versati skilled team that work across all mobile development platforms and cutting-edge technologies. </small>
        <small>Our flexible contracting and managing model allows you to have a highly experienced team working for you without the hassle and cost of maintaining an in-house team.</small>
        <small>For your upcoming project, pick our team.  </small>
        </div>
        <img src="https://res.cloudinary.com/dtktcxctb/image/upload/v1675860102/pasted_image_0_vh4pli.png" alt="" style={{width:"600px"}}/>
        <h5 className='text-danger'><b>How Can We Assist You?</b></h5>
        <p>Eminence Innovation is a leading IT service provider in Delhi-NCR with more than five years of experience delivering mobile app development services to businesses across the globe. We provide a bundle of services that include:</p>
        <ul>
          <li><small><b>Mobile consulting</b></small></li>
          <small>Our consultants offer platform/device compatibility advice, support with the execution of app concepts, plan activities, and reduce costs.</small>
          <li><small><b>Mobile UI and UX design</b></small></li>
          <small>The designers at Eminence Innovation, create slick, user-friendly interfaces that ensure conversion, engagement, and easy adoption.</small>
          <li><small><b>Mobile app development</b></small></li>
          <small>Our developers produce and deploy quick, dependable, and high-performing mobile apps, having finished over 100 projects.</small>
          <li><small><b>Back-end development</b></small></li>
          <small>Back-end development</small>
          <li><small><b>Web development</b></small></li>
          <small>We are prepped to add a web app, web portal, online store, or SaaS to your mobile app. </small>
          <li><small><b>Mobile App Integration </b></small></li>
          <small>We promise seamless integration with back ends and any third-party software as we have experience in a broad range of APIs.</small>
          <li><small><b>Quality assurance and evaluation for mobile apps</b></small></li>
          <small>With our test engineers who hold ISTQB certifications, we carry out Dynamic, performance, security, user experience, and accessibility testing.</small>
        </ul>
        <div className="ms-5">
        <ul>
          <li><small><b>Advancement of Mobile Apps</b></small></li>
          <small>Our programmers skillfully redesign architectures, refactor code, and create mobile apps from websites.</small>
          <li><small><b>Support & Maintenance</b></small></li>
          <small>We deliver compliance, protection, performance management, and L0-L3 post-launch support along with our other services.</small>
          </ul>
        </div>
        <div className="d-grid gap-2">
        <small><b>Benefits of Developing Mobile Applications</b></small>
        <small>Developing a mobile app will not only keep your company up to date with innovative technologies.  </small>
        <small>But they also support facilitating customer loyalty and improving client relationships. </small>
        <small>Here are top three reasons, why your business requires the latest and trending mobile app right now, regardless of whether you're planning to develop a mobile app or are fully prepared to update your current one.</small>
        </div>
        <div className="ms-5 mt-2">
        <ol>
          <li><small><b>Strengthen Customer Relationships</b></small></li>
          <small>The majority of smartphone users prefer mobile applications over websites, and 76% of consumers say that purchasing stuff on their phones saves them time. Mobile app payments are expected to rise from 41.8% in 2019 to 52.2% in 2023.</small>
          <li><small><b>Strengthen Your Brand</b></small></li>
          <small>Mobile apps aren't just for big brands like Flipkart or Whatsapp. Small and medium-sized businesses are adopting the mobile app trend as they have realized that a successful mobile strategy calls for more than just a responsive website.</small>
          <li><small><b>It Offers 24/7 Access to Your Business </b></small></li>
          <small>Mobile applications give customers access to your product and services around-the-clock, unlike a physical store. Apps offer much more convenient internet access to the internet than websites do, and they also offer targeted messaging and information. </small>
          <small>Even without an internet connection, some apps are usable.</small>
          </ol>
        </div>
        <p className='text-danger'><b>Feature Points:</b></p>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td><small>User Centric</small></td>
                  <td><small>When an app is user-centric, it gains more active users, engagement, and audience.</small></td>
                </tr>
                <tr>
                  <td><small>Strong USP</small></td>
                  <td><small>There was no other business model like this one. The user can choose from a variety of services offered by the company.</small></td>
                </tr>
                <tr>
                  <td><small>Solves Problem</small></td>
                  <td><small>With so many success factors apps on the market, you must decide which problem your app is solving.</small></td>
                </tr>
              </tbody>
            </table>
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
