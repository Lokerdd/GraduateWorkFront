import * as actionTypes from '../actionTypes';

export const likedTitlesRequest = (payload) => ({
	type: actionTypes.LIKED_TITLES_REQUESTED,
	payload,
});

export const likedTitlesReceived = (payload) => ({
	type: actionTypes.LIKED_TITLES_RECEIVED,
	payload,
});

export const likedTitlesFailed = (error) => ({
	type: actionTypes.LIKED_TITLES_FAILED,
	error,
});