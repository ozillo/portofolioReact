import Button from "../Button/Button"
import "./Footer.css"
import React from 'react'

const Footer = () => {
  return (
    <footer>
    
    <h2>Contacto</h2>
<div>
{Button("https://res.cloudinary.com/dw9b8eqmc/image/upload/v1700336471/PortofolioMarcMateo/codepen_ntobak.png", "CodePen")}
{Button("https://res.cloudinary.com/dw9b8eqmc/image/upload/v1700336404/PortofolioMarcMateo/logotipo-de-github_ca1hvx.png", "GitHub")}
{Button("https://res.cloudinary.com/dw9b8eqmc/image/upload/v1700336575/PortofolioMarcMateo/linkedin-logo-png-2026_fwo79r.png", "LinkedIn")}
</div>
    
    </footer>
  )
}

export default Footer