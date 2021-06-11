import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCartLS } from '../../store/cart'

import CartSummary from '../CartSummary'
import CartItem from '../CartItem'


import './CartDisplay.css'

export default function CartDisplay() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(getCartLS())
    }, [dispatch])

    if (!cart) {
        return (
            <h1> no cart found</h1>
        )
    }
    const cartArray = cart['items']
    return (
        <div className="cart__container">
            <h1>cart test</h1>
            {cartArray.map((item) => (
                <CartItem key={item} itemId={item} />
            ))}
            <CartSummary />
        </div >
    )
}