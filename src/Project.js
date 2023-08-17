import { Link } from "react-router-dom";
import { useLayoutEffect } from 'react';
import Footer from "./Footer";
import Smallnav from "./Smallnav";
import './Project.css';



function Project(){
  //Link from homepage sends user to top of page
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
    return ( 
        <>
          <Smallnav />
          <div className="projectCards">
            <div className="project1">
              <div className="img"><a href="https://react-weather-api-steph.netlify.app/" id="proj1link"><img id="proj1" src="https://live.staticflickr.com/65535/53123808960_b132c4bf66.jpg" alt="" /></a></div>
              <div className="txt">
                <h2>Weather App using API</h2>
                <h3>HTML/CSS, Javascript, React</h3>
                <p>For my first React proejct I decided the tried and true weather 
                  single page application would be a fun way to get started. I used the weather API "?"
                  to display all of the weather information. I used a simple and easy search bar to 
                  complete the API request so users can pick which cities to look at. The code validates
                  the user info and returns the input in the display window.</p>
                  <a id="repoBtn" href="https://github.com/Stephanie01011011/react-weather">Github Repo</a>
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
                  <a id="repoBtn" href="https://github.com/Stephanie01011011/react-weather">Github Repo</a>
                  </div>
                  <div className="img"><img id="proj2" src="https://live.staticflickr.com/65535/53064395209_366530a296_z.jpg" alt="" /></div>
            </div>
          </div>
         
            
         
          

          
        


          <Footer />
          
        </>
        );
}
export default Project;