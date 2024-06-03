import { combineReducers } from "redux";
import { appReducer } from "./app.reducer";
import { dashboardReducer } from './dashboard.reducer';

const reducers = combineReducers({
    App: appReducer,
    Dashboard: dashboardReducer,
});

export default reducers;