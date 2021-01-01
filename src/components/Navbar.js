import { useState } from 'react';
import logo from '../assets/code-slash.svg';
import hamburger from '../assets/icon-hamburger.svg'
import '../css/components/navbar.css'

const Navbar = (props) => {
    const [active, setActive] = useState(false);
    const handleClick = () =>{
        
    }
    return (
        <>
        <div className="navbar container">
                <div><img  className="navbar__logo" src={logo}/> PORTFOLIO</div>
                <img  className="navbar__hamb" src={hamburger} alt="hamb" onClick={ handleClick}/>
                <div className="navbar__nav">
                    <ul className="navbar__list">
                        <li>About Me</li>
                        <li>Projects</li>
                        <li>Contact Me</li>
                        <li>Resume</li>
                    </ul>
                </div>
            </div>  
            {props.children}
        </>
    )
}

export default Navbar
