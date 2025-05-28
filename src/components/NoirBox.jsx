import React, { useState, useEffect } from "react";
import { FaJava, FaDocker, FaGithub, FaHtml5, FaReact, FaAws } from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiSpringboot,
  SiFirebase,
  SiMysql,
  SiCss3,
} from "react-icons/si";
import Badge from './Badge.jsx';
import "../css/NoirBox.css";

function NoirBox() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const technologies = [
    { icon: <SiCplusplus />, color: "#659AD2" },
    { icon: <FaJava />, color: "#5382A1" },
    { icon: <SiJavascript />, color: "#F7DF1E" },
    { icon: <FaReact />, color: "#61DAFB" },
    { icon: <SiSpringboot />, color: "#6DB33F" },
    { icon: <FaAws />, color: "#FF9900" },
    { icon: <SiFirebase />, color: "#FFCA28" },
    { icon: <SiMysql />, color: "#4479A1" },
    { icon: <FaHtml5 />, color: "#E34F26" },
    { icon: <SiCss3 />, color: "#1572B6" },
    { icon: <FaDocker />, color: "#2496ED" },
    { icon: <FaGithub />, color: "#181717" },
  ];

  const displayTechnologies = isDesktop ? [...technologies, ...technologies] : technologies;

  return (
    <div className="noir-wrapper">
      <div className="purple-line-container-technologies">
        <div className="purple-line-technologies"></div>
      </div>
      <div className="noir-container-outer">
        <Badge>
          <span className="badge-star">✦</span>Expertise
        </Badge>
        <div className="noir-container">
          {displayTechnologies.map((tech, index) => (
            <div className="noir-outer" key={index}>
              <div className="noir-card-wrapper">
                <div
                  className="noir-card-content card-content"
                  style={{ "--hover-color": tech.color }}
                >
                  <div className="noir-icon">{tech.icon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NoirBox;