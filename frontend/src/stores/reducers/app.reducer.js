import { AppActions as Actions } from '../actions';

const initialState = {
    loading: false,
    mainMenuCollapsed: false,
    detailMenuCollapsed: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case Actions.MAIN_MENU_COLLAPSE:
            return {
                ...state,
                mainMenuCollapsed: action.payload
            };
        case Actions.DETAIL_MENU_COLLAPSE:
            return {
                ...state,
                detailMenuCollapsed: action.payload
            };
        default:
            return state;
    }
};