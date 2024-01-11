import "./NavBar.css"
import React from 'react'

const NavBar = () => {
  const changeTheme = () => {
    document.body.classList.toggle("light");
    changeText(); 
  };
  
     const changeText = () => {
    let themeBtn = document.querySelector("#themeBtn");
    if (themeBtn.innerText === "☀") {
      themeBtn.innerText = "☾";
    } else {
      themeBtn.innerText = "☀";
    }
  };
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
          <button onClick={()=>changeTheme()} id="themeBtn">☀</button>
       </li>
  </ul>
  </nav>
  )
}

export default NavBar