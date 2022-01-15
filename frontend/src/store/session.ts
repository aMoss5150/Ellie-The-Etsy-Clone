import { csrfFetch } from './csrf';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//* Types

type SliceState = {
    user: User | null
}

export interface User {
    email: string
    username: string
    password: string
}

//* async Thunks

export const restoreUser = createAsyncThunk(
    "session/restoreUser",
    async () => {
        const response = await csrfFetch('/api/session');
        const data = await response.json();
        return data;
    }
)

export const loginUser = createAsyncThunk(
    "session/loginUser",
    async (user) => {
        const { credential, password } = user;
        const response = await csrfFetch('/api/session', {
            method: 'POST',
            body: JSON.stringify({
                credential,
                password,
            }),
        });
        const data = await response.json();
        return data
    }
)


//* SLICE and reducer


const initialState: SliceState = { user: null };

const name = "session"

const sessionSlice = createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(restoreUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload
        })

    }
})




export default sessionSlice.reducer;


// //ACTIONS
// const SET_USER = 'session/setUser';
// const REMOVE_USER = 'session/removeUser';


// //INITIAL STATE
// const initialState: SliceState = { user: null };


// //ACTION CREATORS
// const setUser = (user) => {
//     return {
//         type: SET_USER,
//         payload: user,
//     };
// };

// const removeUser = () => {
//     return {
//         type: REMOVE_USER,
//     };
// };



// //THUNK ACTION CREATORS

// export const restoreUser = () => async dispatch => {
//     const response = await csrfFetch('/api/session');
//     const data = await response.json();
//     dispatch(setUser(data.user));
//     return response;
// };


// // DISPATCH THIS THUNK TO LOGIN!!

// export const login = (user) => async (dispatch) => {
//     const { credential, password } = user;
//     const response = await csrfFetch('/api/session', {
//         method: 'POST',
//         body: JSON.stringify({
//             credential,
//             password,
//         }),
//     });
//     const data = await response.json();
//     dispatch(setUser(data.user));
//     return response;
// };


// //DISPATCH THIS THUNK TO SIGN UP
// export const signup = (user) => async (dispatch) => {
//     const { username, email, password } = user;
//     const response = await csrfFetch("/api/users", {
//         method: "POST",
//         body: JSON.stringify({
//             username,
//             email,
//             password,
//         }),
//     });
//     const data = await response.json();
//     dispatch(setUser(data.user));
//     return response;
// };

// //DISPATCH THIS THUNK TO LOGOUT
// export const logout = () => async (dispatch) => {
//     const response = await csrfFetch('/api/session', {
//         method: 'DELETE',
//     });
//     dispatch(removeUser());
//     return response;
// };


// //THIS IS THE SESSION REDUCER
// const sessionReducer = (state = initialState, action) => {
//     let newState;
//     switch (action.type) {
//         case SET_USER:
//             newState = Object.assign({}, state);
//             newState.user = action.payload;
//             return newState;
//         case REMOVE_USER:
//             newState = Object.assign({}, state);
//             newState.user = null;
//             return newState;
//         default:
//             return state;
//     }
// };

// export default sessionReducer;