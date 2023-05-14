import * as actionTypes from '../actionTypes';

export const authRequest = (payload) => ({
	type: actionTypes.AUTH_REQUESTED,
	payload,
});

export const verifyRequest = () => ({
	type: actionTypes.VERIFY_REQUESTED,
});

export const logoutRequest = () => ({
	type: actionTypes.LOGOUT_REQUESTED,
});

export const authSucceed = (payload) => ({
	type: actionTypes.AUTH_SUCCESS,
	payload,
});

export const authFailed = (error) => ({
	type: actionTypes.AUTH_FAILED,
	error,
});

export const dropError = () => ({
	type: actionTypes.DROP_AUTH_ERROR,
});