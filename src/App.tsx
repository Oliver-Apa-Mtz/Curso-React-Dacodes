import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/routes';

import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './store/modules/login';
import store from './store';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const user = localStorage.getItem('user');
		dispatch(loginSuccess(user));
	}, []);

	return (
		<Provider store={store}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</Provider>
	)
}

export default App
