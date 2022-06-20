import { createSlice } from '@reduxjs/toolkit'
import { put } from 'redux-saga/effects';

const initialState = {
    loading: false,
    loaded: false,
    data: null,
    error: null
};

export const userSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        loadProduct: (state, action) => ({ ...initialState, loading: true }),
        loadProductSuccess: (state, action) => ({
            ...initialState,
            loading: false,
            loaded: true,
            data: action.payload
        }),
        loadProductFailure: (state, action) => ({
            ...initialState,
            loading: false,
            loaded: true,
            error: action.payload
        }),
    },
});

const { loadProduct, loadProductSuccess, loadProductFailure } = userSlice.actions;

export function* watchProduct() {
    try {
        const response = yield fetch('https://fakestoreapi.com/products', {
            method: 'GET'
        });
        const jsonResponse = yield response.json();
        if (response.status > 200) {
            throw new Error(jsonResponse);
        }
        yield put(loadProductSuccess(jsonResponse));
    } catch (e) {
        yield put(loadProductFailure(e));
    }
}

export { loadProduct };
export default userSlice.reducer;