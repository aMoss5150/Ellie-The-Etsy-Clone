import React from 'react'
import './MiniCart.css'
import { useView } from '../../context/ViewCartContext'

function MiniCart() {
    const { cartOpen, setCartOpen } = useView()

    if (!cartOpen) return null
    return (
        <div className='mini__cart-div'>
            MiniCart
            <button onClick={() => setCartOpen(false)}>
                close
            </button>
        </div>
    )
}

export default MiniCart
