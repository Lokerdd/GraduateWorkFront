import {
	call,
	put,
	takeLatest,
} from 'redux-saga/effects';

import api from '../../api/api';
import { titleReceived, titleFailed } from '../actions/titlePage';
import { SEND_COMMENT } from '../actionTypes';

function* sendCommentWorker({ payload: {id, text} }) {
	try {
		const response = yield call(api.post, `/title/${id}`, {text});
		yield put(titleReceived(response.data.data));
	} catch (error) {
		yield put(titleFailed(error.response.data.message));
	}
}

function* sendCommentWatcher() {
	yield takeLatest(SEND_COMMENT, sendCommentWorker);
}
export default sendCommentWatcher;