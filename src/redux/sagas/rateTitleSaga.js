import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { titleReceived, titleFailed } from '../actions/titlePage';
import { RATE_TITLE } from '../actionTypes';

function* rateTitleWorker({ payload: {id, rate} }) {
	try {
		const response = yield call(api.post, `/title/rate/${id}`, {rate});
		yield put(titleReceived(response.data.data));
	} catch (error) {
		yield put(titleFailed(error.response.data.message));
	}
}

function* rateTitleWatcher() {
	yield takeLatest(RATE_TITLE, rateTitleWorker);
}
export default rateTitleWatcher;