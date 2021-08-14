import React from 'react'
import { Link } from 'react-router-dom'
import './MiniCart.css'
import { useView } from '../../context/ViewCartContext'

function MiniCart() {
    const { cartOpen, setCartOpen } = useView()

    if (!cartOpen) return null
    return (
        <div className='mini__cart-div'>
            <button onClick={() => setCartOpen(false)}>
                {`>>`}
            </button>
            <Link to="/cart">Build</Link>
        </div>
    )
}

export default MiniCart
