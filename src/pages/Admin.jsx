import React from 'react'

function Admin() {
    return (
        <section className="panel admin-panel">
            <p className="section-label">Admin</p>
            <h2>Zona protegida</h2>
            <p>
                El acceso depende del estado de sesión que vive en <strong>App.jsx</strong>, como pedía el reto.
            </p>
            <div className="admin-stats">
                <article>
                    <span>Pedidos</span>
                    <strong>24</strong>
                </article>
                <article>
                    <span>Productos</span>
                    <strong>9</strong>
                </article>
                <article>
                    <span>Usuarios</span>
                    <strong>12</strong>
                </article>
            </div>
        </section>
    )
}

export default Admin