import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import ReviewsDisplay from '../ReviewsDisplayDiv'

import './ProductDetails.css'

export default function ProductDetails() {
    const products = useSelector(state => state.products)

    // const [prods, setProds] = useState('')
    // const [isLoaded, setIsLoaded] = useState(false)
    const { productId } = useParams()
    const product = products[productId]
    // console.log('product:', product)
    // console.log('should be selected product:-----------------', products[productId])

    // useEffect(() => {
    //     setProds(products)
    // }, [])

    return (

        <div className='product__details-container'>



            {/* <h1>{prods ? 'yes' : 'false'}</h1> */}
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