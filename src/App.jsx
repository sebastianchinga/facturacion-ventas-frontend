import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import Login from "./pages/auth/Login"
import Registro from "./pages/auth/Registro"
import OlvidePassword from "./pages/auth/OlvidePassword"
import ConfirmarCuenta from "./pages/auth/ConfirmarCuenta"
import CambiarPassword from "./pages/auth/CambiarPassword"
import AdminLayout from "./layout/AdminLayout"
import Home from "./pages/admin/Home"
import NuevaVenta from "./pages/admin/NuevaVenta"
import { AuthProvider } from "./context/AuthContext"
import { ProductoProvider } from "./context/ProductoContext"
import { VentaProvider } from "./context/VentaContext"

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ProductoProvider>
            <VentaProvider>
              <Routes>
                <Route path="/" element={<AuthLayout />}>
                  <Route index element={<Login />} />
                  <Route path="registrar" element={<Registro />} />
                  <Route path="confirmar-cuenta/:token" element={<ConfirmarCuenta />} />
                  <Route path="olvide-password" element={<OlvidePassword />} />
                  <Route path="olvide-password/:token" element={<CambiarPassword />} />
                </Route>

                <Route path="home" element={<AdminLayout />}>
                  <Route index element={<Home />} />
                  <Route path="nueva-venta" element={<NuevaVenta />} />
                </Route>
              </Routes>
            </VentaProvider>
          </ProductoProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
