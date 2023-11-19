import "./Home.css"

import React from 'react'

const Home = () => {
  return (
   <section className="home-section">
    <div className="aboutMe">
      <p>Hola, soy</p>
      <h1>Marc Mateo</h1>
      <h2>FullStack Developer</h2>
    </div>
    <div className="portrait">
      <img 
      src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1699208992/PortofolioMarcMateo/MarcFrontFondo_mdslsr.png" alt="logo" className="imgPortrait"/>
      
      </div>
   </section>
  )
}

export default Home