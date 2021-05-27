import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delReview } from '../../store/reviews'
import ModalEditReview from '../ModalEditReview'
import './Review.css'

const dateFormat = require('dateformat')

export default function ReviewDetails({ review }) {
    const dispatch = useDispatch();
    // const [reviewState, setReviewState] = useState('')
    const [disabled, setDisabled] = useState(true)

    const userId = useSelector(state => state.session).user?.id


    const handleDelete = () => {
        dispatch(delReview(review))
        //dont want this to update if you dont trigger an update
        window.location.reload()
    }
    // const handleUpdate = () => {

    // dispatch(updateReview(reviewState))
    // }

    // useEffect(() => {
    // setReviewState(review)
    // }, [reviewState])

    useEffect(() => {
        if (userId === review.user_id) {
            setDisabled(false)
        }
    }, [userId])

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
            <p>
                {review.createdAt !== review.updatedAt ? "edited" : ''}
            </p>
            <button className={disabled === true ? 'hidden' : ''} onClick={() => (handleDelete())} id="delete__review-button">
                Delete
            </button>
            <ModalEditReview review={review} />
            {/* <button onClick={() => (handleUpdate())} id="update__review-button">
                Update my review
            </button> */}
        </div >
    )
}