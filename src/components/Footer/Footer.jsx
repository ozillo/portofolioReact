import React from "react";
import { FaCodepen, FaGithub, FaLinkedin } from "react-icons/fa"; // Importa los iconos necesarios
import "./Footer.css";


const Footer = () => {
  return (
    <footer>

      <div>
        <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer" className="icon-button">
          <FaCodepen size={40} /> {/* Icono de CodePen */}
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon-button">
          <FaGithub size={40} /> {/* Icono de GitHub */}
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="icon-button">
          <FaLinkedin size={40} /> {/* Icono de LinkedIn */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;