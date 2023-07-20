import Rating from '@mui/material/Rating';

import './styles.css';

const index = () => {
	return (
		<div className='card'>
			<div className='card-content'>
				<div>
					<h4>Spider-Man: lejos de casa</h4>
					<h6>2019 ‧ Acción/Aventura ‧ 2h 10m</h6>
					<p>
						Peter Parker decide pasar unas merecidas
						vacaciones en Europa junto a MJ, Ned y el
						resto de sus amigos. Sin embargo, Peter
						debe volver a ponerse el traje de Spider-Man
						cuando Nick Fury le encomienda una nueva
						misión: frenar el ataque de unas criaturas
						que están causando el caos en el continente.
					</p>
					<div className='rating'>
						<Rating name="read-only" size={'large'} value={3} readOnly />
					</div>
				</div>
			</div>
		</div>
	)
}

export default index