import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { Link, useHistory } from 'react-router-dom'
import './MiniCart.css'
import { useView } from '../../context/ViewCartContext'
import { getProducts } from '../../store/products'
import { getCartLS } from '../../store/cart'



function MiniCart() {
    const dispatch = useDispatch();
    const history = useHistory()
    const { cartOpen, setCartOpen } = useView()

    const cart = useAppSelector(state => state.cart)
    const products = useAppSelector(state => state.products.products)
    let allCartItems: Array<Number> = []

    for (let i = 0; i <= cart.length; i++) {
        let itemNum = cart[i]
        let selected = products.find(prod => prod['id'] === itemNum)
        selected && allCartItems.push(selected)
    }

    const handlePicClick = (id: Number) => {
        history.push(`/all-products/${id}`)
    }

    useEffect(() => {
        dispatch(getCartLS())
        // dispatch(getProducts())
    }, [dispatch])

    if (!cartOpen || !products) return null
    return (
        <div className='mini__cart-div'>
            <button onClick={() => setCartOpen(false)}>
                {`>>`}
            </button>
            <Link to="/cart">Build</Link>
            <div className="cart__pics">
                {allCartItems && allCartItems.map((item) => (
                    <img key={item['id']} onClick={() => handlePicClick(item['id'])} className="cart__pic" src={item.image_url} alt="an item" />
                ))}
            </div>
        </div>
    )
}

export default MiniCart
