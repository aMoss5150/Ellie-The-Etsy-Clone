import { useState, useEffect } from 'react'
import { useParams, Link, Redirect, useHistory } from 'react-router-dom'
import { usdFormat, gbpFormat, useCurrency } from '../../context/CurrencyContext'

import './Product.css'

export default function Product({ product }) {

    const { currency } = useCurrency()
    const history = useHistory()

    const handleClick = () => {
        history.push(`/all-products/${product.id}`)
    }

    let format = currency === 'usd' ? usdFormat : gbpFormat

    return (

        <span className='product__container' onClick={handleClick} >
            <div id='product__name-container'>
                <Link to={`/all-products/${product.id}`}>
                    {product.product_name}
                </Link>
            </div>
            <img className='product__image-container' style={{ maxHeight: "210px", maxWidth: "210px", borderRadius: '1px' }} src={`${product.image_url}`} alt="product" />
            <div className='prices__class' id='product__price-container'>
                Price: {format(product.price)}
            </div>
            <div className='prices__class' id='product__labor-container'>
                Labor: {format(product.labor_estimate)}
            </div>

            <div className='prices__class' id='product__total-container'>
                Total: {format(product.labor_estimate + product.price)}
            </div>
        </span>
    )

}