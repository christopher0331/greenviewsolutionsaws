import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Navbar from './Navbar.js';

const Menu = () => (
            <div className="topLevelMenu">
                <div className="InfoAndMenu">
                    <div className="MenuInfo">
                        <a href="tel:303-358-8168">
                            <h4 className="MenuItem" id="phone">303.358.8168  |</h4>
                        </a>
                        <a href="mailto:brandon@greenviewsolutions.net">
                            <h4 className="MenuItem" id="email">brandon@greenviewsolutions.net</h4>
                        </a>
                    </div>
                    
                    <div className='socialIconBar'>
                        <a href="https://www.facebook.com/GreenViewSolutions/" target="_blank" rel="noreferrer"> 
                            <FontAwesomeIcon className='socialIcons' icon={faFacebookF} size='lg' color='white'/>
                        </a>
                        <a href="https://www.linkedin.com/company/greenview-solutions-llc/about/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className='socialIcons' icon={faLinkedin} size='lg' color='white'/>
                        </a>
                        <a href="https://www.instagram.com/greenview_solutions_llc/?hl=en" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon className='socialIcons' icon={faInstagram} size='lg' color='white'/>
                        </a>
                    </div>

                </div>

            <div className="nav">
                <Navbar />
            </div>
        </div>
    )
        

export default Menu;
