import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

function App() {


  return (
   <>
   <Header/>
    <main>
    <Home/>
    <Skills/>
    <Projects/>
    </main>
    <Footer/>
   
   </>
  )

   
}

export default App
