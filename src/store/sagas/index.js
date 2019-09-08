import {takeEvery} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { productSaga } from './productSaga';

export function* getProductsSaga() {
    yield takeEvery(actionTypes.PRODUCTS_INIT_START, productSaga);
}