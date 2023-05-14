import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { titleReceived, titleFailed } from '../actions/titlePage';
import { LIKE_TITLE } from '../actionTypes';

function* likeTitleWorker({ payload: {id} }) {
	try {
		const response = yield call(api.post, `/title/like/${id}`);
		yield put(titleReceived(response.data.data));
	} catch (error) {
		yield put(titleFailed(error.response.data.message));
	}
}

function* likeTitleWatcher() {
	yield takeLatest(LIKE_TITLE, likeTitleWorker);
}
export default likeTitleWatcher;