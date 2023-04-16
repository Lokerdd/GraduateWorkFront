import { combineReducers } from 'redux';

import authReducer from './authReducer';
import appReducer from './appReducer';
import titlesReducer from './titlesReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	app: appReducer,
	titles: titlesReducer,
});

export default rootReducer;