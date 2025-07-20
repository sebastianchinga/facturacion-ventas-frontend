import { Navigate, Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const AdminLayout = () => {
  const { auth, cargando, cerrarSesion } = useAuth();

  if (cargando) return 'cargando...'

  return (
    <div className="bg-gray-50 min-h-screen">
      <>
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo y nombre del negocio */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-xl font-bold text-gray-900">Mi Negocio</h1>
                </div>
              </div>
              {/* Usuario y cerrar sesión */}
              <div className="flex items-center space-x-4">
                <div className="hidden md:block">
                  <span className="text-sm text-gray-700">
                    Bienvenido, <span className="font-medium">{auth.nombre}</span>
                  </span>
                </div>
                <button onClick={cerrarSesion} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* Contenido Principal */}
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {auth?.id ? <Outlet /> : <Navigate to='/' />}
        </main>
      </>

    </div>
  )
}

export default AdminLayout