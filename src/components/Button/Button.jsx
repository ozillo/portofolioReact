import "./Button.css"
import React from 'react'

const Button = (icon,text) => {
  return (
    <button class="my-btn">
    <img src={icon} alt={text} icon/>
    <h4>{text}</h4>
    </button>
  )
}

export default Button