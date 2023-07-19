import { Grid } from '@mui/material'
import './styles.css'
import logo from '../../assets/img/logo.png'
import userIcon from '../../assets/img/userIcon.png'
const Header = () => {
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