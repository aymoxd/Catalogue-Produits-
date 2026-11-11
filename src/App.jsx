import { Routes, Route, Link } from "react-router"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"


function App() {
 

  return (
    <>
        <Navbar />

        <main className="container py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produits" element={<Products />} />
              <Route path="/produits/:id" element={<ProductDetails />} />
              <Route path="/panier" element={<Cart />} />
              <Route path="/login" element={<Login />} />

              { /* protected route */ }
              <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={ <Admin /> } />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
        </main>


    </>
  )
}

export default App
