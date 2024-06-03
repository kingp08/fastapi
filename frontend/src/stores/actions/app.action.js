import { notification } from "../../utils";
import { logoutUser } from "./dashboard.action";

export const LOADING = '[APP] LOADING';
export const setLoading = (loading) => {
    return {
        type: LOADING,
        payload: loading
    }
}

export const MAIN_MENU_COLLAPSE = '[APP] MAIN_MENU_COLLAPSE';
export const setMainMenuCollapsed = (collapsed) => {
    return {
        type: MAIN_MENU_COLLAPSE,
        payload: collapsed
    }
}

export const DETAIL_MENU_COLLAPSE = '[APP] DETAIL_MENU_COLLAPSE';
export const setDetailMenuCollapsed = (collapsed) => {
    return {
        type: DETAIL_MENU_COLLAPSE,
        payload: collapsed
    }
}

export const HANDLE_AXIOS_ERROR = '[APP] AXIOS_REQUEST_ERROR';
export const handleAxiosError = (error, dispatch) => {
    console.log(error);
    if (error.code === "ERR_NETWORK") {
        notification('error', 'Network Error', 'Please check your network connection.');
        return;
    }

    const { status } = error.response;

    if (status === 401) {
        notification('error', 'Authorization Error', 'Your authorization is not right.');
        // dispatch(logoutUser());
    }
    else if (status === 500)
        notification('error', 'Server Error', 'Network error occured.');
}