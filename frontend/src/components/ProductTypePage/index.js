import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'

// import { getProducts } from '../../store/products'
import Product from '../ProductSpan'

import './ProductTypePage.css'


export default function ProductTypePage({ products }) {
    console.log('products:', products)
    const productsArr = Object.values(products)
    const { productType } = useParams()
    const foundProds = productsArr.filter((product) => (
        product.product_type === productType
    ))

    return (
        <div className='product__types-container'>
            <h1 className='product__type__text-container'>{productType}</h1>
            <div className='types__product__display-container'>
                {foundProds.map((product) => (
                    <Product key={product.product_name} product={product} />
                ))}
            </div>

        </div>

    )

}