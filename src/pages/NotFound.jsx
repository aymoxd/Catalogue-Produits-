
import { Link } from 'react-router'

function NotFound() {
  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">

        <h1 className="display-1 fw-bold text-primary">
          404
        </h1>

        <h2 className="fw-bold mb-3">
          Page Not Found
        </h2>

        <p className="text-secondary mb-4">
          Sorry, the page you are looking for
          does not exist or has been moved.
        </p>

        <Link to="/" className="btn btn-primary px-4 py-2">
          Back to Home
        </Link>

      </div>
    </div>
  )
}

export default NotFound
