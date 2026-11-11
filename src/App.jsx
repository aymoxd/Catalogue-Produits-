import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router"

import Navbar from "./components/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"

const Home = lazy(() => import("./pages/Home"))
const Products = lazy(() => import("./pages/Products"))
const ProductDetails = lazy(() => import("./pages/ProductDetails"))
const Cart = lazy(() => import("./pages/Cart"))
const Login = lazy(() => import("./pages/Login"))
const Admin = lazy(() => import("./pages/Admin"))
const NotFound = lazy(() => import("./pages/NotFound"))


function App() {
  return (
    <>
        <Navbar />

        <main className="container py-4">
          <Suspense fallback={<p className="text-center py-5" role="status">Loading page...</p>}>
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
          </Suspense>
        </main>


    </>
  )
}

export default App
