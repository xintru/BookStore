import * as actionTypes from './actionTypes';


export const initStart = () => {
    return {
        type: actionTypes.PRODUCTS_INIT_START
    };
};

export const initStartLoading = () => {
    return {
        type: actionTypes.PRODUCTS_INIT_START_LOADING
    };
};

export const initSuccess = (response) => {
    return {
        type: actionTypes.PRODUCTS_INIT_SUCCESS,
        response: response
    };
};

export const initFail = (error) => {
    return {
        type: actionTypes.PRODUCTS_INIT_FAIL,
        error: error
    };
};

export const addToCart = (order) => {
    return {
        type: actionTypes.ADD_TO_CART,
        order: order
    };
};