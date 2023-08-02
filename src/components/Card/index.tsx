import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Rating from '@mui/material/Rating';

import './styles.css';

export interface ICard {
	dataCard: {
		adult: boolean,
		backdrop_path: string,
		genre_ids: any,
		id: number,
		original_language: string,
		original_title: string,
		overview: string,
		popularity: number,
		poster_path: string,
		release_date: string,
		title: string,
		video: boolean,
		vote_average: number,
		vote_count: number
	}
}
const URL_IMAGE = import.meta.env.VITE_URL_IMAGE

const index = ({ dataCard }: ICard) => {
	const genresState = useSelector((state: any) => state.genres);
	const [categories, setCategories] = useState('');

	useEffect(() => {
		const nameCategorires = getCategories();
		setCategories(nameCategorires);
	}, [])

	const getCategories = () => {
		const categories = dataCard.genre_ids.map((categoriaId: any) => {
			const item = genresState.genres.find((categoria: any) => categoria.id === categoriaId);
			return item.name;
		});
		return categories.join(' / ');
	}
	return (
		<div className='card' style={{ backgroundImage: 'url(' + URL_IMAGE + dataCard.poster_path + ')' }}>
			<div className='card-content'>
				<div>
					<h4>{dataCard.title}</h4>
					<h6>{dataCard.release_date.substring(0, 4)}
						<span> ‧ </span>
						{categories}
					</h6>
					<p>
						{dataCard.overview.length > 200 ? dataCard.overview.slice(0, 200) + '...' : dataCard.overview}
					</p>
					<div className='rating'>
						<Rating name="read-only" size={'large'} value={dataCard.vote_average / 2} readOnly precision={0.5} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default index