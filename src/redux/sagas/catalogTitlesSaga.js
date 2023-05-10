import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { catalogTitlesReceived, catalogTitlesFailed } from '../actions/titles';
import { CATALOG_TITLES_REQUESTED } from '../actionTypes';

function* catalogTitlesWorker({ payload }) {
	try {
		const response = yield call(api.get, 'title/catalog', {params: payload});
		console.log(response);
		yield put(catalogTitlesReceived(response.data));
	} catch (error) {
		yield put(catalogTitlesFailed(error.response.data));
	}
}
function* catalogTitlesWatcher() {
	yield takeLatest(CATALOG_TITLES_REQUESTED, catalogTitlesWorker);
}
export default catalogTitlesWatcher;