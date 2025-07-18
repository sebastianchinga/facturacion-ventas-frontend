import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import Login from "./pages/auth/Login"
import Registro from "./pages/auth/Registro"
import OlvidePassword from "./pages/auth/OlvidePassword"
import ConfirmarCuenta from "./pages/auth/ConfirmarCuenta"
import CambiarPassword from "./pages/auth/CambiarPassword"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="registrar" element={<Registro />} />
            <Route path="confirmar-cuenta/:token" element={<ConfirmarCuenta />} />
            <Route path="olvide-password" element={<OlvidePassword />} />
            <Route path="olvide-password/:token" element={<CambiarPassword />} />
          </Route>

          <Route>
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
