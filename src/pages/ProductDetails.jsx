import { useState,useEffect } from "react";
import { useParams,Link } from "react-router";
import { getProductById } from "../services/api";
import { useCart } from "../context/CartContext";


function ProductsDetails(){
    const { id } = useParams();
  const { addToCart } = useCart();
    
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(()=>{
        async function fetchProduct() {

            try{
                const data = await getProductById(id)
                setProduct(data);
            }catch(err){
                setError(err.message);
            } finally {
                setLoading(false);
            }
             
          }
          fetchProduct();
    },[id]);


      if (loading) {
    return <p className="text-center mt-5">Loading product...</p>;
  }

  if (error) {
    return <p className="text-danger text-center mt-5">{error}</p>;
  }

   if (!product) {
    return <p className="text-center mt-5">Product not found.</p>;
  }


   return (
    <div className="container py-5">

      <Link to="/produits" className="btn btn-outline-secondary mb-4">
        <i className="bi bi-arrow-left me-2"></i>
        Back to Products
      </Link>

      <div className="row g-5 align-items-center">

        {/* Product Image */}
        <div className="col-12 col-md-6">
          <div className="bg-light rounded p-4 text-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="img-fluid"
              style={{
                maxHeight: "400px",
                objectFit: "contain"
              }}
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="col-12 col-md-6">

          <span className="badge text-bg-primary mb-3">
            {product.category}
          </span>

          <h1 className="fw-bold mb-3">
            {product.title}
          </h1>

          <p className="text-secondary">
            {product.description}
          </p>

          <div className="d-flex align-items-center gap-2 mb-3">
            <i className="bi bi-star-fill text-warning"></i>
            <strong>{product.rating}</strong>
            <span className="text-secondary">
              / 5
            </span>
          </div>

          <h2 className="text-primary fw-bold mb-4">
            ${product.price}
          </h2>

          <p>
            <strong>Brand:</strong> {product.brand || "Not specified"}
          </p>

          <p>
            <strong>Availability:</strong>{" "}
            {product.availabilityStatus}
          </p>

          <p>
            <strong>Stock:</strong> {product.stock}
          </p>

          <button className="btn btn-primary btn-lg" onClick={() => addToCart(product)}>
            <i className="bi bi-cart-plus me-2"></i>
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductsDetails
