import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";
import '../css/Footer.css'; 

function Footer() {
    const [emailCopied, setEmailCopied] = useState(false);

    const emailAddress = "contactforkishore@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/mavriq/"; 
    const githubUrl = "https://github.com/roguekishore";       
    const leetcodeUrl = "https://leetcode.com/kishoren26/";   
    const resumeUrl = "/Kishore_N_E_Resume.pdf";           

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(emailAddress)
            .then(() => {
                setEmailCopied(true);
                setTimeout(() => {
                    setEmailCopied(false);
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy email: ', err);
                alert('Failed to copy email. Please copy it manually: ' + emailAddress);
            });
    };

    return (
        <div>
            <div className="footer">
                <div className="footer-container">
                    <div className="purple-line-container-footer">
                        <div className="purple-line-footer"></div>
                    </div>
                    <div className="left-portion">
                        <div className="details">
                            <div className="footer-name">
                                <p>Kishore N E - Software Developer</p>
                            </div>
                            <div className="footer-location">
                                <span className="location-item">
                                    <HiLocationMarker className="location-icon" />
                                    Coimbatore, India
                                </span>
                                <a href={`mailto:${emailAddress}`} className="email-item">
                                    <MdEmail className="email-icon" />
                                    {emailAddress}
                                </a>
                            </div>
                            <div className="contact-links">
                                <p className="contact-link-heading">Contact</p>
                                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <FaLinkedin className="social-icon" />
                                    Linkedin
                                </a>
                                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <FaGithub className="social-icon" />
                                    Github
                                </a>
                                <a href={leetcodeUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <SiLeetcode className="social-icon" />
                                    Leetcode
                                </a>
                                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                                    <IoDocumentText className="social-icon" />
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="right-portion">
                        <div className="talk-details">
                            <h1>Have an Idea?<br></br>Let's Talk</h1>
                        </div>

                        <div className="email-details">
                            <div className="input-container">
                                <a
                                    href={`mailto:${emailAddress}`}
                                    className="send-email"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MdEmail className="input-email-icon" />
                                    <span>{emailAddress}</span>
                                </a>
                            </div>
                            <div className="email-box">
                                <button className="email-button" onClick={copyEmailToClipboard}>
                                    {emailCopied ? 'Copied!' : 'Copy Email'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;