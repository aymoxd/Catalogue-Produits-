import { Link } from "react-router";

function ProductCard({ product }) {
    return (
        <div className="card h-100 border-0 shadow-sm">

            {/* Product Image */}
            <div className="bg-light p-3">
                <img
                    src={product.thumbnail}
                    className="card-img-top"
                    alt={product.title}
                    style={{
                        height: "200px",
                        objectFit: "contain"
                    }}
                />
            </div>

            {/* Product Information */}
            <div className="card-body d-flex flex-column">

                <span className="badge text-bg-light align-self-start mb-2">
                    {product.category}
                </span>

                <h5 className="card-title fw-semibold">
                    {product.title}
                </h5>

                <p className="card-text text-secondary small">
                    {product.description.length > 75
                        ? product.description.substring(0, 75) + "..."
                        : product.description}
                </p>

                {/* Rating */}
                <div className="d-flex justify-content-between align-items-center h-50">
                <div className="d-flex align-items-center gap-1 mb-3">
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="small fw-semibold">
                        {product.rating}
                    </span>
                    <span className="text-secondary small">
                        / 5
                    </span>
                </div>

                         <div>
                        <span className="fs-5 fw-bold text-primary">
                            ${product.price}
                        </span>
                    </div>
                </div>

                {/* Price and Button */}
                <div className="mt-auto flex-column">


                    <button className="btn btn-primary w-100">
                        Ajouter au panier
                        <i className="bi bi-arrow-right ms-1"></i>
                    </button>

                </div>

                { /* the link to product deatails */ }
                <Link to={`/produits/${product.id}`}>afficher details</Link>


            </div>
        </div>
    );
}

export default ProductCard;
