import { all } from 'redux-saga/effects';
import mainPageTitlesSaga from './mainPageTitlesSaga';
import authSaga from './authSaga';
import verifySaga from './verifySaga';
import logoutSaga from './logoutSaga';
import catalogTitlesSaga from './catalogTitlesSaga';
import loadMoreCatalogSaga from './loadMoreCatalogSaga';

function* rootSaga() {
	yield all([
		mainPageTitlesSaga(),
		authSaga(),
		verifySaga(),
		logoutSaga(),
		catalogTitlesSaga(),
		loadMoreCatalogSaga(),
	]);
}
  
export default rootSaga;
  