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

export const rateTitle = (payload) => ({
	type: actionTypes.RATE_TITLE,
	payload,
});

export const likeTitle = (payload) => ({
	type: actionTypes.LIKE_TITLE,
	payload,
});