
//actions
export const LOAD = "reviews/LOAD";
export const ADD = "reviews/ADD";
export const EDIT = 'reviews/EDIT';

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


//!Thunk ACTION CREATORS
//this will fetch all reviews to be rendered on product page
export const getReviews = () => async (dispatch) => {
    const res = await fetch(`/api/reviews`);
    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews));
        return reviews
    }
};

export const addReview = (newReview) => async (dispatch) => {
    newReview = JSON.stringify(newReview)
    const res = await fetch(`/api/reviews`, {
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

//initial state variables
const initialState = {};


//REVIEWS REDUCER
const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allReviews = {};
            action.list.forEach(review => {
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

        default:
            return state
    }
}

export default reviewsReducer;