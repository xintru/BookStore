import {put} from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/actions';

export function* productSaga (action) {
    yield put(actions.initStartLoading());
    try {
        const response = yield axios.get('https://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books')
        yield put(actions.initSuccess(response));
    } catch (error) {
        yield put(actions.initFail(error));
    }
}