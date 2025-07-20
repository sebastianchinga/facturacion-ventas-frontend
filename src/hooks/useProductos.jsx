import { useContext } from "react";
import ProductoContext from "../context/ProductoContext";

const useProductos = () => useContext(ProductoContext);

export default useProductos;