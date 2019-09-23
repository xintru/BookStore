import {put} from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/actions';

export function* productSaga (action) {
    yield put(actions.initStartLoading());
    try {
        const response = yield axios.get('https://bookstore-27221.firebaseio.com/pack.json')
        yield put(actions.initSuccess(response));
    } catch (error) {
        yield put(actions.initFail(error));
    }
}