import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './MiniCart.css'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { useView } from '../../context/ViewCartContext'
import { getCartLS } from '../../store/cart'



function MiniCart() {
    const history = useHistory()
    const { cartOpen, setCartOpen } = useView()
    const dispatch = useAppDispatch();

    interface Product {
        id: number
        product_name: string
        labor_estimate: number
        image_url: string
        product_type: string
        product_description: string
    }


    const cart = useAppSelector(state => state.cart)
    const products = useAppSelector(state => state.products.products)
    let allCartItems: Array<Product> = []

    for (let i = 0; i <= cart.length; i++) {
        let itemNum = cart[i]
        let selected = products.find(prod => prod['id'] === itemNum)
        selected && allCartItems.push(selected)
    }

    const handlePicClick = (id: number) => {
        history.push(`/all-products/${id}`)
    }

    useEffect(() => {
        dispatch(getCartLS())
    }, [dispatch])

    if (!cartOpen) return null
    return (
        <div className='mini__cart-div'>
            <button onClick={() => setCartOpen(false)}>
                {`>>`}
            </button>
            <Link to="/cart">Build</Link>
            <div className="cart__pics">
                {allCartItems && allCartItems.map((item) => (
                    <img key={item.id} onClick={() => handlePicClick(item.id)} className="cart__pic" src={item.image_url} alt="an item" />
                ))}
            </div>
        </div>
    )
}

export default MiniCart
