// import * as actionTypes from '../actionTypes';

const initialState = {
	authUser: {
		name: 'Vitya',
		email: 'pupsik2002@gmail.com',
		avatar: null,
	},
	isLoading: false,
	error: null,
	isLoggedIn: false,
};

const authReducer = (state = initialState, /* action = null */) => {
	return state;
};

export default authReducer;