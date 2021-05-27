import { csrfFetch } from './csrf';

//actions
const LOAD = "reviews/LOAD";
const ADD = "reviews/ADD";
const EDIT = 'reviews/EDIT';
const DELETE = 'reviews/DELETE'

//action creators
const load = list => ({
    type: LOAD,
    list
});

const add = newReview => ({
    type: ADD,
    newReview
})

const edit = updatedReview => ({
    type: EDIT,
    updatedReview
})

const del = reviewId => ({
    type: DELETE,
    reviewId
})

//!Thunk ACTION CREATORS
//this will fetch all reviews to be rendered on product page
export const getReviews = () => async (dispatch) => {
    const res = await csrfFetch(`/api/reviews`);
    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews));
        return reviews
    }
};

export const addReview = (newReview) => async (dispatch) => {
    newReview = JSON.stringify(newReview)
    const res = await csrfFetch(`/api/reviews`, {
        method: "POST",
        body: newReview,
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews));
        return reviews
    }
};

export const delReview = (review) => async (dispatch) => {
    const { id } = review
    review = JSON.stringify(review)
    const res = await csrfFetch(`/api/reviews/`, {
        method: "DELETE",
        body: review,
        headers: {
            'Content-Type': "application/json"
        }
    })
    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews));
        return reviews
    }

}


export const updateReview = (newReview) => async (dispatch) => {
    newReview = JSON.stringify(newReview)
    const res = await csrfFetch(`/api/reviews`, {
        method: "PUT",
        body: newReview,
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews));
        return reviews
    }
};




//initial state variables
const initialState = {};


//REVIEWS REDUCER
const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allReviews = {};
            action.list && action.list.forEach(review => {
                allReviews[review.id] = review;
            });
            return {
                ...allReviews,
                ...state
            };
        }

        case ADD: {
            const newState = { ...state }
            newState[action.newReview] = action.newReview
            return newState
        }

        case DELETE: {
            const newState = { ...state }
            delete newState[action.reviewId]
            return newState
        }

        default:
            return state
    }
}

export default reviewsReducer;