import React from "react";
import { FaPhoneSquareAlt , FaRegEnvelope, FaInstagram, FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";
import "../styles/Footer.css"
import "./App"

function Footer () {
    return (
        <div className="footer">
            <div className="section1">
                <h3>Contacts</h3>
                <div className="footer-contact">
                    <FaPhoneSquareAlt /> 0702233145<FaRegEnvelope /> 
                </div>
            </div>

            <div className="section2">
                <h3>Socials</h3>
                <div className="socials">
                    <FaInstagram /> <FaFacebookSquare/> <FaTwitterSquare />
                </div>
            </div>

            <div className="section3">
                <h2>Mission</h2>
                <p>Our mission is to prepare creative and independent thinkers who are capable and confident global citizens. We provide a public service to our community and nation through generating, collating and preserving interdisciplinary academic knowledge.</p>
            </div>

            <div className="section4">
                <h2>Vision</h2>
                <p>Empowering our students to fulfill their academic and professional passions in a University that is diverse, welcoming, and inclusive for all students, faculty, and staff. Creating innovative connections among education, humanities, music, the social sciences, science, engineering, and health science.</p>
            </div>
            
        </div>
           

    )
}

export default Footer