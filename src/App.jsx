import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index />
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
