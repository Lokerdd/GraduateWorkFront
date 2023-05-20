import {
	call,
	put,
	select,
	takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { likedTitlesReceived, likedTitlesFailed } from '../actions/liked';
import { LIKED_TITLES_REQUESTED } from '../actionTypes';

function* likedTitlesWorker({ payload }) {
	try {
		const response = yield call(api.get, 'title/profile', {params: payload});
		const prevTitles = yield select((state) => state.liked.titles);
		response.data.data = [...prevTitles, ...response.data.data];
		yield put(likedTitlesReceived(response.data));
	} catch (error) {
		yield put(likedTitlesFailed(error.response.data));
	}
}
function* likedTitlesWatcher() {
	yield takeLatest(LIKED_TITLES_REQUESTED, likedTitlesWorker);
}
export default likedTitlesWatcher;