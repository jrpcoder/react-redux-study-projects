import axios from 'axios';

const API_KEY="5a39b0aec734f7b26922b99ef6b70726";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	let url = `${ROOT_URL}&q=${city}`;
	let request = axios.get(url)
					.catch(function(error){
					});

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}