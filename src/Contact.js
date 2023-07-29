import { Link } from "react-router-dom";
import './Contact.css';
import Footer from "./Footer";
import Smallnav from "./Smallnav";

const Contact = () => {
    return ( 
        <>
        <Smallnav />
        <div className="contactContainer">
          <div className="contactTitle">
            <h1>Hello!</h1>
          </div>
          <div className="contactParagraph">
          <h3>
            Please reach out with any questions you may have or if 
            you would just like to talk about my journey, your 
            journey, or web development in general. I have listed some of my contact information below, as well as my resume and a form for quick contact.
          </h3>
          <a href="/">Resume</a>
          </div>
        <hr />
          <div className="contactInfo">
            <div className="contactText">
              <p>Email: sreneelive@gmail.com <br /> Phone: (463) 246-8451</p>
              <a href="https://www.linkedin.com/in/slivengood01/">LinkedIn</a>
              <a href="https://www.instagram.com/stephiirenee/">Instagram</a>
              <a href="https://github.com/Stephanie01011011">Github</a>
              </div>
            <div className="contactForm">
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Message</label><br></br>
    <textarea/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
            
          </div>

        </div>

        <Footer />
          
        </>
        );
}
export default Contact;