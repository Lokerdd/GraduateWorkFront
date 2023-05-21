import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { searchSucceed, searchFailed } from '../actions/search';
import { SEARCH_REQUESTED } from '../actionTypes';

function* searchWorker({ payload }) {
	try {
		const response = yield call(api.get, `title/search?search=${payload}`, );
		console.log(payload);
		yield put(searchSucceed(response.data));
	} catch (error) {
		yield put(searchFailed(error.response.data));
	}
}
function* searchWatcher() {
	yield takeLatest(SEARCH_REQUESTED, searchWorker);
}
export default searchWatcher;