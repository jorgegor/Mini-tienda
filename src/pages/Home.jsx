import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <section className="home-hero">
            <article className="hero-card hero-intro">
                <p className="section-label">Inicio</p>
                <h2>Mini tienda.</h2>
                <div className="hero-actions">
                    <Link className="primary-btn" to="/productos">
                        Ver productos
                    </Link>
                    <Link className="secondary-btn" to="/contacto">
                        Ir a contacto
                    </Link>
                </div>
            </article>
        </section>
    )
}

export default Home