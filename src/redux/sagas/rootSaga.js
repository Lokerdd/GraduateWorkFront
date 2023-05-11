import { all } from 'redux-saga/effects';
import mainPageTitlesSaga from './mainPageTitlesSaga';
import authSaga from './authSaga';
import verifySaga from './verifySaga';
import logoutSaga from './logoutSaga';
import catalogTitlesSaga from './catalogTitlesSaga';
import loadMoreCatalogSaga from './loadMoreCatalogSaga';
import topTitlesSaga from './topTitlesSaga';
import loadMoreTopSaga from './loadMoreTopSaga';
import titlePageSaga from './titlePageSaga';
import sendCommentSaga from './sendCommentSaga';

function* rootSaga() {
	yield all([
		mainPageTitlesSaga(),
		authSaga(),
		verifySaga(),
		logoutSaga(),
		catalogTitlesSaga(),
		loadMoreCatalogSaga(),
		topTitlesSaga(),
		loadMoreTopSaga(),
		titlePageSaga(),
		sendCommentSaga(),
	]);
}
  
export default rootSaga;
  