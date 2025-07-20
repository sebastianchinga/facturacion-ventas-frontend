import { createContext, useState } from "react";
import clienteAxios from "../config/axios";

const ProductoContext = createContext();

export const ProductoProvider = ({ children }) => {

    const [productos, setProductos] = useState([]);

    

    return (
        <ProductoContext.Provider value={{
            productos,
            setProductos
        }}>
            {children}
        </ProductoContext.Provider>
    )
}

export default ProductoContext