import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getProducts } from '../../store/products'
import Product from '../ProductSpan'

import './ProductTypePage.css'


export default function ProductTypePage() {
    const dispatch = useDispatch();
    const { productType } = useParams()
    const selProducts = useSelector(state => state.products)

    const productsArr = Object.values(selProducts)
    const foundProds = productsArr.filter((product) => (
        product.product_type === productType
    ))

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

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