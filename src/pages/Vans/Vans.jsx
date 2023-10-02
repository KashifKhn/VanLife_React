import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';
const Vans = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [vansData, setVansData] = useState([]);
    const typeFilter = searchParams.get('type');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadVans = async () => {
            setLoading(true)
            try {
                const data = await getVans();
                setVansData(data)
            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        loadVans()
    }, []);
    console.log(vansData)

    const vansDisplayed = typeFilter ?
        vansData.filter(van => van.type.toLowerCase() === typeFilter)
        : vansData;

    const vanElements = vansDisplayed.map(van => (
        <div key={van.id} className="van-tile">
            <Link
                to={van.id}
                state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
            >
                <img src={van.imageUrl} />
            </Link>
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))

    function handleFilterChange(key, value) {
        setSearchParams(prevParam => {
            if (value === null)
                prevParam.delete(key)
            else
                prevParam.set(key, value)
            return prevParam;
        })
    }

    if (loading)
        return <h1>Loading...</h1>

    if (error)
        return <h1>There was an error: {error.message}</h1>


    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                >Rugged</button>
                {typeFilter && <button
                    onClick={() => handleFilterChange("type", null)}
                    className="van-type clear-filters"
                >Clear filter</button>}

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}

export default Vans
