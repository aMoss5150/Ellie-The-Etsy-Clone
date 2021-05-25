


import './Review.css'

export default function ReviewDetails({ review }) {
    if (!review) return <h3>No reviews for this product yet...</h3>
    return (
        <div className='review__container'>
            <p>
                {review.description}
            </p>
        </div>
    )
}