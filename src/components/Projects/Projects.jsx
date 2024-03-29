import { data } from "../../data/data"
import "./Projects.css"
import React from 'react'


const Projects = () => {
  return (
   
  
   <section className="projects-section">
    <h1 className="projectsH1">Proyectos</h1>
    <span className="divider"></span>
    
      {data.map((project)=>{
        return (
          <figure className="figureProjects">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <img className="imgFigure" src={project.image} alt="imgCard"/>
          <p>{project.tech}</p>
          <p>{project.github}</p>
          <p>{project.link}</p>
        </figure>
        )
      })
      
      }
   </section>
   
  )
}

export default Projects