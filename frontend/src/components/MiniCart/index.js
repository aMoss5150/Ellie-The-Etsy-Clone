import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import './MiniCart.css'
import { useView } from '../../context/ViewCartContext'
import { getProducts } from '../../store/products'
import { getCartLS } from '../../store/cart'



function MiniCart() {
    const dispatch = useDispatch();
    const history = useHistory()
    const { cartOpen, setCartOpen } = useView()

    const cart = useSelector(state => state.cart)
    const products = Object.values(useSelector(state => state.products))
    let allCartItems = []

    for (let i = 0; i <= cart.length; i++) {
        let itemNum = cart[i]
        let selected = products.find(prod => prod.id === itemNum)
        selected && allCartItems.push(selected)
    }

    const handlePicClick = (id) => {
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
                    <img key={item.id} onClick={() => handlePicClick(item.id)} className="cart__pic" src={item.image_url} alt="an item" />
                ))}
            </div>
        </div>
    )
}

export default MiniCart
