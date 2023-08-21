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
            journey, or web development in general. I have listed some of my contact information below, as well as a link to my resume.
          </h3>
          <a href="https://www.linkedin.com/in/slivengood01/overlay/1635532958011/single-media-viewer?type=DOCUMENT&profileId=ACoAADHDYysBKolT3tXI-IFLrIKkbWWaFoDHtFM&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BHkCyYGclSGGPhei1ziFXFA%3D%3D">Resume</a>
          </div>
        <hr />
          <div className="contactInfo">
            <div className="contactText">
            <a href = "mailto: sreneelive@gmail.com">Email: sreneelive@gmail.com</a>
            <a href="tel:+4632468451">(463) 246-8451</a>
              <a href="https://www.linkedin.com/in/slivengood01/">LinkedIn</a>
              <a href="https://www.instagram.com/stephiirenee/">Instagram</a>
              <a href="https://github.com/Stephanie01011011">Github</a>
              </div>
            
          </div>

        </div>

        <Footer />
          
        </>
        );
}
export default Contact;