import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const productos = {
    1: {
        nombre: 'Camiseta',
        precio: '$25.000',
        imagen: '/images/camiseta.jfif',
        alt: 'Camiseta blanca de algodón',
    },
    2: {
        nombre: 'Zapatos',
        precio: '$80.000',
        imagen: '/images/zapatos.jfif',
        alt: 'Zapatos casuales negros',
    },
    3: {
        nombre: 'Mochila',
        precio: '$55.000',
        imagen: '/images/mochila.webp',
        alt: 'Mochila negra con accesorios',
    },
    4: {
        nombre: 'Gorra',
        precio: '$18.000',
        imagen: '/images/Gorra.jfif',
        alt: 'Gorra deportiva gris',
    },
    5: {
        nombre: 'Chaqueta',
        precio: '$120.000',
        imagen: '/images/chaqueta.jfif',
        alt: 'Chaqueta ligera gris',
    },
    6: {
        nombre: 'Audífonos',
        precio: '$65.000',
        imagen: '/images/audifonos.jfif',
        alt: 'Audífonos inalámbricos grises',
    },
    7: {
        nombre: 'Termo',
        precio: '$32.000',
        imagen: '/images/termo.jfif',
        alt: 'Termo color marrón',
    },
    8: {
        nombre: 'Lentes',
        precio: '$45.000',
        imagen: '/images/lentes.jfif',
        alt: 'Lentes redondos',
    },
    9: {
        nombre: 'Reloj',
        precio: '$90.000',
        imagen: '/images/reloj.jfif',
        alt: 'Reloj clásico',
    },
}

function Detalle() {
    const { id } = useParams()
    const navigate = useNavigate()
    const producto = productos[id]

    if (!producto) {
        return (
            <section className="panel empty-state">
                <p>Producto no disponible</p>
                <button type="button" className="secondary-btn" onClick={() => navigate('/productos')}>
                    Volver al catálogo
                </button>
            </section>
        )
    }

    return (
        <section className="panel detail-layout">
            <div className="detail-info">
                <p className="section-label">Detalle</p>
                <h2>{producto.nombre}</h2>
            </div>

            <div className="detail-media">
                <img className="detail-image" src={producto.imagen} alt={producto.alt} />
            </div>

            <div className="detail-card">
                <p className="price-label">Precio</p>
                <strong className="price-value">{producto.precio}</strong>
                <button type="button" className="primary-btn">
                    Comprar
                </button>
                <button type="button" className="primary-btn" onClick={() => navigate(-1)}>
                    ← Volver
                </button>
            </div>
        </section>
    )
}

export default Detalle