import * as actionTypes from '../actionTypes';

const initialState = {
	titles: {
		premier: null,
		rate: null,
		genres: null,
		romantic: null,
		comedy: null,
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

	case actionTypes.MAIN_TITLES_RECEIVED: {
		const {
			premier,
			rate,
			genres,
			romantic,
			comedy,
		} = action.payload;
		return {
			...initialState,
			titles: {
				premier,
				rate,
				genres,
				romantic,
				comedy,
			}
		};
	}

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