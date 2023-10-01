import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <div className="not-found-container">
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to="/" className="link-button">Return to Home</Link>
        </div>
    )
}

export default Page404
