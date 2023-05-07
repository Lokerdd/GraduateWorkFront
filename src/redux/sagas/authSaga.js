import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { authSucceed, authFailed } from '../actions/auth';
import { AUTH_REQUESTED } from '../actionTypes';

function* authWorker({ payload: {type, request} }) {
	try {
		const path = type === 'register'
			? 'auth/register'
			: 'auth/login';
		const { data: { token, user } } = yield call(api.post, path, request);
		localStorage.setItem('token', token);
		yield put(authSucceed({ isLoggedIn: true, user }));
	} catch (error) {
		yield put(authFailed(error.response.data.message));
	}
}

function* authWatcher() {
	yield takeLatest(AUTH_REQUESTED, authWorker);
}
export default authWatcher;