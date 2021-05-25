import { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getProducts } from '../../store/products'


import './HomePage.css'
import Product from '../ProductSpan'

export default function HomePage({ products }) {
    console.log(products)

    // const dispatch = useDispatch();
    // const selProducts = useSelector(state => state.products)
    // const prodArray = Object.values(selProducts)

    // useEffect(() => {
    //     dispatch(getProducts())
    // }, [dispatch])
    return (
        <div className="home__page">

            <h1 className='home__page-tester'>testHomePage</h1>
            <div className='category__display-container'>
                <span className='display__nav__span'>
                    Exhaust
                </span>

                <span className='display__nav__span'>
                    Engine
                </span>

                <span className='display__nav__span'>
                    Suspension
                </span>

                <span className='display__nav__span'>
                    Exterior
                </span>
            </div>

            <div className='product__display-container'>
                {Object.values(products).map(product => (
                    <Product key={product.id} product={product}>
                        {product.product_name}
                    </Product>

                ))}

            </div>
        </div>
    )

}

