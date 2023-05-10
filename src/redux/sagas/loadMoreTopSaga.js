import {
	call,
	put,
	select,
	takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { topTitlesReceived, topTitlesFailed } from '../actions/titles';
import { LOAD_MORE_TOP_TITLES } from '../actionTypes';

function* loadMoreTopWorker({ payload }) {
	try {
		const response = yield call(api.get, 'title/top', {params: payload});
		const prevTitles = yield select((state) => state.titles.topTitles);

		if (prevTitles) response.data.data = [...prevTitles, ...response.data.data];
		console.log(response.data.data);
		yield put(topTitlesReceived(response.data));
	} catch (error) {
		yield put(topTitlesFailed(error.response.data));
	}
}
function* loadMoreTopWatcher() {
	yield takeLatest(LOAD_MORE_TOP_TITLES, loadMoreTopWorker);
}
export default loadMoreTopWatcher;