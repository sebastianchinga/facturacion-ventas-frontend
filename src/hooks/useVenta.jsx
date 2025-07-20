import { useContext } from "react";
import VentaContext from "../context/VentaContext";

const useVenta = () => useContext(VentaContext);

export default useVenta;