import React, { useState } from 'react'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'


const HostVanDetail = () => {
    const { id } = useParams()
    const [currentVan, setCurrentVan] = useState();
    const activeLinkStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <Link
                to=".."
                relative='path'
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink
                        to='.'
                        end
                        style={({ isActive }) => isActive ? activeLinkStyles : null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to='pricing'
                        style={({ isActive }) => isActive ? activeLinkStyles : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to='photos'
                        style={({ isActive }) => isActive ? activeLinkStyles : null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentVan }} />
            </div>
        </section>
    )
}

export default HostVanDetail
