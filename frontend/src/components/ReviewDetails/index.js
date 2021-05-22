

import './Review.css'

export default function Review({ product }) {
    if (!product) return <h3>no product found on REVIEW test</h3>
    return (
        <div className='review__container'>
            REVIEW-DETAILS COMPONENT TEST, this will be a single review
            div
        </div>
    )
}