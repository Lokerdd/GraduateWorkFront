import { combineReducers } from 'redux';

import authReducer from './authReducer';
import titlesReducer from './titlesReducer';
import titlePageReducer from './titlePageReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	titles: titlesReducer,
	titlePage: titlePageReducer,
});

export default rootReducer;