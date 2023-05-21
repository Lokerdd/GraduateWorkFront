import { combineReducers } from 'redux';

import authReducer from './authReducer';
import titlesReducer from './titlesReducer';
import titlePageReducer from './titlePageReducer';
import likedTitlesReducer from './likedTitlesReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
	auth: authReducer,
	titles: titlesReducer,
	titlePage: titlePageReducer,
	liked: likedTitlesReducer,
	search: searchReducer,
});

export default rootReducer;