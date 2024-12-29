import "./Home.css";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="content">
          <img
            className="imgPerfil"
            src="https://res.cloudinary.com/dw9b8eqmc/image/upload/v1724336926/Captura_de_pantalla_2024-08-22_a_las_16.28.09_novftw.png"
            alt="imgCard"
          />
          <div className="text">
            <h2>Frontend Developer</h2>
            <p>
              Me dedico al FullStack a partir de Javascript, donde implemento mis habilidades en las distintas
              <br />
              tecnologías tanto en la parte Front-end como en la parte Back-end para poder manejar y dirigir los datos
              deseados
              <br />
              y su diseño acorde con las características de la aplicación buscada.
            </p>
            <a href="mailto:marmateodvlpr@gmail.com">e-mail →</a>
          </div>
        </div>
        <span></span>
      </section>
    </>
  );
};

export default Home;
