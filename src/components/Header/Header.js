import React from 'react'
import Navigator from '../Nav/Nav'
import "./Header.css"

export default function Header() {
  return (
    <>
    <header className="header">
        <div className="contenedor">
            <h2 className="logotipo">pelisYa</h2>
            <div className="buscador">
                <form method="GET">
                        <input className= "search" type="text" name="buscador" placeholder="Buscador..." value="" />
                        <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div> 
        <Navigator/>
        </div>
    </header>
    </>
  )
}
