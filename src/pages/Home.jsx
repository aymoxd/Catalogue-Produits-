

import { Link } from 'react-router'
import '../Home.css'

function Home() {
    return (
        <section className="hero-section container">
            <div className="row align-items-center g-5">

                {/* Left section */}
                <div className="col-12 col-lg-6">

                    <span className="badge bg-light text-primary px-3 py-2 mb-4">
                        <i className="bi bi-shop me-2"></i>
                        Your Ultimate Store
                    </span>

                    <h1 className="hero-title fw-bold mb-4">
                        Discover Our
                        <span className="text-primary d-block">
                            Product Catalogue
                        </span>
                    </h1>

                    <p className="hero-description mb-4">
                        Find the best products, explore top categories,
                        and enjoy a simple shopping experience.
                    </p>

                    <div className="d-flex flex-wrap gap-3">

                        <Link
                            to="/produits"
                            className="btn btn-primary btn-lg"
                        >
                            <i className="bi bi-bag me-2"></i>
                            View Products
                        </Link>

                        <Link
                            to="/produits"
                            className="btn btn-outline-dark btn-lg"
                        >
                            <i className="bi bi-lightbulb me-2"></i>
                            Explore Categories
                        </Link>

                    </div>
                </div>

                {/* Right section */}
                <div className="col-12 col-lg-6 text-center">

                    <img
                        src="../../public/hero.png"
                        alt="Shopping cart with products"
                        className="img-fluid hero-image"
                    />

                </div>

            </div>
        </section>
    )
}

export default Home
