import { Link, useNavigate, useParams } from 'react-router-dom'
import Alerta from '../../components/Alerta'
import { useEffect, useState } from 'react'
import clienteAxios from '../../config/axios';

const CambiarPassword = () => {

    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');
    const [alerta, setAlerta] = useState({});

    const [verificado, setVerificado] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const verificarUsuario = async () => {
            try {
                const { data } = await clienteAxios.get(`/usuarios/olvide-password/${token}`);
                setVerificado(true);
            } catch (error) {
                setAlerta({
                    error: true,
                    msg: 'Hubo un error en el enlace'
                })
            }
        }
        verificarUsuario();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([password, confirmarPassword].includes("")) {
            setAlerta({
                error: true,
                msg: 'Completa los campos'
            })
            return;
        }

        if (password !== confirmarPassword) {
            setAlerta({
                error: true,
                msg: 'Los password no coinciden'
            })
            return;
        }

        try {
            const { data } = await clienteAxios.post(`/usuarios/olvide-password/${token}`, { password });
            setAlerta({
                msg: data.msg
            })
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            setAlerta({
                error: true,
                msg: 'Hubo un error al modificar el password'
            })
        }
    }

    const { msg } = alerta;

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
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        ></path>
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Mi Negocio</h1>
                <p className="text-gray-600">Cambiar tu contraseña</p>
            </div>

            {/* Formulario de Cambio de Contraseña */}
            {verificado && (
                <form id="changePasswordForm" className="space-y-6 mb-4" onSubmit={handleSubmit}>

                    {/* Campo Nueva Contraseña */}
                    <div>
                        <label
                            htmlFor="new-password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Nueva Contraseña *
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
                                        d="M15 7a2 2 0 012 2m0 0v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2m0 0V5a2 2 0 012-2h4a2 2 0 012 2v2M9 7h6"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                id="new-password"
                                name="new-password"
                                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                id="toggleNewPassword"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                <svg
                                    id="newEyeIcon"
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
                    </div>
                    {/* Campo Confirmar Nueva Contraseña */}
                    <div>
                        <label
                            htmlFor="confirm-password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Confirmar Nueva Contraseña *
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
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <input
                                value={confirmarPassword}
                                onChange={e => setConfirmarPassword(e.target.value)}
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                id="toggleConfirmPassword"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                            >
                                <svg
                                    id="confirmEyeIcon"
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
                    </div>
                    {/* Botón de Cambiar Contraseña */}
                    <div>
                        <button
                            type="submit"
                            id="changePasswordButton"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span id="changePasswordText">Cambiar Contraseña</span>
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

                </form>
            )}

            {/* Mensaje de Error General */}
            {msg && <Alerta alerta={alerta} />}

        </>

    )
}

export default CambiarPassword