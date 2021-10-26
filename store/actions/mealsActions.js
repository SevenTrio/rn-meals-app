import { MEALS_ACTIONS } from './actionsTypes';

export const toggleFavorites = (id) => {
    return {
        type: MEALS_ACTIONS.TOGGLE_FAVORITES,
        payload: id
    };
};
