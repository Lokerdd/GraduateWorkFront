import * as actionTypes from '../actionTypes';

export const searchRequest = (payload) => ({
	type: actionTypes.SEARCH_REQUESTED,
	payload,
});

export const searchSucceed = (payload) => ({
	type: actionTypes.SEARCH_SUCCEED,
	payload,
});

export const searchFailed = (error) => ({
	type: actionTypes.SEARCH_FAILED,
	error,
});