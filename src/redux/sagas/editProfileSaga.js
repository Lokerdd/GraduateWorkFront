import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { editFailed, editSucceed } from '../actions/auth';
import { EDIT_PROFILE_REQUESTED } from '../actionTypes';

function* editProfileWorker({ payload }) {
	try {
		const dataToSend = new FormData();
		Object.keys(payload).forEach((key) => {
			dataToSend.append(key, payload[key]);
		});
		const { data: response } = yield call(api.post, '/auth/edit', dataToSend);
		yield put(editSucceed(response));
	} catch (error) {
		yield put(editFailed(error.response.data.name[0]));
	}
}

function* editProfileWatcher() {
	yield takeLatest(EDIT_PROFILE_REQUESTED, editProfileWorker);
}
export default editProfileWatcher;