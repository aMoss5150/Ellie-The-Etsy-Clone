import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ReviewsDisplay from '../ReviewsDisplayDiv'

import './ProductDetails.css'

export default function ProductDetails({ products }) {
    const { productId } = useParams()
    // const product = products.find((product) => product.id === productId)
    if (!products) return <h1>No product found</h1>
    return (
        <div className='product__details-container'>
            <h1>product details test</h1>
            <ReviewsDisplay product={'test product'} />


            {/* <img src={product.image_url} alt={product.product_name} />
            <h1>test product details page</h1>

            <h2 className='product__name'>{product.product_name}</h2>
            <p className='product__details'>
                {product.product_description}
            </p> */}
        </div>

    )

}