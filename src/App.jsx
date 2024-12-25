import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
// Importar iconos de React Icons
import { FaHome, FaProjectDiagram, FaTools } from 'react-icons/fa';

function App() {
  const [activeComponent, setActiveComponent] = useState('home'); // Puede ser 'home', 'projects', o 'habilidades'.

  return (
    <>
      <Header />
      <main>
        <div className="All-btn">
          <button
            className={`custom-btn ${activeComponent === 'home' ? 'active' : ''}`}
            onClick={() => setActiveComponent('home')}
          >
            <FaHome className="icon" /> Home
          </button>
          <button
            className={`custom-btn ${activeComponent === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveComponent('projects')}
          >
            <FaProjectDiagram className="icon" /> Proyectos
          </button>
          <button
            className={`custom-btn ${activeComponent === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveComponent('skills')}
          >
            <FaTools className="icon" /> Habilidades
          </button>
        </div>

        <div>
          {activeComponent === 'home' && <Home />}
          {activeComponent === 'projects' && <Projects />}
          {activeComponent === 'skills' && <Skills />}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
