import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { usdFormat, gbpFormat, useCurrency } from '../../context/CurrencyContext'

import { getProducts } from '../../store/products'
import './CartItem.css'

export default function CartItem({ itemId }) {
    const dispatch = useDispatch();
    const { currency } = useCurrency()
    const products = Object.values(useSelector(state => state.products))
    const product = products.find((product) => product.id === +itemId)
    let format = currency === 'usd' ? usdFormat : gbpFormat

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    if (!products || !product) return null

    return (
        <div className='cart__item-container'>
            <p className="prod__name-label">{product.product_name}</p>
            <img className="cart__item-picture" src={product.image_url} alt="" />
            <p className="prod__label">Price: {format(product.price)}</p>
            <p className="prod__label">Labor: {format(product.labor_estimate)}</p>
            <p className="prod__label">Total: {format(product.price + product.labor_estimate)}</p>
        </div>
    )
}