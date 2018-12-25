import { combineReducers } from 'redux';
import newsReducer from './news';

const allReducers = combineReducers({
    news: newsReducer
});

export default allReducers;