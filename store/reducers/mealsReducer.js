import { MEALS } from '../../data/dummy-data';
import { MEALS_ACTIONS } from '../actions/actionsTypes';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case MEALS_ACTIONS.TOGGLE_FAVORITES:
            const mealId = action.payload;
            const existingIndex = state.favoriteMeals.findIndex((m) => m.id === mealId);
            if (existingIndex >= 0) {
                const filteredFavMeals = state.favoriteMeals.filter((m) => m.id !== mealId);

                return {
                    ...state,
                    favoriteMeals: filteredFavMeals
                };
            } else {
                const meal = state.meals.find((m) => m.id === mealId);

                return {
                    ...state,
                    favoriteMeals: [...state.favoriteMeals, meal]
                };
            }
        default:
            return state;
    }
};

export default mealsReducer;
