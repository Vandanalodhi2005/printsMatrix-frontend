import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
    CART_CLEAR_ITEMS,
    CART_LOAD_ITEMS,
} from '../constants/cartConstants';
import { USER_LOGOUT, USER_LOGIN_SUCCESS, USER_REGISTER_SUCCESS } from '../constants/userConstants';

export const cartReducer = (
    state = { cartItems: [], shippingAddress: {} },
    action
) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;

            const existItem = state.cartItems.find((x) => x.product === item.product);

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product === existItem.product ? item : x
                    ),
                };
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload),
            };
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload,
            };
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            };
        case CART_CLEAR_ITEMS:
            return {
                ...state,
                cartItems: [],
            };
        case CART_LOAD_ITEMS:
        case USER_LOGIN_SUCCESS:
        case USER_REGISTER_SUCCESS:
            const items = action.payload.cart || (action.type === CART_LOAD_ITEMS ? action.payload : []);
            if (items.length > 0 || action.type === CART_LOAD_ITEMS) {
                 localStorage.setItem('cartItems', JSON.stringify(items));
            }
            return {
                ...state,
                cartItems: items,
            };
        case USER_LOGOUT:
            localStorage.removeItem('cartItems'); // Clear from local storage
            return {
                ...state,
                cartItems: [], // Clear state
                shippingAddress: {} // Optional: clear shipping address too
            };
        default:
            return state;
    }
};
