import React from 'react'
import Navigator from '../Nav/Nav'
import "./Header.css"


export default function Header() {
  return (
    <>
    <header className="header">
        <div className="contenedor">
            <h2 className="logotipo">pelisYa</h2>
            
        <Navigator/>
        </div>
    </header>
    </>
  )
}

