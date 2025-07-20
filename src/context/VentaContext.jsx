import { useMemo } from "react";
import { createContext, useState } from "react";

const VentaContext = createContext();

export const VentaProvider = ({ children }) => {

    const [productosSeleccionados, setProductosSeleccionados] = useState([]);
    const IVA = 0.18

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

    const aumentarCantidad = (producto) => {
        if (producto.cantidad !== producto.stock) {
            setProductosSeleccionados(prew => prew.map(p => p.id === producto.id ? {...p, cantidad: p.cantidad + 1} : p))
        }
        
    }

    const disminuirCantidad = (producto) => {
        if (producto.cantidad === 1) return;
        setProductosSeleccionados(prew => prew.map(p => p.id === producto.id ? {...p, cantidad: p.cantidad - 1} : p));
    }

    const eliminarProducto = (producto) => {
        setProductosSeleccionados(prew => prew.filter(p => p.id !== producto.id));
    }

    const calcularSubTotal = useMemo(() => {
        return productosSeleccionados.reduce((ac, producto) => ac + producto.precio * producto.cantidad, 0);
    }, [productosSeleccionados])

    const calcularIVA = useMemo(() => {
        return parseFloat(calcularSubTotal * IVA).toFixed(2)
    }, [productosSeleccionados])

    const calcularTotal = useMemo(() => {
        return parseFloat(productosSeleccionados.reduce((ac, producto) => ac + (producto.precio * producto.cantidad) + (producto.precio * producto.cantidad * IVA) ,0)).toFixed(2)
    }, [productosSeleccionados])

    return (
        <VentaContext.Provider value={{
            productosSeleccionados,
            setProductosSeleccionados,
            agregarProducto,
            aumentarCantidad,
            disminuirCantidad,
            eliminarProducto,
            calcularSubTotal,
            calcularIVA,
            calcularTotal
        }}>
            {children}
        </VentaContext.Provider>
    )
}

export default VentaContext;