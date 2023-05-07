import * as actionTypes from '../actionTypes';

const initialState = {
	authUser: {
		name: null,
		email: null,
		avatar: null,
	},
	isLoading: false,
	error: null,
	isLoggedIn: false,
};

const authReducer = (state = initialState, action = null) => {
	switch (action.type) {
	case actionTypes.AUTH_REQUESTED:
		return {
			...initialState,
			isLoading: true,
		};
	case actionTypes.AUTH_SUCCESS:
		return {
			...initialState,
			authUser: action.payload.user,
			isLoggedIn: action.payload.isLoggedIn,
		};
	case actionTypes.AUTH_FAILED:
		return {
			...initialState,
			error: action.error,
		};
	case actionTypes.VERIFY_REQUESTED:
		return {
			...initialState,
			isLoading: true,
		};
	case actionTypes.EDIT_PROFILE_SUCCEED:
		return {
			...initialState,
			authUser: action.payload,
			isLoggedIn: state.isLoggedIn,
		};
	default:
		return state;
	}
};

export default authReducer;