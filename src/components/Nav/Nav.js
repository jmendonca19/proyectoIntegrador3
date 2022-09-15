import React from 'react' 
import {Link} from 'react-router-dom'
import "./Nav.css"

export default function Navigator() {
  return (
        <nav className="nav-bar">
                <ul className="listaNav">
                    <li>
                        <Link className="nav-item" to="/"> Home </Link> 
                    </li>
                    <li>
                        <Link className="nav-item" to="/favoritos"> Favoritos </Link> 
                    </li>
                    <li>
                        <Link className="nav-item" to="/peliculas"> Peliculas </Link> 
                    </li>
                    
                </ul>
            </nav>
  )
}
