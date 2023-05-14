import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../api/api';
import {authFailed } from '../actions/auth';
import { LOGOUT_REQUESTED } from '../actionTypes';

function* logoutWorker() {
	try {
		yield call(api.delete, 'auth/logout');
		localStorage.removeItem('token');
		window.location.reload(false);
	} catch (error) {
		yield put(authFailed(error.message));
	}
}

function* logoutWatcher() {
	yield takeLatest(LOGOUT_REQUESTED, logoutWorker);
}

export default logoutWatcher;