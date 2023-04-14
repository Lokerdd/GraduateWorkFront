// import * as actionTypes from '../actionTypes';

const initialState = {
	authUser: {
		name: 'Vitya',
	},
	isLoading: false,
	error: null,
	isLoggedIn: true,
};

const authReducer = (state = initialState, /* action = null */) => {
	return state;
};

export default authReducer;