import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginPage from '../pages/Login';
import Principal from '../pages/Home';
import NotFound from '../pages/NotFound';

export const Router = () => {
	const loginState = useSelector((state: any) => state.login);


	return (
		<Routes>
			<Route
				path="/"
				element={loginState.isLoggedIn ? <Navigate to="inicio" /> : <LoginPage />}
			/>
			{/** Not Found page */}
			<Route
				path="404"
				element={<NotFound />}
			/>
			<Route
				path="*"
				element={<NotFound />}
			/>
			{/** Protected Routes */}
			<Route
				path="inicio"
				element={loginState.isLoggedIn ? <Principal /> : <Navigate to="/" />}
			/>
		</Routes>
	);
};
