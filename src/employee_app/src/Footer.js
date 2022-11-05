
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
 import {
    faYoutube, faFacebook, faTwitter, faInstagram
} from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className="Footer">
            <h3> Follow Us On Social Media! </h3>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a> 
        </div>
    )
}

export default Footer