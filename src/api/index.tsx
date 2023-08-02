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
		let responseError = {
			error: error,
			message: 'Ocurrio un error al obtener los datos, intentalo de nuevo.'
		}
		return responseError;
	}
};

export const getGenres = async () => {
	try {
		const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?language=es`, options);
		return response.data;
	} catch (error) {
		let responseError = {
			error: error,
			message: 'Ocurrio un error al obtener las categorias, intentalo de nuevo.'
		}
		return responseError;
	}
};

export const login = async () => {
	try {
		const response = await axios.get(`https://api.themoviedb.org/3/authentication/guest_session/new`, options);
		return response.data;
	} catch (error) {
		let responseError = {
			error: error,
			message: 'Ocurrio un error al iniciar sesión, intentalo de nuevo.'
		}
		return responseError;
	}
}