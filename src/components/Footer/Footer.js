import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <>
        <footer className="footer">
        <h2 className="logotipo">pelisYa</h2>
        <div className="conocenos">
            <h2>¡Conoce a los creadores!</h2>
            <a>Ivan Fischman</a>
            <a>Juana Mendonca</a>
            <a>Joaquin Knez</a>
        </div>

        <div className="tmdb">
            <p><small>Featured by The Movie DataBase</small></p>
            <a>
                <img className="imgTmdb" src="./logoDMDB.svg" alt="Logo TMDB" />
            </a>
        </div>
    </footer>
    </>
  )
}
