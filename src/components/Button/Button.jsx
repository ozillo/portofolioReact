import "./Button.css"
import React from 'react'

const Button = (icon,text) => {
  return (
    <button className="my-btn">
    <img src={icon} alt={text} />
    <h4>{text}</h4>
    </button>
  )
}

export default Button