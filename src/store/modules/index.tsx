import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './login';
import genresReducer from './genres';

const rootReducer = combineReducers({
	login: loginReducer,
	genres: genresReducer,
});

export default rootReducer;