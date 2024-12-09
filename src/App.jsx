import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'


// function App() {
//   const [showHome, setShowHome] = useState(true);

//   return (
//    <>
//    <Header/>
//     <main>
//       <div className='All-btn'>
//           <button
//               className="custom-btn"
//               onClick={() => setShowHome(true)}
//             >
//               Home
//             </button>
            
//           <button
//               className="custom-btn"
//               onClick={() => setShowHome(false)}
//             >
//               Proyectos
//           </button>
//       </div>
//             <div>
//         {showHome ? (
//           <Home home={Home} />
//         ) : (
//           <Projects projects={Projects} />
//         )}
//         </div>
//     </main>
//     <Footer/>
   
//    </>
//   )

   
// }

// export default App

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
            Home
          </button>
          <button
            className="custom-btn"
            onClick={() => setActiveComponent('projects')}
          >
            Proyectos
          </button>
          <button
            className="custom-btn"
            onClick={() => setActiveComponent('skills')}
          >
            Habilidades
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

