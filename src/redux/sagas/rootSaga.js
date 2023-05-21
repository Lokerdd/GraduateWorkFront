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
import rateTitleSaga from './rateTitleSaga';
import likeTitleSaga from './likeTitleSaga';
import likedTitlesSaga from './likedTitlesSaga';
import editProfileSaga from './editProfileSaga';
import searchSaga from './searchSaga';

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
		rateTitleSaga(),
		likeTitleSaga(),
		likedTitlesSaga(),
		editProfileSaga(),
		searchSaga(),
	]);
}
  
export default rootSaga;
  