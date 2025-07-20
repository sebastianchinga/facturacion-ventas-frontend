import { createContext, useState } from "react";

const VentaContext = createContext();

export const VentaProvider = ({ children }) => {

    const [productosSeleccionados, setProductosSeleccionados] = useState([]);

    const agregarProducto = (producto) => {
        const existe = productosSeleccionados.some(p => p.id === producto.id);

        producto.cantidad = 1
        if (existe) {
            const nuevoArray = productosSeleccionados.map(p => {
                if (p.id === producto.id) {
                    return {...p, cantidad: p.cantidad + 1}
                } else {
                    return p
                }
            })
            setProductosSeleccionados(nuevoArray);
        } else {
            setProductosSeleccionados([...productosSeleccionados, producto])
        }
    }

    return (
        <VentaContext.Provider value={{
            productosSeleccionados,
            agregarProducto
        }}>
            {children}
        </VentaContext.Provider>
    )
}

export default VentaContext;