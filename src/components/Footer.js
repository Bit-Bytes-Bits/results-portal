import React from "react";
import { FaPhoneSquareAlt, FaRegEnvelope, FaInstagram, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import "./App"
import "../styles/Footer.css"

function Footer () {
    return (
        <div className="footer">
            <div className="section1">
                <h2>Contacts</h2>
                <div className="footer-contact">
                   <p><FaPhoneSquareAlt />
                    0702233145</p>
                    <FaRegEnvelope />
                    <p>info@jagit-uni.com</p>
                </div>
            </div>

            <div className="section2">
                <h2>Socials</h2>
                <div className="socials">
                    <FaInstagram /> <FaFacebookSquare /> <FaTwitterSquare />
                </div>
            </div>

            <div className="section3">
                <h2>Mission</h2>
                <p>Creating innovative connections among education, humanities, music, the social sciences, science, engineering, and health science</p>
            </div>

            <div className="section4">
                <h2>Vision</h2>
                <p>Empowering our students to fulfill their academic and professional passions in a University that is diverse, welcoming, and inclusive for all students, faculty, and staff.</p>
            </div>

        </div>

    )
}

export default Footer
