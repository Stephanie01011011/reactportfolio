import './smallnav.css';
import { Link } from 'react-router-dom';

function Smallnav(){
    
    return (
        <>
        <div className="smallnavContainer">
          <div className="logoname">
            <h3>Stephanie Livengood <br></br> <span style={{'font-size': "18px"}}>Web Developer</span></h3>
          </div>
            <div className="navMenu">
                
           <div className="navBtns">   <ul>
                    <li><Link to="/" id='home'>Home</Link></li>
                    <li><Link to="/projects" id='proj'>Projects</Link></li>
                    <li><Link to="/contact" id='cont'>Contact</Link></li>
                </ul></div>
             
            </div>
        </div>
        </>
    )
}

export default Smallnav;