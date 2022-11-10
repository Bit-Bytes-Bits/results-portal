import React from "react";
import { FaPhoneSquareAlt , FaRegEnvelope} from "react-icons/fa";

import "./App"

function Footer () {
    return (
        <div className="footer">
            <p>JAGIT UNIVERSITY 2022&copy;</p>
            <div className="footer-content">
                <FaPhoneSquareAlt className="contact-img"/>
                 <p>070383999</p>
                 <FaRegEnvelope className="email"/>
                 <p>info@uni-jagit.com</p>
            </div>
           
        </div>
    )
}

export default Footer