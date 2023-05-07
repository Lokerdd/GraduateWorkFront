import { all } from 'redux-saga/effects';
import mainPageTitlesSaga from './mainPageTitlesSaga';
import authSaga from './authSaga';
import verifySaga from './verifySaga';
import logoutSaga from './logoutSaga';

function* rootSaga() {
	yield all([
		mainPageTitlesSaga(),
		authSaga(),
		verifySaga(),
		logoutSaga(),
	]);
}
  
export default rootSaga;
  