import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Projects from './components/Projects/Projects'


function App() {
  const [showHome, setShowHome] = useState(true);

  return (
   <>
   <Header/>
    <main>
      <div className='All-btn'>
          <button
              className="custom-btn"
              onClick={() => setShowHome(true)}
            >
              Home
            </button>
            
          <button
              className="custom-btn"
              onClick={() => setShowHome(false)}
            >
              Proyectos
          </button>
      </div>
            <div>
        {showHome ? (
          <Home home={Home} />
        ) : (
          <Projects projects={Projects} />
        )}
        </div>
    </main>
    <Footer/>
   
   </>
  )

   
}

export default App
