import { DashboardActions as Actions } from '../actions';

const initialState = {
    inventory: []
};

export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.GET_INVENTORY:
            return {
                ...state,
                inventory: [...action.payload]
            }
        default:
            return state;
    }
};