import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application rendering error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="container py-5 text-center" role="alert">
          <h1 className="h3">Something went wrong</h1>
          <p className="text-secondary">An unexpected error occurred while displaying this page.</p>
          <button className="btn btn-primary" onClick={() => window.location.reload()}>
            Reload page
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
