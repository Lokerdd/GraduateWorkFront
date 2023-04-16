import * as actionTypes from '../actionTypes';

export const getMainPageTitles = () => ({
	type: actionTypes.MAIN_TITLES_REQUESTED,
});

export const mainTitlesReceived = (payload) => ({
	type: actionTypes.MAIN_TITLES_RECEIVED,
	payload,
});

export const mainTitlesFailed = (error) => ({
	type: actionTypes.MAIN_TITLES_FAILED,
	error,
});