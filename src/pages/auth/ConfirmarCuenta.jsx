import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import clienteAxios from "../../config/axios";
import Alerta from "../../components/Alerta";

const ConfirmarCuenta = () => {
    const { token } = useParams();
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [alerta, setAlerta] = useState({});

    useEffect(() => {
        const confirmar = async () => {
            try {
                const { data } = await clienteAxios.get(`/usuarios/confirmar/${token}`);
                setCuentaConfirmada(true)
                setAlerta({
                    msg: data.msg
                })
            } catch (error) {
                setAlerta({
                    error: true,
                    msg: error.response.data.msg
                })
            }
            setCargando(false);
        }
        confirmar();
    }, [])

    const { msg } = alerta

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
            {cargando && (
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
            )}

            {/* Alerta de Éxito */}
            {msg && <Alerta alerta={alerta} />}
            {/* Botones de Acción */}
            {cuentaConfirmada && (
                <div className="space-y-3">
                    {/* Botón Ir a Iniciar Sesión */}
                    <Link to="/" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 mt-2">
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
                        Ir a Iniciar Sesión
                    </Link>
                </div>
            )}
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