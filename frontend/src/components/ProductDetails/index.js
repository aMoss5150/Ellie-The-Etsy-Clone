import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getProducts } from '../../store/products'
import { getReviews } from '../../store/reviews'
import ReviewsDisplay from '../ReviewsDisplayDiv'
import ReviewForm from '../ReviewForm'

import './ProductDetails.css'

export default function ProductDetails({ products }) {
    const dispatch = useDispatch();
    const { productId } = useParams()
    // console.log('productId:', productId)

    //!LOGIC BLOCK FOR CONTROLLING REFRESH    
    const selProducts = useSelector(state => state.products)
    let reviews = useSelector(state => state.reviews)


    useEffect(() => {
        dispatch(getProducts())
        dispatch(getReviews())
    }, [dispatch])

    let prodData = products ? products : selProducts
    const product = prodData[productId]





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


    if (!product || !reviews) return null

    reviews = Object.values(reviews)
    reviews = reviews.filter((review) => (
        review.product_id === product.id
    ))
    // console.log('reviews:', reviews)

    return (
        <div className='product__details-container'>
            {/* product image */}
            <div className='product__picture-container'>
                <img className='product__picture' style={{ maxHeight: '700px', maxWidth: '700px', marginLeft: '30px' }} src={product.image_url} alt={product.product_name} />
            </div>


            {/* product card */}
            <div className='details__card'>
                <div className='product__details__name-container'>{product.product_name}</div>
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
                <p id='total__price'>
                    Total Price w/ labor: ${product.price + product.labor_estimate}
                </p>
                <ReviewForm product={product} />
            </div>


            {/* review display */}
            <ReviewsDisplay reviews={reviews} />
        </div>

    )

}