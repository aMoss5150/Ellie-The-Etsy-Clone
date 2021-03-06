import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { updateReview, getReviews, Review } from '../../store/reviews'

import './ModalEditReview.css'

interface Props {
    review: Review
}

export default function ModalEditReview({ review }: Props) {
    const dispatch = useAppDispatch();
    const [newReviewDesc, setNewReviewDesc] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [modalOpen, setModalOpen] = useState(false)
    const userId = useAppSelector(state => state.session).user?.id

    const handleReviewUpdate = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()

        let updateObj = { ...review, newReviewDes: newReviewDesc }
        dispatch(updateReview(updateObj))
        setModalOpen(false)
        dispatch(getReviews())
        setNewReviewDesc('')
        window.location.reload()
    }

    const handleModalClose = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()
        setModalOpen(false)
        setNewReviewDesc('')
    }

    useEffect(() => {
        if (userId === review.user_id) {
            setDisabled(false)
        }
        setModalOpen(false)
    }, [])

    if (!review)
        return null

    return (
        <span>
            <button
                id='review__edit-open'
                className={disabled === true ? 'hidden' : ''}
                onClick={() => setModalOpen(true)}
                style={{ marginLeft: '2px' }}
            >
                Edit review
            </button>


            <div className='reviewedit__modal-container' id={modalOpen === true ? '' : "hidden"}>

                <form action="">
                    <textarea
                        value={newReviewDesc}
                        id="new__review-input"
                        placeholder='Edit...'
                        onChange={(e) => setNewReviewDesc(e.target.value)}
                    />

                    <button
                        type='submit'
                        id='review__edit-update'
                        onClick={(e) => handleReviewUpdate(e)}
                    >
                        Update review
                    </button>

                    <button
                        id='review__edit-cancel'
                        onClick={(e) => handleModalClose(e)}
                    >
                        Close
                    </button>

                </form>

            </div>

        </span>
    )
}