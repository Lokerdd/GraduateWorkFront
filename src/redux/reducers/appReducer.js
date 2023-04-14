import * as actionTypes from '../actionTypes';

const initialState = {
	type: 'anime',
};

const appReducer = (state = initialState, action = null) => {
	switch (action.type) {

	case actionTypes.CHANGE_APP_TYPE:
		return {
			type: action.payload,
		};

	default:
		return state;
	}
};

export default appReducer;