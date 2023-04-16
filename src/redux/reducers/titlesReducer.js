import * as actionTypes from '../actionTypes';

const initialState = {
	titles: {
		premier: null,
	},
	isLoading: false,
	error: null,
};

const titlesReducer = (state = initialState, action = null) => {
	switch (action.type) {

	case actionTypes.MAIN_TITLES_REQUESTED:
		return {
			...initialState,
			isLoading: true,
		};

	case actionTypes.MAIN_TITLES_RECEIVED:
		return {
			...initialState,
			titles: {
				premier: action.payload.premier,
			}
		};

	case actionTypes.MAIN_TITLES_FAILED:
		return {
			...initialState,
			error: action.error,
		};

	default:
		return state;
	}
};

export default titlesReducer;