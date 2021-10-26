import { CATEGORIES } from '../../data/dummy-data';

const initialState = {
    categories: CATEGORIES
};

const categoriesReducer = (state = initialState) => state;

export default categoriesReducer;
