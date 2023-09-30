import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
            <h1>Host DashBoard Here</h1>
            <Outlet />
        </>
    )
}

export default Dashboard
