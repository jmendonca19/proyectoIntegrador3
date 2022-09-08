import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <>
        <header className="header">
        <div className="contenedor">
            <a><h2 className="logotipo">pelisYa</h2></a>
            <div className="buscador">
                <form method="GET">
                        <input className= "search" type="text" name="buscador" placeholder="Buscador..." value="" />
                        <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>

            <nav className="nav-bar">
                <ul className="listaNav">
                    <li><a>Home</a></li>
                    <li><a>Series</a></li>
                    <li><a>Peliculas</a></li>
                    <li><a>Favoritos</a></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  )
}
