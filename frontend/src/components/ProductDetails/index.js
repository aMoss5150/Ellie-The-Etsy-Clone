import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../store/products'

import ReviewsDisplay from '../ReviewsDisplayDiv'

import './ProductDetails.css'

export default function ProductDetails({ products }) {
    const [prod, setProd] = useState('')
    // const dispatch = useDispatch()
    // const productsObj = useSelector(state => state.products)
    const { productId } = useParams()
    // const prodArray = Object.values(productsObj)
    // console.log('prodArray:', prodArray)
    // const product = prodArray[productId]
    const product = products[productId]

    // const product = prodArray.filter(product => product.id === productId)

    useEffect(() => {
        // dispatch(getProducts())
        setProd(products[productId])
    }, [])


    return (
        <div className='product__details-container'>
            <h1>{product.product_name}</h1>
            <img style={{ maxHeight: '600px', maxWidth: '600px' }} src={product.image_url} alt={product.product_name} />
            <h2 className='product__name'>{product.product_name}</h2>
            <p className='product__details'>
                {product.product_description}
            </p>
            <p>
                {product.price}
            </p>
            <p>
                {product.labor_estimate}
            </p>

            <ReviewsDisplay product={'test product'} />
        </div>

    )

}