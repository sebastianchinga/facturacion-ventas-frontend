const Item = ({ producto }) => {
    const { id, nombre, precio, cantidad, stock } = producto
    return (
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex-1">
                <h4 className="font-medium text-sm text-gray-900">
                    {nombre}
                </h4>
                <p className="text-sm text-gray-600">
                    ${precio}
                </p>
            </div>
            <div className="flex items-center space-x-2">
                <button
                    onclick="cambiarCantidad('${producto.id}', ${producto.cantidad - 1})"
                    className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm"
                >
                    -
                </button>
                <span className="w-8 text-center text-sm font-medium">
                    {cantidad}
                </span>
                <button
                    onclick="cambiarCantidad('${producto.id}', ${producto.cantidad + 1})"
                    className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-sm"
                >
                    +
                </button>
                <button
                    onclick="eliminarProducto('${producto.id}')"
                    className="ml-2 text-red-500 hover:text-red-700"
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
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Item