import axios from 'axios';
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
    CART_LOAD_ITEMS,
} from '../constants/cartConstants';

export const addToCart = (idOrSlug, qty) => async (dispatch, getState) => {

    // Check if user is logged in
    const {
        userLogin: { userInfo },
    } = getState();

    if (!userInfo) {
        // Dispatch a custom event so the React layer can redirect via React Router
        window.dispatchEvent(new CustomEvent('cart:auth-required'));
        return;
    }

    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/products/${idOrSlug}`);

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            title: data.title,
            image: data.images && data.images.length > 0 ? data.images[0] : '',
            price: data.price,
            countInStock: data.countInStock,
            slug: data.slug,
            qty,
        },
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

    // Sync with backend if logged in
    if (userInfo) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };
            await axios.post(`${import.meta.env.VITE_API_URL}/auth/cart`, { cartItems: getState().cart.cartItems }, config);
        } catch (error) {
            console.error('Failed to sync cart with backend:', error);
        }
    }
};

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

    const {
        userLogin: { userInfo },
    } = getState();

    // Sync with backend if logged in
    if (userInfo) {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.token}`,
                },
            };
            await axios.post(`${import.meta.env.VITE_API_URL}/auth/cart`, { cartItems: getState().cart.cartItems }, config);
        } catch (error) {
            console.error('Failed to sync cart with backend:', error);
        }
    }
};

export const fetchCart = () => async (dispatch, getState) => {
    const {
        userLogin: { userInfo },
    } = getState();

    if (!userInfo) return;

    try {
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/auth/profile`, config);
        
        if (data.cart) {
            dispatch({
                type: CART_LOAD_ITEMS,
                payload: data.cart,
            });
            localStorage.setItem('cartItems', JSON.stringify(data.cart));
        }
    } catch (error) {
        console.error('Failed to fetch cart from backend:', error);
    }
};

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    });

    localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    });

    localStorage.setItem('paymentMethod', JSON.stringify(data));
};
