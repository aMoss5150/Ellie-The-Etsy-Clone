import { useSelector } from 'react-redux'

import Review from '../ReviewDetails'

import './ReviewsDisplay.css'


export default function ReviewsDisplay({ product }) {

    return (
        <div className='reviews__display-container'>
            <h2>Reviews Display Test Div</h2>
            <Review product={product} />
        </div>
    )

}