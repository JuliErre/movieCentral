import React from "react";
import { useNavigate, Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    if (token) {
        const decoded = jwt_decode(token);
        console.log(decoded);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            localStorage.removeItem("name");
            return <Navigate to="/login" />;
        }
    }
    if (!token) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};

export default ProtectedRoute;
