import {FETCH_WEATHER} from '../actions/index';

export default function weatherReducer(state=[], action){
	if(action.payload) {
		switch (action.type) {
		case FETCH_WEATHER:
			console.log('result3:', action.payload);
			return [action.payload.data, ...state];
		}
	}
	return state;
}