import {combineReducers} from 'redux';
import articles from './article_reducer';
import gallaries from './gallery_reducer';

const rootReducer = combineReducers({
    articles,
    gallaries
})

export default rootReducer;