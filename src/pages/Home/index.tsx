import { useState } from 'react';

import Layout from '../../components/Layout';
import Nav from '../../components/Nav';
import Card from '../../components/Card';

import './styles.css';

const filters = [
	{
		id: '1',
		name: 'Latest',
		key: 'latest'
	},
	{
		id: '2',
		name: 'Now playing',
		key: 'nowPlaying'
	},
	{
		id: '3',
		name: 'Popular',
		key: 'popular'
	},
	{
		id: '4',
		name: 'Top rated',
		key: 'topRated'
	},
	{
		id: '5',
		name: 'Upcoming',
		key: 'upcoming'
	}
]

const Home = () => {
	const [dataFilters, setDataFilters] = useState(filters);
	const [filterActive, setFilterActive] = useState(dataFilters[0]);

	const changeFilter = (value: any) => {
		const newActive = dataFilters.find(filter => filter.key === value.key);
		setFilterActive(newActive || dataFilters[0]);
	}

	return (
		<Layout>
			<div>
				<Nav filters={dataFilters} active={filterActive} changeActive={changeFilter} />
				<div className='titles'>
					<h1>{filterActive.name}</h1>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur magnam, eius nam suscipit aliquid pariatur odit accusantium quasi dolorem necessitatibus ipsam veritatis cumque! Consectetur, in minima eum ex obcaecati ut?</p>
				</div>
				<div className='cards-container'>
					<Card />
				</div>
			</div>
		</Layout>
	)
}

export default Home