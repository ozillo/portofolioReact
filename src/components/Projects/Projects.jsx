import { data } from "../../data/data";
import "./Projects.css";
import React from 'react';

const Projects = () => {
  return (
    <div>
      <section className="projects-section">
        {/* <h1 className="projectsH1">Proyectos</h1>
        <span className="divider"></span> */}

        {data.map((project) => {
          return (
            <figure className="figureProjects" key={project.title}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <img className="imgFigure" src={project.image} alt="imgCard" />
              <p>{project.tech}</p>
              <p>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </p>
              <p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </p>
            </figure>
          );
        })}
      </section>

      <section className="cards-wrapper">
        <div className="card-grid-space">
          <a
            className="card"
            href="https://frontend-final-project-ip0mr7t7q.vercel.app/"
            style={{ backgroundImage: "url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)" }}
          >
            <div>
              <h1>DevLink</h1>
              <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
              <div className="tags">
                <div className="tag">HTML</div>
                <div className="tag">CSS</div>
                <div className="tag">REACT</div>
                <div className="tag">NODEJS</div>
              </div>
            </div>
          </a>
        </div>

        <div className="card-grid-space">
          <a
            className="card"
            href="http://xn--sacfloristeria-hsb.cat/"
            style={{ backgroundImage: "url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg')" }}
          >
            <div>
              <h1>Saüc Floristeria</h1>
              <p>Learn about some of the most common HTML tags…</p>
              <div className="tags">
                <div className="tag">WORDPRESS</div>
                <div className="tag">PHP</div>
              </div>
            </div>
          </a>
        </div>

        <div className="card-grid-space">
          <a
            className="card"
            href="https://femcami.cat/"
            style={{ backgroundImage: "url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg')" }}
          >
            <div>
              <h1>Fem cami</h1>
              <p>Learn how to use links and images along with file paths…</p>
              <div className="tags">
                <div className="tag">HTML</div>
                <div className="tag">CSS</div>
                <div className="tag">REACT</div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;