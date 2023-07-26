import axios from 'axios';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjNjM2I2MzMwZDViMzk0ZDQwZGE1NmMyNDIyYmQxNCIsInN1YiI6IjY0YWRkZGI5MWNmZTNhMDEwMTg0NTg1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.frXI5_USdF6cK7f4VAC7wtj3JyX-CK2gHwUk3M2YUcI'
	}
};

export const getItems = async (filter: any, page: any) => {
	try {
		const response = await axios.get(`https://api.themoviedb.org/3/movie/${filter}?language=es-ES&page=${page}`, options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};