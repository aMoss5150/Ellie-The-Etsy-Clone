import { useSelector } from 'react-redux'

import ReviewDetails from '../ReviewDetails'

import './ReviewsDisplay.css'


export default function ReviewsDisplay({ reviews }) {

    if (!reviews) return (<h1>No Reviews for this product yet..</h1>)

    return (
        <div className='reviews__display-container'>
            <h2>Reviews Display Test Div</h2>
            {reviews.map((review) => (
                <ReviewDetails review={review} />
            ))}
        </div>
    )

}