import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <Outlet />
                </div>

                {/* Footer */}
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-600">
                        © 2025 Mi Negocio. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout