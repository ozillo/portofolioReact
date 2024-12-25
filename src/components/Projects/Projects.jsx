import React, { useEffect, useState } from "react";
import "./Projects.css";
import { data } from "../../data/data";
// Importamos los iconos de React Icons
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    // Escuchar cambios en la clase "light" en el body
    const observer = new MutationObserver(() => {
      setIsLightTheme(document.body.classList.contains("light"));
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`projects-section ${isLightTheme ? "light-theme" : "dark-theme"}`}>
      {data.map((project) => (
        <figure className="figureProjects" key={project.title}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <img className="imgFigure" src={project.image} alt="imgCard" />
          <p>{project.tech}</p>
          <p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-icon">
              <FaGithub className="icon" /> GitHub
            </a>
          </p>
          <p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-icon">
              <FaExternalLinkAlt className="icon" /> Live Demo
            </a>
          </p>
        </figure>
      ))}
    </section>
  );
};

export default Projects;
