import Projects from "../Projects/Projects"
import "./Home.css"
import React from 'react'


const Home = () => {
  return (
    
    <>
    <Projects/>
    <section className="home">
      <p>Hola, Soy</p>
      <h2>Fullstack Developer</h2>
      <p>Me dedico al FullStack a partir de Javascript, donde implemento mis habilidades en las distintas<br></br>
         tecnologías tanto en la parte Front-end como en la parte Back-end para poder manejar e dirigir los datos deseados<br></br> y su diseño acorde con las características de la aplicación buscada.</p>
      <a href="mailto:marmateodvlpr@gmail.com">e-mail →</a>
      </section>
   </>



  )
}

export default Home