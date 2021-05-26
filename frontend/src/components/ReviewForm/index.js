import { useState, useEffect } from 'react'

import './ReviewForm.css'
export default function ReviewForm({ product }) {

    const [description, setDescription] = useState('')
    const [productId, setProductId] = useState('')
    //get session user out of the request on the back end
    // const [userId, setUserId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        setProductId(product.id)
    }, [product])



    return (
        <div className='review__form-container'>
            <h1>Add a review</h1>
            <form className='review__form' onSubmit={handleSubmit}>
                <textarea style={{ minWidth: '450px', minHeight: '150px' }} value={description} onChange={(e) => setDescription(e.target.value)} />
                <button id="submit__button">Submit New Review</button>
            </form>
        </div>
    )
}