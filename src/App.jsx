import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'

function App() {


  return (
   <>
   <Header/>
    <main>
    <Home/>
    <AboutMe/>
    <Skills/>
    <Experience/>
    </main>
    <Footer/>
   
   </>
  )

   
}

export default App
