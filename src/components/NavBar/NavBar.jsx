import "./NavBar.css"

import React from 'react'

const NavBar = () => {
  return (
    <nav>
  <h2>Marc Mateo</h2>
  <ul>
      <li>
          <a href="#" id="homelink">Home</a>
      </li>
      <li>
          <a href="#" id="projectslink">Proyectos</a>
      </li>
      <li>
          <button id="themeBtn">☀</button>
      </li>
  </ul>
  </nav>
  )
}

export default NavBar