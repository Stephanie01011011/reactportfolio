import { Link } from "react-router-dom";
import Footer from "./Footer";
import Smallnav from "./Smallnav";
import './Project.css';



function Project(){
    return ( 
        <>
          <Smallnav />
          <div className="projectCards">
            <div className="project1">
              <div className="img"><img id="proj1" src="https://live.staticflickr.com/65535/53064395209_366530a296_z.jpg" alt="" /></div>
              <div className="txt">
                <h2>Weather App using API</h2>
                <h3>HTML/CSS, Javascript, React</h3>
                <p>For my first React proejct I decided the tried and true weather 
                  single page application would be a fun way to get started. I used the weather API "?"
                  to display all of the weather information. I used a simple and easy search bar to 
                  complete the API request so users can pick which cities to look at. The code validates
                  the user info and returns the input in the display window.</p>
              </div>
            </div>
            <div className="project2">
            
              <div className="txt">
                <h2>Weather App using API</h2>
                <h3>HTML/CSS, Javascript, React</h3>
                <p>For my first React proejct I decided the tried and true weather 
                  single page application would be a fun way to get started. I used the weather API "?"
                  to display all of the weather information. I used a simple and easy search bar to 
                  complete the API request so users can pick which cities to look at. The code validates
                  the user info and returns the input in the display window.</p>
                  </div>
                  <div className="img"><img id="proj2" src="https://live.staticflickr.com/65535/53064395209_366530a296_z.jpg" alt="" /></div>
            </div>
          </div>
         
            
         
          

          
        


          <Footer />
          
        </>
        );
}
export default Project;