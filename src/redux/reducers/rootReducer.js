import { combineReducers } from 'redux';

import authReducer from './authReducer';
import titlesReducer from './titlesReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	titles: titlesReducer,
});

export default rootReducer;