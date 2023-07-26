import { useEffect, useState } from 'react'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../store/modules/login';

import TextInput from '../../components/Input';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import './styles.css';

const Login = () => {
	const dispatch = useDispatch();
	const loginState = useSelector((state: any) => state.login);
	const [credentials, setCredentials] = useState({ email: '', password: '' });
	const [errorEmail, setErrorEmail] = useState({ valid: true, msg: '' });

	const setData = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
		setErrorEmail({ valid: true, msg: '' });
	}

	const handleSubmit = () => {
		if (credentials.email.length < 9) {
			setErrorEmail({ valid: false, msg: 'El email debe tener al menos 9 caracteres' });
			return;
		}
		// Lógica de inicio de sesión
		// Si el inicio de sesión es exitoso, dispatch(loginSuccess(usuario));
		dispatch(loginSuccess(credentials));
		// Si el inicio de sesión falla, dispatch(loginFailure(error));
		console.log(credentials);
	}

	useEffect(() => {
		console.log(loginState)
	}, [loginState])

	return (
		<Layout>
			<div>
				<h1 className='title'>Login</h1>
				<p className='subtitle'>¡Bienvenido!</p>
				<div className='container-form'>
					<TextInput
						id="email"
						name="email"
						type={'text'}
						labelComponent={<span>Correo electrónico de DaCodes:</span>}
						value={credentials.email}
						onChange={setData}
					/>
					<TextInput
						id="password"
						name="password"
						labelComponent={<span>Contraseña:</span>}
						type={'password'}
						value={credentials.password}
						onChange={setData}
					/>
					<div className='container-checkbox'>
						<FormGroup>
							<FormControlLabel required control={<Checkbox />} label="He leido y acepto los terminos y condiciones" />
						</FormGroup>
					</div>
					<Button onClick={handleSubmit} text={'Crear cuenta'} />
				</div>
			</div>
		</Layout>
	)
}

export default Login