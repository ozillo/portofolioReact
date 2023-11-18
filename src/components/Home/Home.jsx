import "./Home.css"

import React from 'react'

const Home = () => {
  return (
   <section className="home-section">
    <div className="aboutMe">
      <h1>Hola, soy Marc Mateo</h1>
      <h2>FullStack Developer</h2>
    </div>
    <div className="logo">
      <img 
      src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1699904682/PortofolioMarcMateo/LOGOTEMPLATE_ccohy5.png" alt="logo" className="logo"/>
      
      </div>
   </section>
  )
}

export default Home