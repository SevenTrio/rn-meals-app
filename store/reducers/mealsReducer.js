import { MEALS } from '../../data/dummy-data';
import { MEALS_ACTIONS } from '../actions/actionsTypes';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case MEALS_ACTIONS.TOGGLE_FAVORITES: {
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
        }

        case MEALS_ACTIONS.SET_FILTERS: {
            const appliedFilters = action.payload;
            const updatedFilteredMeals = state.meals.filter((meal) => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) return false;
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) return false;
                if (appliedFilters.vegetarian && !meal.isVegetarian) return false;
                if (appliedFilters.vegan && !meal.isVegan) return false;

                return true;
            });

            return { ...state, filteredMeals: updatedFilteredMeals };
        }

        default: {
            return state;
        }
    }
};

export default mealsReducer;
