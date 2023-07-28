import axios from 'axios';
const TOKEN = import.meta.env.VITE_TOKEN

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${TOKEN}`
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

export const login = async () => {
	try {
		const response = await axios.get(`https://api.themoviedb.org/3/authentication/guest_session/new`, options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
}