import { combineReducers } from 'redux';

import mealsReducer from './mealsReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
    meals: mealsReducer,
    categories: categoriesReducer
});
