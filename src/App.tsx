import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
