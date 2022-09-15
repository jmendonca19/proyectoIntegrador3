import React from 'react'
import Navigator from '../Nav/Nav'
import "./Header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <header className="header">
        <div className="contenedor">
            <Link to="/">  <h2 className="logotipo">pelisYa</h2> </Link> 
        <Navigator/>
        </div>
    </header>
    </>
  )
}

