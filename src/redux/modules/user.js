import { createSlice } from '@reduxjs/toolkit'
import { put } from 'redux-saga/effects';

const initialState = {
    loading: false,
    loaded: false,
    data: null,
    error: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadUser: (state, action) => ({ ...initialState, loading: true }),
        loadUserSuccess: (state, action) => ({ ...initialState, loading: false, loaded: true, data: action.payload }),
        loadUserFailure: (state, action) => ({ ...initialState, loading: false, loaded: true, error: action.payload }),
    },
});

const { loadUser, loadUserSuccess, loadUserFailure } = userSlice.actions;

export function* watchUser() {
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
        });
        const jsonResponse = yield response.json();
        if (response.status > 200) {
            throw new Error(jsonResponse);
        }
        yield put(loadUserSuccess(jsonResponse));
    } catch (e) {
        yield put(loadUserFailure(e));
    }
}

export { loadUser };
export default userSlice.reducer;