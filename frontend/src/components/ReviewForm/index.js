import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReview } from '../../store/reviews'

import './ReviewForm.css'
export default function ReviewForm({ product }) {
    const dispatch = useDispatch();

    const userId = useSelector(state => state.session).user?.id

    const [description, setDescription] = useState('')
    const [productId, setProductId] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        const newReview = {
            productId,
            description
        }
        dispatch(addReview(newReview))
        setDescription('')
    }

    useEffect(() => {
        setProductId(product.id)
    }, [product])

    if (!userId) return null

    return (
        <div className='review__form-container'>
            <h1>Add a review</h1>
            <form className='review__form' onSubmit={handleSubmit}>
                <textarea style={{ minWidth: '450px', minHeight: '150px' }} value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit" id="submit__button">Submit New Review</button>
            </form>
        </div>
    )
}