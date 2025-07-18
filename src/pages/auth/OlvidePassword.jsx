const OlvidePassword = () => {
    return (
        <>
            {/* Logo y Título */}
            <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
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
                            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        ></path>
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Recuperar Cuenta</h1>
                <p className="text-gray-600 text-sm">
                    Ingresa tu email para restablecer tu contraseña
                </p>
            </div>
            {/* Instrucciones */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex">
                    <svg
                        className="h-5 w-5 text-blue-400 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <div className="ml-3">
                        <p className="text-sm text-blue-800">
                            Te enviaremos un enlace de recuperación a tu correo electrónico para
                            que puedas crear una nueva contraseña.
                        </p>
                    </div>
                </div>
            </div>
            {/* Formulario de Recuperación */}
            <form id="recoveryForm" className="space-y-6">
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
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                            placeholder="tu@email.com"
                            required=""
                        />
                    </div>
                    <div id="email-error" className="hidden mt-1 text-sm text-red-600">
                        Por favor, ingresa un email válido
                    </div>
                </div>
                {/* Botón de Enviar Email */}
                <div>
                    <button
                        type="submit"
                        id="sendButton"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span id="sendText">Enviar Email de Recuperación</span>
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
                                No encontramos una cuenta con este email
                            </p>
                        </div>
                    </div>
                </div>
                {/* Mensaje de Éxito */}
                <div
                    id="success-message"
                    className="hidden p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                    <div className="flex">
                        <svg
                            className="h-5 w-5 text-green-400 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-green-800">
                                ¡Email enviado exitosamente!
                            </h3>
                            <p className="text-sm text-green-700 mt-1">
                                Revisa tu bandeja de entrada y sigue las instrucciones para
                                restablecer tu contraseña.
                            </p>
                        </div>
                    </div>
                </div>
            </form>
            {/* Información adicional después del éxito */}
            <div id="additional-info" className="hidden mt-6 space-y-4">
                {/* Reenviar email */}
                <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">¿No recibiste el email?</p>
                    <button
                        id="resendButton"
                        className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span id="resendText">Reenviar email</span>
                        <span id="resendTimer" className="hidden">
                            {" "}
                            (30s)
                        </span>
                    </button>
                </div>
                {/* Consejos */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <div className="flex">
                        <svg
                            className="h-5 w-5 text-yellow-400 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                            ></path>
                        </svg>
                        <div className="ml-3">
                            <p className="text-xs text-yellow-800">
                                <strong>Consejos:</strong> Revisa tu carpeta de spam. El email puede
                                tardar unos minutos en llegar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Divider */}
            <div className="mt-8">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">
                            ¿Recordaste tu contraseña?
                        </span>
                    </div>
                </div>
            </div>
            {/* Links de navegación */}
            <div className="mt-6 flex flex-col space-y-3 text-center">
                <a
                    href="#"
                    className="font-medium text-purple-600 hover:text-purple-700 transition-colors"
                >
                    Volver al inicio de sesión
                </a>
                <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                    ¿No tienes cuenta? Regístrate aquí
                </a>
            </div>
        </>

    )
}

export default OlvidePassword