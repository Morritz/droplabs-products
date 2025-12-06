import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "./pages/HomePage"
import { ProductsPage } from "./pages/ProductsPage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { AppBar } from "./components/AppBar"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline } from "@mui/material"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
