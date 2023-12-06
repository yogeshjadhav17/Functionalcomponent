import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
/*import Footer from "./components/Footer.js";*/





function Header(){

  return (

    

    <div className="backgroundbanner">

    
    <ul className="nav">
<li>Home</li>
<li>About Us</li>
<li>Services</li>
<li>Products</li>
<li>Contact Us</li>
    </ul>

    <div className="bannerpara">
                <ol>
                <li><h2> Hubsem Solutions Private Limited.</h2></li>
            <li> <b> We are website development company  located in Tamilnadu,india.
                Our Company running succesfully from 1993.</b></li>
              <li>  <b>Are you looking for a consumer-oriented 
                    website development company?</b></li>
               <li><b>Let's discuss on How Our Company can help
                     you achieve Your Yoals!</b> </li> 
                   
                <li>Gathering Information</li>
                <li>Planning </li>
                <li>Website Design</li>
                <li>Development</li>
                <li>Testing</li>
                <li>Maintenance</li>
            </ol>

    <div className="form">
      <form>
        <span id="d1"><h3>Connect With Us</h3>
        <p>Get No Obligation Free Quote!</p></span>
        <label for="fname">Full Name</label>
      <input type="text" id="fname" name="fullname" placeholder="Enter your full name..."></input><br/><br/>

      <label for="email">Email Address</label>
      <input type="text" id="email" name="email" placeholder="Enter Your Email..."></input><br/><br/>
      <label for="Phoneno">Phone Number</label>
      <input type="text" id="phoneno" name="Phonenumber" placeholder="Enter your Phone number..."></input><br/><br/>
      <label for="companyname">Company Name</label>
      <input type="text" id="company" name="companyname" placeholder="Company Name.."></input><br/><br/>
      <label for="websitephase">WebsitePhase</label>
      <select input id="websitephase" name="websitephase">
          <option value="GatheringInformation">Gathering Information</option>
          <option value="Planning">Planning</option>
          <option value="WebsiteDesign">Website Design</option>
          <option value="Development">Development</option>
          <option value="Testing">Testing</option>
          <option value="Maintenance">Maintenance</option>

      </select>

      <button type="submit" value="submit" id="button" name="button"> Submit </button>

        
      </form>
    </div>

  </div>
</div>  
  )
}

