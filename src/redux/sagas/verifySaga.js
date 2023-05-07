import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../api/api';
import { authSucceed, authFailed } from '../actions/auth';
import { VERIFY_REQUESTED } from '../actionTypes';

function* verifyWorker() {
	try {
		const { data } = yield call(api.get, 'auth/user');
		yield put(authSucceed({ isLoggedIn: true, user: data }));
	} catch (error) {
		localStorage.removeItem('token');
		yield put(authFailed(error.message));
	}
}

function* verifyWatcher() {
	yield takeLatest(VERIFY_REQUESTED, verifyWorker);
}

export default verifyWatcher;