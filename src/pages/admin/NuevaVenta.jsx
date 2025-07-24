import { Link, useNavigate } from "react-router-dom"
import useProductos from "../../hooks/useProductos"
import { useEffect, useState } from "react";
import clienteAxios from "../../config/axios";
import Producto from "../../components/Producto";
import useVenta from "../../hooks/useVenta";
import Item from "../../components/Item";
import Alerta from "../../components/Alerta";

const NuevaVenta = () => {

    const navigate = useNavigate();

    const [cliente, setCliente] = useState({
        nombre: '',
        email: '',
        telefono: '',
        dni: ''
    })

    const [alerta, setAlerta] = useState({});
    const { productos, setProductos } = useProductos();
    const { productosSeleccionados, setProductosSeleccionados, calcularSubTotal, calcularIVA, calcularTotal } = useVenta();

    const crearVenta = async (cliente, productos) => {
        if (Object.values(cliente).includes("")) {
            setAlerta({
                error: true,
                msg: 'Coloca los datos del cliente'
            })

            setTimeout(() => {
                setAlerta({});
            }, 5000);
            return;
        }

        try {
            const { data } = await clienteAxios.post('/ventas', { cliente, productos, total: calcularTotal });
            setProductosSeleccionados([]);

            setCliente({
                nombre: '',
                email: '',
                telefono: '',
                dni: ''
            })

            setAlerta({
                msg: 'Venta realizada, espere...'
            })

            setTimeout(() => {
                navigate('/home')
            }, 3000);

        } catch (error) {
            console.log(error);
        }
    }

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

    const { msg } = alerta


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
                                value={cliente.nombre}
                                onChange={e => setCliente({ ...cliente, [e.target.name]: e.target.value })}
                                type="text"
                                id="cliente-nombre"
                                name="nombre"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Ingrese el nombre del cliente"
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
                                value={cliente.email}
                                onChange={e => setCliente({ ...cliente, [e.target.name]: e.target.value })}
                                type="email"
                                id="cliente-email"
                                name="email"
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
                                value={cliente.telefono}
                                onChange={e => setCliente({ ...cliente, [e.target.name]: e.target.value })}
                                type="tel"
                                id="cliente-telefono"
                                name="telefono"
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
                                value={cliente.dni}
                                onChange={e => setCliente({ ...cliente, [e.target.name]: e.target.value })}
                                type="text"
                                id="cliente-documento"
                                name="dni"
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

                    </div>
                    {/* Grid de Productos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                        {/* Producto 1 */}
                        {productos.map(producto => (
                            <Producto producto={producto} key={producto.id} />
                        ))}
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
                    <div id="productos-venta" className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                        {productosSeleccionados.length === 0 ? (
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
                        ) : productosSeleccionados.map(item => (
                            <Item key={item.id} producto={item} />
                        ))}
                    </div>
                    {/* Totales */}
                    <div className="border-t border-gray-200 pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Subtotal:</span>
                            <span id="subtotal" className="font-medium">
                                ${calcularSubTotal}
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-600">IVA (16%):</span>
                            <span id="iva" className="font-medium">
                                ${calcularIVA}
                            </span>
                        </div>
                        <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                            <span>Total:</span>
                            <span id="total" className="text-blue-600">
                                ${calcularTotal}
                            </span>
                        </div>
                    </div>
                    {/* Botones de Acción */}
                    <div className="mt-6 space-y-3">
                        <button
                            onClick={() => crearVenta(cliente, productosSeleccionados)}
                            id="btn-crear-venta"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            disabled={productosSeleccionados.length === 0}
                        >
                            Crear Venta
                        </button>
                        <Link to="/home" className="block bg-gray-500 hover:bg-gray-600 text-white text-center py-2 px-4 rounded-md font-medium transition-colors">Cancelar Venta</Link>
                        {msg && <Alerta alerta={alerta} />}
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default NuevaVenta