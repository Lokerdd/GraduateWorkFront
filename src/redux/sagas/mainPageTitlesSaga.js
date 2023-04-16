import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { mainTitlesReceived, mainTitlesFailed } from '../actions/titles';
import { MAIN_TITLES_REQUESTED } from '../actionTypes';

function* mainPageTitlesWorker() {
	try {
		const response = yield call(api.get, 'title/mainPage');
		yield put(mainTitlesReceived(response.data));
	} catch (error) {
		yield put(mainTitlesFailed(error.response.data));
	}
}
function* mainPageTitlesWatcher() {
	yield takeLatest(MAIN_TITLES_REQUESTED, mainPageTitlesWorker);
}
export default mainPageTitlesWatcher;