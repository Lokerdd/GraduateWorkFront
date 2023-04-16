import { all } from 'redux-saga/effects';
import mainPageTitlesSaga from './mainPageTitlesSaga';

function* rootSaga() {
	yield all([
		mainPageTitlesSaga(),
	]);
}
  
export default rootSaga;
  