import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';
import posts from './posts';

const rootReducer = combineReducers({
    products,
    categories,
    posts
});

export default rootReducer;
