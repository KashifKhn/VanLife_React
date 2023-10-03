import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AuthRequired = () => {
    const isLoggedIn = localStorage.getItem("loggedin")

    if (!isLoggedIn)
        return <Navigate
            to="/login"
            state={{ message: "You must log in first" }}
            replace
        />

    return <Outlet />
}

export default AuthRequired
