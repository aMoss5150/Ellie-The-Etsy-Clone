import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { fetchProducts, Product } from '../../store/products'
import { getReviews } from '../../store/reviews'
import { addItemLS } from '../../store/cart'
import { useCurrency, usdFormat, gbpFormat } from '../../context/CurrencyContext'
import ReviewsDisplay from '../ReviewsDisplayDiv'
import ReviewForm from '../ReviewForm'

import { useAppSelector, useAppDispatch } from '../../hooks'

import './ProductDetails.css'

export default function ProductDetails({ products }) {
    const { currency } = useCurrency()

    // const [curr, setCurr] = useState('usd')
    const dispatch = useAppDispatch();
    const { productId } = useParams()


    //!LOGIC BLOCK FOR CONTROLLING REFRESH    
    const selProducts = useAppSelector(state => state.products.products)
    let reviews = useAppSelector(state => state.reviews.reviews)

    const handleAddItem = () => {
        dispatch(addItemLS(product.id))
        // alert(`${product.product_name} was added to your build...`)
    }


    useEffect(() => {
        dispatch(getReviews())
        dispatch(fetchProducts())
    }, [dispatch])

    let format = currency === 'usd' ? usdFormat : gbpFormat
    let prodData: Array<Product> = products ? products : selProducts
    const product = prodData.find(product => product.id === +productId)

    if (!product || !reviews) return null

    reviews = reviews.filter((review) => (
        review.product_id === product.id
    ))

    return (
        <div className='product__details-container'>

            <div id='idtypes__nav' className='types__nav'>
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
            {/* product image */}
            <div className='product__picture-container'>
                <img className='product__picture' style={{ maxHeight: '650px', maxWidth: '700px', marginLeft: '30px' }} src={product.image_url} alt={product.product_name} />


            </div>

            <div className='product__reviews-container'>
                {/* review display */}
                <ReviewsDisplay reviews={reviews} />

            </div>

            {/* product card */}
            <div className='details__card'>
                <div className='product__details__name-container'>{product.product_name}</div>
                <p className='details product__description-container'>
                    {product.product_description}
                </p>
                <p id='details__price1' className='details product__price-container'>
                    Price: {format(product.price)}
                </p>
                <p id='details__price2' className='details product__labor-container'>
                    Labor average: {format(product.labor_estimate)}
                </p>
                <p id='details__totalprice'>
                    Total Price: {format(product.price + product.labor_estimate)}
                </p>
                <p><button onClick={() => handleAddItem()}>Add to build list</button></p>
                {/* <button onClick={() => handleAddToCart(product.id)}>
                    Add To Cart
                </button> */}
            </div>

            <div className='product__reviews-template'>
                <ReviewForm product={product} />
            </div>

        </div>

    )

}