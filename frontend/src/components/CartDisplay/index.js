import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCart } from '../../store/cart'

import CartSummary from '../CartSummary'
import CartItem from '../CartItem'


import './CartDisplay.css'

export default function CartDisplay() {
    const dispatch = useDispatch();
    // const [flag, setFlag] = (0)

    const cart = useSelector(state => state.cart)


    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])

    if (!cart) {
        return (
            <h1> no cart found</h1>
        )
    }


    const cartArray = Object.values(cart)
    console.log('cartArray:', cartArray)

    return (
        <div className="cart__container">

            <h1>cart test</h1>

            {cartArray.map((item) => (
                <CartItem itemId={item.id} />
            ))}

            <CartSummary />
        </div >
    )
}