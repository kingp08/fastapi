import axios from "axios";
import { notification } from "../../utils";
import { API_URL } from "../../utils/constants";

export const GET_INVENTORY = '[APP] GET_INVENTORY';
export const getInventory = (item) => {
    const request = axios.get(`${API_URL}/${item}`);

    return dispatch => {
        request.then(response => {
            let inventory = response.data;

            inventory.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateA - dateB;
            });

            for (let i = 1; i < inventory.length; i ++) {
                inventory[i].quantity = inventory[i-1].quantity + inventory[i].quantity
            }


            dispatch({
                type: GET_INVENTORY,
                payload: inventory
            })
        }).catch(error => {
            notification('warning', 'Info', 'Something went wrong.');
        })
    };
}