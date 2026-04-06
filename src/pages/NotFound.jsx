import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="panel empty-state">
            <p className="section-label">404</p>
            <h2>Página no encontrada</h2>
            <p>La ruta solicitada no existe.</p>
            <Link className="primary-btn" to="/">
                Volver al inicio
            </Link>
        </section>
    );
}

export default NotFound;
