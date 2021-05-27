import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProducts } from '../../store/products'
import './CartItem.css'


export default function CartItem({ itemId }) {
    const dispatch = useDispatch();

    const products = Object.values(useSelector(state => state.products))
    const product = products.find((product) => product.id === +itemId)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    if (!products || !product) return null

    return (
        <div className='cart__item-container'>
            <p>{product.product_name}</p>
            <p>{product.price}</p>
            <p>{product.labor_estimate}</p>
            <p>{product.price + product.labor_estimate}</p>
        </div>
    )
}