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

export const getCatalogTitles = (payload) => ({
	type: actionTypes.CATALOG_TITLES_REQUESTED,
	payload,
});

export const catalogTitlesReceived = (payload) => ({
	type: actionTypes.CATALOG_TITLES_RECEIVED,
	payload,
});

export const catalogTitlesFailed = (error) => ({
	type: actionTypes.CATALOG_TITLES_FAILED,
	error,
});

export const loadMoreCatalogTitles = (payload) => ({
	type: actionTypes.LOAD_MORE_CATALOG_TITLES,
	payload,
});


export const getTopTitles = (payload) => ({
	type: actionTypes.TOP_TITLES_REQUESTED,
	payload,
});

export const topTitlesReceived = (payload) => ({
	type: actionTypes.TOP_TITLES_RECEIVED,
	payload,
});

export const topTitlesFailed = (error) => ({
	type: actionTypes.TOP_TITLES_FAILED,
	error,
});

export const loadMoreTopTitles = (payload) => ({
	type: actionTypes.LOAD_MORE_TOP_TITLES,
	payload,
});