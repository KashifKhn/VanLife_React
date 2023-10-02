import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import userIcon from '../assets/images/avatar-icon.png'

const Header = () => {
    const activeLinkStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <header>
            <Link className='site-logo' to='/'>#VanLife</Link>
            <nav>
                <NavLink
                    style={({ isActive }) => isActive ? activeLinkStyles : null}
                    to='/host'
                >
                    Host
                </NavLink>
                <NavLink
                    style={({ isActive }) => isActive ? activeLinkStyles : null}
                    to='/about'
                >
                    About
                </NavLink>
                <NavLink
                    style={({ isActive }) => isActive ? activeLinkStyles : null}
                    to='/vans'
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img
                        src={userIcon}
                        className="login-icon"
                    />
                </Link>
            </nav>
        </header>
    )
}

export default Header
