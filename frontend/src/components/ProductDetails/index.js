import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './ProductDetails.css'

export default function ProductDetails({ products }) {
    const { productId } = useParams()
    // const product = products.find((product) => product.id === productId)
    if (!products) return <h1>No product found</h1>
    return (
        <div className='product__details-container'>
            {/* <img src={product.imagelUrl} alt={product.name} />
            <h1>test product details page</h1>

            <h2 className='product__name'>{product.name}</h2>
            <p className='product__details'>
                {product.details}
            </p> */}
        </div>

    )

}