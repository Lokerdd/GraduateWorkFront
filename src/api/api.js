import axios from 'axios';

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

api.interceptors.request.use(
	(config) => {
		const { headers } = config;
		headers.Accept = 'application/json';
		const token = localStorage.getItem('token');
		if (token) {
			headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error),
);

export default api;
