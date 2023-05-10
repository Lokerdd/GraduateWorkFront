import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { topTitlesReceived, topTitlesFailed } from '../actions/titles';
import { TOP_TITLES_REQUESTED } from '../actionTypes';

function* topTitlesWorker({ payload }) {
	try {
		const response = yield call(api.get, 'title/top', {params: payload});
		console.log(response);
		yield put(topTitlesReceived(response.data));
	} catch (error) {
		yield put(topTitlesFailed(error.response.data));
	}
}
function* topTitlesWatcher() {
	yield takeLatest(TOP_TITLES_REQUESTED, topTitlesWorker);
}
export default topTitlesWatcher;