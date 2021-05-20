import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import './ProductDetails.css'

export default function ProductDetails({ products }) {
    const { productId } = useParams()
    const product = products.find((product) => product.id === productId)
    return (
        <div className='product__container'>
            <img src={product.imagelUrl} alt={product.name} />

            <h2 className='product__name'>{product.name}</h2>
            <p className='product__details'>
                {product.details}
            </p>
        </div>

    )

}