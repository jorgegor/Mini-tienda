import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({ logueado, onToggleLogin }) {
    return (
        <header className="topbar">
            <div className="brand-block">
                <div>
                    <h1 className="brand-title">Mini Tienda</h1>
                </div>
            </div>

            <nav className="nav-links" aria-label="Navegación principal">
                <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                    Home
                </NavLink>
                <NavLink to="/productos" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                    Productos
                </NavLink>
                <NavLink to="/contacto" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                    Contacto
                </NavLink>
                <NavLink to="/admin" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                    Admin
                </NavLink>
            </nav>

            <button type="button" className="login-btn" onClick={onToggleLogin}>
                {logueado ? 'Cerrar sesión' : 'Iniciar sesión'}
            </button>
        </header>
    )
}

export default Navbar