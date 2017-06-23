import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

	renderWeather(cityData) {
		let city = cityData.city.name;
		let temps = cityData.list.map(weather => weather.main.temp);
		let pressure = cityData.list.map(weather => weather.main.pressure);
		let humidity = cityData.list.map(weather => weather.main.humidity);
		let {lon, lat} = cityData.city.coord;

		return (
			<tr key={city}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temps} color="red" units=" k"/></td>
				<td><Chart data={pressure} color="blue" units=" hPa"/></td>
				<td><Chart data={humidity} color="green" units=" %"/></td>
			</tr>
		);
	}

	render() {
	  return (
		<table className="table table-hover">
			<thead>
				<tr>
					<th>City</th>
					<th>Temperature (k)</th>
					<th>Pressure (hPa)</th>
					<th>Humidity (%)</th>
				</tr>
			</thead>
			<tbody>
				{this.props.weather.map(this.renderWeather)}
			</tbody>
		</table>
	  );
	}
}

function mapStateToProps({weather}) {
	return {weather};
}

export default connect(mapStateToProps)(WeatherList);