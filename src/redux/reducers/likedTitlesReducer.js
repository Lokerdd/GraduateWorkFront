import * as actionTypes from '../actionTypes';

const initialState = {
	titles: [],
	isLoading: false,
	amountOfPages: 0,
	error: null,
};

const likedTitlesReducer = (state = initialState, action = null) => {
	switch (action.type) {
	case actionTypes.LIKED_TITLES_REQUESTED:
		return {
			...state,
			isLikedLoading: true,
		};
	case actionTypes.LIKED_TITLES_RECEIVED:
		return {
			...initialState,
			titles: action.payload.data,
			amountOfPages: action.payload.meta.last_page
		};
	case actionTypes.LIKED_TITLES_FAILED:
		return {
			...initialState,
			error: action.error,
		};
	default:
		return state;
	}
};

export default likedTitlesReducer;
