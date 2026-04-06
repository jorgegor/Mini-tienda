import React from 'react'
import { Link } from 'react-router-dom'

const items = [
    {
        id: 1,
        nombre: 'Camiseta',
        precio: '$25.000',
        imagen: '/images/camiseta.jfif',
        alt: 'Camiseta blanca de algodón',
    },
    {
        id: 2,
        nombre: 'Zapatos',
        precio: '$80.000',
        imagen: '/images/zapatos.jfif',
        alt: 'Zapatos casuales negros',
    },
    {
        id: 3,
        nombre: 'Mochila',
        precio: '$55.000',
        imagen: '/images/mochila.webp',
        alt: 'Mochila negra con accesorios',
    },
    {
        id: 4,
        nombre: 'Gorra',
        precio: '$18.000',
        imagen: '/images/Gorra.jfif',
        alt: 'Gorra deportiva gris',
    },
    {
        id: 5,
        nombre: 'Chaqueta',
        precio: '$120.000',
        imagen: '/images/chaqueta.jfif',
        alt: 'Chaqueta ligera gris',
    },
    {
        id: 6,
        nombre: 'Audífonos',
        precio: '$65.000',
        imagen: '/images/audifonos.jfif',
        alt: 'Audífonos inalámbricos grises',
    },
    {
        id: 7,
        nombre: 'Termo',
        precio: '$32.000',
        imagen: '/images/termo.jfif',
        alt: 'Termo color marrón',
    },
    {
        id: 8,
        nombre: 'Lentes',
        precio: '$45.000',
        imagen: '/images/lentes.jfif',
        alt: 'Lentes redondos',
    },
    {
        id: 9,
        nombre: 'Reloj',
        precio: '$90.000',
        imagen: '/images/reloj.jfif',
        alt: 'Reloj clásico',
    },
]

function Productos() {
    return (
        <section className="panel">
            <div className="panel-head">
                <p className="section-label">Catálogo</p>
                <h2>Productos</h2>
            </div>

            <div className="product-grid">
                {items.map((item) => (
                    <article key={item.id} className="product-card">
                        <div className="product-media">
                            <img className="product-image" src={item.imagen} alt={item.alt} />
                        </div>
                        <span className="product-badge">#{item.id}</span>
                        <h3>{item.nombre}</h3>
                        <p className="product-price">{item.precio}</p>
                        <Link className="text-link" to={`/productos/${item.id}`}>
                            Ver
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Productos