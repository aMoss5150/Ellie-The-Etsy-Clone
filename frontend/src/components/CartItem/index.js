import { useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { usdFormat, gbpFormat, useCurrency } from '../../context/CurrencyContext'

import { getProducts } from '../../store/products'
import { removeItemLS, getCartLS } from '../../store/cart'
import './CartItem.css'

export default function CartItem({ itemId }) {
    const dispatch = useDispatch();
    const history = useHistory()
    const { currency } = useCurrency()
    const products = Object.values(useSelector(state => state.products))
    const product = products.find((product) => product.id === +itemId)
    let format = currency === 'usd' ? usdFormat : gbpFormat

    const handleClick = (itemId) => {
        history.push(`/all-products/${itemId}`)
    }

    const handleRemove = (itemId) => {
        dispatch(removeItemLS(itemId))
        dispatch(getCartLS())
    }


    if (!products || !product) return null

    return (
        <div className='cart__item-container'>
            <Link to={`/all-products/${itemId}`} className="prod__name-label">{product.product_name}</Link>
            <img onClick={() => handleClick(itemId)} className="cart__item-picture" src={product.image_url} alt="" />
            <p className="prod__label">Price: {format(product.price)}</p>
            <p className="prod__label">Labor: {format(product.labor_estimate)}</p>
            <p className="prod__label">Total: {format(product.price + product.labor_estimate)}</p>
            <p id="prod__desc">{product.product_description}</p>
            <button onClick={() => handleRemove(itemId)}>Remove</button>
        </div>
    )
}