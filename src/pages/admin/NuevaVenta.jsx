import { Link } from "react-router-dom"
import useProductos from "../../hooks/useProductos"
import { useEffect } from "react";
import clienteAxios from "../../config/axios";

const NuevaVenta = () => {
    const { productos, setProductos } = useProductos();

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const { data } = await clienteAxios.get('/productos/');
                setProductos(data);
            } catch (error) {
                setProductos([]);
            }
        }
        obtenerProductos();
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sección Izquierda: Cliente y Productos */}
            <div className="lg:col-span-2 space-y-6">
                {/* Información del Cliente */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        Información del Cliente
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="cliente-nombre"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Nombre del Cliente *
                            </label>
                            <input
                                type="text"
                                id="cliente-nombre"
                                name="cliente-nombre"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Ingrese el nombre del cliente"
                                required=""
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="cliente-email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email (Opcional)
                            </label>
                            <input
                                type="email"
                                id="cliente-email"
                                name="cliente-email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="cliente@email.com"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="cliente-telefono"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Teléfono (Opcional)
                            </label>
                            <input
                                type="tel"
                                id="cliente-telefono"
                                name="cliente-telefono"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="+1 234 567 8900"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="cliente-documento"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Documento (Opcional)
                            </label>
                            <input
                                type="text"
                                id="cliente-documento"
                                name="cliente-documento"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder={12345678}
                            />
                        </div>
                    </div>
                </div>
                {/* Listado de Productos */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Productos Disponibles
                        </h2>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Buscar productos..."
                                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <svg
                                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    {/* Grid de Productos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                        {/* Producto 1 */}
                        <div
                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-blue-500"
                            onclick="agregarProducto('Laptop HP', 1200.00, 'laptop-hp')"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-medium text-gray-900">Laptop HP</h3>
                                <span className="text-sm text-gray-500">Stock: 15</span>
                            </div>
                            <p className="text-2xl font-bold text-blue-600 mb-2">$1,200.00</p>
                            <p className="text-sm text-gray-600 mb-3">
                                Laptop HP Pavilion 15.6" Intel Core i5
                            </p>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                                Agregar a Venta
                            </button>
                        </div>
                        {/* Producto 2 */}
                        <div
                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-blue-500"
                            onclick="agregarProducto('Mouse Inalámbrico', 25.00, 'mouse-inalambrico')"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-medium text-gray-900">Mouse Inalámbrico</h3>
                                <span className="text-sm text-gray-500">Stock: 50</span>
                            </div>
                            <p className="text-2xl font-bold text-blue-600 mb-2">$25.00</p>
                            <p className="text-sm text-gray-600 mb-3">
                                Mouse inalámbrico ergonómico con receptor USB
                            </p>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                                Agregar a Venta
                            </button>
                        </div>
                        {/* Producto 3 */}
                        <div
                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-blue-500"
                            onclick="agregarProducto('Teclado Mecánico', 85.00, 'teclado-mecanico')"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-medium text-gray-900">Teclado Mecánico</h3>
                                <span className="text-sm text-gray-500">Stock: 30</span>
                            </div>
                            <p className="text-2xl font-bold text-blue-600 mb-2">$85.00</p>
                            <p className="text-sm text-gray-600 mb-3">
                                Teclado mecánico RGB con switches azules
                            </p>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                                Agregar a Venta
                            </button>
                        </div>
                        {/* Producto 4 */}
                        <div
                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-blue-500"
                            onclick="agregarProducto('Monitor 24 pulgadas', 180.00, 'monitor-24')"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-medium text-gray-900">Monitor 24"</h3>
                                <span className="text-sm text-gray-500">Stock: 20</span>
                            </div>
                            <p className="text-2xl font-bold text-blue-600 mb-2">$180.00</p>
                            <p className="text-sm text-gray-600 mb-3">
                                Monitor LED 24" Full HD 1920x1080
                            </p>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                                Agregar a Venta
                            </button>
                        </div>
                        {/* Producto 5 */}
                        <div
                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-blue-500"
                            onclick="agregarProducto('Auriculares Bluetooth', 45.00, 'auriculares-bt')"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-medium text-gray-900">
                                    Auriculares Bluetooth
                                </h3>
                                <span className="text-sm text-gray-500">Stock: 40</span>
                            </div>
                            <p className="text-2xl font-bold text-blue-600 mb-2">$45.00</p>
                            <p className="text-sm text-gray-600 mb-3">
                                Auriculares inalámbricos con cancelación de ruido
                            </p>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                                Agregar a Venta
                            </button>
                        </div>
                        {/* Producto 6 */}
                        <div
                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-blue-500"
                            onclick="agregarProducto('Webcam HD', 35.00, 'webcam-hd')"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="font-medium text-gray-900">Webcam HD</h3>
                                <span className="text-sm text-gray-500">Stock: 25</span>
                            </div>
                            <p className="text-2xl font-bold text-blue-600 mb-2">$35.00</p>
                            <p className="text-sm text-gray-600 mb-3">
                                Cámara web HD 1080p con micrófono integrado
                            </p>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                                Agregar a Venta
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sección Derecha: Resumen de Venta */}
            <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        Resumen de Venta
                    </h2>
                    {/* Lista de productos en la venta */}
                    <div
                        id="productos-venta"
                        className="space-y-3 mb-6 max-h-64 overflow-y-auto"
                    >
                        <div className="text-center text-gray-500 py-8">
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400 mb-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                            <p className="text-sm">No hay productos en la venta</p>
                            <p className="text-xs text-gray-400">
                                Selecciona productos para agregar
                            </p>
                        </div>
                    </div>
                    {/* Totales */}
                    <div className="border-t border-gray-200 pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Subtotal:</span>
                            <span id="subtotal" className="font-medium">
                                $0.00
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">IVA (16%):</span>
                            <span id="iva" className="font-medium">
                                $0.00
                            </span>
                        </div>
                        <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                            <span>Total:</span>
                            <span id="total" className="text-blue-600">
                                $0.00
                            </span>
                        </div>
                    </div>
                    {/* Botones de Acción */}
                    <div className="mt-6 space-y-3">
                        <button
                            id="btn-crear-venta"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                        // disabled=""
                        >
                            Crear Venta
                        </button>
                        <Link to="/home" className="block bg-gray-500 hover:bg-gray-600 text-white text-center py-2 px-4 rounded-md font-medium transition-colors">Cancelar Venta</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NuevaVenta