import './smallnav.css';
import { Link } from 'react-router-dom';

export default function Smallnav(){
    
    return (
        <>
        <div className="navContainer">
           <div className="logo">
            <h2>Stephanie Livengood - Web Developer</h2>
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