import React from 'react'
import { useOutletContext } from 'react-router-dom';

const HostVanPricing = () => {
    const {currentVan} = useOutletContext();

  return (
    <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
  )
}

export default HostVanPricing
