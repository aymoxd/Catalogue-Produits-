
function Login() {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">

      <div className="card shadow-sm w-100" style={{ maxWidth: '450px' }}>
        <div className="card-body ">

          <h1 className="text-center mb-4">Login</h1>

          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>

              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>

              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <button className="btn btn-primary w-100" type="submit">
              Login
            </button>
          </form>

        </div>
      </div>

    </div>
  )
}

export default Login
