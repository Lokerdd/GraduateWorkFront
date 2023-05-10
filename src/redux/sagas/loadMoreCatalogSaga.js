import {
	call,
	put,
	select,
	takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { catalogTitlesReceived, catalogTitlesFailed } from '../actions/titles';
import { LOAD_MORE_CATALOG_TITLES } from '../actionTypes';

function* loadMoreCatalogWorker({ payload }) {
	try {
		const response = yield call(api.get, 'title/catalog', {params: payload});
		const prevTitles = yield select((state) => state.titles.catalogTitles);
		if (prevTitles) response.data.data = [...prevTitles, ...response.data.data];
		yield put(catalogTitlesReceived(response.data));
	} catch (error) {
		yield put(catalogTitlesFailed(error.response.data));
	}
}
function* loadMoreCatalogWatcher() {
	yield takeLatest(LOAD_MORE_CATALOG_TITLES, loadMoreCatalogWorker);
}
export default loadMoreCatalogWatcher;