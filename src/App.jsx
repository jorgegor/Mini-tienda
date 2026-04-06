import React from 'react'
import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Detalle from './pages/Detalle'
import Contacto from './pages/Contacto'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'

function App() {
    const [logueado, setLogueado] = useState(false)

    return (
        <>
            <Navbar logueado={logueado} onToggleLogin={() => setLogueado((valor) => !valor)} />
            <main className="page-shell">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/productos/:id" element={<Detalle />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route
                        path="/admin"
                        element={logueado ? <Admin /> : <Navigate to="/" replace />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    )
}

export default App