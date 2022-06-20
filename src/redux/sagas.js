import { all, takeEvery } from 'redux-saga/effects';
import { loadUser, watchUser } from "./modules/user";
import { loadProduct, watchProduct } from "./modules/product";

export default function* root() {
    yield all([
        takeEvery(loadUser, watchUser),
        takeEvery(loadProduct, watchProduct)
    ]);
};