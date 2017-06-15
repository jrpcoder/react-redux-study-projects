import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = "AIzaSyBB29wOGWbCZ4ta4wI9T4W8oepaA2Y5GSg";

//Create new component that will produce html

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videosSearch: [],
			selectecVideo: null
		};
		this.videosSearch('tennis');	
	};

	videosSearch(term) {
		YTSearch({key: API_KEY, term: term}, data => {
			this.setState({
				videosSearch: data,
				selectecVideo: data[0]
			});
		});
	}

	render() {
		const videoSearch = _.debounce((term) => this.videosSearch(term), 500);

		return (
			<div>
				<SearchBar onSearchInput={videoSearch} />
				<VideoDetail video = {this.state.selectecVideo}/>
				<VideoList 
					onVideoSelect={selectecVideo => this.setState({selectecVideo})}
					videos= {this.state.videosSearch}/>
			</div>
		);
	};
};

//function to render this component generated HTML on the DOM

ReactDom.render(<App />, document.querySelector("#root"));