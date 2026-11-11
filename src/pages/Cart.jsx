
import { Link } from "react-router";

function Cart() {
    return (
        <div className="container py-5">

            {/* Page Header */}
            <div className="mb-4">
                <h1 className="fw-bold">Panier</h1>
                <p className="text-secondary">
                    Review your selected products
                </p>
            </div>

            <div className="row g-4">

                {/* Cart Items */}
                <div className="col-12 col-lg-8">

                    <div className="card border-0 shadow-sm">
                        <div className="card-body">

                            {/* Cart Item */}
                            <div className="row align-items-center g-3 py-3 border-bottom">

                                <div className="col-4 col-md-2">
                                    <img
                                        src="https://placehold.co/120"
                                        alt="Product"
                                        className="img-fluid rounded"
                                    />
                                </div>

                                <div className="col-8 col-md-4">
                                    <h6 className="fw-bold">
                                        Product Name
                                    </h6>
                                    <p className="text-primary mb-0">
                                        $100
                                    </p>
                                </div>

                                <div className="col-7 col-md-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <button className="btn btn-outline-secondary btn-sm">
                                            -
                                        </button>

                                        <span>1</span>

                                        <button className="btn btn-outline-secondary btn-sm">
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="col-5 col-md-3 text-end">
                                    <p className="fw-bold">$100</p>

                                    <button className="btn btn-link text-danger">
                                        <i className="bi bi-trash"></i>
                                        Remove
                                    </button>
                                </div>

                            </div>

                            {/* More cart items go here */}

                        </div>
                    </div>

                    <Link
                        to="/produits"
                        className="btn btn-outline-primary mt-3"
                    >
                        <i className="bi bi-arrow-left me-2"></i>
                        Continue Shopping
                    </Link>

                </div>

                {/* Order Summary */}
                <div className="col-12 col-lg-4">

                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-4">

                            <h5 className="fw-bold mb-4">
                                Order Summary
                            </h5>

                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-secondary">
                                    Total Items
                                </span>
                                <span>1</span>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-secondary">
                                    Subtotal
                                </span>
                                <span>$100.00</span>
                            </div>

                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-secondary">
                                    Shipping
                                </span>
                                <span className="text-success">Free</span>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between mb-4">
                                <h5 className="fw-bold">Total</h5>
                                <h5 className="fw-bold text-primary">
                                    $100.00
                                </h5>
                            </div>

                            <button className="btn btn-primary w-100">
                                Proceed to Checkout
                            </button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Cart;
