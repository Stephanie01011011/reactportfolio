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
              <div className="img"></div>
              <div className="txt"></div>
            </div>
            <div className="project2">
            <div className="img"></div>
              <div className="txt"></div>
            </div>
          </div>
         
            
         
          

          
        


          <Footer />
          
        </>
        );
}
export default Project;