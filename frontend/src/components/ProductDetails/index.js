import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getProducts } from '../../store/products'
import ReviewsDisplay from '../ReviewsDisplayDiv'

import './ProductDetails.css'

export default function ProductDetails({ products }) {
    const dispatch = useDispatch();
    const { productId, productType } = useParams()
    // console.log('productId:', productId)

    //!LOGIC BLOCK FOR CONTROLLING REFRESH    
    const selProducts = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    let data = products ? products : selProducts
    const product = data[productId]

    //! SUBNOTE--- need to figure out logic to find product based on product
    //! SUBNOTE---ID and product_type match up
    // data = Object.values(data)

    // let productsTypeArr = data.filter((product) => {
    //     return product.product_type === productType
    // })

    // let product
    // console.log('productsTypeArr:', productsTypeArr)
    // productsTypeArr.forEach(p => p = p.id === productId)
    // console.log('product:', product)

    if (!product) return null
    //!

    return (
        <div className='product__details-container'>
            <div className='details__card'>

                <div className='product__details__name-container'>{product.product_name}</div>
                <img style={{ maxHeight: '600px', maxWidth: '600px' }} src={product.image_url} alt={product.product_name} />
                <h2 className='details product__name'>{product.product_name}</h2>
                <p className='details product__description-container'>
                    {product.product_description}
                </p>
                <p id='details__price1' className='details product__price-container'>
                    ${product.price}
                </p>
                <p id='details__price2' className='details product__labor-container'>
                    ${product.labor_estimate}
                </p>
                <ReviewsDisplay product={'test product'} />
            </div>
        </div>

    )

}