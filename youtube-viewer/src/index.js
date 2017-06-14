import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBB29wOGWbCZ4ta4wI9T4W8oepaA2Y5GSg";

//Create new component that will produce html

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

//function to render this component generated HTML on the DOM

ReactDom.render(<App />, document.querySelector("#root"));