import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaWordpress,
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiMysql, 
  SiAdobeillustrator, 
  SiAdobephotoshop, 
  SiAdobeaftereffects, 
  SiAdobexd 
} from "react-icons/si";
import "./AnimatedIcons.css";

const AnimatedIcons = () => {
  const icons = [
    <FaReact />,
    <FaJs />,
    <FaHtml5 />,
    <FaCss3Alt />,
    <SiNextdotjs />,
    <FaSass />,
    <SiMongodb />,
    <SiMysql />,
    <FaWordpress />,
    <SiAdobeillustrator />,
    <SiAdobephotoshop />,
    <SiAdobeaftereffects />,
    <SiAdobexd />,
  ];

  return (
    <div className="icon-container">
      {icons.map((icon, index) => (
        <div className="icon" key={index}>
          {icon}
        </div>
      ))}
    </div>
  );
};

export default AnimatedIcons;
