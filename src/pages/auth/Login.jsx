const Login = () => {
    return (
        <>
            {/* Logo y Título */}
            <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Mi Negocio</h1>
                <p className="text-gray-600">Inicia sesión en tu cuenta</p>
            </div>
            {/* Formulario de Login */}
            <form id="loginForm" className="space-y-6">
                {/* Campo Email */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Correo Electrónico
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="tu@email.com"
                            required=""
                        />
                    </div>
                    <div id="email-error" className="hidden mt-1 text-sm text-red-600">
                        Por favor, ingresa un email válido
                    </div>
                </div>
                {/* Campo Password */}
                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-2"
                    >
                        Contraseña
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                            placeholder="••••••••"
                            required=""
                        />
                        <button
                            type="button"
                            id="togglePassword"
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            <svg
                                id="eyeIcon"
                                className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div id="password-error" className="hidden mt-1 text-sm text-red-600">
                        La contraseña debe tener al menos 6 caracteres
                    </div>
                </div>
                {/* Olvidé contraseña */}
                <div className="text-right">
                    <a
                        href="#"
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
                {/* Botón de Login */}
                <div>
                    <button
                        type="submit"
                        id="loginButton"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span id="loginText">Iniciar Sesión</span>
                        <svg
                            id="loadingIcon"
                            className="hidden animate-spin -mr-1 ml-3 h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx={12}
                                cy={12}
                                r={10}
                                stroke="currentColor"
                                strokeWidth={4}
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                    </button>
                </div>
                {/* Mensaje de Error General */}
                <div
                    id="general-error"
                    className="hidden p-3 bg-red-50 border border-red-200 rounded-lg"
                >
                    <div className="flex">
                        <svg
                            className="h-5 w-5 text-red-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <div className="ml-3">
                            <p className="text-sm text-red-800" id="error-message">
                                Email o contraseña incorrectos
                            </p>
                        </div>
                    </div>
                </div>
            </form>
            {/* Divider */}
            <div className="mt-6">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">¿No tienes cuenta?</span>
                    </div>
                </div>
            </div>
            {/* Link de Registro */}
            <div className="mt-6 text-center">
                <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                    Crear una cuenta nueva
                </a>
            </div>
        </>

    )
}

export default Login