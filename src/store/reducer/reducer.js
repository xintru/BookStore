import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    order: [],
    sum: 0
};

const pushToCart = (state, action) => {
    state.order.push(action.order);
    const newSum = Number((action.order.price * action.order.value).toFixed(2));
    return {
        ...state,
        sum: state.sum + newSum
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PRODUCTS_INIT_START_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PRODUCTS_INIT_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.response.data.books
            }
        case actionTypes.PRODUCTS_INIT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        case actionTypes.ADD_TO_CART:
            return pushToCart(state, action);
        default: return state;
    };
};

export default reducer;