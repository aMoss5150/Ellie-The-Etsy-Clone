

import './Review.css'

const dateFormat = require('dateformat')

export default function ReviewDetails({ review }) {
    if (!review) return <h3>No reviews for this product yet...</h3>
    return (
        <div className='review__container'>
            <p id="review__user">
                {review.username}
            </p>
            <p id="review__description">
                {review.description}
            </p>
            <p id='review__date'>
                -{dateFormat([...review.createdAt].slice(0, 10).join(''), "dddd, mmmm dS, yyyy")}
            </p>
        </div>
    )
}