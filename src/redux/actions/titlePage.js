import * as actionTypes from '../actionTypes';

export const getTitle = (payload) => ({
	type: actionTypes.TITLE_REQUESTED,
	payload,
});

export const titleReceived = (payload) => ({
	type: actionTypes.TITLE_RECEIVED,
	payload,
});

export const titleFailed = (error) => ({
	type: actionTypes.TITLE_FAILED,
	error,
});

export const sendComment = (payload) => ({
	type: actionTypes.SEND_COMMENT,
	payload
});