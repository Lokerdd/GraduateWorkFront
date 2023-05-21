import * as actionTypes from '../actionTypes';

const initialState = {
	titles: [],
	isLoading: false,
	error: null,
};

const searchReducer = (state = initialState, action = null) => {
	switch (action.type) {
	case actionTypes.SEARCH_REQUESTED:
		return {
			...initialState,
			isLoading: true,
		};
	case actionTypes.SEARCH_SUCCEED:
		return {
			...initialState,
			titles: action.payload.data,
		};
	case actionTypes.SEARCH_FAILED:
		return {
			...initialState,
			error: action.error,
		};
	default:
		return state;
	}
};

export default searchReducer;
