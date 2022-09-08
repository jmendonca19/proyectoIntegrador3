import React from 'react' 
import {Link} from 'react-router-dom'
import "./Nav.css"

export default function Navigator() {
  return (
        <nav className="nav-bar">
                <ul className="listaNav">
                    <li className="nav-item">
                        <Link to="/"> Home </Link> 
                    </li>
                    <li className="nav-item">
                        <Link to="/"> Favoritos </Link> 
                    </li>
                    <li className="nav-item">
                        <Link to="/"> Ver más </Link> 
                    </li>
                    
                </ul>
            </nav>
  )
}
