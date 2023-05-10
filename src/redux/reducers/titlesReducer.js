import * as actionTypes from '../actionTypes';

const initialState = {
	mainTitles: {
		premier: null,
		rate: null,
		genres: null,
		romantic: null,
		comedy: null,
	},
	catalogTitles: [],
	catalogAmountOfPages: 0,
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
			mainTitles: {
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

	case actionTypes.CATALOG_TITLES_REQUESTED:
		return {
			...initialState,
			isLoading: true,
		};
	
	case actionTypes.CATALOG_TITLES_RECEIVED: {
		return {
			...initialState,
			catalogTitles: action.payload.data,
			catalogAmountOfPages: action.payload.meta.last_page
		};
	}
	
	case actionTypes.CATALOG_TITLES_FAILED:
		return {
			...initialState,
			error: action.error,
		};

	case actionTypes.LOAD_MORE_CATALOG_TITLES:
		return {
			...state,
			isLoading: true,
		};

	default:
		return state;
	}
};

export default titlesReducer;