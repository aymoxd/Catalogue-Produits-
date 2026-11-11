import { NavLink } from "react-router";

function Navbar(){
    return (
  
                <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
              <NavLink to="/" className="navbar-brand"><i className="bi bi-alipay fs-4"></i></NavLink>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink to="/" className="nav-link">Home</NavLink>
                  <NavLink to="/produits" className="nav-link">Produits</NavLink>
                  <NavLink to="/panier" className="nav-link">Panier</NavLink>
                  <NavLink to="/login" className="nav-link">Login</NavLink>
                  <NavLink to="/admin" className="nav-link">admin</NavLink>
                </div>
              </div>
            </div>
          </nav>

    );
}

export default Navbar