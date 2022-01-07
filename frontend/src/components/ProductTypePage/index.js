import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getProducts } from '../../store/products'
import Product from '../ProductSpan'
import './ProductTypePage.css'
import { Link } from 'react-router-dom'



export default function ProductTypePage() {
    //!LOGIC BLOCK FOR CONTROLLING REFRESH    
    const { productType } = useParams()
    const dispatch = useDispatch();
    let products = useSelector(state => state.products.products)

    // useEffect(() => {
    //     dispatch(getProducts())
    // }, [dispatch])

    if (!products) return null
    //!

    products = Object.values(products)
    let foundProds = products.filter((product) => (
        product.product_type === productType
    ))

    foundProds = foundProds.sort((a, b) => { //!sort alphabetically
        if (a.product_name < b.product_name) {
            return -1
        }
        if (a.product_name > b.product_name) {
            return 1
        }
        return 0
    })

    return (
        <div className='product__types-container'>
            <div className='types__nav'>

                <Link className='product__types-links' to='/products/engine'>
                    Engine
                </Link>

                <Link className='product__types-links' to='/products/exhaust'>
                    Exhaust
                </Link>

                <Link className='product__types-links' to='/products/wheels'>
                    Wheels
                </Link>

                <Link className='product__types-links' to='/products/suspension'>
                    Suspension
                </Link>

                <Link className='product__types-links' to='/products/exterior'>
                    Exterior
                </Link>

            </div>
            {/* <div className='product__type__text-container'>{productType.toUpperCase()}</div> */}
            <div className='types__product__display-container'>
                {foundProds.map((product) => (
                    <Product key={product.product_name} product={product} />
                ))}
            </div>
        </div>
    )
}