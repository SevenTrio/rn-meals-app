import { MEALS_ACTIONS } from './actionsTypes';

export const toggleFavorites = (id) => {
    return {
        type: MEALS_ACTIONS.TOGGLE_FAVORITES,
        payload: id
    };
};

export const setFilters = (filterSettings) => {
    return {
        type: MEALS_ACTIONS.SET_FILTERS,
        payload: filterSettings
    };
};
