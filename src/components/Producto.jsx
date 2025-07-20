import useVenta from "../hooks/useVenta";

const Producto = ({ producto }) => {
    const { id, nombre, precio, descripcion, stock } = producto;
    const { agregarProducto } = useVenta();

    return (
        <div
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-blue-500"
            onclick="agregarProducto('Laptop HP', 1200.00, 'laptop-hp')"
        >
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-gray-900">{nombre}</h3>
                <span className="text-sm text-gray-500">Stock: {stock}</span>
            </div>
            <p className="text-2xl font-bold text-blue-600 mb-2">S/. {precio}</p>
            <p className="text-sm text-gray-600 mb-3">{descripcion}</p>
            <button onClick={() => agregarProducto(producto)} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                Agregar a Venta
            </button>
        </div>
    )
}

export default Producto