import * as actionTypes from '../actionTypes';

const initialState = {
	title: {},
	alsoCool: [],
	comments: [],
	isCommentsLoading: false,
	seasons: [],
	isLoading: false,
	error: null,
};

const titlePageReducer = (state = initialState, action = null) => {
	switch (action.type) {

	case actionTypes.TITLE_REQUESTED:
		return {
			...initialState,
			isLoading: true,
		};

	case actionTypes.TITLE_RECEIVED: {
		const data = action.payload;
		return {
			...initialState,
			title: {
				amountOfRates: data.amountOfRates,
				author: data.author,
				description: data.description,
				genres: data.genres,
				id: data.id,
				image: data.image,
				name: data.name,
				rate: data.rate,
				type: data.type,
				release: data.release,
				status: data.status,
				studio: data.studio,
			},
			alsoCool: data.alsoCool,
			comments: data.comments,
			seasons: data.seasons,
		};
	}

	case actionTypes.TITLE_FAILED:
		return {
			...initialState,
			error: action.error,
		};

	case actionTypes.SEND_COMMENT:
		return {
			...state,
			isCommentsLoading: true,
		};

	default:
		return state;
	}
};

export default titlePageReducer;