function Main(){
  return(
           
      <div className="intro">

      


       
      <h3>Why Hubsem Private Solutions</h3>
      <p id="demo">At Hubsem Solutions, we are committed to helping businesses establish a strong online presence <br/>
        and achieve remarkable success in the digital world. As a leading web development company, <br />
        we offer a comprehensive range of services designed to maximize your brand visibility, drive<br />
        targeted traffic, and generate higher conversions.<br/><hr />
      </p>

      <br />

      <br />

      <p id="demo1" style={{ display: "flex", flexDirection:"column",justifyContent:"space-between",alignContent:"space-between",fontSize:"17px",
  fontWeight: "700",
  lineHeight: "20px",
  width:"1600px",
  height: "700px",
  textAlign: "center" }}> Partner with Hubsem Solutions today and let us help you achieve web development excellence. <br />
        Contact us now to discuss your business goals and discover how our services can take your online <br />
        presence to new heights <hr/> </p>

      <br /><br />

      <br />

      <form>
        <button type="submit" value="submit" formaction="#.html" class="button">Contact Us Now </button> <br />
      </form>
    
<div className="Aboutus">
  <h3>About Us</h3><br/>
  <p id="demo2"> We deliver personalized solutions that align with your unique requirements, understanding your<br/>
             business to maximize online presence and drive results. </p><br/><br/>

            
</div>

<div className="About">

  <ul className="welcome">
  <li><b>Results Driven Approach:</b><p>Achieve tangible results with us, data-driven <br/>
                        approach and dynamic website features too.</p></li>
                     <li><b>Dedicated Support:-</b><p> Count on Hubsem Solutions for dedicated support, <br/>
                        and transparent communication for your website maintenance or any testing for your website.</p></li>
                     <li><b>Experience and Expertise :- </b><p> Extensive expertise in website development as per your requirement. </p></li>
                 
  </ul>
  
  <div className="image">

   <img src={logo} alt="Logo" className='Logo' />
   

</div>
</div>

<div className="important">
<ul className="achievement">
                 <li><b>10+</b><br/><h4> Years in Business</h4></li>
                 <li><b>200M+</b><br/><h4> Revenue generated</h4></li>
                 <li><b>BSE</b><br/> <h4> Listed Company</h4></li>
                 <li><b>Worldwide</b><br/><h4> presence</h4></li>
             </ul><br/>
    
             <form >
                 <button type="submit" value="submit" formaction="#.html" className="button1" > Contact Us Now</button>
             </form>
</div>

<hr/>

<div className="client">
  <h3>What Clients Are Saying About Us</h3>
  <p className="paragraph">We’ve served more than 2500 clients globally in the last 18 years and retained 97% of them.</p>
<br/> 

            <div className="client1">

            <p>From Requirement analysis to client needs and<br/> 
                    design to maintenance,hubsem have always provided<br/>
                     the best services as per my needs and helped me <br/>
                     to gain confidence for my website and my clients <br/>
                     by developing a dynamic, and responsive website.<br/>
                    </p>  
                    <span><b>Pratima Singh</b></span>
</div>
           <div className="client2">
                <p>Their website development services are excellent<br/>
                     and they prefer to your needs  without doing any<br/>
                      chnages by their own. Good maintenance and after<br/>
                       product support services.<br/>
            </p>
        <span><b>Himashu Agarwal</b></span></div>

        <div className="client3">
                <p>Hubsem have helped me to discover a dynamic website<br/>
                     with proper after product service<br/>
                and testing and maintenance service they have is very<br/> 
                supportive. They not only deliver proper website <br/>
            but also proper support and maintenance services too.</p>
      <span><b>Anshit Patel</b></span></div><br/><br/>

     
    </div>
    <div className="service">
            <h3 id="heading"> Services We Offer</h3> 
            <p className="paragraph"> Take the first step for website development for your 
                company today
                Contact us for a free consultation and let
                 us unleash the true potential of your businessin the
                  digital realm.</p><br/><br/>
       <hr/>
                 <div className="service1">
                     <h3> Gather Information</h3>
                     <p>We take proper time from you to first gather<br/>
                         information before coming up with any website<br/>
                          design Geelong concepts for a new website. A <br/>
                          website should all be about answering user needs </p>
                 </div>

                 <div className="service2">
                     <h3>Planning</h3>
                     <p>You use all the information gathered in the first<br/> 
                        phase to come up with a plan for the website. This <br/>
                        plan will be the guiding blueprint throughout the design<br/>
                          and development process.</p>
                 </div>

                 <div className="service3">
                     <h3>Website Design</h3>
                     <p>
                         At this point, we know the information you need to<br/>
                          present and the order in which to present it.Now we<br/>
                           need to determine the look and feel of the website,<br/>
                            which is what web design is all about. 
                     </p>
                 </div>

                 <div className="service4">
                     <h3> Development</h3>
                     <p>You have the information, the plan and the design so far.<br/>
                         Development is the phase where the website comes to life.<br/>
                         Also, coding plays crucial role here. The website developer<br/>
                          will use various programs and software to integrate <br/>
                          the elements of the website design into a fully functional website. </p>
                 </div>

                 <div className="service5">
                     <h3> Testing</h3>
                     <p>At this point, the website is up and fully functional but<br/>
                         not released to the public yet. It is important to test <br/>
                         the website before releasing it to make sure there is<br/>
                          complete functionality for all the scripts.We make proper<br/>
                           testing of the website for you before publishing or handing<br/>
                            over the product to you.</p>
                 </div>

                 <div className="service6">
                     <h3>Maintenance</h3>
                     <p>Just because the website has been uploaded to the internet<br/>
                         and is in user by internet users, does not mean the job is <br/>
                         done. You need to constantly attract visitors back to<br/>
                        your website and that is why regular maintenance is necessary.<br/>
                        We will help you with the same that is proper after sales service.
                     </p>
                 </div>

                </div>


      </div>    
      );
}

/*function Footer(){
return
(
     
<div className="background">


<div className="consultant">
<h3>Talk to Our Consultants</h3>
 <p>Get Custom solutions & Recommendations,Estimates.</p><br/>

<ul>
<li><h4>Fill Up Your details</h4>
<span><p>Your Data is 100% confidential.</p></span></li>
<li><h4>Contact Us</h4>
<span><p>310,3rd Floor,Rupa Solitaire, Millenium Business<br/>
     Park,Tamil Nadu-400310, India. 
    Mob:6385851234</p></span></li>
            </ul>
            </div>

            <div className="Contact">
                <h3> Get In Touch</h3>
                <p>Guaranteed response within one business day!</p>

                <form>
                    <label for="fname">Full Name</label>
                    <input type="text" id="fname" name="fullname" placeholder="Your Full Name..."/>
                    <label for="email">Email Address</label>
                    <input type="text" id="email" name="email" placeholder="Email Address..."/>
                    <label for="phoneno"> Phone number</label>
                    <input type="text" id="phoneno" name="Phonenumber" placeholder="Phone number..."/>
                    <label for="companyname">Company Name
                    </label>
                    <input type="text" id="company" name="companyname" placeholder="Company Name..."/>
                    <label for="websitephase">WebsitePhase</label>

<select input id="websitephase" name="websitephase">
    <option value="Gatherinformation">Gathering Information</option>
        <option value="Planning">Planning</option>
        <option value="WebsiteDesign">Website Design</option>
        <option value="Development">Development</option>
        <option value="Testing">Testing</option>
        <option value="Maintenance">Maintenance</option>
    </select><br/>

   
   <button value="submit" id="button" name="button"> Submit </button>
                </form>
            </div>
            </div>
  );
}*/


function Mynewwebsite(){
  return <div>
    <Header/>
    <Main/> 
    
  
  </div>
  
};

ReactDOM.render(<Mynewwebsite/>,document.getElementById('root'));