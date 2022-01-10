import { csrfFetch } from './csrf';

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


// will try using an object this time instead of an array
// first redux toolkit then will convert to typescript

const initialState = {
    //!HAVE TO REFACTOR COMPONENTS TO GO A LEVEL DEEPER
    //! MAYBE SHOULD GO AHEAD AND MAKE THIS AN ARRAY because I will
    //! Have to do the conversion ANYWAY within components.... which is undesirable
    reviews: []
}

const name = "reviews"

//* ASYNC THUNKS

export const getReviews = createAsyncThunk(
    "reviews/getReviews",
    async () => {
        const res = await csrfFetch(`/api/reviews`);
        if (res.ok) {
            const reviews = await res.json();
            return reviews
        }

    }
)

export const addReview = createAsyncThunk(
    "reviews/addReview",
    async (updateObj) => {

        updateObj = JSON.stringify(updateObj)
        const res = await csrfFetch(`/api/reviews`, {
            method: "POST",
            body: updateObj,
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.ok) {
            const reviews = await res.json();
            return reviews
        }

    }
)

export const updateReview = createAsyncThunk(
    "reviews/updateReview",
    async (newReview) => {

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
            return reviews
        }

    }
)

export const deleteReview = createAsyncThunk(
    "reviews/deleteReview",
    async (review) => {

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
            return reviews
        }

    }
)



//* SLICE
const reviewsSlice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getReviews.fulfilled, (state, action) => {
            // manipulate state wit the return of the asyncThunks created by
            // toolkit here
            // keep async thunks pure

            state.reviews.length = 0
            action.payload.forEach(review => {
                state.reviews.push(review)
            });

        })

        builder.addCase(addReview.fulfilled, (state, action) => {

        })

        builder.addCase(updateReview.fulfilled, (state, action) => {

        })

        builder.addCase(deleteReview.fulfilled, (state, action) => {

        })

    }
})










//! OLD PREVIOUS TO TOOLKIT


// //actions
// const LOAD = "reviews/LOAD";
// const ADD = "reviews/ADD";
// const EDIT = 'reviews/EDIT';
// const DELETE = 'reviews/DELETE'

// //action creators
// const load = list => ({
//     type: LOAD,
//     list
// });

// const add = newReview => ({
//     type: ADD,
//     newReview
// })

// const edit = updatedReview => ({
//     type: EDIT,
//     updatedReview
// })

// const del = reviewId => ({
//     type: DELETE,
//     reviewId
// })

// //!Thunk ACTION CREATORS
// //this will fetch all reviews to be rendered on product page
// export const getReviews = () => async (dispatch) => {
//     const res = await csrfFetch(`/api/reviews`);
//     if (res.ok) {
//         const reviews = await res.json();
//         dispatch(load(reviews));
//         return reviews
//     }
// };

// export const addReview = (updateObj) => async (dispatch) => {
//     updateObj = JSON.stringify(updateObj)
//     const res = await csrfFetch(`/api/reviews`, {
//         method: "POST",
//         body: updateObj,
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });
//     if (res.ok) {
//         const reviews = await res.json();
//         dispatch(load(reviews));
//         return reviews
//     }
// };

// export const delReview = (review) => async (dispatch) => {
//     const { id } = review
//     review = JSON.stringify(review)
//     const res = await csrfFetch(`/api/reviews/`, {
//         method: "DELETE",
//         body: review,
//         headers: {
//             'Content-Type': "application/json"
//         }
//     })
//     if (res.ok) {
//         const reviews = await res.json();
//         dispatch(load(reviews));
//         return reviews
//     }
// }


// export const updateReview = (newReview) => async (dispatch) => {
//     newReview = JSON.stringify(newReview)
//     const res = await csrfFetch(`/api/reviews`, {
//         method: "PUT",
//         body: newReview,
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });
//     if (res.ok) {
//         const reviews = await res.json();
//         dispatch(load(reviews));
//         return reviews
//     }
// };




// //initial state variables
// const initialState = {};


// //REVIEWS REDUCER
// const reviewsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOAD: {
//             const allReviews = {};
//             action.list && action.list.forEach(review => {
//                 allReviews[review.id] = review;
//             });
//             return {
//                 ...allReviews,
//                 ...state
//             };
//         }
//         case ADD: {
//             const newState = { ...state }
//             newState[action.newReview] = action.newReview
//             return newState
//         }
//         case DELETE: {
//             const newState = { ...state }
//             delete newState[action.reviewId]
//             return newState
//         }
//         default:
//             return state
//     }
// }

// export default reviewsReducer;
export default reviewsSlice.reducer;