import { all, takeEvery } from 'redux-saga/effects';
import { loadUser, watchUser } from "./modules/user";
import { loadProduct, watchProduct } from "./modules/product";
import { login , watchLogin } from "./modules/login";

export default function* root() {
    yield all([
        takeEvery(loadUser, watchUser),
        takeEvery(loadProduct, watchProduct),
        takeEvery(loadProduct,watchProduct),
        takeEvery(login,watchLogin)
    ]);
};