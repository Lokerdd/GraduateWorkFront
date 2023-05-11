import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { titleReceived, titleFailed } from '../actions/titlePage';
import { TITLE_REQUESTED } from '../actionTypes';

function* titlePageWorker({ payload }) {
	try {
		const response = yield call(api.get, `title/${payload}`);
		yield put(titleReceived(response.data.data));
	} catch (error) {
		yield put(titleFailed(error.response.data));
	}
}
function* titlePageWatcher() {
	yield takeLatest(TITLE_REQUESTED, titlePageWorker);
}
export default titlePageWatcher;