import './nav.css';
import { Link } from 'react-router-dom';

export default function Nav(){
    
    return (
        <>
        <div className="navContainer">
            <div className="navLogo">
                 <h4>STEPHANIE<br/>LIVENGOOD</h4>
                 <p>Web Developer</p>
            </div>
            <div className="navMenu">
                
           <div className="navBtns">   <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul></div>
             
            </div>
        </div>
        </>
    )
}