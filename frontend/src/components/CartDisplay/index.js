import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCartLS } from '../../store/cart'
import { getProducts } from '../../store/products'

import CartSummary from '../CartSummary'
import CartItem from '../CartItem'

import './CartDisplay.css'

export default function CartDisplay() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const products = Object.values(useSelector(state => state.products))
    // const product = products.filter((product) => product.id === +itemId)

    let allCartItems = []
    console.log(cart)
    for (let i = 0; i <= cart.length; i++) {
        let itemNum = cart[i]
        let selected = products.find(prod => prod.id === itemNum)
        selected && allCartItems.push(selected)

        console.log(allCartItems)

    }


    useEffect(() => {
        dispatch(getCartLS())
        dispatch(getProducts())
        return () => allCartItems = []
    }, [dispatch])

    if (!cart) {
        return (
            <h1> no cart found</h1>
        )
    }
    const cartArray = cart
    return (
        <div className="cart__page">
            <div className="cart__breakdown">breakdown
                parts total: {
                    allCartItems.reduce((acc, el) => {
                        return el.price + acc
                    }, 0)
                }
                labor total estimate: {
                    allCartItems.reduce((acc, el) => {
                        return el.labor_estimate + acc
                    }, 0)
                }
                build estimate: {
                    allCartItems.reduce((acc, el) => {
                        return el.price + el.labor_estimate + acc
                    }, 0)
                }
            </div>
            <div className="cart__container">
                {cartArray.map((item) => (
                    <CartItem key={item} itemId={item} />
                ))}
                <CartSummary />
            </div >
        </div>
    )
}