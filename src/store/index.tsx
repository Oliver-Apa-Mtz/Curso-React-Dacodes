import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './modules/login';
import genresReducer from './modules/genres';

const store = configureStore({
	reducer: {
		login: loginReducer,
		genres: genresReducer
	},
});

export default store;