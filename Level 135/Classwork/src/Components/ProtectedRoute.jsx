import { Navigate } from "react-router-dom";

function ProtectedRoute({ curUser, children}) {
    if (!curUser) {
        return <Navigate to="/login" replace />
    }
    return children;

}

export default ProtectedRoute;