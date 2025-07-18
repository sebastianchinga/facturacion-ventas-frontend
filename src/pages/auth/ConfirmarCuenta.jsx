const ConfirmarCuenta = () => {
    return (
        <>
            {/* Logo y Título */}
            <div className="text-center mb-8">
                <div className="mx-auto w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-4">
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
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Mi Negocio</h1>
                <p className="text-gray-600">Confirma tu cuenta</p>
            </div>
            {/* Mensaje de Instrucciones */}
            <div className="text-center mb-6">
                <p className="text-gray-700 mb-4">
                    Estamos verificando tu cuenta. Por favor espera un momento...
                </p>
                {/* Spinner de carga */}
                <div id="loading-spinner" className="flex justify-center mb-4">
                    <svg
                        className="animate-spin h-8 w-8 text-teal-600"
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
                </div>
            </div>
            {/* Alerta de Éxito */}
            <div
                id="success-alert"
                className="hidden mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
            >
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <svg
                            className="h-6 w-6 text-green-400"
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
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-green-800">
                            ¡Cuenta confirmada!
                        </h3>
                        <p className="mt-1 text-sm text-green-700">
                            Tu cuenta ha sido verificada exitosamente. Ya puedes iniciar sesión.
                        </p>
                    </div>
                </div>
            </div>
            {/* Alerta de Error */}
            <div
                id="error-alert"
                className="hidden mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
            >
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <svg
                            className="h-6 w-6 text-red-400"
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
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">
                            Error de confirmación
                        </h3>
                        <p className="mt-1 text-sm text-red-700">
                            No se pudo confirmar tu cuenta. El enlace puede haber expirado o ser
                            inválido.
                        </p>
                    </div>
                </div>
            </div>
            {/* Botones de Acción */}
            <div className="space-y-3">
                {/* Botón Ir a Iniciar Sesión */}
                <button
                    id="login-button"
                    className="hidden w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                    onclick="goToLogin()"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                    </svg>
                    <span>Ir a Iniciar Sesión</span>
                </button>
                {/* Botón Reintentar (solo visible en error) */}
                <button
                    id="retry-button"
                    className="hidden w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                    onclick="retryConfirmation()"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        ></path>
                    </svg>
                    <span>Reintentar</span>
                </button>
                {/* Botón Solicitar Nuevo Enlace (solo visible en error) */}
                <button
                    id="resend-button"
                    className="hidden w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                    onclick="resendConfirmation()"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                    </svg>
                    <span>Solicitar Nuevo Enlace</span>
                </button>
            </div>
            {/* Información Adicional */}
            <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                    ¿Necesitas ayuda?
                    <a href="#" className="text-teal-600 hover:text-teal-700 underline">
                        Contacta soporte
                    </a>
                </p>
            </div>
        </>

    )
}

export default ConfirmarCuenta