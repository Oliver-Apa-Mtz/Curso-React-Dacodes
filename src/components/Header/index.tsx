import { Grid } from '@mui/material'
import logo from '../../assets/img/logo.png'
import userIcon from '../../assets/img/userIcon.png'
import './styles.css'

import { useDispatch } from 'react-redux';
import { logout } from '../../store/modules/login';
const Header = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<div className={'header'}>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<div className={'header-logo'}>
						<img src={logo} alt={'logo'} />
					</div>
				</Grid>
				<Grid item xs={4} className='header-logo-flex-end'>
					<div className={'header-icon'}>
						<img src={userIcon} alt={'userIcon'} />
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

export default Header