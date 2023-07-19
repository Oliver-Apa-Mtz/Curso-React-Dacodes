import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/Login';

import Principal from '../pages/Home';

import NotFound from '../pages/NotFound';


export const Router = () => {
	const isLogged = false;


	return (
		<Routes>
			<Route
				path="/"
				element={isLogged ? <Navigate to="inicio" /> : <LoginPage />}
			/>
			{/** Not Found page */}
			<Route
				path="404"
				element={<NotFound />}
			/>
			<Route
				path="*"
				element={isLogged ? <Navigate to="inicio" /> : <LoginPage />}
			/>
			{/** Protected Routes */}
			<Route
				path="inicio"
				element={<Principal />}
			/>
		</Routes>
	);
};
