import { useState, useEffect } from 'react';

import Layout from '../../components/Layout';
import Nav from '../../components/Nav';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import Pagination from '@mui/material/Pagination';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';

import { useDispatch } from 'react-redux';
import { setGenres } from '../../store/modules/genres';
import { getItems, getGenres } from '../../api';

import './styles.css';

const dataFilters = [
	{
		id: '1',
		name: 'Now playing',
		key: 'now_playing'
	},
	{
		id: '2',
		name: 'Popular',
		key: 'popular'
	},
	{
		id: '3',
		name: 'Top rated',
		key: 'top_rated'
	},
	{
		id: '4',
		name: 'Upcoming',
		key: 'upcoming'
	}
]

const Home = () => {
	const dispatch = useDispatch();
	const [filterActive, setFilterActive] = useState(dataFilters[0]);
	const [items, setItems] = useState([]);
	const [totalPagination, setTotalPagination] = useState(1);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [alert, setAlert] = useState({
		show: false,
		severity: 'error',
		msg: ''
	});

	useEffect(() => {
		const fetchData = async () => {
			getDataMovies(filterActive.key, 1);
			getCategories();
		};
		fetchData();
	}, []);

	const getDataMovies = async (filter: string, page: number) => {
		setLoading(true);
		const data = await getItems(filter, page);
		if (!data.error) {
			if (data.results.length > 0) {
				setItems(data.results);
				setTotalPagination(data.total_pages)
			}
			setAlert({
				show: false,
				severity: 'error',
				msg: ''
			})
		} else {
			setAlert({
				show: true,
				severity: 'error',
				msg: data.message
			})
		}
		setLoading(false);
	}

	const getCategories = async () => {
		setLoading(true);
		const data = await getGenres();
		if (!data.error) {
			dispatch(setGenres(data.genres));
			setAlert({
				show: false,
				severity: 'error',
				msg: ''
			})
		} else {
			setAlert({
				show: true,
				severity: 'error',
				msg: data.message
			})
		}
		setLoading(false);
	}

	const changeFilter = (value: any) => {
		const newActive = dataFilters.find(filter => filter.key === value.key);
		setFilterActive(newActive || dataFilters[0]);
		setPage(1)
		if (newActive?.key) {
			getDataMovies(newActive?.key, 1);
		} else {
			//mostrar alerta
		}
	}

	const handleChangePagination = (event: any, value: number) => {
		console.log(event);
		setPage(value);
		getDataMovies(filterActive.key, value);
	};

	return (
		<Layout>
			<div>
				<Nav filters={dataFilters} active={filterActive} changeActive={changeFilter} />
				<div className='titles'>
					<h1>{filterActive.name}</h1>
					<p>
						Explora nuestro extenso catálogo de películas
						que abarca desde el drama más conmovedor hasta
						las emocionantes aventuras de ciencia ficción.
						¿Eres un amante del cine de acción lleno de
						adrenalina o prefieres las conmovedoras historias
						románticas? No importa cuál sea tu elección,
						estamos seguros de que encontrarás una película
						que te atrape.
					</p>
				</div>
				<div className='cards-container'>
					{items.length > 0 && items.map((item: any, index: any) => (
						item.title && item.overview && item.poster_path && <Card key={'card-item' + index} dataCard={item} />
					))}
				</div>
				{items.length === 0 && (
					<div className='cards-container'>
						<Skeleton variant="rounded" className='card-skeleton' />
						<Skeleton variant="rounded" className='card-skeleton' />
						<Skeleton variant="rounded" className='card-skeleton' />
						<Skeleton variant="rounded" className='card-skeleton' />
					</div>
				)}
				{(alert.show) && (
					<div className='alertError'>
						<Alert severity={'error'} variant="filled">{alert.msg}</Alert>
					</div>
				)}
				<div className='pagination-container'>
					<Pagination onChange={handleChangePagination} count={totalPagination} page={page} size="large" color="primary" />
				</div>
				<Loader active={loading} />
			</div>
		</Layout>
	)
}

export default Home