import { createContext, useEffect, useState } from "react";
import clienteAxios from "../config/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({})
    const [cargando, setCargando] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const autenticar = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setCargando(false);
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const {data} = await clienteAxios.get('/usuarios/perfil', config);
                setAuth(data);
            } catch (error) {
                setAuth({})
            }
            setCargando(false);
        }
        autenticar();
    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        setAuth({});
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{
            auth,
            cargando,
            setAuth,
            cerrarSesion
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext