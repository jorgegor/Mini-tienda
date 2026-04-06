import React from 'react'

function Contacto() {
    return (
        <section className="panel contact-layout">
            <div>
                <p className="section-label">Contacto</p>
                <h2>Escríbenos si necesitas ayuda con tu pedido.</h2>
                <p>

                </p>
            </div>

            <form className="contact-form">
                <label>
                    Nombre
                    <input type="text" name="nombre" placeholder="Tu nombre" />
                </label>
                <label>
                    Correo
                    <input type="email" name="correo" placeholder="tu@email.com" />
                </label>
                <label>
                    Mensaje
                    <textarea name="mensaje" rows="5" placeholder="Cuéntanos qué necesitas" />
                </label>
                <button type="submit" className="primary-btn">
                    Enviar mensaje
                </button>
            </form>
        </section>
    )
}

export default Contacto