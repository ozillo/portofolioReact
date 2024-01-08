import Button from "../Button/Button"
import "./Footer.css"
import React from 'react'

const Footer = () => {
  return (
    <footer>
    
    <h2>Marc Mateo Developer 2024</h2>
<div>
{Button("/icons/codepen.png", "CodePen")}
{Button("/icons/github.png", "GitHub")}
{Button("/icons/linkedin.png", "LinkedIn")}
</div>
    
    </footer>
  )
}

export default Footer