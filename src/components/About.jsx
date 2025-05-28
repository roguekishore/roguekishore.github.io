import React, { useState } from "react";
import '../css/About.css';
import Badge from "./Badge";
import { HiLocationMarker } from "react-icons/hi";

import Card from "./Card";
import { MdHeadphones } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";

function About() {
    const [showSections, setShowSections] = useState(false);

    const toggleSections = () => {
        setShowSections(!showSections);
    };

    return (
        <div className="about-wrapper">
            <div className="purple-line-container-about">
                <div className="purple-line-about"></div>
            </div>
            <div className="about-container">
                <Badge><span className='badge-star'>✦</span>Who am I?</Badge>

                <div className="about-para">I am Kishore N E, an accomplished Computer Science and Engineering (B.E. CSE)
                    student, competitive programmer, cloud architect, web developer, frontend developer and backend architect.
                    I am fueled by a strong foundation in algorithms and data structures honed through consistent competitive programming
                    (Linked Lists are the best). I excel at translating complex logical challenges into efficient, well-structured code, and developing robust
                    and user-centric software applications.
                </div>

                <div className='hero-para'>Maverick.</div>

                <Badge><MdHeadphones></MdHeadphones>Beat behind code</Badge>

                <iframe src="https://open.spotify.com/embed/track/3GCdLUSnKSMJhs4Tj6CV3s?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

                <div onClick={toggleSections} style={{ cursor: 'pointer' }}>
                    <Badge>
                        {showSections ? <IoChevronUp></IoChevronUp> : <IoChevronDown></IoChevronDown>}
                    </Badge>
                </div>

                {showSections && (
                    <>
                        <Badge><span className='badge-star'>✦</span>Experience</Badge>

                        <div className="experience-wrapper">
                            <div className="experience-container">
                                <div className="purple-line-container-about-ins">
                                    <div className="purple-line-about-ins"></div>
                                </div>
                                <div className="experience">
                                    <h1>Web Developer - Femtosoft Technologies</h1>
                                    <span className="experience-location"><p>Internship - Onsite <span className="about-location-item">
                                        <HiLocationMarker className="about-location-icon" />
                                        Coimbatore, India
                                    </span>
                                    </p></span>
                                    <p>May 2025 - June 2025</p>
                                </div>
                            </div>
                        </div>

                        <Badge><span className='badge-star'>✦</span>Education</Badge>

                        <div className="education-container">
                            <div className="education-ins">
                                <div className="purple-line-container-about-ins">
                                    <div className="purple-line-about-ins"></div>
                                </div>
                                <div className="education-wrapper">
                                    <h1>Sri Krishna College of Technology</h1>
                                    <span className="about-location-item">
                                        <HiLocationMarker className="about-location-icon" />
                                        Coimbatore, India
                                    </span>
                                    <p>B.E. Computer Science and Engineering</p>
                                    <p>2023 - 2027</p>
                                </div>
                            </div>

                            <div className="education-ins">
                                <div className="purple-line-container-about-ins">
                                    <div className="purple-line-about-ins"></div>
                                </div>
                                <div className="education-wrapper">
                                    <h1>St. Joseph's MHSS</h1>
                                    <span className="about-location-item">
                                        <HiLocationMarker className="about-location-icon" />
                                        Coimbatore, India
                                    </span>
                                    <p>Schooling</p>
                                    <p>2008 - 2023</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default About;
