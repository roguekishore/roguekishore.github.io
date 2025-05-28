import React from "react";
import '../css/Projects.css';
import spicerack from '../images/spicerack.png'
import journal from '../images/journal.png';
import sjmhss from '../images/sjmhss.png';
import fuel from '../images/fuel.png';
import readifyVideo from './bookspin.mp4';
import portfolio from '../images/portfolio.png'

import { FaReact, FaJsSquare, FaCss3Alt, FaAws, FaJava, FaSpinner } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { SiSpringboot, SiFirebase, SiDocker, SiGithub, SiTailwindcss } from 'react-icons/si';
import { MdOutlineLaunch } from "react-icons/md";
import Badge from "./Badge";
import Card from "./Card";
import { FaHtml5, FaPhp } from "react-icons/fa6";

function Projects() {
    return (
        <div className="projects-wrapper">
            <div className="purple-line-container-project-top">
                <div className="purple-line-project-top"></div>
            </div>
            <div className="projects-container">

                <Badge><span className="badge-star">✦</span>Projects</Badge>

                <Card>
                    <div className="projects">
                        <div className="purple-line-container-project">
                            <div className="purple-line-project"></div>
                        </div>
                        <div className="project-heading">
                            <div className="project-title">
                                <h1 className="project-title-main">SpiceRack <span className="bar">|</span>
                                    <span className="project-title-secondary"> Grocery-Recipe App</span>
                                </h1>
                            </div>
                            <div className="project-description">
                                <p>A full-stack grocery application that lets users shop, manage inventory, create and discover recipes, plan meals, and get nutritional insights.</p>
                            </div>
                            <div className="project-stack">
                                <div className="stack-item"><FaReact /><p>React</p></div>
                                <div className="stack-item"><SiSpringboot /><p>SpringBoot</p></div>
                                <div className="stack-item"><DiMysql /><p>MySQL</p></div>
                                <div className="stack-item"><FaAws /><p>AWS</p></div>
                                <div className="stack-item"><SiDocker /><p>Docker</p></div>
                                <div className="stack-item"><FaJava /><p>Java</p></div>
                                <div className="stack-item"><FaJsSquare /><p>Javascript</p></div>
                                <div className="stack-item"><FaCss3Alt /><p>CSS</p></div>
                            </div>
                        </div>
                        <div className="project-image">
                            <a href="https://spicerack.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <img src={spicerack} alt="SpiceRack App Demo"></img>
                            </a>
                        </div>
                        <div className="project-footer">
                            <a href="https://spicerack.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <button className="project-button"><MdOutlineLaunch />Live Website</button>
                            </a>
                            <a href="https://github.com/roguekishore/SpiceRack" target="_blank" rel="noopener noreferrer">
                                <button className="project-button"><SiGithub />GitHub Repo</button>
                            </a>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="projects-outer">
                        <div className="projects">
                            <div className="purple-line-container-project">
                                <div className="purple-line-project"></div>
                            </div>
                            <div className="project-heading">
                                <div className="project-title">
                                    <h1 className="project-title-main">READIFY <span className="bar">|</span>
                                        <span className="project-title-secondary"> eBook-Store</span>
                                    </h1>
                                </div>
                                <div className="project-description">
                                    <p>An e-book store with a clean, responsive interface for users to effortlessly browse, search by title, author, or category, and manage their cart.</p>
                                </div>
                                <div className="project-stack">
                                    <div className="stack-item"><FaReact /><p>React</p></div>
                                    <div className="stack-item"><FaJsSquare /><p>Javascript</p></div>
                                    <div className="stack-item"><FaCss3Alt /><p>CSS</p></div>
                                </div>
                            </div>
                            <div className="project-image">
                                <a href="https://readifystore.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <video
                                        src={readifyVideo}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="project-video"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                </a>
                            </div>
                            <div className="project-footer">
                                <a href="https://readifystore.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="project-button"><MdOutlineLaunch />Live Website</button>
                                </a>
                                <a href="https://github.com/roguekishore/eBook-Store" target="_blank" rel="noopener noreferrer">
                                    <button className="project-button"><SiGithub />GitHub Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="projects-outer">
                        <div className="projects">
                            <div className="purple-line-container-project">
                                <div className="purple-line-project"></div>
                            </div>
                            <div className="project-heading">
                                <div className="project-title">
                                    <h1 className="project-title-main">St. Josephs <span className="bar">|</span>
                                        <span className="project-title-secondary"> Landing Page Design</span>
                                    </h1>
                                </div>
                                <div className="project-description">
                                    <p>St. Josephs MHSS is my alma mater, an excellent school with best management for both academics and sports.</p>
                                </div>
                                <div className="project-stack">
                                    <div className="stack-item"><FaHtml5 /><p>CSS</p></div>
                                    <div className="stack-item"><FaCss3Alt /><p>CSS</p></div>
                                    <div className="stack-item"><FaPhp /><p>PHP</p></div>
                                    <div className="stack-item"><FaJsSquare /><p>Javascript</p></div>
                                </div>
                            </div>
                            <div className="project-image">
                                <a href="https://www.stjosephsondipudur.com/" target="_blank" rel="noopener noreferrer">
                                    <img src={sjmhss} alt="Journal App Demo"></img>
                                </a>
                            </div>
                            <div className="project-footer">
                                <a href="https://www.stjosephsondipudur.com/" target="_blank" rel="noopener noreferrer">
                                    <button className="project-button"><MdOutlineLaunch />Live Website</button>
                                </a>
                                <a href="https://github.com/aswinlegarcon/School-Website-St.Josephs" target="_blank" rel="noopener noreferrer">
                                    <button className="project-button"><SiGithub />GitHub Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="projects-outer">
                        <div className="projects">
                            <div className="purple-line-container-project">
                                <div className="purple-line-project"></div>
                            </div>
                            <div className="project-heading">
                                <div className="project-title">
                                    <h1 className="project-title-main">FUEL <span className="bar">|</span>
                                        <span className="project-title-secondary"> Page Design</span>
                                    </h1>
                                </div>
                                <div className="project-description">
                                    <p>Fuel is a merit-based scholarship program offering students financial aid, expert mentoring, skill training and internships.</p>
                                </div>
                                <div className="project-stack">
                                    <div className="stack-item"><FaPhp /><p>PHP</p></div>
                                    <div className="stack-item"><FaCss3Alt /><p>CSS</p></div>
                                    <div className="stack-item"><FaJsSquare /><p>Javascript</p></div>
                                </div>
                            </div>
                            <div className="project-image">
                                <a href="https://fuelmyfuture.org/" target="_blank" rel="noopener noreferrer">
                                    <img src={fuel} alt="Journal App Demo"></img>
                                </a>
                            </div>
                            <div className="project-footer">
                                <a href="https://fuelmyfuture.org/" target="_blank" rel="noopener noreferrer">
                                    <button className="project-button"><MdOutlineLaunch />Live Website</button>
                                </a>
                                <a href="https://github.com/aswinlegarcon/project_fuel.git" target="_blank" rel="noopener noreferrer">
                                    <button className="project-button"><SiGithub />GitHub Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="projects-outer">
                        <div className="projects">
                            <div className="purple-line-container-project">
                                <div className="purple-line-project"></div>
                            </div>
                            <div className="project-heading">
                                <div className="project-title">
                                    <h1 className="project-title-main">My Portfolio <span className="bar">|</span>
                                        <span className="project-title-secondary"> Page Design</span>
                                    </h1>
                                </div>
                                <div className="project-description">
                                    <p>My portfolio is one of my favourite works, encompassing all my coding and UI/UX skills.</p>
                                </div>
                                <div className="project-stack">
                                    <div className="stack-item"><FaReact /><p>React</p></div>
                                    <div className="stack-item"><FaJsSquare /><p>Javascript</p></div>
                                    <div className="stack-item"><SiTailwindcss /><p>Tailwind</p></div>
                                    <div className="stack-item"><FaCss3Alt /><p>CSS</p></div>
                                </div>
                            </div>
                            <div className="project-image">
                                <a href="/">
                                    <img src={portfolio} alt="Journal App Demo"></img>
                                </a>
                            </div>
                            <div className="project-footer">
                                <a href="/">
                                    <button className="project-button"><MdOutlineLaunch />Live Website</button>
                                </a>
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <button className="project-button"><SiGithub />GitHub Repo</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </Card>

                <Card>
                    <div className="projects-outer">
                        <div className="projects">
                            <div className="purple-line-container-project">
                                <div className="purple-line-project"></div>
                            </div>
                            <div className="project-heading">
                                <div className="project-title">
                                    <h1 className="project-title-main">Journal App <span className="bar">|</span>
                                        <span className="project-title-secondary"> In-Progress</span>
                                    </h1>
                                </div>
                                <div className="project-description">
                                    <p>A cloud based journal application which helps users to keep track of their day and maintain productivity.</p>
                                </div>
                                <div className="project-stack">
                                    <div className="stack-item"><FaReact /><p>React</p></div>
                                    <div className="stack-item"><SiFirebase /><p>FireBase</p></div>
                                    <div className="stack-item"><FaJsSquare /><p>Javascript</p></div>
                                    <div className="stack-item"><FaCss3Alt /><p>CSS</p></div>
                                </div>
                            </div>
                            <div className="project-image">
                                <a href="https://www.example.com/journal-app-demo" target="_blank" rel="noopener noreferrer">
                                    <img src={journal} alt="Journal App Demo"></img>
                                </a>
                            </div>
                            <div className="project-footer">
                                
                                    <button className="project-button"><FaSpinner className="spinner-icon" />In Progress</button>
                                {/* <a href="https://github.com/yourusername/journal-repo" target="_blank" rel="noopener noreferrer">
                                    <button className="project-button"><SiGithub />GitHub Repo</button>
                                </a> */}
                            </div>
                        </div>
                    </div>
                </Card>

                <div className='project-para'>"Jack of all trades, master of none, but oftentimes better than a master of one."</div>
            </div>
        </div>
    )
};

export default Projects;