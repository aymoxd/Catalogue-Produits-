import { Outlet,Navigate } from "react-router";

function ProtectedRoute(){

    const isAuthentificate = false;

    return isAuthentificate ? <Outlet /> : <Navigate to="/login" replace />

}

export default ProtectedRoute