import { Link } from "react-router";
import { useCart } from "../context/CartContext";

function Cart() {
  const { items, removeFromCart, updateQuantity, totalItems, totalAmount } = useCart();

  if (items.length === 0) {
    return (
      <section className="container py-5 text-center">
        <i className="bi bi-cart3 display-3 text-secondary" aria-hidden="true"></i>
        <h1 className="fw-bold mt-3">Your cart is empty</h1>
        <p className="text-secondary">Browse the catalogue and add products to your cart.</p>
        <Link to="/produits" className="btn btn-primary">View products</Link>
      </section>
    );
  }

  return (
    <div className="container py-5">
      <div className="mb-4">
        <h1 className="fw-bold">Panier</h1>
        <p className="text-secondary">Review your selected products</p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              {items.map((item) => (
                <div className="row align-items-center g-3 py-3 border-bottom" key={item.id}>
                  <div className="col-4 col-md-2">
                    <img src={item.thumbnail} alt={item.title} className="img-fluid rounded" />
                  </div>
                  <div className="col-8 col-md-4">
                    <h6 className="fw-bold">{item.title}</h6>
                    <p className="text-primary mb-0">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="col-7 col-md-3">
                    <div className="d-flex align-items-center gap-2">
                      <button className="btn btn-outline-secondary btn-sm" aria-label={`Decrease ${item.title} quantity`} onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span aria-live="polite">{item.quantity}</span>
                      <button className="btn btn-outline-secondary btn-sm" aria-label={`Increase ${item.title} quantity`} onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <div className="col-5 col-md-3 text-end">
                    <p className="fw-bold">${(item.price * item.quantity).toFixed(2)}</p>
                    <button className="btn btn-link text-danger p-0" onClick={() => removeFromCart(item.id)}>
                      <i className="bi bi-trash me-1" aria-hidden="true"></i>Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link to="/produits" className="btn btn-outline-primary mt-3">
            <i className="bi bi-arrow-left me-2" aria-hidden="true"></i>Continue Shopping
          </Link>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h5 className="fw-bold mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3"><span className="text-secondary">Total Items</span><span>{totalItems}</span></div>
              <div className="d-flex justify-content-between mb-3"><span className="text-secondary">Subtotal</span><span>${totalAmount.toFixed(2)}</span></div>
              <div className="d-flex justify-content-between mb-3"><span className="text-secondary">Shipping</span><span className="text-success">Free</span></div>
              <hr />
              <div className="d-flex justify-content-between mb-4"><h5 className="fw-bold">Total</h5><h5 className="fw-bold text-primary">${totalAmount.toFixed(2)}</h5></div>
              <button className="btn btn-primary w-100" disabled>Proceed to Checkout</button>
              <small className="text-secondary d-block mt-2">Checkout is not part of this exercise.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
