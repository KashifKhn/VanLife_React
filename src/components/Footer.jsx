import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>&#169; {year} #VANLIFE</footer>
    )
}

export default Footer
