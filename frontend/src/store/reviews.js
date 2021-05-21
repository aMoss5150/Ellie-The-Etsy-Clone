
//actions
export const LOAD = "reviews/LOAD";
export const ADD = "reviews/ADD";

//action creators
const load = list => ({
    type: LOAD,
    list
});

const add = newReview => ({
    type: ADD,
    newReview
})


//!Thunk ACTION CREATORS
//this will fetch all reviews to be rendered on product page
export const getReviews = () => async (dispatch) => {
    const res = await fetch(`/api/reviews`);
    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews));
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
    }
};

//initial state variables
const initialState = {};


//REVIEWS REDUCER
const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allReviews = {};
            action.list.forEach(product => {
                allReviews[product.id] = product;
            });
            return {
                ...allReviews,
                ...state
            };
        }

        case ADD: {
            const newState = { ...state }
            newState[action.newItem] = action.newItem
            return newState
        }

        default:
            return state
    }
}

export default reviewsReducer;