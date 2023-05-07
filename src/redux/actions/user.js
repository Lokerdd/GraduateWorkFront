import * as actionTypes from '../actionTypes';

export const userRequest = (payload) => ({
	type: actionTypes.USER_REQUESTED,
	payload,
});

export const userReceived = (payload) => ({
	type: actionTypes.USER_RECEIVED,
	payload,
});

export const receivingError = (error) => ({
	type: actionTypes.USER_FAILED,
	error,
});

export const editProfile = (payload) => ({
	type: actionTypes.EDIT_PROFILE_REQUESTED,
	payload,
});

export const editSucceed = (payload) => ({
	type: actionTypes.EDIT_PROFILE_SUCCEED,
	payload,
});

export const editFailed = (error) => ({
	type: actionTypes.EDIT_PROFILE_FAILED,
	error,
});